// Shared Area Subject Template

import React,  {useEffect, useState, useRef} from "react"
import {useParams, useLocation, redirect} from "react-router-dom"
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import {
  CAlert, CAlertLink,
  CButton,
  CFormCheck,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CToast, CToastHeader, CToastBody, CToaster,
  CToastClose,
} from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber, isPossiblePhoneNumber } from 'react-phone-number-input'
// Tag Input Related
import { WithContext as ReactTags } from 'react-tag-input';

const Page404 = React.lazy(() => import('../../views/pages/page404/Page404'))

import { initializeApp } from "firebase/app";
import { collection, getFirestore, doc, getDoc, setDoc, updateDoc, writeBatch} from "firebase/firestore";
import { auth, firebaseConfig } from "../../js/firebase"
// Auto Login
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// import * as myConst from '../../js/const-v2';
import * as myConst from '../../js/const-sg-v2';
import * as common from '../../js/common';

import ModalConfirm from "../../components/modal/ModalConfirm"
import AlertGeneral from "../../components/alert/Alert"

import Toast from "../../components/alert/Toast"

const subjectSuggestions = myConst.AllSubject.map(subject => {
  return {
    id: subject.id,
    text: subject.name + " - " + myConst.getCategory(subject.cat)[0].name,
    sub: subject.name,
    cat: myConst.getCategory(subject.cat)[0].name,
  };
});

const placeSuggestions = myConst.cityAllNoState.map(area => {
  // console.log(area.name[0], area.id,area.st)
  // console.log(myConst.getAreaBasedOnStateId(area.st))
  return {
    id: area.id,
    text: area.name[0] + " - "+ area.pc + " " + myConst.getAreaBasedOnStateId(area.st).name[0],
    area: area.name[0],
    state: myConst.getAreaBasedOnStateId(area.st).name[0],
    postcode: area.pc,
  };
});


const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];



function RequestAdd() {

  const newUserData = useSelector((state) => state.userBase)

  const initReqData = {
    [common.REQ_ADMIN_ID]: "",
    [common.REQ_ADMIN_NAME]: "",
    [common.REQ_ADMIN_PHONE]:"",
    [common.REQ_ADMIN_EMAIL]: "",
    [common.REQ_ADMIN_PERSON]: "",
    [common.REQ_ADMIN_STU_GENDER]: "",
    [common.REQ_ADMIN_SCHOOL]: "",
    [common.REQ_ADMIN_SUBJECT]: "",
    [common.REQ_ADMIN_PLACE]: "",
    [common.REQ_ADMIN_BUDGET]: "",
    [common.REQ_ADMIN_DURATION]: "",
    [common.REQ_ADMIN_LESS_PER_WEEK]: "",
    [common.REQ_ADMIN_DAY_OF_WEEK]: "",
    [common.REQ_ADMIN_TIME]: "",
    [common.REQ_ADMIN_TUTOR_GENDER]: "",
    [common.REQ_ADMIN_MESSAGE]: "",
    [common.REQ_ADMIN_SURVEY_01]: "",
    [common.REQ_ADMIN_URL]: "",

    [common.REQ_ADMIN_REMARK]: "",
    [common.REQ_ADMIN_ONLINE]: "",
    [common.REQ_ADMIN_SUB_ARR]: "",
    [common.REQ_ADMIN_AREA]: "",
    [common.REQ_ADMIN_STATE]: "",
    [common.REQ_ADMIN_REQ_STATUS]: common.REQ_ADMIN_REQ_STATUS_NEW,

    [common.REQ_ADMIN_DATE_SEND]: new Date(),
    [common.REQ_ADMIN_DATE_READ]: new Date(),
    [common.REQ_ADMIN_OWNER]: newUserData[common.UID_KEY],
    [common.REQ_ADMIN_STATUS]: true,

    [common.REQ_ADMIN_JOB_ID]: "",
    [common.REQ_ADMIN_JOB_PUBLIC_ID]: "",
    [common.REQ_ADMIN_JOB_REF_NO]: "",
    [common.REQ_ADMIN_JOB_STATUS]: "",


    [common.REQ_ADMIN_EV_ID]: [],
    [common.REQ_ADMIN_EV_ERROR_CODE]: [],
    [common.REQ_ADMIN_EV_DATEX]: [],
    [common.REQ_ADMIN_EV_ACT]: [],
    [common.REQ_ADMIN_EV_ACT_STATUS]: [],
    [common.REQ_ADMIN_REFID]: "",

    [common.REQ_ADMIN_UTM_SOURCE]: "",
    [common.REQ_ADMIN_UTM_MEDIUM]: "",
    [common.REQ_ADMIN_UTM_CAMPAIGN]: "",
    [common.REQ_ADMIN_UTM_TERM]: "",
    [common.REQ_ADMIN_UTM_CONTENT]: "",

  }

  const {reqId} = useParams()


  const [reqData, setReqData] = React.useState(initReqData);


  // Initialization
  const [initializing, setInitializing] = useState(true);

  // SubjectArr Specific
  const initSubTag = () => {
    const tags = [];
    // console.log(reqData)
    if (reqData[common.REQ_ADMIN_SUB_ARR] == null || reqData[common.REQ_ADMIN_SUB_ARR] == ""){
    }
    else {
      reqData[common.REQ_ADMIN_SUB_ARR].forEach((item) => {
        tags.push({
          id: item,
          text: myConst.getSubject(item)[0].name + " - " + myConst.getCategory(myConst.getSubject(item)[0].cat)[0].name,
        })
      })
    }

    return tags
  }

  const [subTags, setSubTags] = useState(initSubTag);

  const initAreaTag = () => {
    const tags = [];
    // console.log("initAreaTag")
    // console.log(reqData[common.REQ_ADMIN_AREA])
    if (reqData[common.REQ_ADMIN_AREA] != null && reqData[common.REQ_ADMIN_AREA] != "" ){

      tags.push({
        id: reqData[common.REQ_ADMIN_AREA],
        text: myConst.getAreaBasedOnAreaId(reqData[common.REQ_ADMIN_AREA])[0].name[0] + " - " + myConst.getAreaBasedOnStateId(myConst.getAreaBasedOnAreaId(reqData[common.REQ_ADMIN_AREA])[0].st).name,
      })

      // reqData[common.REQ_ADMIN_AREA].forEach((item) => {
      //   // id: area.id,
      //   // text: area.name[0] + " - " + myConst.getAreaBasedOnStateId(area.st).name,
      //   // area: area.name[0],
      //   // state: myConst.getAreaBasedOnStateId(area.st).name,
      //   areaTags.push({
      //     id: reqData[common.REQ_ADMIN_AREA],
      //     text: myConst.getAreaBasedOnAreaId(reqData[common.REQ_ADMIN_AREA])[0].name[0] + " - " + myConst.getAreaBasedOnStateId(myConst.getAreaBasedOnAreaId(reqData[common.REQ_ADMIN_AREA])[0].st).name,
      //   })
      // })

    }

    return tags

  }
  // Tag input
  const [areaTags, setTags] = useState(initAreaTag)
  // Regenerate Tag view
  useEffect(() => {
    setSubTags(initSubTag)
    setTags(initAreaTag)

  }, [reqData[common.REQ_ADMIN_SUB_ARR] , reqData[common.REQ_ADMIN_AREA]]);

  const handleSubDelete = i => {
    setSubTags(subTags.filter((tag, index) => index !== i));


    // Update reqData
    let tags = subTags.filter((tag, index) => index !== i)
    const arrObj2arrIdConverter = (temptag) => {return temptag.id};
    console.log("handleSubDelete")
    console.log(tags)

    let tempArr = tags.map(arrObj2arrIdConverter)
    reqData[common.REQ_ADMIN_SUB_ARR] = tempArr;
    setReqData({
      ...reqData
    })

    // handleSubTag(subTags.filter((tag, index) => index !== i))

  };
  const handleAreaDelete = i => {
    setTags(areaTags.filter((tag, index) => index !== i));
    // props.handlePlaceTag(tags.filter((tag, index) => index !== i))

    // Update reqData
    // let tags = areaTags.filter((tag, index) => index !== i)
    // const arrObj2arrIdConverter = (temptag) => {return temptag.id};
    // console.log("handleAreaDelete")
    // console.log(tags)

    // let tempArr = tags.map(arrObj2arrIdConverter)
    // reqData[common.REQ_ADMIN_AREA] = tempArr;
    // setReqData({
    //   ...reqData
    // })

    // let tags = areaTags.filter((tag, index) => index !== i)
    reqData[common.REQ_ADMIN_AREA] = "";
    reqData[common.REQ_ADMIN_STATE] = "";
    setReqData({
      ...reqData
    })

  };
  const handleSubAddition = tag => {
    console.log(tag)
    if(subTags.length <= 29){
      setSubTags([...subTags, tag]);

      let tags = tag
      const arrObj2arrIdConverter = (temptag) => {return temptag.id};
      console.log("handleSubAddition")
      console.log(tags)
      // let tempArr = tags.map(arrObj2arrIdConverter)
      reqData[common.REQ_ADMIN_SUB_ARR] = [...reqData[common.REQ_ADMIN_SUB_ARR], tag.id];
      setReqData({
        ...reqData
      })
      // handleSubTag([...subTags, tag])

    }
    else {
      alert("You can only add up to 29 subjects!")
    }

  };
  const handleAreaAddition = tag => {

    if(areaTags.length < 1){
      setTags([...areaTags, tag]);
      // props.handlePlaceTag([...tags, tag])

      // let tags = tag
      // const arrObj2arrIdConverter = (temptag) => {return temptag.id};
      // console.log("handleAreaAddition")
      // console.log(tag.id)
      // let tempArr = tags.map(arrObj2arrIdConverter)
      reqData[common.REQ_ADMIN_AREA] = tag.id;
      reqData[common.REQ_ADMIN_STATE] = myConst.getAreaBasedOnAreaId(tag.id)[0].st;
      setReqData({
        ...reqData
      })
    }
    else {
      alert("You can only add up to 1 places!")
    }

  };
  const handleSubDrag = (tag, currPos, newPos) => {
    const newTags = subTags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    // re-render
    setSubTags(newTags);

    let tags = newTags
    const arrObj2arrIdConverter = (temptag) => {return temptag.id};
    console.log("handleSubDrag")
    console.log(tags)
    let tempArr = tags.map(arrObj2arrIdConverter)
    reqData[common.REQ_ADMIN_SUB_ARR] = tempArr;
    setReqData({
      ...reqData
    })
    // handleSubTag(newTags)

  };
  const handleAreaDrag = (tag, currPos, newPos) => {
    const newTags = areaTags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    // re-render
    setTags(newTags);
    // props.handlePlaceTag(newTags)

  };
  const handleSubTagClick = index => {
    console.log('The tag at index ' + index + ' was clicked');
  };
  const handleAreaTagClick = index => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  // Modal State
  const [modalUpdateVisible, setModalUpdateVisible] = useState(false)
  const [modalUpdateConfirmContent, setModalUpdateConfirmContent] = useState(false) // Disable save button when saved button is clicked

  const [modalSuccessVisible, setModalSuccessVisible] = useState(false)


  // Request Changes
  const handleChange = (e) => {
    // console.log(e)
    // console.log(e.target)

    // console.log(e.target.id)
    // console.log(e.target.name)
    // console.log(e.target.value)

    switch (e.target.name) {
      // Input & Textarea
      case common.REQ_ADMIN_NAME:
      case common.REQ_ADMIN_PHONE:
      case common.REQ_ADMIN_EMAIL:
      case common.REQ_ADMIN_SCHOOL:
      case common.REQ_ADMIN_SUBJECT:
      case common.REQ_ADMIN_PLACE:
      case common.REQ_ADMIN_BUDGET:
      case common.REQ_ADMIN_MESSAGE:
      case common.REQ_ADMIN_REMARK:
      case common.REQ_ADMIN_OWNER:
      case common.REQ_ADMIN_REFID:
      case common.REQ_ADMIN_URL:
      {
        reqData[e.target.name] = e.target.value;
        setReqData({
          ...reqData
        })
        break;
      }
      // Checkbox
      case common.REQ_ADMIN_ONLINE:{
        console.log("Checkbox ONLINE")
        reqData[common.REQ_ADMIN_ONLINE] = e.target.checked;
        setReqData({
          ...reqData
        })
        break;
      }
      case common.REQ_ADMIN_DAY_OF_WEEK:
      case common.REQ_ADMIN_TIME: {
        console.log("Checkbox Other")
        let checkBoxEleArr = Array.from(
          document.getElementsByName(e.target.name)
        );
        let checkedArray = []

        checkBoxEleArr.forEach(ele => {
          if (ele.checked)
            checkedArray.push(ele.getAttribute('value'))
        });

        // console.log(checkedArray)
        reqData[e.target.name] = checkedArray;
        // reqData[e.target.name + 'CheckedCount'] = checkedArray.length;
        setReqData({
          ...reqData
        })
        break;
      }
      // Radio
      case common.REQ_ADMIN_PERSON:
      case common.REQ_ADMIN_REQ_STATUS:
      case common.REQ_ADMIN_STU_GENDER:
      case common.REQ_ADMIN_TUTOR_GENDER:
      case common.REQ_ADMIN_SURVEY_01:
      case common.REQ_ADMIN_DURATION:
      case common.REQ_ADMIN_LESS_PER_WEEK: {
        reqData[e.target.name] = e.target.value;
        setReqData({
          ...reqData
        })
        break;
      }
      // Dropdown


      default:
    }
    // userBase[event.target.name] = event.target.value;
    // setUserBase({
    //   ...userBase
    // })
  }
  // Changes for Phone Only
  const handlePhoneChange = (val) => {
    reqData[common.REQ_ADMIN_PHONE] = val;
    setReqData({
      ...reqData
    })
  }
  // UPDATE Request
  const createRequest = async (e) => {
    setModalUpdateConfirmContent("Creating... Please wait!")

    // console.log(e)

    e.target.disabled = true;

    const batch = writeBatch(db);

    const reqRef = doc(collection(db, myConst.REQUEST_ADMIN))
    console.log("reqRef.id "+ reqRef.id)

    let newReqData = {
      [common.REQ_ADMIN_ID]: reqRef.id,

      [common.REQ_ADMIN_NAME]: reqData[common.REQ_ADMIN_NAME],
      [common.REQ_ADMIN_PHONE]: reqData[common.REQ_ADMIN_PHONE],
      [common.REQ_ADMIN_EMAIL]: reqData[common.REQ_ADMIN_EMAIL],
      [common.REQ_ADMIN_PERSON]: reqData[common.REQ_ADMIN_PERSON],
      [common.REQ_ADMIN_STU_GENDER]: reqData[common.REQ_ADMIN_STU_GENDER],
      [common.REQ_ADMIN_SCHOOL]: reqData[common.REQ_ADMIN_SCHOOL],
      [common.REQ_ADMIN_SUBJECT]: reqData[common.REQ_ADMIN_SUBJECT],
      [common.REQ_ADMIN_PLACE]: reqData[common.REQ_ADMIN_PLACE],
      [common.REQ_ADMIN_BUDGET]: reqData[common.REQ_ADMIN_BUDGET],
      [common.REQ_ADMIN_DURATION]: reqData[common.REQ_ADMIN_DURATION],
      [common.REQ_ADMIN_LESS_PER_WEEK]: reqData[common.REQ_ADMIN_LESS_PER_WEEK],
      [common.REQ_ADMIN_DAY_OF_WEEK]: reqData[common.REQ_ADMIN_DAY_OF_WEEK],
      [common.REQ_ADMIN_TIME]: reqData[common.REQ_ADMIN_TIME],
      [common.REQ_ADMIN_TUTOR_GENDER]: reqData[common.REQ_ADMIN_TUTOR_GENDER],
      [common.REQ_ADMIN_MESSAGE]: reqData[common.REQ_ADMIN_MESSAGE],
      [common.REQ_ADMIN_SURVEY_01]: reqData[common.REQ_ADMIN_SURVEY_01],
      [common.REQ_ADMIN_URL]: reqData[common.REQ_ADMIN_URL],
      [common.REQ_ADMIN_REMARK]: reqData[common.REQ_ADMIN_REMARK],
      [common.REQ_ADMIN_ONLINE]: reqData[common.REQ_ADMIN_ONLINE],
      [common.REQ_ADMIN_SUB_ARR]: reqData[common.REQ_ADMIN_SUB_ARR],
      [common.REQ_ADMIN_AREA]: reqData[common.REQ_ADMIN_AREA],
      [common.REQ_ADMIN_STATE]: reqData[common.REQ_ADMIN_STATE],
      [common.REQ_ADMIN_REQ_STATUS]: reqData[common.REQ_ADMIN_REQ_STATUS],

      [common.REQ_ADMIN_DATE_SEND]: new Date(),
      [common.REQ_ADMIN_DATE_READ]: new Date(),
      [common.REQ_ADMIN_OWNER]: newUserData[common.UID_KEY],
      [common.REQ_ADMIN_STATUS]: true,

      [common.REQ_ADMIN_JOB_ID]: reqData[common.REQ_ADMIN_JOB_ID],
      [common.REQ_ADMIN_JOB_PUBLIC_ID]: reqData[common.REQ_ADMIN_JOB_PUBLIC_ID],
      [common.REQ_ADMIN_JOB_REF_NO]: reqData[common.REQ_ADMIN_JOB_REF_NO],
      [common.REQ_ADMIN_JOB_STATUS]: reqData[common.REQ_ADMIN_JOB_STATUS],

      [common.REQ_ADMIN_EV_ID]: reqData[common.REQ_ADMIN_EV_ID],
      [common.REQ_ADMIN_EV_ERROR_CODE]: reqData[common.REQ_ADMIN_EV_ERROR_CODE],
      [common.REQ_ADMIN_EV_DATEX]: reqData[common.REQ_ADMIN_EV_DATEX],
      [common.REQ_ADMIN_EV_ACT]: reqData[common.REQ_ADMIN_EV_ACT],
      [common.REQ_ADMIN_EV_ACT_STATUS]: reqData[common.REQ_ADMIN_EV_ACT_STATUS],
      [common.REQ_ADMIN_REFID]: reqData[common.REQ_ADMIN_REFID],

      [common.REQ_ADMIN_UTM_SOURCE]: reqData[common.REQ_ADMIN_UTM_SOURCE],
      [common.REQ_ADMIN_UTM_MEDIUM]: reqData[common.REQ_ADMIN_UTM_MEDIUM],
      [common.REQ_ADMIN_UTM_CAMPAIGN]: reqData[common.REQ_ADMIN_UTM_CAMPAIGN],
      [common.REQ_ADMIN_UTM_TERM]: reqData[common.REQ_ADMIN_UTM_TERM],
      [common.REQ_ADMIN_UTM_CONTENT]: reqData[common.REQ_ADMIN_UTM_CONTENT],

    }

    batch.set(reqRef, newReqData);

    console.log(newReqData)

    try {
      await batch.commit();
      addToast( Toast({color: "success",  message:"Update Success"}) )
      handleModalUpdateClose()

      setModalSuccessVisible(true)

    } catch (error) {
      addToast( Toast({color: "danger",  message:"Update Failed. Please contact Alric immediately"}) )
      handleModalUpdateClose()
    }



  }


  // Validate Request Entires
  const formRef = useRef()

  const validateRequest = () => {

    console.log(formRef.current)
    if (reqData[common.REQ_ADMIN_SUB_ARR].length < 1 ){
      addToast( Toast({color: "warning",  message:"Please enter at least 1 subject"}) )
    }
    else if ( !reqData[common.REQ_ADMIN_ONLINE]  && (reqData[common.REQ_ADMIN_AREA] == null || reqData[common.REQ_ADMIN_AREA] == "" )){
      addToast( Toast({color: "warning",  message:"Area is needed for physical class. "}) )

    }
    else if (!formRef.current.checkValidity()) {
      // event.stopPropagation();
      addToast( Toast({color: "warning",  message:"Please enter make sure all required fields are filled up"}) )

    }
    else if ( !reqData[common.REQ_ADMIN_PHONE] || !isValidPhoneNumber(reqData[common.REQ_ADMIN_PHONE])){
      addToast( Toast({color: "warning",  message:"Please enter a valid phone"}) )
    }
    else {
      setValidated(true)
      setModalUpdateVisible(!modalUpdateVisible)
    }

  }
  // Modal: Request Update
  const handleModalUpdateClose = () => {
    setModalUpdateConfirmContent("Create")
    setModalUpdateVisible(false)
  }
  // Toast
  const [toast, addToast] = useState(0)
  const toaster = useRef()

  // Validate Request Form
  const [validated, setValidated] = useState(false);

  // if (initializing) {
  //   return null
  // }

  console.log(reqData)

  if (true){
    return (
      <>
        {/* <h2>asdaidaisdhas Hi</h2>
        <h4>{reqId}</h4> */}

        {/* Modal Start */}
        <CModal visible={modalUpdateVisible} onClose={() => handleModalUpdateClose()} alignment="center">
          <CModalHeader onClose={() => handleModalUpdateClose()}>
            <CModalTitle>Update Request</CModalTitle>
          </CModalHeader>
          <CModalBody>Are you sure you want to continue?</CModalBody>
          <CModalFooter>
            <CButton color="" onClick={() => handleModalUpdateClose()}>
              Not Now
            </CButton>
            <CButton color="primary"onClick={(e) => createRequest(e)} >{modalUpdateConfirmContent || "Create"}</CButton>
          </CModalFooter>
        </CModal>

        {/* Modal Start */}
        <CModal visible={modalSuccessVisible}  onClose={() => window.close()} backdrop="static" alignment="center">
          <CModalHeader onClose={() => window.close()}>
            <CModalTitle>New Request is Created Successfully</CModalTitle>
          </CModalHeader>
          <CModalBody>Done! </CModalBody>
          <CModalFooter>
            <CButton color="" onClick={() => window.close()}>
              Back to Home Page
            </CButton>
            <CButton color="primary"onClick={(e) => window.location.reload() } >Create Another Request</CButton>
          </CModalFooter>
        </CModal>

        {/* Toast */}
        <CToaster ref={toaster} push={toast} placement="top-center" />
        {/* <>
          <CButton onClick={() => addToast( Toast({color: "warning",  message:"This is alert"}) ) }>Send a toast</CButton>
        </> */}


        <Container>
          <div className="row">
            <div className="col-md-12 d-flex">

              <div className="me-auto">
                {/* <button className="btn btn-primary btn-sm ms-1">Edit Job</button> */}
              </div>

              <CButton className="" type="submit" color="primary" size="sm" variant="outline" onClick={() => validateRequest()} >
                Create Request
              </CButton>

            </div>

          </div>


          <Form className='form-req text-start' name="form-req" noValidate validated={validated} ref={formRef}>
            <div className='form-req-header pt-4 pb-2'>
              <h5>For Admin</h5>
            </div>
            <div className='form-req-content'>
              <Row>
                {/* Subject */}
                <div className="col-md-4">
                  <Form.Group style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}} className="mb-1" controlId="subject">
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Subject  <strong className='text-danger'>*</strong></Form.Label>
                    {/* <Form.Control
                      as="textarea"
                      id="reqEditSubArr"
                      rows={3}
                      placeholder='i.e Year 8 English, Form 4 SPM Biology, Standard 6 Bahasa Melayu, ...'
                      name="subject"
                      required
                      onChange={handleChange}
                      value={reqData[common.REQ_ADMIN_SUBJECT]}
                    /> */}
                    <div>
                      <ReactTags
                        placeholder="Press enter to add new subject"
                        tags={subTags}
                        suggestions={subjectSuggestions}
                        delimiters={delimiters}
                        handleDelete={handleSubDelete}
                        handleAddition={handleSubAddition}
                        handleDrag={handleSubDrag}
                        handleTagClick={handleSubTagClick}
                        inputFieldPosition="bottom"
                        autocomplete
                        classNames={{
                          // tagInput: 'form-control',
                          tagInputField: 'form-control',

                        }}
                        renderSuggestion = {
                          ({ text, sub, cat }, query) =>
                          <div>
                            {sub} <small>{ cat }</small>
                          </div>
                        }

                      />
                    </div>
                  </Form.Group>

                </div>

                <div className="col-md-3">
                  <div class="form-check" >
                    <label class="form-check-label">
                      {/* <input class="form-check-input" type="checkbox" value="" id="reqEditOnlineOnly" checked={reqData[common.REQ_ADMIN_ONLINE]} onChange={() => handleChange}/> */}
                      <CFormCheck
                        type="checkbox"
                        name={common.REQ_ADMIN_ONLINE}
                        id={common.REQ_ADMIN_ONLINE}
                        checked={reqData[common.REQ_ADMIN_ONLINE] == null || reqData[common.REQ_ADMIN_ONLINE] == "" ? false : reqData[common.REQ_ADMIN_ONLINE]}
                        onChange={handleChange}
                        inline
                      />
                      Online Only
                    </label>
                  </div>

                  <Form.Group style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}} className="mb-1" controlId="subject">
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Area  <strong className='text-danger'>*</strong> [Place][Postcode (1st 2 Digit)][Region]</Form.Label>
                    <div>
                      <ReactTags
                        placeholder="Press enter to add an area"
                        tags={areaTags}
                        suggestions={placeSuggestions}
                        labelField="text"
                        delimiters={delimiters}
                        handleDelete={handleAreaDelete}
                        handleAddition={handleAreaAddition}
                        handleDrag={handleAreaDrag}
                        handleTagClick={handleAreaTagClick}
                        inputFieldPosition="bottom"
                        autocomplete
                        classNames={{
                          // tagInput: 'form-control',
                          tagInputField: 'form-control',

                        }}

                        renderSuggestion = {
                          ({ text,area, state, postcode }, query) =>
                          <div>
                            {area} <small> {postcode.toString()} { state }</small>
                          </div>
                        }
                      />
                    </div>
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>
                      Use the first 2 digit of postcode to find your area.
                    </Form.Label>


                  </Form.Group>

                  {/* <div class="form-group" >
                    <span class="" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>State</span>
                    <select class="form-select" id="reqEditState">
                      <option value="" selected>Select State</option>
                    </select>
                  </div>

                  <div class="form-group" >
                    <span class="" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Area</span>
                    <select class="form-select" id="reqEditArea">
                      <option value="" selected>Select Area</option>

                    </select>
                  </div> */}

                  <Form.Group className="mb-1" controlId="subject">
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Remark</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Admin's remark"
                      name={common.REQ_ADMIN_REMARK}
                      onChange={handleChange}
                      value={reqData[common.REQ_ADMIN_REMARK]}
                    />
                  </Form.Group>

                </div>

                <div className="col-md-5">
                  <Form.Group controlId={common.REQ_ADMIN_REQ_STATUS}>
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Status<strong className='text-danger'>*</strong></Form.Label>
                    <div key={`inline-radio`} className="mb-1">
                      <Form.Check
                        inline
                        label="New"
                        name={common.REQ_ADMIN_REQ_STATUS}
                        type="radio"
                        id={`reqEditStatusNew`}
                        value={common.REQ_ADMIN_REQ_STATUS_NEW}
                        checked={ reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_NEW}
                        onChange={handleChange}
                        defaultChecked
                      />
                      <Form.Check
                        inline
                        label="No Response"
                        name={common.REQ_ADMIN_REQ_STATUS}
                        type="radio"
                        id={common.REQ_ADMIN_REQ_STATUS_NO_RESPONSE}
                        value={common.REQ_ADMIN_REQ_STATUS_NO_RESPONSE}
                        checked={ reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_NO_RESPONSE}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="Expensive"
                        name={common.REQ_ADMIN_REQ_STATUS}
                        type="radio"
                        id={common.REQ_ADMIN_REQ_STATUS_TOO_EXPENSIVE}
                        value={common.REQ_ADMIN_REQ_STATUS_TOO_EXPENSIVE}
                        checked={ reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_TOO_EXPENSIVE}
                        onChange={handleChange}
                      />
                    <Form.Check
                        inline
                        label="Other Offers"
                        name={common.REQ_ADMIN_REQ_STATUS}
                        type="radio"
                        id={common.REQ_ADMIN_REQ_STATUS_OTHER_OFFER}
                        value={common.REQ_ADMIN_REQ_STATUS_OTHER_OFFER}
                        checked={ reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_OTHER_OFFER}
                        onChange={handleChange}
                        defaultChecked
                      />
                      <Form.Check
                        inline
                        label="In Progress"
                        name={common.REQ_ADMIN_REQ_STATUS}
                        type="radio"
                        id={common.REQ_ADMIN_REQ_STATUS_JOB_IN_PROGRESS}
                        value={common.REQ_ADMIN_REQ_STATUS_JOB_IN_PROGRESS}
                        checked={ reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_IN_PROGRESS}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="Sent to Client"
                        name={common.REQ_ADMIN_REQ_STATUS}
                        type="radio"
                        id={common.REQ_ADMIN_REQ_STATUS_JOB_SENT}
                        value={common.REQ_ADMIN_REQ_STATUS_JOB_SENT}
                        checked={ reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_SENT}
                        onChange={handleChange}
                        disabled
                      />
                      <hr />
                      <Form.Check
                        inline
                        label="Job No Response"
                        name={common.REQ_ADMIN_REQ_STATUS}
                        type="radio"
                        id={common.REQ_ADMIN_REQ_STATUS_JOB_NO_RESPONSE}
                        value={common.REQ_ADMIN_REQ_STATUS_JOB_NO_RESPONSE}
                        checked={ reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_NO_RESPONSE}
                        onChange={handleChange}
                        disabled
                      />
                      <Form.Check
                        inline
                        label="Reject All Tutors"
                        name={common.REQ_ADMIN_REQ_STATUS}
                        type="radio"
                        id={common.REQ_ADMIN_REQ_STATUS_JOB_REJECT}
                        value={common.REQ_ADMIN_REQ_STATUS_JOB_REJECT}
                        checked={ reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_REJECT}
                        onChange={handleChange}
                        disabled
                      />
                      <Form.Check
                        inline
                        label="Stop After Trial"
                        name={common.REQ_ADMIN_REQ_STATUS}
                        type="radio"
                        id={common.REQ_ADMIN_REQ_STATUS_JOB_STOP_AFTER_TRIAL}
                        value={common.REQ_ADMIN_REQ_STATUS_JOB_STOP_AFTER_TRIAL}
                        checked={ reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_STOP_AFTER_TRIAL}
                        onChange={handleChange}
                        disabled
                      />
                      <Form.Check
                        inline
                        label="No Tutor"
                        name={common.REQ_ADMIN_REQ_STATUS}
                        type="radio"
                        id={common.REQ_ADMIN_REQ_STATUS_JOB_NO_TUTOR}
                        value={common.REQ_ADMIN_REQ_STATUS_JOB_NO_TUTOR}
                        checked={ reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_NO_TUTOR}
                        onChange={handleChange}
                        disabled
                      />
                      <Form.Check
                        inline
                        label="Time Issues"
                        name={common.REQ_ADMIN_REQ_STATUS}
                        type="radio"
                        id={common.REQ_ADMIN_REQ_STATUS_JOB_TIME}
                        value={common.REQ_ADMIN_REQ_STATUS_JOB_TIME}
                        checked={ reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_TIME}
                        onChange={handleChange}
                        disabled
                      />
                      <Form.Check
                        inline
                        label="Success"
                        name={common.REQ_ADMIN_REQ_STATUS}
                        type="radio"
                        id={common.REQ_ADMIN_REQ_STATUS_SUCCESS}
                        value={common.REQ_ADMIN_REQ_STATUS_SUCCESS}
                        checked={ reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_SUCCESS}
                        onChange={handleChange}
                        disabled
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className='mb-1 d-none' controlId={common.REQ_ADMIN_REFID} >
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Reference Check <strong className='text-danger'>*</strong></Form.Label>
                    <Form.Control
                    type="text"
                    name={common.REQ_ADMIN_REFID}
                    value={ reqData[common.REQ_ADMIN_REFID] }
                    onChange={handleChange}
                    />
                  </Form.Group>

                </div>

              </Row>
            </div>

            <div className='form-req-header pt-4 pb-2'>
              <h5>Details</h5>
            </div>
            <div className='form-req-content'>
              <Row>
                {/* Detail Top */}
                <div className="col-md-4">
                  <Form.Group className="mb-1" controlId="subject">
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Subject(s) To Be Tutored  <strong className='text-danger'>*</strong></Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder='i.e Year 8 English, Form 4 SPM Biology, Standard 6 Bahasa Melayu, ...'
                      name={common.REQ_ADMIN_SUBJECT}
                      required
                      onChange={handleChange}
                      value={reqData[common.REQ_ADMIN_SUBJECT]}
                    />
                  </Form.Group>

                  <Form.Group className="mb-1" controlId="place">
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder='i.e appartment, street, city, ...'
                      name={common.REQ_ADMIN_PLACE}
                      onChange={handleChange}
                      value={reqData[common.REQ_ADMIN_PLACE]}
                    />
                    <Form.Text muted>
                      Enter "Online" for online tuition only.
                    </Form.Text>
                  </Form.Group>

                </div>

                {/* Detail Middle */}
                <div className="col-md-4">
                  <Form.Group className='mb-1' controlId={common.REQ_ADMIN_NAME} >
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Name <strong className='text-danger'>*</strong></Form.Label>
                    <Form.Control
                    type="text"
                    defaultValue={ reqData[common.REQ_ADMIN_NAME] }
                    name={common.REQ_ADMIN_NAME}
                    required
                    onChange={handleChange}
                    />
                  </Form.Group>


                  <Form.Group className='mb-1' controlId="phone">
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Phone <strong className='text-danger'>*</strong></Form.Label>
                    {/* <Form.Control
                    type="text"
                    defaultValue={ reqData[common.REQ_ADMIN_PHONE] }
                    name="phone"
                    required
                    onChange={handleChange}
                    /> */}
                    <PhoneInput
                      defaultCountry="MY"
                      placeholder="Phone"
                      value={  reqData[common.REQ_ADMIN_PHONE] }
                      name={common.REQ_ADMIN_PHONE }
                      initialValueFormat="national"
                      onChange={ handlePhoneChange }
                      error={'Phone number required'}
                      // inputComponent={<input type="tel" autocomplete="tel" placeholder="Phone" error="Phone number required" name="phone" class="PhoneInputInput" value="011-1513 1661"></input>}
                    />
                    {/* <PhoneInput
                      defaultCountry="MY"
                      placeholder="Phone"
                      value={ phone }
                      onChange={setPhone}
                      error={'Phone number required'}
                      /> */}
                    <p className="m-0" style={{fontSize: "smaller", fontWeight: "300"}}>Phone: {reqData[common.REQ_ADMIN_PHONE]}</p>
                    <p className="m-0 d-inline" style={{fontSize: "smaller", fontWeight: "300"}}>Possible? {reqData[common.REQ_ADMIN_PHONE] && isPossiblePhoneNumber(reqData[common.REQ_ADMIN_PHONE]) ? <span className="text-success">Yes</span> : <span className="text-danger">No</span>}</p>
                    <p className="m-0 ms-3 d-inline" style={{fontSize: "smaller", fontWeight: "300"}}>Valid? {reqData[common.REQ_ADMIN_PHONE] && isValidPhoneNumber(reqData[common.REQ_ADMIN_PHONE]) ? <span className="text-success">Yes</span> : <span className="text-danger">No</span>}</p>

                  </Form.Group>

                  <Form.Group className='mb-1' controlId="email">
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Email <strong className='text-danger'>*</strong></Form.Label>
                    <Form.Control
                    type="text"
                    defaultValue={reqData[common.REQ_ADMIN_EMAIL] }
                    name="email"
                    required
                    onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className='mb-1' controlId={ common.REQ_ADMIN_PERSON }>
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Person (You are a)</Form.Label>
                    <div key={`inline-radio`} className="mb-1">
                      <Form.Check
                        inline
                        label="Parent"
                        name={ common.REQ_ADMIN_PERSON }
                        type="radio"
                        id={common.REQ_ADMIN_PERSON_PARENT}
                        value={common.REQ_ADMIN_PERSON_PARENT}
                        checked={reqData[common.REQ_ADMIN_PERSON] === common.REQ_ADMIN_PERSON_PARENT}
                        onChange={handleChange}
                        defaultChecked
                        />
                      <Form.Check
                        inline
                        label="Student"
                        name={ common.REQ_ADMIN_PERSON }
                        type="radio"
                        id={common.REQ_ADMIN_PERSON_STUDENT}
                        value={common.REQ_ADMIN_PERSON_STUDENT}
                        checked={reqData[common.REQ_ADMIN_PERSON] === common.REQ_ADMIN_PERSON_STUDENT}
                        onChange={handleChange}
                      />
                    </div>
                  </Form.Group>

                </div>

                {/* Detail Bottom */}
                <div className="col-md-4">

                  <Form.Group className='mb-1' controlId={ common.REQ_ADMIN_STU_GENDER }>
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Student's Gender</Form.Label>
                    <div key={`inline-radio`} className="mb-1">
                      <Form.Check
                        inline
                        label="Male"
                        name={ common.REQ_ADMIN_STU_GENDER }
                        type="radio"
                        id={common.MALE_KEY}
                        value={common.MALE_KEY}
                        checked={reqData[common.REQ_ADMIN_STU_GENDER] === common.MALE_KEY}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="Female"
                        name={ common.REQ_ADMIN_STU_GENDER }
                        type="radio"
                        id={common.FEMALE_KEY}
                        value={common.FEMALE_KEY}
                        checked={reqData[common.REQ_ADMIN_STU_GENDER] === common.FEMALE_KEY}
                        onChange={handleChange}
                      />
                    </div>
                  </Form.Group>

                  <Form.Group controlId={ common.REQ_ADMIN_TUTOR_GENDER }>
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Tutor's Gender</Form.Label>
                    <div key={`inline-radio`} className="mb-1">
                      <Form.Check
                        inline
                        label="Any"
                        name={ common.REQ_ADMIN_TUTOR_GENDER }
                        type="radio"
                        id={ `tutorGenderAny` }
                        value= {common.GENDER_ANY_KEY }
                        checked={ reqData[common.REQ_ADMIN_TUTOR_GENDER] === common.GENDER_ANY_KEY}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="Male"
                        name={ common.REQ_ADMIN_TUTOR_GENDER }
                        type="radio"
                        id={ `tutorGenderMale` }
                        value= {common.MALE_KEY }
                        checked={ reqData[common.REQ_ADMIN_TUTOR_GENDER] === common.MALE_KEY}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="Female"
                        name={ common.REQ_ADMIN_TUTOR_GENDER }
                        type="radio"
                        id={ `tutorGenderFemale` }
                        value= { common.FEMALE_KEY }
                        checked={ reqData[common.REQ_ADMIN_TUTOR_GENDER] === common.FEMALE_KEY}
                        onChange={handleChange}
                        defaultChecked
                      />
                    </div>
                  </Form.Group>

                  <Form.Group controlId="budget" className='mb-1'>
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Tuition Budget</Form.Label>
                    <Form.Control
                    type="text"
                    defaultValue={reqData[common.REQ_ADMIN_BUDGET]}
                    name="budget"
                    onChange={handleChange}
                    value={reqData[common.REQ_ADMIN_BUDGET]}
                    />
                  </Form.Group>

                  <Form.Group className="mb-1" controlId="message">
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Client's Need / Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder=''
                      name="message"
                      onChange={handleChange}
                      value={reqData[common.REQ_ADMIN_MESSAGE]}
                    />
                  </Form.Group>

                </div>

              </Row>

              <Row>
                <div className="col-lg-4 col-md-6">
                  <Form.Group controlId={common.REQ_ADMIN_DAY_OF_WEEK} >
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Days Of The Week <strong className='text-danger'>*</strong></Form.Label>
                    <div key={`default-checkbox`} className="mb-1">
                      <Form.Check
                        inline
                        label="Monday"
                        name={common.REQ_ADMIN_DAY_OF_WEEK}
                        type="checkbox"
                        value={common.DAY_OF_WEEK_MON}
                        id={common.DAY_OF_WEEK_MON}
                        checked={reqData[common.REQ_ADMIN_DAY_OF_WEEK].includes(common.DAY_OF_WEEK_MON) }
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="Tuesday"
                        name={common.REQ_ADMIN_DAY_OF_WEEK}
                        type="checkbox"
                        value={common.DAY_OF_WEEK_TUE}
                        id={common.DAY_OF_WEEK_TUE}
                        checked={ reqData[common.REQ_ADMIN_DAY_OF_WEEK].includes(common.DAY_OF_WEEK_TUE) }
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="Wednesday"
                        name={common.REQ_ADMIN_DAY_OF_WEEK}
                        type="checkbox"
                        value={common.DAY_OF_WEEK_WED}
                        id={common.DAY_OF_WEEK_WED}
                        checked={reqData[common.REQ_ADMIN_DAY_OF_WEEK].includes(common.DAY_OF_WEEK_WED) }
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="Thursday"
                        name={common.REQ_ADMIN_DAY_OF_WEEK}
                        type="checkbox"
                        value={common.DAY_OF_WEEK_THU}
                        id={common.DAY_OF_WEEK_THU}
                        checked={reqData[common.REQ_ADMIN_DAY_OF_WEEK].includes(common.DAY_OF_WEEK_THU) }
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="Friday"
                        name={common.REQ_ADMIN_DAY_OF_WEEK}
                        type="checkbox"
                        value={common.DAY_OF_WEEK_FRI}
                        id={common.DAY_OF_WEEK_FRI}
                        checked={reqData[common.REQ_ADMIN_DAY_OF_WEEK].includes(common.DAY_OF_WEEK_FRI) }
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="Saturday"
                        name={common.REQ_ADMIN_DAY_OF_WEEK}
                        type="checkbox"
                        value={common.DAY_OF_WEEK_SAT}
                        id={common.DAY_OF_WEEK_SAT}
                        checked={reqData[common.REQ_ADMIN_DAY_OF_WEEK].includes(common.DAY_OF_WEEK_SAT) }
                        onChange={handleChange}
                      />
                      <Form.Check
                        label="Sunday"
                        name={common.REQ_ADMIN_DAY_OF_WEEK}
                        type="checkbox"
                        value={common.DAY_OF_WEEK_SUN}
                        id={common.DAY_OF_WEEK_SUN}
                        checked={reqData[common.REQ_ADMIN_DAY_OF_WEEK].includes(common.DAY_OF_WEEK_SUN) }
                        onChange={handleChange}
                      />

                    </div>
                  </Form.Group>
                </div>

                <div className="col-lg-4 col-md-6">
                  <Form.Group controlId={common.REQ_ADMIN_TIME}>
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Available Timings <strong className='text-danger'>*</strong></Form.Label>
                    <div key={`default-checkbox`} className="mb-1">
                      <Form.Check
                        inline
                        label="8am - 12pm"
                        name={common.REQ_ADMIN_TIME}
                        type="checkbox"
                        value={ common.TIME_SLOT_8AM }
                        id={common.TIME_SLOT_8AM}
                        checked={reqData[common.REQ_ADMIN_TIME].includes( common.TIME_SLOT_8AM ) }
                        onChange={handleChange}
                        />
                      <Form.Check
                        inline
                        label="12pm - 3pm"
                        name={common.REQ_ADMIN_TIME}
                        type="checkbox"
                        value={ common.TIME_SLOT_12PM }
                        id={common.TIME_SLOT_12PM}
                        checked={reqData[common.REQ_ADMIN_TIME].includes(common.TIME_SLOT_12PM ) }
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="3pm - 6pm"
                        name={common.REQ_ADMIN_TIME}
                        type="checkbox"
                        value={ common.TIME_SLOT_3PM }
                        id={common.TIME_SLOT_3PM}
                        checked={reqData[common.REQ_ADMIN_TIME].includes(common.TIME_SLOT_3PM ) }
                        onChange={handleChange}
                        />
                      <Form.Check
                        inline
                        label="6pm - 9pm"
                        name={common.REQ_ADMIN_TIME}
                        type="checkbox"
                        value={ common.TIME_SLOT_6PM }
                        id={common.TIME_SLOT_6PM}
                        checked={reqData[common.REQ_ADMIN_TIME].includes(common.TIME_SLOT_6PM ) }
                        onChange={handleChange}
                      />
                    </div>
                  </Form.Group>
                  <Form.Group controlId={common.REQ_ADMIN_DURATION}>
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Duration <strong className='text-danger'>*</strong></Form.Label>
                    <div key={`inline-radio`} className="mb-1">
                      <Form.Check
                        inline
                        label="30 min"
                        name={common.REQ_ADMIN_DURATION}
                        type="radio"
                        value= { "0.5" }
                        id="duration0.5"
                        checked={reqData[common.REQ_ADMIN_DURATION] === "0.5"}
                        onChange={handleChange}
                        />
                      <Form.Check
                        inline
                        label="1 hr"
                        name={common.REQ_ADMIN_DURATION}
                        type="radio"
                        value= { "1" }
                        id="duration1"
                        checked={reqData[common.REQ_ADMIN_DURATION] === "1"}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="1.5 hr"
                        name={common.REQ_ADMIN_DURATION}
                        type="radio"
                        value= { "1.5" }
                        id="duration1.5"
                        checked={reqData[common.REQ_ADMIN_DURATION] === "1.5"}
                        onChange={handleChange}
                        defaultChecked
                        />
                      <Form.Check
                        inline
                        label="2 hr"
                        name={common.REQ_ADMIN_DURATION}
                        type="radio"
                        value= { "2" }
                        id="duration2"
                        checked={reqData[common.REQ_ADMIN_DURATION] === "2"}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="2.5 hr"
                        name={common.REQ_ADMIN_DURATION}
                        type="radio"
                        value= { "2.5" }
                        id="duration2.5"
                        checked={reqData[common.REQ_ADMIN_DURATION] === "2.5"}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="3 hr and above"
                        name={common.REQ_ADMIN_DURATION}
                        type="radio"
                        value= { "3" }
                        id="duration3"
                        checked={reqData[common.REQ_ADMIN_DURATION] === "3"}
                        onChange={handleChange}
                      />
                    </div>
                  </Form.Group>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Form.Group controlId={common.REQ_ADMIN_LESS_PER_WEEK}>
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Frequency Of Lessons <strong className='text-danger'>*</strong></Form.Label>
                    <div key={`inline-radio`} className="mb-1">
                      <Form.Check
                        inline
                        label="1 Class/Week"
                        name={common.REQ_ADMIN_LESS_PER_WEEK}
                        type="radio"
                        value= { "1" }
                        id="lessPerWeek1"
                        checked={reqData[common.REQ_ADMIN_LESS_PER_WEEK] === "1"}
                        onChange={handleChange}
                        />
                      <Form.Check
                        inline
                        label="2 Class/Week"
                        name={common.REQ_ADMIN_LESS_PER_WEEK}
                        type="radio"
                        value= { "2" }
                        id="lessPerWeek2"
                        checked={reqData[common.REQ_ADMIN_LESS_PER_WEEK] === "2"}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="3 Class/Week"
                        name={common.REQ_ADMIN_LESS_PER_WEEK}
                        type="radio"
                        value= { "3" }
                        id="lessPerWeek3"
                        checked={reqData[common.REQ_ADMIN_LESS_PER_WEEK] === "3"}
                        onChange={handleChange}
                        defaultChecked
                        />
                      <Form.Check
                        inline
                        label="4 Class/Week"
                        name={common.REQ_ADMIN_LESS_PER_WEEK}
                        type="radio"
                        value= { "4" }
                        id="lessPerWeek4"
                        checked={reqData[common.REQ_ADMIN_LESS_PER_WEEK] === "4"}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="5 Class/Week"
                        name={common.REQ_ADMIN_LESS_PER_WEEK}
                        type="radio"
                        value= { "5" }
                        id="lessPerWeek5"
                        checked={reqData[common.REQ_ADMIN_LESS_PER_WEEK] === "5"}
                        onChange={handleChange}
                      />
                    </div>
                  </Form.Group>
                </div>




              </Row>


              <Row>
                <Form.Group controlId="sur01">
                  <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Where Do You Find Us?</Form.Label>
                  <div key={`inline-radio`} className="mb-1">
                    <Form.Check
                      inline
                      label="Web Search"
                      name="sur01"
                      type="radio"
                      id={`surWebSearch`}
                      value='surWebSearch'
                      checked={ reqData[common.REQ_ADMIN_SURVEY_01] === 'surWebSearch'}
                      onChange={handleChange}
                      defaultChecked
                    />
                    <Form.Check
                      inline
                      label="Facebook"
                      name="sur01"
                      type="radio"
                      id={`surFb`}
                      value='surFb'
                      checked={ reqData[common.REQ_ADMIN_SURVEY_01] === 'surFb'}
                      onChange={handleChange}
                    />
                    <Form.Check
                      inline
                      label="Instagram"
                      name="sur01"
                      type="radio"
                      id={`surInsta`}
                      value='surInsta'
                      checked={ reqData[common.REQ_ADMIN_SURVEY_01] === 'surInsta'}
                      onChange={handleChange}
                    />
                  <Form.Check
                      inline
                      label="Twitter"
                      name="sur01"
                      type="radio"
                      id={`surTwitter`}
                      value='surTwitter'
                      checked={ reqData[common.REQ_ADMIN_SURVEY_01] === 'surTwitter'}
                      onChange={handleChange}
                      defaultChecked
                    />
                    <Form.Check
                      inline
                      label="Google / Facebook Advertisement"
                      name="sur01"
                      type="radio"
                      id={`surAds`}
                      value='surAds'
                      checked={ reqData[common.REQ_ADMIN_SURVEY_01] === 'surAds'}
                      onChange={handleChange}
                    />
                    <Form.Check
                      inline
                      label="Recommended by others"
                      name="sur01"
                      type="radio"
                      id={`surRecommended`}
                      value='surRecommended'
                      checked={ reqData[common.REQ_ADMIN_SURVEY_01] === 'surRecommended'}
                      onChange={handleChange}
                    />

                  </div>
                </Form.Group>
              </Row>

            </div>



            <div className='form-req-header pt-4 pb-2'>
              <h5>Advanced</h5>
            </div>

            <div className='form-req-content'>
              <div className="row">
                <div class="col-md-2">
                  <div class="form-group" >
                    <span class="" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Request Id</span>
                    <p id="reqEditId">{reqData[common.REQ_ADMIN_ID]}</p>

                  </div>

                </div>
                <div class="col-md-2">
                  <div class="form-group" >
                    <span class="" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Job Id</span>
                    <p id="reqEditJobId">{reqData[common.REQ_ADMIN_JOB_ID] || "-"}</p>

                  </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group" >
                    <span class="" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Job Status</span>
                    <p id="reqEditJobStatus">{reqData[common.REQ_ADMIN_JOB_STATUS] || "-"}</p>

                  </div>
                </div>
                <div class="col-md-2">
                  <div class="form-group" >
                    <span class="" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Job Public Id</span>
                    <p id="reqEditJobPublicId">{reqData[common.REQ_ADMIN_JOB_PUBLIC_ID] || "-"}</p>

                  </div>
                </div>
                {/* <div class="col-md-2">
                  <span class="" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Job Action</span>


                </div> */}
                <div className="col-md-4">
                  <div class="form-group" >
                    {/* <span class="" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Who own this request?</span> */}
                    {/* <input id="reqEditInOwner" type="text" class="form-control" disabled/> */}
                    <Form.Group className='' controlId="name" >
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Who own this request? <strong className='text-danger'>*</strong></Form.Label>
                      <Form.Control
                        type="text"
                        defaultValue={ reqData[common.REQ_ADMIN_OWNER] }
                        name={common.REQ_ADMIN_OWNER}
                        required
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <p class="text-danger m-0" style={{fontSize: "x-small"}}>Do not change this!!</p>
                  </div>
                </div>

                <div className="col-md-12">
                  {/* <span class="" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Submited From? </span> */}
                  {/* <span class="" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Add "external_request" for External Request. i.e external_requesthttps://golearn.com.my/tutor/?tid=XXXXX </span> */}
                  <Form.Group className="mb-1" controlId="message">
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Submitted From?</Form.Label>
                    <p class="m-0" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Add <strong className='text-danger'>external_request</strong> for External Requests at the <strong className='text-danger'>start of link</strong>. i.e "<strong className='text-danger'>external_request</strong>https://golearn.com.my/tutor/?tid=XXXXX" </p>
                    <p class="m-0" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Add <strong className='text-danger'>partner_[XX]</strong> for Partner Requests.</p>
                    <p class="m-0" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>You should <strong className='text-danger'>enter the original link EXACTLY</strong> here. Modifying the link will cause the utm fields below to change, hence incurring errors to analytics.</p>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder='Full Link. No spaces. Check spelling.'
                      name={common.REQ_ADMIN_URL}
                      id={common.REQ_ADMIN_URL}
                      onChange={handleChange}
                      value={reqData[common.REQ_ADMIN_URL]}
                    />
                  </Form.Group>
                </div>

                <div className="col-md-2">
                  <span class="" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>utm_source</span>
                  <p id="reqEditUtmSource">{reqData[common.REQ_ADMIN_UTM_SOURCE] || "-"}</p>
                </div>
                <div class="col-md-2">
                  <div class="form-group" >
                    <span class="" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>utm_medium</span>
                    <p id="reqEditUtmMedium">{reqData[common.REQ_ADMIN_UTM_MEDIUM] || "-"}</p>
                  </div>

                </div>
                <div class="col-md-2">
                  <div class="form-group" >
                    <span class="" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>utm_campaign</span>
                    <p id="reqEditUtmCampaign">{reqData[common.REQ_ADMIN_UTM_CAMPAIGN] || "-"}</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="form-group" >
                    <span class="" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>utm_term</span>
                    <p id="reqEditUtmTerm">{reqData[common.REQ_ADMIN_UTM_TERM] || "-"}</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="form-group" >
                    <span class="" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>utm_content</span>
                    <p id="reqEditUtmContent">{reqData[common.REQ_ADMIN_UTM_CONTENT] || "-"}</p>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Container>
      </>
    )
  }
  else{
    return (
      <>
        <Page404/>
      </>
    )
  }
}

export default RequestAdd