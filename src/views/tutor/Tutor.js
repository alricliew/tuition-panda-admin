import React,  {useEffect, useState, useRef} from "react"
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CContainer,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CForm,
  CFormLabel,
  CFormInput,
  CFormCheck,
  CFormTextarea,
  CToaster,
  CTooltip,
} from '@coreui/react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap';


import { initializeApp } from "firebase/app";
import { collection, getFirestore, doc, getDoc, getDocs, setDoc, updateDoc, writeBatch, query, where } from "firebase/firestore";
import { auth, firebaseConfig } from "../../js/firebase"
// Auto Login
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// import * as myConst from '../../js/const-v2';
import * as myConst from '../../js/const-sg-v2';
import * as common from '../../js/common';

import { WithContext as ReactTags } from 'react-tag-input';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber, isPossiblePhoneNumber } from 'react-phone-number-input'

import Toast from "../../components/alert/Toast"


const placeSuggestions = myConst.cityAllNoState.map(area => {
  // console.log(area.name[0], area.id,)
  return {
    id: area.id,
    text: area.name[0] + " - " + myConst.getAreaBasedOnStateId(area.st).name,
    area: area.name[0],
    state: myConst.getAreaBasedOnStateId(area.st).name,
  };
});

const subjectSuggestions = myConst.AllSubject.map(subject => {
  return {
    id: subject.id,
    text: subject.name + " - " + myConst.getCategory(subject.cat)[0].name,
    sub: subject.name,
    cat: myConst.getCategory(subject.cat)[0].name,
  };
});

const Tutor = () => {

  const [tutorData, setTutorData] = useState({});
  const [tutorInfoData, setTutorInfoData] = useState({});

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Toast
  const [toast, addToast] = useState(0)
  const toaster = useRef()

  const validateLoadTutorBasedOnPhone = async() => {
    if ( !isValidPhoneNumber(phone)){
      addToast( Toast({color: "danger",  message:"Please enter a valid phone"}) )
    }
    else {
      loadTutorBasedOnPhone()
    }
  }

  const loadTutorBasedOnPhone = async () => {
    // addToast( Toast({color: "danger",  message:"Please enter a valid phone"}) )
    console.log(phone)

    const q = query(collection(db, myConst.USER_BASE_PATH), where(common.PHONE_KEY, "==", phone));

    const querySnapshot = await getDocs(q);
    if (querySnapshot.size > 1){
      addToast( Toast({color: "danger",  message: phone + " are used by "+ querySnapshot.size + " accounts"}) )
    }else if (querySnapshot.size <= 0 ){
      addToast( Toast({color: "warning",  message: phone + " doesn't exist"}) )
    }
    else {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setTutorData(doc.data());

      });
      // initSubTag();
    }
  }

  const validateLoadTutorBasedOnEmail = async() => {
    if ( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email) ){
      addToast( Toast({color: "danger",  message:"Please enter a valid email"}) )
    }
    else {
      loadTutorBasedOnEmail()
    }
  }
  const loadTutorBasedOnEmail = async () => {
    // addToast( Toast({color: "danger",  message:"Please enter a valid phone"}) )
    // console.log(email)

    const q = query(collection(db, myConst.USER_BASE_PATH), where(common.EMAIL_KEY, "==", email), where(common.EMAIL_VERIFIED_KEY, "==", true));

    const querySnapshot = await getDocs(q);
    if (querySnapshot.size > 1){
      addToast( Toast({color: "danger",  message: email + " are used by "+ querySnapshot.size + " accounts"}) )
    }else if (querySnapshot.size <= 0 ){
      addToast( Toast({color: "warning",  message: email + " doesn't exist"}) )
    }
    else {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setTutorData(doc.data());

        loadTutorInfo(doc.id)

      });
      // initSubTag();
    }

    // initSubTag();
  }

  const loadTutorInfo = async (tutorId) => {
    const tutorInfoRef = doc(db, myConst.USER_INFO_PATH, tutorId);
    const docSnap = await getDoc(tutorInfoRef);

    if (docSnap.exists()) {
      console.log(docSnap.data());

      setTutorInfoData(docSnap.data())
    }


  }

  const handlePhoneChange = (val) => {
    setPhone(val)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  // Tags
  const initAreaTag = () => {
    const tags = [];
    // console.log("initAreaTag")
    // console.log(tutorData[common.AREA_ARR_KEY])

    if (tutorInfoData[common.AREA_ARR_KEY] != null ){
      tutorInfoData[common.AREA_ARR_KEY].forEach((item) => {
        // id: area.id,
        // text: area.name[0] + " - " + myConst.getAreaBasedOnStateId(area.st).name,
        // area: area.name[0],
        // state: myConst.getAreaBasedOnStateId(area.st).name,

        if ( myConst.getAreaBasedOnAreaId(item).length > 0 ){
          tags.push({
            id: item,
            text: myConst.getAreaBasedOnAreaId(item)[0].name[0] + " - " + myConst.getAreaBasedOnStateId(myConst.getAreaBasedOnAreaId(item)[0].st).name,
          })
        }

      })

    }

    return tags

  }
  // Tag input
  const [tags, setTags] = useState(initAreaTag)
  const initSubTag = () => {
    const tags = [];

    if (tutorInfoData[common.SUBJECT_ARR_KEY] != null ){
      tutorInfoData[common.SUBJECT_ARR_KEY].forEach((item) => {

        if ( myConst.getSubject(item).length > 0 ){
          tags.push({
            id: item,
            text: myConst.getSubject(item)[0].name + " - " + myConst.getCategory(myConst.getSubject(item)[0].cat)[0].name,
          })
        }


      })

    }

    return tags
  }

  const [subTags, setSubTags] = useState(initSubTag);

  useEffect(() => {
    setTags(initAreaTag)
    setSubTags(initSubTag)
  }, [tutorInfoData[common.SUBJECT_ARR_KEY], tutorInfoData[common.AREA_ARR_KEY]]);

  const getDateOfBirth = (dateOfBirth) => {
    // Ref: https://stackoverflow.com/questions/4631928/convert-utc-epoch-to-local-date

    // console.log(dateOfBirth.seconds)
    // console.log(new Date().setUTCSeconds(dateOfBirth.seconds))

    let newDate = dateOfBirth;
    if (dateOfBirth != null ){
      newDate = new Date(0).setUTCSeconds(dateOfBirth.seconds); //
    }
    return new Date(newDate).toLocaleDateString("en-gb")
  }

  const handleAccStatusChange = (e) => {

    console.log(e.target.name)
    switch (e.target.name) {

      case common.ACCOUNT_STATUS_KEY: {

        tutorData[common.ACCOUNT_STATUS_KEY] = e.target.value
        setTutorData({
          ...tutorData
        })
        break;
      }
      // Dropdown
      default:
        break;
    }

  }

  // Modal: Profile Update

  const [modalUpdateVisible, setModalUpdateVisible] = useState(false)
  const [modalUpdateConfirmContent, setModalUpdateConfirmContent] = useState(false) // Disable save button when saved button is clicked

  const handleModalUpdateClose = () => {
    setModalUpdateConfirmContent("Update")
    setModalUpdateVisible(false)
  }

  const updateProfile = async (e) => {
    // alert("Update Request")
    setModalUpdateConfirmContent("Updating... Please wait!")
    // setModalUpdateVisible(false)
    // console.log(e)
    e.target.disabled = true;

    const batch = writeBatch(db);

    const tutorBaseRef = doc(db, myConst.USER_BASE_PATH, tutorData[common.UID_KEY]);
    const tutorInfoRef = doc(db, myConst.USER_INFO_PATH, tutorData[common.UID_KEY]);

    let newUserBase = {
      [common.ACCOUNT_STATUS_KEY]: tutorData[common.ACCOUNT_STATUS_KEY],
      [common.LAST_UPDATE_KEY]: new Date(),
    }
    let newUserInfo = {
      [common.LAST_UPDATE_KEY]: new Date(),
    }
    batch.update(tutorBaseRef, newUserBase);
    batch.update(tutorInfoRef, newUserInfo);

    console.log(newUserBase)
    console.log(newUserInfo)


    // TODO: Log Event
    try {
      await batch.commit();
      addToast( Toast({color: "success",  message:"Update Success"}) )
      handleModalUpdateClose()

    } catch (error) {
      addToast( Toast({color: "danger",  message:"Update Failed. Please contact Alric immediately"}) )
      handleModalUpdateClose()
    }

  }
  /////
  console.log(tutorInfoData)
  // console.log(email)

  return (
    <>
      <CToaster ref={toaster} push={toast} placement="top-center" />

      {/* Modal Start */}
      <CModal visible={modalUpdateVisible} onClose={() => handleModalUpdateClose()} alignment="center">
        <CModalHeader onClose={() => handleModalUpdateClose()}>
          <CModalTitle>Update Profile</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div className="row">
            <div className="col-md-12">
              <p>Are you sure you want to continue?</p>
            </div>
          </div>

        </CModalBody>
        <CModalFooter>
          <CButton color="" onClick={() => handleModalUpdateClose()}>
            Not Now
          </CButton>
          <CButton color="primary"onClick={(e) => updateProfile(e)} >{modalUpdateConfirmContent || "Update"}</CButton>
        </CModalFooter>
      </CModal>

      <CContainer>
        <div className="row">
          <div style={{width:"max-content"}}>
            <div class="input-group" >
              <PhoneInput
                defaultCountry="MY"
                placeholder="Phone"
                value={  phone }
                name={common.PHONE_KEY }
                initialValueFormat="national"
                onChange={ handlePhoneChange }
                error={'Phone number required'}
                // inputComponent={<input type="tel" autocomplete="tel" placeholder="Phone" error="Phone number required" name="phone" class="PhoneInputInput" value="011-1513 1661"></input>}
              />

              {/* <input type="text"
              value={ tutorData[common.REQ_ADMIN_NAME] }
              class="form-control"
              style={{fontSize: "smaller"}}
              placeholder="Search by Tutor Phone"
              onChange={() => console.log("")}
              /> */}

              <button type="submit" class="btn btn-primary btn-round btn-just-icon btn-sm" onClick={() => validateLoadTutorBasedOnPhone()} disabled={!(phone && isValidPhoneNumber(phone))}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>

            </div>
            <p className="m-0" style={{fontSize: "smaller", fontWeight: "300"}}>Phone: {phone}</p>
            <span className="m-0 d-inline" style={{fontSize: "smaller", fontWeight: "300"}}>Possible? {phone && isPossiblePhoneNumber(phone) ? <span className="text-success">Yes</span> : <span className="text-danger">No</span>}</span>
            <span className="m-0 ms-3 d-inline" style={{fontSize: "smaller", fontWeight: "300"}}>Valid? {phone && isValidPhoneNumber(phone) ? <span className="text-success">Yes</span> : <span className="text-danger">No</span>}</span>

          </div>
          <div class="" style={{width:"max-content"}}>
            <div class="input-group" >

              <input type="text"
                name={common.EMAIL_KEY }
                value={ email }
                class="form-control"
                style={{fontSize: "smaller"}}
                placeholder="Search by Email"
                onChange={(e) => handleEmailChange(e) }
              />

              <button type="submit" class="btn btn-primary btn-round btn-just-icon btn-sm" onClick={() => validateLoadTutorBasedOnEmail()}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>

            </div>

          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <CCard className='card-profile' >
              <CCardBody>
                <CRow className='px-md-3 text-start'>
                  <div className="col-md-12">
                    <h3>Profile Settings</h3>
                  </div>
                </CRow>
                <div className="row px-md-3 text-start">
                  <div className="col-md-12">
                    <Form.Group controlId={common.ACCOUNT_STATUS_KEY}>

                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Acccount Status<strong className='text-danger'>*</strong>
                        <CTooltip
                          content={
                            <>
                              <strong>Account Status</strong>
                              <p className="m-0">Active: Verified tutor supported by documents</p>
                              <p className="m-0">Premium: Paid tutor</p>
                              <p className="m-0">Suspended: Suspicious profile / tutor who violated our policies</p>
                            </>
                          }

                          placement="top"
                        >
                          <a className="px-1 mx-2 rounded-1" style={{color: "white", textDecoration: 'none', background: "#08ae8e", fontSize:'small'}} href="javascript:void(0);">?</a>
                        </CTooltip>
                      </Form.Label>

                      <div key={`inline-radio`} className="mb-1">
                        <Form.Check
                          // inline
                          label="Inactive"
                          name={ common.ACCOUNT_STATUS_KEY}
                          type="radio"
                          value= { common.INACTIVE_KEY }
                          id={ common.INACTIVE_KEY}
                          checked={tutorData[common.ACCOUNT_STATUS_KEY] === common.INACTIVE_KEY}
                          onChange={handleAccStatusChange}
                          />
                        <Form.Check
                          // inline
                          label="Active"
                          name={ common.ACCOUNT_STATUS_KEY}
                          type="radio"
                          value= { common.ACTIVE_KEY }
                          id={ common.ACTIVE_KEY}
                          checked={tutorData[common.ACCOUNT_STATUS_KEY] === common.ACTIVE_KEY}
                          onChange={handleAccStatusChange}
                        />
                        <Form.Check
                          // inline
                          label="Premium"
                          name={ common.ACCOUNT_STATUS_KEY}
                          type="radio"
                          value= { common.VIP1_KEY }
                          id={ common.VIP1_KEY}
                          checked={tutorData[common.ACCOUNT_STATUS_KEY] === common.VIP1_KEY}
                          onChange={handleAccStatusChange}
                        />
                        <Form.Check
                          // inline
                          label="Suspended"
                          name={ common.ACCOUNT_STATUS_KEY}
                          type="radio"
                          value= { common.SUSPENDED_KEY }
                          id={ common.SUSPENDED_KEY}
                          checked={tutorData[common.ACCOUNT_STATUS_KEY] === common.SUSPENDED_KEY}
                          onChange={handleAccStatusChange}
                        />
                      </div>
                    </Form.Group>

                  </div>
                </div>


              </CCardBody>
              <CCardFooter>
                <CButton className='float-end' color="primary" variant="outline" size="sm" onClick={() => setModalUpdateVisible(true) }>
                  Update Profile
                </CButton>
              </CCardFooter>
            </CCard>
          </div>

          <div className="col-md-6">
            <CCard className='card-profile' >
              <CCardBody>
                <CRow className='px-md-3 text-start'>
                  <div className="col-md-12">
                    <h3>Wallet</h3>
                  </div>
                </CRow>
                <div className="row px-md-3 text-start">
                  <div className="col-md-12">


                  </div>
                </div>


              </CCardBody>
              <CCardFooter>
                <CButton className='float-end' color="primary" variant="outline" size="sm" onClick={() => alert()}>
                  Update Profile
                </CButton>
              </CCardFooter>
            </CCard>
          </div>

        </div>

        <CCard className='card-profile' >

          <CCardBody>
            <CRow className='px-md-3 text-start'>
              <div className="col-md-12 d-flex">
                <h3>Tutor Profile</h3>
                <p className="ms-auto text-danger">CONFIDENTIAL</p>
              </div>
            </CRow>
            <CRow className='px-md-3'>
              <CCol md={3} lg={2} className='mb-3'>

                <div className="" style={{height: '100px', width: '100px', margin:'auto'}}>
                  <a href="javascript:;">
                    <img className="img" id="tutorImgUrl" style={{height:"100%", width:"100%", objectFit: "cover", borderRadius: "50%", pointerEvents: "none"}}
                    src={tutorInfoData[common.IMAGE_KEY]}/>
                  </a>
                </div>
              </CCol>
              <CCol md={4} lg={4} className='mb-3 mt-4 text-md-start'>

                <h4>{tutorInfoData[common.NAME_KEY]}</h4>
                {tutorInfoData[common.PHONE_KEY] == "" ? "" : <p className='m-0'>Phone: {tutorInfoData[common.PHONE_KEY]}</p>}
                {tutorInfoData[common.EMAIL_KEY] == "" ? "" : <p className='m-0'>Email: {tutorInfoData[common.EMAIL_KEY]}</p>}
                {tutorInfoData[common.GENDER_KEY] == common.MALE_KEY ? <p className='m-0'>Gender: Male</p> : <p className='m-0'>Gender:Female</p>}
                {tutorInfoData[common.AGE_KEY] == "" ? "" : <p className='m-0'>Date Of Birth: {getDateOfBirth(tutorInfoData[common.AGE_KEY])}</p>}
                {tutorInfoData[common.ADDRESS_KEY] == "" ? "" : <p className='m-0'>Address: {tutorInfoData[common.ADDRESS_KEY]}</p>}
                {/* {tutorInfoData[common.EMAIL_KEY] == "" ? "" : <p className='m-0'>{tutorInfoData[common.EMAIL_KEY]}</p>} */}
              </CCol>
              <CCol md={5} lg={6} className='mb-3 mt-4 text-md-start'>
                <p className="m-0">Email Verified?: {tutorData[common.EMAIL_VERIFIED_KEY]}</p>
                <p className="m-0">Language: {tutorData[common.LANGUAGE_KEY]}</p>
                <p className="m-0">User Number: {tutorData[common.USER_NUMBER_KEY]}</p>
                <p className="m-0">Provider: {tutorData[common.PROVIDER_ID_KEY]}</p>
                <p className="m-0">Creation Date: {tutorData[common.CREATE_AT_KEY]}</p>
                <p className="m-0">Acccount Status: {tutorData[common.ACCOUNT_STATUS_KEY]}</p>
                <p className="m-0">Acccount Identifier: {tutorData[common.UID_KEY]}</p>

              </CCol>

              <hr/>
              <CCol md={6}  className='mb-3 text-md-start'>

                <strong className='m-0'>One Liner</strong>
                <p className='m-0'>{tutorInfoData[common.INTRO_KEY]}</p>

                <strong className='m-0'>Academic Qualification</strong>
                <p className='m-0'>{tutorInfoData[common.QUALIFICATION_KEY]}</p>
                <strong className='m-0'>Years of Teaching Experience</strong>
                <p className='m-0'>{tutorInfoData[common.YEARS_EXPERIENCE_KEY]}</p>
                <strong className='m-0'>My Tuition Fee</strong>
                <p className='m-0'>{tutorInfoData[common.FEE_KEY]}, {tutorInfoData[common.FEE_TYPE_KEY]}</p>
                <strong className='m-0'>Tutoring Options</strong>
                <p className='m-0'>{tutorInfoData[common.MODE_ARR_KEY]}</p>

              </CCol>

              <CCol md={6}  className='mb-3 text-md-start'>
                <strong className='m-0'>My Tutoring Approach & Past Experience</strong>
                <p className='m-0'>{tutorInfoData[common.APPROACH_KEY]}</p>
                <strong  className='m-0'>Teaching Places</strong>
                <div>
                  <ReactTags
                    tags={tags}
                    readOnly
                  />
                </div>
                <strong className='mt-2'>Subjects</strong>
                <div>
                  <ReactTags
                    tags={subTags}
                    readOnly
                  />
                </div>

              </CCol>

            </CRow>

          </CCardBody>

        </CCard>

      </CContainer>
    </>


  )
}

export default Tutor
