// Shared Area Subject Template

import React,  {useEffect, useState, useRef} from "react"
import {useParams, useLocation, redirect} from "react-router-dom"
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import {
  CAlert, CAlertLink,
  CButton,
  CFormCheck,
  CFormSelect,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CToast, CToastHeader, CToastBody, CToaster,
  CToastClose,
  CTooltip,
} from '@coreui/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBell, faBullhorn, faPhone, faComment, faChalkboardUser, faUserPen, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber, isPossiblePhoneNumber } from 'react-phone-number-input'
// Tag Input Related
import { WithContext as ReactTags } from 'react-tag-input';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getMonth, getYear, format  } from "date-fns";

const Page404 = React.lazy(() => import('../../views/pages/page404/Page404'))

import { initializeApp } from "firebase/app";
import { collection, getFirestore, doc, getDoc, getDocs, setDoc, updateDoc, writeBatch, query, where } from "firebase/firestore";
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
import { REQUEST_ADMIN } from "src/js/const-v2";

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


function RequestEdit() {

  const {reqId} = useParams()

  const [reqData, setReqData] = React.useState({});
  const [reqOriData, setReqOriData] = React.useState({}); // Original copy of reqData. Used to verified the changes done.

  const [notificationItem, setNotificationItem] = React.useState("");

  const loadRequest = async (request_id) => {
    const docRef = doc(db, myConst.REQUEST_ADMIN, request_id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());

      // TODO: Tracking implmentation for Google & Meta platform
      // var urlRegex = /(https?:\/\/[^\s]+)/g;
      var urlRegex2 = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/g;
      // console.log(url)
      // url = urlRegex.find('(?:(?:https?|ftp):\/\/)?[\w/\-?=%.]+\.[\w/\-&?=%.]+', "external_requesthttps://my-website.com?type1=sfdwedada&name=oscar")
      let temLink = "https://golearn.com.my/my/a/ch-private-tuition.html?matchtype=p&device=m&keyword=%E5%AE%B6%E6%95%99%E8%80%81%E5%B8%88&creative=648761337058&campaignid=19712365138&adgroupid=149232950387&loc_interest_ms=&loc_physical_ms=9066750&feeditemid=&adposition=&gclid=CjwKCAjw4ZWkBhA4EiwAVJXwqSTx5IvUR9GgLW9ZnT8aXw0wREnA9GR7p-YPpZAlsRscNUwJkCIGpBoCbRYQAvD_BwE#form"
      let reqAdminUrl =temLink.match(urlRegex2)
      // let reqAdminUrl =docSnap.data()[common.REQ_ADMIN_URL].match(urlRegex2)
      // console.log(reqAdminUrl)
      // Remove all uncessary tags
      if ( false ){ // reqAdminUrl == null || reqAdminUrl.length > 0
        // No URL
      }
      else {
        let url = new URL(reqAdminUrl[0]); // Convert to actual url
        let queryParameters = new URLSearchParams(url.search)

        let utm_source = queryParameters.get("utm_source")
        let utm_medium = queryParameters.get("utm_medium")
        let utm_campaign = queryParameters.get("utm_campaign") || queryParameters.get("campaignid")
        let utm_term = queryParameters.get("utm_term")
        let utm_content = queryParameters.get("utm_content")

        // console.log(utm_source)
        // console.log(utm_medium)
        // console.log(utm_campaign)
        // console.log(utm_term)
        // console.log(utm_content)
      }

      setReqData(docSnap.data());
      setReqOriData(docSnap.data());// Store an original copy

      // Set Job Data: If Job doesn't exist, preset the job with request
      if (docSnap.data()[common.REQ_ADMIN_JOB_ID] == null || docSnap.data()[common.REQ_ADMIN_JOB_ID] == ""){
        let newJobData = {
          [common.JOB_ID]: "",
          [common.JOB_PUBLIC_ID]: "",
          [common.JOB_REQ_ID]: docSnap.data()[common.REQ_ADMIN_ID],
          [common.JOB_REF_NO]: "",

          [common.JOB_NAME]: docSnap.data()[common.REQ_ADMIN_NAME],
          [common.JOB_CLIENT_ID]: docSnap.data()[common.REQ_ADMIN_PHONE],
          [common.JOB_PHONE]: docSnap.data()[common.REQ_ADMIN_PHONE],
          [common.JOB_EMAIL]: docSnap.data()[common.REQ_ADMIN_EMAIL],
          [common.JOB_DURATION]: docSnap.data()[common.REQ_ADMIN_DURATION],
          [common.JOB_LESS_PER_WEEK]: docSnap.data()[common.REQ_ADMIN_LESS_PER_WEEK],
          [common.JOB_DAY_OF_WEEK]: docSnap.data()[common.REQ_ADMIN_DAY_OF_WEEK],
          [common.JOB_TIME]: docSnap.data()[common.REQ_ADMIN_TIME],
          [common.JOB_DETAIL]: "",
          [common.JOB_ONLINE]: docSnap.data()[common.REQ_ADMIN_ONLINE],
          [common.JOB_PLACE]: docSnap.data()[common.REQ_ADMIN_PLACE],
          [common.JOB_SUB_ARR]: docSnap.data()[common.REQ_ADMIN_SUB_ARR],
          [common.JOB_AREA]: docSnap.data()[common.REQ_ADMIN_AREA],
          [common.JOB_STATE]: docSnap.data()[common.REQ_ADMIN_STATE],

          [common.JOB_FEE]: 0,
          [common.JOB_FEE_TYPE]: common.FEE_TYPE_HOUR_KEY,
          [common.JOB_COMMISSION_POLICY]: common.JOB_COMMISSION_POLICY_50PC,
          [common.JOB_PARTNER]: false,
          [common.JOB_PARTNER_NAME]: "",

          [common.JOB_JOB_STATUS]: docSnap.data()[common.REQ_ADMIN_REQ_STATUS],
          [common.JOB_DATE_CREATE]: new Date(),
          [common.JOB_DATE_CLOSE]: "",
          [common.JOB_DATE_QUERY]: new Date(),

          [common.JOB_OWNER]: docSnap.data()[common.REQ_ADMIN_OWNER],
          [common.JOB_STATUS]: true,
          [common.JOB_REFID]: docSnap.data()[common.REQ_ADMIN_REFID],

          [common.JOB_APPLY_ID_ARR]: [],
          [common.JOB_APPLICANT_ARR]: [],

        }

        // Temporary field for JobRef
        newJobData["jobRefNoValid"] =  false;

        console.log(newJobData)

        setJobData(newJobData);

        // UNUSED: Set Job Edit Data
        setJobEditData(newJobData);

        // Update Job Buttons
        updateJobButton(false);

        // Update Request Status: Disable job status if a req is no linked to a job
        setReqStatusDisabled_sent(true);
        setReqStatusDisabled_jobNoRes(true);
        setReqStatusDisabled_rejectAllTutors(true);
        setReqStatusDisabled_stopAfterTrial(true);
        setReqStatusDisabled_noTutor(true);
        setReqStatusDisabled_timeXMatch(true);

      }
      else {
        // alert("Loading Jobs")
        updateJobButton(true);

        // Update Request Status
        setReqStatusDisabled_sent(false);
        setReqStatusDisabled_jobNoRes(false);
        setReqStatusDisabled_rejectAllTutors(false);
        setReqStatusDisabled_stopAfterTrial(false);
        setReqStatusDisabled_noTutor(false);
        setReqStatusDisabled_timeXMatch(false);

        await loadJob(docSnap.data()[common.REQ_ADMIN_JOB_ID], docSnap.data()[common.REQ_ADMIN_JOB_PUBLIC_ID] );
      }

      // Visibility
      if (docSnap.data()[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_SUCCESS){
        // Corner case: If a req carry success status, show the Success Check field
        setReqEditJobRefIdVisible("")
      }else {
        setReqEditJobRefIdVisible("d-none")
      }

      initSubTag();

      // loadNotification()

      if (initializing) setInitializing(false);

    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");

    }

  }

  // Load existing job
  const loadJob = async (jobId, jobPublicId) => {
    // alert(" Loading JOB: " + jobId)
    console.log(" Loading JOB: " + jobId)

    const jobRef = doc(db, myConst.JOB_JOB, jobId);
    const jobPublicRef = doc(db, myConst.JOB_PUBLIC, jobPublicId);
    const docSnap = await getDoc(jobRef);

    if (docSnap.exists()) {
      console.log(docSnap.data());
      // UNUSED: Set Job Create Data
      let temJobData = docSnap.data()
      temJobData["jobRefNoValid"] =  true
      setJobData({ ...temJobData});

      setJobEditData(docSnap.data());

      // Visibility
      if (docSnap.data()[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_SUCCESS){
        // Corner case: If a req carry success status, show the Success Check field
        setJobEditJobRefIdVisible("")
      }else {
        setJobEditJobRefIdVisible("d-none")
      }

      if (docSnap.data()[common.JOB_PARTNER]){
        // Corner case: If a req carry success status, show the Success Check field
        setJobEditJobPartnerNameVisible("")
      }else {
        setJobEditJobPartnerNameVisible("d-none")
      }

    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");

    }

  }

  // Update buttons related to Job.
  const [btnJobAddVisible, setBtnJobAddVisible] = React.useState("");
  const [btnJobEditVisible, setBtnJobEditVisible] = React.useState("");

  const updateJobButton = (isJobExist) => {

    if (isJobExist){
      setBtnJobAddVisible("d-none")
      setBtnJobEditVisible("");
    }
    else {
      setBtnJobAddVisible("")
      setBtnJobEditVisible("d-none");
    }
  }
  // Default Load Request
  React.useEffect(() => {
    // if (initializing) setInitializing(false);
    loadRequest(reqId);
  }, [])

  // Initialization
  const [initializing, setInitializing] = useState(true);

  // Request Edit: SubjectArr Specific
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

  const [reqEditJobRefIdVisible, setReqEditJobRefIdVisible] = useState("d-none")
  // Status Related
  const [reqStatusDisabled_sent, setReqStatusDisabled_sent] = useState(false)
  const [reqStatusDisabled_jobNoRes, setReqStatusDisabled_jobNoRes] = useState(true)
  const [reqStatusDisabled_rejectAllTutors, setReqStatusDisabled_rejectAllTutors] = useState(true)
  const [reqStatusDisabled_stopAfterTrial, setReqStatusDisabled_stopAfterTrial] = useState(true)
  const [reqStatusDisabled_noTutor, setReqStatusDisabled_noTutor] = useState(true)
  const [reqStatusDisabled_timeXMatch, setReqStatusDisabled_timeXMatch] = useState(true)

  // Request Changes
  const handleChange = (e) => {

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
      case common.REQ_ADMIN_REQ_STATUS: {
        reqData[e.target.name] = e.target.value;
        setReqData({
          ...reqData
        })
        if (e.target.value === common.REQ_ADMIN_REQ_STATUS_SUCCESS){
          setReqEditJobRefIdVisible("")
        }else {
          setReqEditJobRefIdVisible("d-none")
        }
        break;
      }
      case common.REQ_ADMIN_PERSON:
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
  const updateRequest = async (e) => {
    // alert("Update Request")
    setModalUpdateConfirmContent("Updating... Please wait!")
    // setModalUpdateVisible(false)
    console.log(e)
    e.target.disabled = true;

    const batch = writeBatch(db);

    let newReqData = {
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
      [common.REQ_ADMIN_OWNER]: reqData[common.REQ_ADMIN_OWNER],

      [common.REQ_ADMIN_REFID]: reqData[common.REQ_ADMIN_REFID],

    }
    const reqRef = doc(db, myConst.REQUEST_ADMIN, reqData[common.REQ_ADMIN_ID]);

    // If linked to a job, we want to update the job specific var too.
    let jobTempData = {};
    if (reqData[common.REQ_ADMIN_JOB_ID] != null && reqData[common.REQ_ADMIN_JOB_ID] != ""){

      newReqData[common.REQ_ADMIN_JOB_ID] = reqData[common.REQ_ADMIN_JOB_ID],
      newReqData[common.REQ_ADMIN_JOB_REF_NO] = reqData[common.REQ_ADMIN_JOB_REF_NO],
      newReqData[common.REQ_ADMIN_JOB_STATUS] = reqData[common.REQ_ADMIN_REQ_STATUS],

      console.log("Update Request: Update Job too")
      // If success, add new success Ref id for class id / invoice id to Job Doc
      if (reqData[common.REQ_ADMIN_REQ_STATUS] == common.REQ_ADMIN_REQ_STATUS_SUCCESS ){
        jobTempData = {
          [common.JOB_JOB_STATUS] : reqData[common.REQ_ADMIN_REQ_STATUS],
          [common.JOB_REFID]: reqData[common.REQ_ADMIN_REQ_STATUS],
        }

      }
      else{
        jobTempData = {
          [common.JOB_JOB_STATUS] : reqData[common.REQ_ADMIN_REQ_STATUS],
        }
      }
      const jobRef = doc(db, myConst.JOB_JOB, reqData[common.REQ_ADMIN_ID]);

      console.log("Job Data:")
      console.log(jobTempData)
      batch.update(jobRef, jobTempData);

    }

    // Create Notification if:
    // 1. Owner changed
    // 2. Job status changed

    if ( reqData[common.REQ_ADMIN_OWNER] != reqOriData[common.REQ_ADMIN_OWNER] ){
      const notiChangeOwnerRef = doc(collection(db, myConst.ADMIN_NOTIFICATION_PATH))

      let evData = [
        {
          date: new Date(),
          desc: "Owner Changed: " +reqOriData[common.REQ_ADMIN_OWNER] + "->" + reqData[common.REQ_ADMIN_OWNER],
          owner: reqData[common.REQ_ADMIN_OWNER],
        }
      ]
      let notiData = {
        [common.EV_ID]: notiChangeOwnerRef.id,
        [common.EV_OWNER]:reqData[common.REQ_ADMIN_OWNER],
        [common.EV_SENDER]:reqData[common.REQ_ADMIN_OWNER],
        [common.EV_RECEIVER]:reqData[common.REQ_ADMIN_OWNER],

        [common.EV_EVENT]:"",
        [common.EV_DESC]:"",
        [common.EV_STATUS]:"6",
        [common.EV_ERRORCODE]: "3720",
        [common.EV_DATA]:evData,

        [common.EV_DATE_CREATE]:new Date(),
        [common.EV_DATE_UPDATE]:"",
        [common.EV_REFID]:reqData[common.REQ_ADMIN_REFID], // linked Request
        [common.EV_SEEN]: false,

        [common.EV_ACT]:false,
        [common.EV_ACT_TARGET]: [],
        [common.EV_ACT_DATE]: "",
        [common.EV_ACT_DESC]: "",
        [common.EV_ACT_STATUS]:"",
        [common.EV_ACT_DATE_UPDATE]:"",

      }
      console.log("Owner Changed")
      console.log(notiData)

      batch.set(notiChangeOwnerRef, notiData);

      // Add Notification to request
      let dateX = format(new Date(), "yyyyMMdd")
      // Add the first noti to the request
      if (reqData[common.REQ_ADMIN_EV_ID] == null || reqData[common.REQ_ADMIN_EV_ID] == "" || reqData[common.REQ_ADMIN_EV_ID].length <= 0){
        reqData[common.REQ_ADMIN_EV_ID] = [ notiChangeOwnerRef.id];
        reqData[common.REQ_ADMIN_EV_ERROR_CODE] = [ "3720" ];
        reqData[common.REQ_ADMIN_EV_DATEX] = [dateX] ;
        reqData[common.REQ_ADMIN_EV_ACT] = [ false ];
        reqData[common.REQ_ADMIN_EV_ACT_STATUS] = [common.EV_ACT_STATUS_NEW];
        setReqData({
          ...reqData
        })
        newReqData[common.REQ_ADMIN_EV_ID] = [ notiChangeOwnerRef.id];
        newReqData[common.REQ_ADMIN_EV_ERROR_CODE] = [ "3720" ];
        newReqData[common.REQ_ADMIN_EV_DATEX] = [dateX];
        newReqData[common.REQ_ADMIN_EV_ACT] = [ false ];
        newReqData[common.REQ_ADMIN_EV_ACT_STATUS] = [common.EV_ACT_STATUS_NEW];

      }
      else if (reqData[common.REQ_ADMIN_EV_ID].length > 0) {
        reqData[common.REQ_ADMIN_EV_ID].push( notiChangeOwnerRef.id ) ;
        reqData[common.REQ_ADMIN_EV_ERROR_CODE].push( "3720" );
        reqData[common.REQ_ADMIN_EV_DATEX].push(dateX);
        reqData[common.REQ_ADMIN_EV_ACT].push( false );
        reqData[common.REQ_ADMIN_EV_ACT_STATUS].push(common.EV_ACT_STATUS_NEW);

        setReqData({
          ...reqData
        })
        newReqData[common.REQ_ADMIN_EV_ID] = reqData[common.REQ_ADMIN_EV_ID];
        newReqData[common.REQ_ADMIN_EV_ERROR_CODE] = reqData[common.REQ_ADMIN_EV_ERROR_CODE];
        newReqData[common.REQ_ADMIN_EV_DATEX] =  reqData[common.REQ_ADMIN_EV_DATEX];
        newReqData[common.REQ_ADMIN_EV_ACT] = reqData[common.REQ_ADMIN_EV_ACT];
        newReqData[common.REQ_ADMIN_EV_ACT_STATUS] = reqData[common.REQ_ADMIN_EV_ACT_STATUS];
      }
      else {
        reqData[common.REQ_ADMIN_EV_ID] = [ notiChangeOwnerRef.id];
        reqData[common.REQ_ADMIN_EV_ERROR_CODE] = [ "3720" ];
        reqData[common.REQ_ADMIN_EV_DATEX] = [dateX] ;
        reqData[common.REQ_ADMIN_EV_ACT] = [ false ];
        reqData[common.REQ_ADMIN_EV_ACT_STATUS] = [common.EV_ACT_STATUS_NEW];
        setReqData({
          ...reqData
        })
        newReqData[common.REQ_ADMIN_EV_ID] = [ notiChangeOwnerRef.id];
        newReqData[common.REQ_ADMIN_EV_ERROR_CODE] = [ "3720" ];
        newReqData[common.REQ_ADMIN_EV_DATEX] = [dateX];
        newReqData[common.REQ_ADMIN_EV_ACT] = [ false ];
        newReqData[common.REQ_ADMIN_EV_ACT_STATUS] = [common.EV_ACT_STATUS_NEW];
      }

    }

    // 2. Change Status
    if ( reqData[common.REQ_ADMIN_REQ_STATUS] != reqOriData[common.REQ_ADMIN_REQ_STATUS] ){
      const notiChangeStatusRef = doc(collection(db, myConst.ADMIN_NOTIFICATION_PATH))

      let evData = [
        {
          date: new Date(),
          desc: "Status Changed: " +reqOriData[common.REQ_ADMIN_REQ_STATUS] + "->" + reqData[common.REQ_ADMIN_REQ_STATUS],
          owner: reqData[common.REQ_ADMIN_OWNER],
        }
      ]
      let errorCode = "3721" // Status change - Any
      if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_NEW){errorCode ="3722"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_NO_RESPONSE){errorCode ="3726"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_TOO_EXPENSIVE){errorCode ="3727"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_OTHER_OFFER){errorCode ="3728"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_IN_PROGRESS){errorCode ="3723"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_SENT){errorCode ="3724"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_NO_RESPONSE){errorCode ="3729"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_REJECT){errorCode ="3730"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_STOP_AFTER_TRIAL){errorCode ="3731"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_NO_TUTOR){errorCode ="3732"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_TIME){errorCode ="3733"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_SUCCESS){errorCode ="3725"}


      let notiData = {
        [common.EV_ID]: notiChangeStatusRef.id,
        [common.EV_OWNER]:reqData[common.REQ_ADMIN_OWNER],
        [common.EV_SENDER]:reqData[common.REQ_ADMIN_OWNER],
        [common.EV_RECEIVER]:reqData[common.REQ_ADMIN_OWNER],

        [common.EV_EVENT]:"",
        [common.EV_DESC]:"",
        [common.EV_STATUS]:"6",
        [common.EV_ERRORCODE]: errorCode,
        [common.EV_DATA]:evData,

        [common.EV_DATE_CREATE]:new Date(),
        [common.EV_DATE_UPDATE]:"",
        [common.EV_REFID]:reqData[common.REQ_ADMIN_REFID], // linked Request
        [common.EV_SEEN]: false,

        [common.EV_ACT]:false,
        [common.EV_ACT_TARGET]: [],
        [common.EV_ACT_DATE]: "",
        [common.EV_ACT_DESC]: "",
        [common.EV_ACT_STATUS]:"",
        [common.EV_ACT_DATE_UPDATE]:"",

      }
      console.log("Status Changed")
      console.log(notiData)
      batch.set(notiChangeStatusRef, notiData);

      // Add Notification to request
      let dateX = format(new Date(), "yyyyMMdd")

      // Add the first noti to the request
      if (reqData[common.REQ_ADMIN_EV_ID] == null || reqData[common.REQ_ADMIN_EV_ID] == "" || reqData[common.REQ_ADMIN_EV_ID].length <= 0){
        reqData[common.REQ_ADMIN_EV_ID] = [ notiChangeStatusRef.id];
        reqData[common.REQ_ADMIN_EV_ERROR_CODE] = [ errorCode ];
        reqData[common.REQ_ADMIN_EV_DATEX] = [dateX] ;
        reqData[common.REQ_ADMIN_EV_ACT] = [ false ];
        reqData[common.REQ_ADMIN_EV_ACT_STATUS] = [common.EV_ACT_STATUS_NEW];
        setReqData({
          ...reqData
        })
        newReqData[common.REQ_ADMIN_EV_ID] = [ notiChangeStatusRef.id];
        newReqData[common.REQ_ADMIN_EV_ERROR_CODE] = [ errorCode ];
        newReqData[common.REQ_ADMIN_EV_DATEX] = [dateX];
        newReqData[common.REQ_ADMIN_EV_ACT] = [ false ];
        newReqData[common.REQ_ADMIN_EV_ACT_STATUS] = [common.EV_ACT_STATUS_NEW];

      }
      else if (reqData[common.REQ_ADMIN_EV_ID].length > 0) {
        reqData[common.REQ_ADMIN_EV_ID].push( notiChangeStatusRef.id ) ;
        reqData[common.REQ_ADMIN_EV_ERROR_CODE].push( errorCode );
        reqData[common.REQ_ADMIN_EV_DATEX].push(dateX);
        reqData[common.REQ_ADMIN_EV_ACT].push( false );
        reqData[common.REQ_ADMIN_EV_ACT_STATUS].push(common.EV_ACT_STATUS_NEW);

        setReqData({
          ...reqData
        })
        newReqData[common.REQ_ADMIN_EV_ID] = reqData[common.REQ_ADMIN_EV_ID];
        newReqData[common.REQ_ADMIN_EV_ERROR_CODE] = reqData[common.REQ_ADMIN_EV_ERROR_CODE];
        newReqData[common.REQ_ADMIN_EV_DATEX] =  reqData[common.REQ_ADMIN_EV_DATEX];
        newReqData[common.REQ_ADMIN_EV_ACT] = reqData[common.REQ_ADMIN_EV_ACT];
        newReqData[common.REQ_ADMIN_EV_ACT_STATUS] = reqData[common.REQ_ADMIN_EV_ACT_STATUS];
      }
      else {
        reqData[common.REQ_ADMIN_EV_ID] = [ notiChangeStatusRef.id];
        reqData[common.REQ_ADMIN_EV_ERROR_CODE] = [ errorCode ];
        reqData[common.REQ_ADMIN_EV_DATEX] = [dateX] ;
        reqData[common.REQ_ADMIN_EV_ACT] = [ false ];
        reqData[common.REQ_ADMIN_EV_ACT_STATUS] = [common.EV_ACT_STATUS_NEW];
        setReqData({
          ...reqData
        })
        newReqData[common.REQ_ADMIN_EV_ID] = [ notiChangeStatusRef.id];
        newReqData[common.REQ_ADMIN_EV_ERROR_CODE] = [ errorCode ];
        newReqData[common.REQ_ADMIN_EV_DATEX] = [dateX];
        newReqData[common.REQ_ADMIN_EV_ACT] = [ false ];
        newReqData[common.REQ_ADMIN_EV_ACT_STATUS] = [common.EV_ACT_STATUS_NEW];
      }

    }


    batch.update(reqRef, newReqData);
    console.log("Request Data: ")
    console.log(newReqData)

    try {
      await batch.commit();
      addToast( Toast({color: "success",  message:"Update Success"}) )
      handleModalUpdateClose()

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
    else if ( !reqData[common.REQ_ADMIN_PHONE] || !isValidPhoneNumber(reqData[common.REQ_ADMIN_PHONE])){
      addToast( Toast({color: "warning",  message:"Please enter a valid phone"}) )
    }
    else if (!formRef.current.checkValidity()) {
      // event.stopPropagation();
      addToast( Toast({color: "warning",  message:"Please enter make sure all required fields are filled up"}) )

    }
    else {
      setValidated(true)
      setModalUpdateVisible(!modalUpdateVisible)
    }

  }
  // Modal: Request Update
  const handleModalUpdateClose = () => {
    setModalUpdateConfirmContent("Update")
    setModalUpdateVisible(false)
  }

  // Toast
  const [toast, addToast] = useState(0)
  const toaster = useRef()

  // Validate Request Form
  const [validated, setValidated] = useState(false);

  // ================================  Create Job ================================ //
  const [jobData, setJobData] = React.useState([]);

  const createJob = async (e) => {
    // alert("Update Request")
    // setModalUpdateConfirmContent("Updating... Please wait!")
    setModalJobAddContent("Creating... Please wait")
    setModalJobAddConfirmContent("Creating... Please wait")

    // console.log(e)
    // console.log(jobData)

    e.target.disabled = true;

    const jobRef = doc(collection(db, myConst.JOB_JOB))
    const jobPublicRef = doc(collection(db, myConst.JOB_PUBLIC))

    const batch = writeBatch(db);

    let newJobData = {
      [common.JOB_ID]: jobRef.id,
      [common.JOB_PUBLIC_ID]: jobPublicRef.id,
      [common.JOB_REQ_ID]: jobData[common.JOB_REQ_ID],
      [common.JOB_REF_NO]: jobData[common.JOB_REF_NO],

      [common.JOB_NAME]: jobData[common.JOB_NAME],
      [common.JOB_CLIENT_ID]: jobData[common.JOB_CLIENT_ID],
      [common.JOB_PHONE]: jobData[common.JOB_PHONE],
      [common.JOB_EMAIL]: jobData[common.JOB_EMAIL],
      [common.JOB_DURATION]: jobData[common.JOB_DURATION],
      [common.JOB_LESS_PER_WEEK]: jobData[common.JOB_LESS_PER_WEEK],
      [common.JOB_DAY_OF_WEEK]: jobData[common.JOB_DAY_OF_WEEK],
      [common.JOB_TIME]: jobData[common.JOB_TIME],
      [common.JOB_DETAIL]: jobData[common.JOB_DETAIL],
      [common.JOB_ONLINE]: jobData[common.JOB_ONLINE],
      [common.JOB_PLACE]: jobData[common.JOB_PLACE],
      [common.JOB_SUB_ARR]: jobData[common.JOB_SUB_ARR],
      [common.JOB_AREA]: jobData[common.JOB_AREA],
      [common.JOB_STATE]: jobData[common.JOB_STATE],

      [common.JOB_FEE]: jobData[common.JOB_FEE],
      [common.JOB_FEE_TYPE]: jobData[common.JOB_FEE_TYPE],
      [common.JOB_COMMISSION_POLICY]: jobData[common.JOB_COMMISSION_POLICY],
      [common.JOB_PARTNER]: jobData[common.JOB_PARTNER],
      [common.JOB_PARTNER_NAME]: jobData[common.JOB_PARTNER_NAME],

      [common.JOB_JOB_STATUS]: jobData[common.JOB_JOB_STATUS],
      [common.JOB_DATE_CREATE]: jobData[common.JOB_DATE_CREATE],
      [common.JOB_DATE_CLOSE]: jobData[common.JOB_DATE_CLOSE],
      [common.JOB_DATE_QUERY]: jobData[common.JOB_DATE_QUERY],

      [common.JOB_OWNER]: jobData[common.JOB_OWNER],
      [common.JOB_STATUS]: true,
      [common.JOB_REFID]: jobData[common.JOB_REFID],

      [common.JOB_APPLY_ID_ARR]: [],
      [common.JOB_APPLICANT_ARR]: [],

    }


    let newJobPublicData = {
      [common.JOB_ID]: jobPublicRef.id,
      // [common.JOB_ID]: jobRef.id,
      // [common.JOB_PUBLIC_ID]: jobPublicRef.id,
      // [common.JOB_REQ_ID]: jobData[common.JOB_REQ_ID],
      [common.JOB_REF_NO]: jobData[common.JOB_REF_NO],

      // [common.JOB_NAME]: jobData[common.JOB_NAME],
      // [common.JOB_CLIENT_ID]: jobData[common.JOB_CLIENT_ID],
      // [common.JOB_PHONE]: jobData[common.JOB_PHONE],
      // [common.JOB_EMAIL]: jobData[common.JOB_EMAIL],
      [common.JOB_DURATION]: jobData[common.JOB_DURATION],
      [common.JOB_LESS_PER_WEEK]: jobData[common.JOB_LESS_PER_WEEK],
      [common.JOB_DAY_OF_WEEK]: jobData[common.JOB_DAY_OF_WEEK],
      [common.JOB_TIME]: jobData[common.JOB_TIME],
      [common.JOB_DETAIL]: jobData[common.JOB_DETAIL],
      [common.JOB_ONLINE]: jobData[common.JOB_ONLINE],
      [common.JOB_PLACE]: jobData[common.JOB_PLACE],
      [common.JOB_SUB_ARR]: jobData[common.JOB_SUB_ARR],
      [common.JOB_AREA]: jobData[common.JOB_AREA],
      [common.JOB_STATE]: jobData[common.JOB_STATE],

      [common.JOB_FEE]: jobData[common.JOB_FEE],
      [common.JOB_FEE_TYPE]: jobData[common.JOB_FEE_TYPE],
      [common.JOB_COMMISSION_POLICY]: jobData[common.JOB_COMMISSION_POLICY],
      [common.JOB_PARTNER]: jobData[common.JOB_PARTNER],
      [common.JOB_PARTNER_NAME]: jobData[common.JOB_PARTNER_NAME],

      [common.JOB_JOB_STATUS]: jobData[common.JOB_JOB_STATUS],
      [common.JOB_DATE_CREATE]: jobData[common.JOB_DATE_CREATE],
      [common.JOB_DATE_CLOSE]: jobData[common.JOB_DATE_CLOSE],
      [common.JOB_DATE_QUERY]: jobData[common.JOB_DATE_QUERY],

      // [common.JOB_OWNER]: jobData[common.JOB_OWNER],
      [common.JOB_STATUS]: true,
      // [common.JOB_REFID]: jobData[common.JOB_REFID],

      // [common.JOB_APPLY_ID_ARR]: jobData[common.JOB_APPLY_ID_ARR],
      // [common.JOB_APPLICANT_ARR]: jobData[common.JOB_APPLICANT_ARR],

      [common.JOB_PUBLIC_JOB_ID]: jobRef.id,
      [common.JOB_PUBLIC_APPLICANT_NUM]: 0,
    }

    const reqRef = doc(db, myConst.REQUEST_ADMIN, reqData[common.REQ_ADMIN_ID]);

    // Add the job details to the request.
    reqData[common.REQ_ADMIN_JOB_ID] = jobRef.id,
    reqData[common.REQ_ADMIN_JOB_PUBLIC_ID] = jobPublicRef.id,
    reqData[common.REQ_ADMIN_JOB_REF_NO] = jobData[common.JOB_REF_NO],
    reqData[common.REQ_ADMIN_JOB_STATUS] = jobData[common.JOB_JOB_STATUS],
    reqData[common.REQ_ADMIN_REQ_STATUS] = jobData[common.JOB_JOB_STATUS],
    reqData[common.REQ_ADMIN_REFID] = jobData[common.JOB_REFID],

    setReqData({
      ...reqData
    })

    let newReqData = {
      [common.REQ_ADMIN_JOB_ID]: jobRef.id,
      [common.REQ_ADMIN_JOB_PUBLIC_ID]: jobPublicRef.id,
      [common.REQ_ADMIN_JOB_REF_NO]: jobData[common.JOB_REF_NO],
      [common.REQ_ADMIN_JOB_STATUS]: jobData[common.JOB_JOB_STATUS],
      [common.REQ_ADMIN_REQ_STATUS]: jobData[common.JOB_JOB_STATUS],
      [common.REQ_ADMIN_REFID]: jobData[common.JOB_REFID],
    }

    // Create Notification the status of a new job is different from the original status of the request
    if ( reqData[common.REQ_ADMIN_REQ_STATUS] != reqOriData[common.REQ_ADMIN_REQ_STATUS] ){
      const notiChangeStatusRef = doc(collection(db, myConst.ADMIN_NOTIFICATION_PATH))

      let evData = [
        {
          date: new Date(),
          desc: "Status Changed: " +reqOriData[common.REQ_ADMIN_REQ_STATUS] + "->" + reqData[common.REQ_ADMIN_REQ_STATUS],
          owner: reqData[common.REQ_ADMIN_OWNER],
        }
      ]
      let errorCode = "3721" // Status change - Any
      if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_NEW){errorCode ="3722"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_NO_RESPONSE){errorCode ="3726"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_TOO_EXPENSIVE){errorCode ="3727"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_OTHER_OFFER){errorCode ="3728"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_IN_PROGRESS){errorCode ="3723"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_SENT){errorCode ="3724"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_NO_RESPONSE){errorCode ="3729"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_REJECT){errorCode ="3730"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_STOP_AFTER_TRIAL){errorCode ="3731"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_NO_TUTOR){errorCode ="3732"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_TIME){errorCode ="3733"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_SUCCESS){errorCode ="3725"}


      let notiData = {
        [common.EV_ID]: notiChangeStatusRef.id,
        [common.EV_OWNER]:reqData[common.REQ_ADMIN_OWNER],
        [common.EV_SENDER]:reqData[common.REQ_ADMIN_OWNER],
        [common.EV_RECEIVER]:reqData[common.REQ_ADMIN_OWNER],

        [common.EV_EVENT]:"",
        [common.EV_DESC]:"",
        [common.EV_STATUS]:"6",
        [common.EV_ERRORCODE]: errorCode,
        [common.EV_DATA]:evData,

        [common.EV_DATE_CREATE]:new Date(),
        [common.EV_DATE_UPDATE]:"",
        [common.EV_REFID]:reqData[common.REQ_ADMIN_REFID], // linked Request
        [common.EV_SEEN]: false,

        [common.EV_ACT]:false,
        [common.EV_ACT_TARGET]: [],
        [common.EV_ACT_DATE]: "",
        [common.EV_ACT_DESC]: "",
        [common.EV_ACT_STATUS]:"",
        [common.EV_ACT_DATE_UPDATE]:"",

      }
      console.log("Status Changed")
      console.log(notiData)
      batch.set(notiChangeStatusRef, notiData);

      // Add Notification to request
      let dateX = format(new Date(), "yyyyMMdd")

      // Add the first noti to the request
      if (reqData[common.REQ_ADMIN_EV_ID] == null || reqData[common.REQ_ADMIN_EV_ID] == "" || reqData[common.REQ_ADMIN_EV_ID].length <= 0){
        reqData[common.REQ_ADMIN_EV_ID] = [ notiChangeStatusRef.id];
        reqData[common.REQ_ADMIN_EV_ERROR_CODE] = [ errorCode ];
        reqData[common.REQ_ADMIN_EV_DATEX] = [dateX] ;
        reqData[common.REQ_ADMIN_EV_ACT] = [ false ];
        reqData[common.REQ_ADMIN_EV_ACT_STATUS] = [common.EV_ACT_STATUS_NEW];
        setReqData({
          ...reqData
        })
        newReqData[common.REQ_ADMIN_EV_ID] = [ notiChangeStatusRef.id];
        newReqData[common.REQ_ADMIN_EV_ERROR_CODE] = [ errorCode ];
        newReqData[common.REQ_ADMIN_EV_DATEX] = [dateX];
        newReqData[common.REQ_ADMIN_EV_ACT] = [ false ];
        newReqData[common.REQ_ADMIN_EV_ACT_STATUS] = [common.EV_ACT_STATUS_NEW];

      }
      else if (reqData[common.REQ_ADMIN_EV_ID].length > 0) {
        reqData[common.REQ_ADMIN_EV_ID].push( notiChangeStatusRef.id ) ;
        reqData[common.REQ_ADMIN_EV_ERROR_CODE].push( errorCode );
        reqData[common.REQ_ADMIN_EV_DATEX].push(dateX);
        reqData[common.REQ_ADMIN_EV_ACT].push( false );
        reqData[common.REQ_ADMIN_EV_ACT_STATUS].push(common.EV_ACT_STATUS_NEW);

        setReqData({
          ...reqData
        })
        newReqData[common.REQ_ADMIN_EV_ID] = reqData[common.REQ_ADMIN_EV_ID];
        newReqData[common.REQ_ADMIN_EV_ERROR_CODE] = reqData[common.REQ_ADMIN_EV_ERROR_CODE];
        newReqData[common.REQ_ADMIN_EV_DATEX] =  reqData[common.REQ_ADMIN_EV_DATEX];
        newReqData[common.REQ_ADMIN_EV_ACT] = reqData[common.REQ_ADMIN_EV_ACT];
        newReqData[common.REQ_ADMIN_EV_ACT_STATUS] = reqData[common.REQ_ADMIN_EV_ACT_STATUS];
      }
      else {
        reqData[common.REQ_ADMIN_EV_ID] = [ notiChangeStatusRef.id];
        reqData[common.REQ_ADMIN_EV_ERROR_CODE] = [ errorCode ];
        reqData[common.REQ_ADMIN_EV_DATEX] = [dateX] ;
        reqData[common.REQ_ADMIN_EV_ACT] = [ false ];
        reqData[common.REQ_ADMIN_EV_ACT_STATUS] = [common.EV_ACT_STATUS_NEW];
        setReqData({
          ...reqData
        })
        newReqData[common.REQ_ADMIN_EV_ID] = [ notiChangeStatusRef.id];
        newReqData[common.REQ_ADMIN_EV_ERROR_CODE] = [ errorCode ];
        newReqData[common.REQ_ADMIN_EV_DATEX] = [dateX];
        newReqData[common.REQ_ADMIN_EV_ACT] = [ false ];
        newReqData[common.REQ_ADMIN_EV_ACT_STATUS] = [common.EV_ACT_STATUS_NEW];
      }

    }

    batch.set(reqRef, newReqData, {merge: true});
    batch.set(jobRef, newJobData);
    batch.set(jobPublicRef, newJobPublicData);

    console.log("Request Data: ")
    console.log(newReqData)
    console.log("Job Data: ")
    console.log(newJobData)
    console.log(newJobPublicData)


    try {
      await batch.commit();
      addToast( Toast({color: "success",  message:"Job Successuly Created"}) )
      handleJobAddModalClose("Create Job Success")
      handleJobAddConfirmModalClose()

      // Reload Job
      await loadRequest(reqData[common.REQ_ADMIN_ID]);


    } catch (error) {
      addToast( Toast({color: "danger",  message:"Creating Job Failed. Please contact Alric immediately"}) )
      handleJobAddModalClose("Create Job Failed")
      handleJobAddConfirmModalClose()
    }

  }

  // Modal: Job Create
  const [modalJobAddVisible, setModalJobAddVisible] = useState(false)
  const [modalJobAddContent, setModalJobAddContent] = useState(false) // Disable save button when saved button is clicked

  const [modalJobAddConfirmVisible, setModalJobAddConfirmVisible] = useState(false)
  const [modalJobAddConfirmContent, setModalJobAddConfirmContent] = useState(false) // Disable save button when saved button is clicked

  const [jobAddJobRefIdVisible, setJobAddJobRefIdVisible] = useState("d-none")
  const [jobAddJobPartnerNamedVisible, setJobAddJobPartnerNameVisible] = useState("d-none")

  const handleJobAddModalOpen = () => {

    setModalJobAddVisible(true)

    // Reset the Job Create Modal
    let newJobData = {
      [common.JOB_ID]: "",
      [common.JOB_PUBLIC_ID]: "",
      [common.JOB_REQ_ID]: reqData[common.REQ_ADMIN_ID],
      [common.JOB_REF_NO]: "",

      [common.JOB_NAME]: reqData[common.REQ_ADMIN_NAME],
      [common.JOB_CLIENT_ID]: reqData[common.REQ_ADMIN_PHONE],
      [common.JOB_PHONE]: reqData[common.REQ_ADMIN_PHONE],
      [common.JOB_EMAIL]: reqData[common.REQ_ADMIN_EMAIL],
      [common.JOB_DURATION]: reqData[common.REQ_ADMIN_DURATION],
      [common.JOB_LESS_PER_WEEK]: reqData[common.REQ_ADMIN_LESS_PER_WEEK],
      [common.JOB_DAY_OF_WEEK]: reqData[common.REQ_ADMIN_DAY_OF_WEEK],
      [common.JOB_TIME]: reqData[common.REQ_ADMIN_TIME],
      [common.JOB_DETAIL]: "",
      [common.JOB_ONLINE]: reqData[common.REQ_ADMIN_ONLINE],
      [common.JOB_PLACE]: reqData[common.REQ_ADMIN_PLACE],
      [common.JOB_SUB_ARR]: reqData[common.REQ_ADMIN_SUB_ARR],
      [common.JOB_AREA]: reqData[common.REQ_ADMIN_AREA],
      [common.JOB_STATE]: reqData[common.REQ_ADMIN_STATE],

      [common.JOB_FEE]: 0,
      [common.JOB_FEE_TYPE]: common.FEE_TYPE_HOUR_KEY,
      [common.JOB_COMMISSION_POLICY]: common.JOB_COMMISSION_POLICY_50PC,
      [common.JOB_PARTNER]: false,
      [common.JOB_PARTNER_NAME]: "",

      [common.JOB_JOB_STATUS]: reqData[common.REQ_ADMIN_REQ_STATUS],
      [common.JOB_DATE_CREATE]: new Date(),
      [common.JOB_DATE_CLOSE]: "",
      [common.JOB_DATE_QUERY]: new Date(),

      [common.JOB_OWNER]: reqData[common.REQ_ADMIN_OWNER],
      [common.JOB_STATUS]: true,
      [common.JOB_REFID]: reqData[common.REQ_ADMIN_REFID],

      [common.JOB_APPLY_ID_ARR]: [],
      [common.JOB_APPLICANT_ARR]: [],

    }

    // Temporary field for JobRef
    newJobData["jobRefNoValid"] =  false;
    console.log(newJobData)
    setJobData(newJobData);

    // Reset validation Job Create form
    setFormJobAddValidated(false)

    // Visibility
    if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_SUCCESS){
      // Corner case: If a req carry success status, show the Success Check field
      setJobAddJobRefIdVisible("")
    }else {
      setJobAddJobRefIdVisible("d-none")
    }
    // Partner is always false
    setJobAddJobPartnerNameVisible("d-none")

  }

  const handleJobAddModalClose = (e) => {
    console.log(e)
    setModalJobAddContent("Create")
    setModalJobAddVisible(false)
  }

  // Modal: JOb Create Confirm
  const handleJobAddConfirmModalClose = () => {
    setModalJobAddConfirmContent("Confirm")
    setModalJobAddConfirmVisible(false)
  }

  // Validate Job Add Entires
  const validateJobRefNo = async () => {

    const q = query(collection(db, myConst.JOB_JOB), where(common.JOB_REF_NO, "==", jobData[common.JOB_REF_NO]));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size > 0 ){
      jobData["jobRefNoValid"] = false;
    }
    else {
      jobData["jobRefNoValid"] = true;

    }
    setJobData({
      ...jobData
    })
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    //   jobData["jobRefNoValid"] = false;
    //   setJobData({
    //     ...jobData
    //   })
    // });

  }

  // Validate Job Add Entires
  const formJobAddRef = useRef()
  // Validate Job Add Form
  const [formJobAddValidated , setFormJobAddValidated ] = useState(false);
  const validateJobAdd = () => {

    console.log(formJobAddRef.current)
    if (jobData[common.JOB_REF_NO] == "" || jobData["jobRefNoValid"]  == null || !jobData["jobRefNoValid"] ){
      addToast( Toast({color: "warning",  message:"Please enter valid Job Ref No."}) )
    }
    else if (jobData[common.JOB_FEE] == "" || jobData[common.JOB_FEE] > 10000 ){
      addToast( Toast({color: "warning",  message:"Please enter valid Fee"}) )
    }
    else if (jobData[common.JOB_SUB_ARR].length < 1 ){
      addToast( Toast({color: "warning",  message:"Please enter at least 1 subject"}) )
    }
    else if ( !jobData[common.JOB_ONLINE]  && (jobData[common.JOB_AREA] == null || jobData[common.JOB_AREA] == "" )){
      addToast( Toast({color: "warning",  message:"Area is needed for physical class. "}) )
    }
    else if ( !jobData[common.JOB_PHONE] || !isValidPhoneNumber(jobData[common.JOB_PHONE])){
      addToast( Toast({color: "warning",  message:"Please enter a valid phone"}) )
    }
    else if (!formJobAddRef.current.checkValidity()) {
      // event.stopPropagation();
      addToast( Toast({color: "warning",  message:"Please enter make sure all required fields are filled up"}) )

    }
    else {
      setFormJobAddValidated(true)
      setModalJobAddConfirmVisible(true)
    }
  }
  // Job Changes
  const handleJobChange = (e) => {
    // console.log(e)
    // console.log(e.target)

    // console.log(e.target.id)
    // console.log(e.target.name)
    // console.log(e.target.value)

    switch (e.target.name) {
      // Input & Textarea
      case common.JOB_REF_NO:{
        // When job ref is changed, force user to re-validate
        jobData[e.target.name] = e.target.value;
        jobData["jobRefNoValid"] = false;
        setJobData({
          ...jobData
        })
        break
      }
      case common.JOB_DETAIL:
      case common.JOB_FEE:
      case common.JOB_REFID:
      case common.JOB_PARTNER_NAME:
      case common.JOB_NAME:
      case common.JOB_PHONE:
      case common.JOB_EMAIL:
      case common.JOB_PLACE:
      case common.JOB_OWNER:{
        jobData[e.target.name] = e.target.value;
        setJobData({
          ...jobData
        })
        break;
      }
      // Checkbox
      case "job"+common.JOB_ONLINE:{
        console.log("Checkbox Job ONLINE")
        jobData[e.target.name.replace("job", "")] = e.target.checked;
        setJobData({
          ...jobData
        })
        break;
      }
      case "job"+common.JOB_PARTNER:{
        jobData[e.target.name.replace("job", "")] = e.target.checked;
        setJobData({
          ...jobData
        })
        if (e.target.checked){
          setJobAddJobPartnerNameVisible("")
        }else {
          setJobAddJobPartnerNameVisible("d-none")
        }
        break;
      }
      case "job"+common.JOB_DAY_OF_WEEK:
      case "job"+common.JOB_TIME: {
        console.log("Checkbox Other")
        let checkBoxEleArr = Array.from(
          document.getElementsByName(e.target.name)
        );
        let checkedArray = []

        checkBoxEleArr.forEach(ele => {
          if (ele.checked)
            checkedArray.push(ele.getAttribute('value'))
        });

        console.log(checkedArray)
        jobData[e.target.name.replace("job", "")] = checkedArray;
        // reqData[e.target.name + 'CheckedCount'] = checkedArray.length;
        setJobData({
          ...jobData
        })
        break;
      }
      // Radio
      case "job"+common.JOB_JOB_STATUS:{
        jobData[e.target.name.replace("job", "")] = e.target.value;
        setJobData({
          ...jobData
        })

        if (e.target.value === common.REQ_ADMIN_REQ_STATUS_SUCCESS){
          setJobAddJobRefIdVisible("")
        }else {
          setJobAddJobRefIdVisible("d-none")
        }
        break;
      }
      case "job"+common.JOB_FEE_TYPE:
      case "job"+common.JOB_COMMISSION_POLICY:
      case "job"+common.JOB_DURATION:
      case "job"+common.JOB_LESS_PER_WEEK: {
        jobData[e.target.name.replace("job", "")] = e.target.value;
        setJobData({
          ...jobData
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
  const handleJobPhoneChange = (val) => {
    jobData[common.JOB_PHONE] = val;
    setJobData({
      ...jobData
    })
  }

  // ================================  Edit Job ================================ //
  const [jobEditData, setJobEditData] = React.useState([]);

  // Job Edit: SubjectArr Specific
  const initJobEditSubTag = () => {
    const tags = [];
    // console.log(jobEditData)
    if (jobEditData[common.JOB_SUB_ARR] == null || jobEditData[common.JOB_SUB_ARR] == ""){
    }
    else {
      jobEditData[common.JOB_SUB_ARR].forEach((item) => {
        tags.push({
          id: item,
          text: myConst.getSubject(item)[0].name + " - " + myConst.getCategory(myConst.getSubject(item)[0].cat)[0].name,
        })
      })
    }

    return tags
  }

  const [jobEditSubTags, setJobEditSubTags] = useState(initJobEditSubTag);

  const initJobEditAreaTag = () => {
    const tags = [];
    // console.log("initAreaTag")
    // console.log(jobEditData[common.JOB_AREA])
    if (jobEditData[common.JOB_AREA] != null && jobEditData[common.JOB_AREA] != "" ){

      tags.push({
        id: jobEditData[common.JOB_AREA],
        text: myConst.getAreaBasedOnAreaId(jobEditData[common.JOB_AREA])[0].name[0] + " - " + myConst.getAreaBasedOnStateId(myConst.getAreaBasedOnAreaId(jobEditData[common.JOB_AREA])[0].st).name,
      })

    }

    return tags

  }
  // Tag input
  const [jobEditAreaTags, setJobEditAreaTags] = useState(initJobEditAreaTag)
  // Regenerate Tag view
  useEffect(() => {
    setJobEditSubTags(initJobEditSubTag)
    setJobEditAreaTags(initJobEditAreaTag)

  }, [jobEditData[common.JOB_SUB_ARR] , jobEditData[common.JOB_AREA]]);

  const handleJobEditSubDelete = i => {
    setJobEditSubTags(jobEditSubTags.filter((tag, index) => index !== i));


    // Update jobEditData
    let tags = jobEditSubTags.filter((tag, index) => index !== i)
    const arrObj2arrIdConverter = (temptag) => {return temptag.id};
    console.log("handleSubDelete")
    console.log(tags)

    let tempArr = tags.map(arrObj2arrIdConverter)
    jobEditData[common.JOB_SUB_ARR] = tempArr;
    setJobEditData({
      ...jobEditData
    })

    // handleSubTag(jobEditSubTags.filter((tag, index) => index !== i))

  };
  const handleJobEditAreaDelete = i => {
    setJobEditAreaTags(jobEditAreaTags.filter((tag, index) => index !== i));

    // let tags = jobEditAreaTags.filter((tag, index) => index !== i)
    jobEditData[common.JOB_AREA] = "";
    jobEditData[common.JOB_STATE] = "";
    setJobEditData({
      ...jobEditData
    })

  };
  const handleJobEditSubAddition = tag => {
    console.log(tag)
    if(jobEditSubTags.length <= 29){
      setJobEditSubTags([...jobEditSubTags, tag]);

      let tags = tag
      const arrObj2arrIdConverter = (temptag) => {return temptag.id};
      console.log("handleSubAddition")
      console.log(tags)
      // let tempArr = tags.map(arrObj2arrIdConverter)
      jobEditData[common.JOB_SUB_ARR] = [...jobEditData[common.JOB_SUB_ARR], tag.id];
      setJobEditData({
        ...jobEditData
      })
      // handleSubTag([...jobEditSubTags, tag])

    }
    else {
      alert("You can only add up to 29 subjects!")
    }

  };
  const handleJobEditAreaAddition = tag => {

    if(jobEditAreaTags.length < 1){
      setJobEditAreaTags([...jobEditAreaTags, tag]);
      // props.handlePlaceTag([...tags, tag])

      // let tags = tag
      // const arrObj2arrIdConverter = (temptag) => {return temptag.id};
      // console.log("handleAreaAddition")
      // console.log(tag.id)
      // let tempArr = tags.map(arrObj2arrIdConverter)
      jobEditData[common.JOB_AREA] = tag.id;
      jobEditData[common.JOB_STATE] = myConst.getAreaBasedOnAreaId(tag.id)[0].st;
      setJobEditData({
        ...jobEditData
      })

    }
    else {
      alert("You can only add up to 1 places!")
    }

  };
  const handleJobEditSubDrag = (tag, currPos, newPos) => {
    const newTags = jobEditSubTags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    // re-render
    setJobEditSubTags(newTags);

    let tags = newTags
    const arrObj2arrIdConverter = (temptag) => {return temptag.id};
    console.log("handleSubDrag")
    console.log(tags)
    let tempArr = tags.map(arrObj2arrIdConverter)
    jobEditData[common.JOB_SUB_ARR] = tempArr;
    setJobEditData({
      ...jobEditData
    })
    // handleSubTag(newTags)

  };
  const handleJobEditAreaDrag = (tag, currPos, newPos) => {
    const newTags = jobEditAreaTags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    // re-render
    setJobEditAreaTags(newTags);
    // props.handlePlaceTag(newTags)

  };
  const handleJobEditSubTagClick = index => {
    console.log('The tag at index ' + index + ' was clicked');
  };
  const handleJobEditAreaTagClick = index => {
    console.log('The tag at index ' + index + ' was clicked');
  };


  // Validate Job Edit Entires
  const formJobEditRef = useRef()
  // Validate Job Edit Form
  const [formJobEditValidated , setFormJobEditValidated ] = useState(false);
  const validateJobUpdate = () => {

    console.log(formJobEditRef.current)
    if (jobEditData[common.JOB_FEE] == "" || jobEditData[common.JOB_FEE] > 10000 ){
      addToast( Toast({color: "warning",  message:"Please enter valid Fee"}) )
    }
    else if (jobEditData[common.JOB_SUB_ARR].length < 1 ){
      addToast( Toast({color: "warning",  message:"Please enter at least 1 subject"}) )
    }
    else if ( !jobEditData[common.JOB_ONLINE]  && (jobEditData[common.JOB_AREA] == null || jobEditData[common.JOB_AREA] == "" )){
      addToast( Toast({color: "warning",  message:"Area is needed for physical class. "}) )
    }
    else if ( !jobEditData[common.JOB_PHONE] || !isValidPhoneNumber(jobEditData[common.JOB_PHONE])){
      addToast( Toast({color: "warning",  message:"Please enter a valid phone"}) )
    }
    else if (!formJobEditRef.current.checkValidity()) {
      // event.stopPropagation();
      addToast( Toast({color: "warning",  message:"Please enter make sure all required fields are filled up"}) )

    }
    else {
      setFormJobEditValidated(true)
      setModalJobEditConfirmVisible(true)
    }

  }

  // Job Edit: Update Job
  const updateJob = async (e) => {
    // alert("Update Request")
    // setModalUpdateConfirmContent("Updating... Please wait!")
    setModalJobEditContent("Updating... Please wait")
    setModalJobEditConfirmContent("Updating... Please wait")
    // console.log(e)
    // console.log(jobData)

    e.target.disabled = true;

    const jobRef = doc(db, myConst.JOB_JOB, jobEditData[common.JOB_ID]);
    const jobPublicRef = doc(db, myConst.JOB_PUBLIC, jobEditData[common.JOB_PUBLIC_ID]);

    const batch = writeBatch(db);

    let newJobData = {
      // [common.JOB_ID]: jobRef.id,
      // [common.JOB_PUBLIC_ID]: jobPublicRef.id,
      // [common.JOB_REQ_ID]: jobEditData[common.JOB_REQ_ID],
      // [common.JOB_REF_NO]: jobEditData[common.JOB_REF_NO],

      [common.JOB_NAME]: jobEditData[common.JOB_NAME],
      [common.JOB_CLIENT_ID]: jobEditData[common.JOB_CLIENT_ID],
      [common.JOB_PHONE]: jobEditData[common.JOB_PHONE],
      [common.JOB_EMAIL]: jobEditData[common.JOB_EMAIL],
      [common.JOB_DURATION]: jobEditData[common.JOB_DURATION],
      [common.JOB_LESS_PER_WEEK]: jobEditData[common.JOB_LESS_PER_WEEK],
      [common.JOB_DAY_OF_WEEK]: jobEditData[common.JOB_DAY_OF_WEEK],
      [common.JOB_TIME]: jobEditData[common.JOB_TIME],
      [common.JOB_DETAIL]: jobEditData[common.JOB_DETAIL],
      [common.JOB_ONLINE]: jobEditData[common.JOB_ONLINE],
      [common.JOB_PLACE]: jobEditData[common.JOB_PLACE],
      [common.JOB_SUB_ARR]: jobEditData[common.JOB_SUB_ARR],
      [common.JOB_AREA]: jobEditData[common.JOB_AREA],
      [common.JOB_STATE]: jobEditData[common.JOB_STATE],

      [common.JOB_FEE]: jobEditData[common.JOB_FEE],
      [common.JOB_FEE_TYPE]: jobEditData[common.JOB_FEE_TYPE],
      [common.JOB_COMMISSION_POLICY]: jobEditData[common.JOB_COMMISSION_POLICY],
      [common.JOB_PARTNER]: jobEditData[common.JOB_PARTNER],
      [common.JOB_PARTNER_NAME]: jobEditData[common.JOB_PARTNER_NAME],

      [common.JOB_JOB_STATUS]: jobEditData[common.JOB_JOB_STATUS],
      // [common.JOB_DATE_CREATE]: jobEditData[common.JOB_DATE_CREATE],
      // [common.JOB_DATE_CLOSE]: jobEditData[common.JOB_DATE_CLOSE],
      // [common.JOB_DATE_QUERY]: jobEditData[common.JOB_DATE_QUERY],

      [common.JOB_OWNER]: jobEditData[common.JOB_OWNER],
      // [common.JOB_STATUS]: true,
      [common.JOB_REFID]: jobEditData[common.JOB_REFID],

      // [common.JOB_APPLY_ID_ARR]: [],
      // [common.JOB_APPLICANT_ARR]: [],

    }

    let newJobPublicData = {
      // [common.JOB_ID]: jobPublicRef.id,
      [common.JOB_REF_NO]: jobEditData[common.JOB_REF_NO],

      [common.JOB_DURATION]: jobEditData[common.JOB_DURATION],
      [common.JOB_LESS_PER_WEEK]: jobEditData[common.JOB_LESS_PER_WEEK],
      [common.JOB_DAY_OF_WEEK]: jobEditData[common.JOB_DAY_OF_WEEK],
      [common.JOB_TIME]: jobEditData[common.JOB_TIME],
      [common.JOB_DETAIL]: jobEditData[common.JOB_DETAIL],
      [common.JOB_ONLINE]: jobEditData[common.JOB_ONLINE],
      [common.JOB_PLACE]: jobEditData[common.JOB_PLACE],
      [common.JOB_SUB_ARR]: jobEditData[common.JOB_SUB_ARR],
      [common.JOB_AREA]: jobEditData[common.JOB_AREA],
      [common.JOB_STATE]: jobEditData[common.JOB_STATE],

      [common.JOB_FEE]: jobEditData[common.JOB_FEE],
      [common.JOB_FEE_TYPE]: jobEditData[common.JOB_FEE_TYPE],
      [common.JOB_COMMISSION_POLICY]: jobEditData[common.JOB_COMMISSION_POLICY],
      [common.JOB_PARTNER]: jobEditData[common.JOB_PARTNER],
      [common.JOB_PARTNER_NAME]: jobEditData[common.JOB_PARTNER_NAME],

      [common.JOB_JOB_STATUS]: jobEditData[common.JOB_JOB_STATUS],
      // [common.JOB_DATE_CREATE]: jobEditData[common.JOB_DATE_CREATE],
      // [common.JOB_DATE_CLOSE]: jobEditData[common.JOB_DATE_CLOSE],
      // [common.JOB_DATE_QUERY]: jobEditData[common.JOB_DATE_QUERY],
      // [common.JOB_STATUS]: true,

      // [common.JOB_PUBLIC_JOB_ID]: jobRef.id,
      // [common.JOB_PUBLIC_APPLICANT_NUM]: 0,
    }

    const reqRef = doc(db, myConst.REQUEST_ADMIN, reqData[common.REQ_ADMIN_ID]);

    // Add the job details to the request.
    reqData[common.REQ_ADMIN_JOB_REF_NO] = jobEditData[common.JOB_REF_NO],
    reqData[common.REQ_ADMIN_JOB_STATUS] = jobEditData[common.JOB_JOB_STATUS],
    reqData[common.REQ_ADMIN_REQ_STATUS] = jobEditData[common.JOB_JOB_STATUS],
    reqData[common.REQ_ADMIN_REFID] = jobEditData[common.JOB_REFID],
    setReqData({
      ...reqData
    })

    let newReqData = {
      [common.REQ_ADMIN_JOB_REF_NO]: jobEditData[common.JOB_REF_NO],
      [common.REQ_ADMIN_JOB_STATUS]: jobEditData[common.JOB_JOB_STATUS],
      [common.REQ_ADMIN_REQ_STATUS]: jobEditData[common.JOB_JOB_STATUS],
      [common.REQ_ADMIN_REFID]: jobEditData[common.JOB_REFID],
    }

    // Create Notification if the status of a job is changed
    if ( reqData[common.REQ_ADMIN_REQ_STATUS] != reqOriData[common.REQ_ADMIN_REQ_STATUS] ){
      const notiChangeStatusRef = doc(collection(db, myConst.ADMIN_NOTIFICATION_PATH))

      let evData = [
        {
          date: new Date(),
          desc: "Status Changed: " +reqOriData[common.REQ_ADMIN_REQ_STATUS] + "->" + reqData[common.REQ_ADMIN_REQ_STATUS],
          owner: reqData[common.REQ_ADMIN_OWNER],
        }
      ]
      let errorCode = "3721" // Status change - Any
      if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_NEW){errorCode ="3722"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_NO_RESPONSE){errorCode ="3726"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_TOO_EXPENSIVE){errorCode ="3727"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_OTHER_OFFER){errorCode ="3728"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_IN_PROGRESS){errorCode ="3723"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_SENT){errorCode ="3724"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_NO_RESPONSE){errorCode ="3729"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_REJECT){errorCode ="3730"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_STOP_AFTER_TRIAL){errorCode ="3731"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_NO_TUTOR){errorCode ="3732"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_TIME){errorCode ="3733"}
      else if (reqData[common.REQ_ADMIN_REQ_STATUS] === common.REQ_ADMIN_REQ_STATUS_SUCCESS){errorCode ="3725"}


      let notiData = {
        [common.EV_ID]: notiChangeStatusRef.id,
        [common.EV_OWNER]:reqData[common.REQ_ADMIN_OWNER],
        [common.EV_SENDER]:reqData[common.REQ_ADMIN_OWNER],
        [common.EV_RECEIVER]:reqData[common.REQ_ADMIN_OWNER],

        [common.EV_EVENT]:"",
        [common.EV_DESC]:"",
        [common.EV_STATUS]:"6",
        [common.EV_ERRORCODE]: errorCode,
        [common.EV_DATA]:evData,

        [common.EV_DATE_CREATE]:new Date(),
        [common.EV_DATE_UPDATE]:"",
        [common.EV_REFID]:reqData[common.REQ_ADMIN_REFID], // linked Request
        [common.EV_SEEN]: false,

        [common.EV_ACT]:false,
        [common.EV_ACT_TARGET]: [],
        [common.EV_ACT_DATE]: "",
        [common.EV_ACT_DESC]: "",
        [common.EV_ACT_STATUS]:"",
        [common.EV_ACT_DATE_UPDATE]:"",

      }
      console.log("Status Changed")
      console.log(notiData)
      batch.set(notiChangeStatusRef, notiData);

      // Add Notification to request
      let dateX = format(new Date(), "yyyyMMdd")

      // Add the first noti to the request
      if (reqData[common.REQ_ADMIN_EV_ID] == null || reqData[common.REQ_ADMIN_EV_ID] == "" || reqData[common.REQ_ADMIN_EV_ID].length <= 0){
        reqData[common.REQ_ADMIN_EV_ID] = [ notiChangeStatusRef.id];
        reqData[common.REQ_ADMIN_EV_ERROR_CODE] = [ errorCode ];
        reqData[common.REQ_ADMIN_EV_DATEX] = [dateX] ;
        reqData[common.REQ_ADMIN_EV_ACT] = [ false ];
        reqData[common.REQ_ADMIN_EV_ACT_STATUS] = [common.EV_ACT_STATUS_NEW];
        setReqData({
          ...reqData
        })
        newReqData[common.REQ_ADMIN_EV_ID] = [ notiChangeStatusRef.id];
        newReqData[common.REQ_ADMIN_EV_ERROR_CODE] = [ errorCode ];
        newReqData[common.REQ_ADMIN_EV_DATEX] = [dateX];
        newReqData[common.REQ_ADMIN_EV_ACT] = [ false ];
        newReqData[common.REQ_ADMIN_EV_ACT_STATUS] = [common.EV_ACT_STATUS_NEW];

      }
      else if (reqData[common.REQ_ADMIN_EV_ID].length > 0) {
        reqData[common.REQ_ADMIN_EV_ID].push( notiChangeStatusRef.id ) ;
        reqData[common.REQ_ADMIN_EV_ERROR_CODE].push( errorCode );
        reqData[common.REQ_ADMIN_EV_DATEX].push(dateX);
        reqData[common.REQ_ADMIN_EV_ACT].push( false );
        reqData[common.REQ_ADMIN_EV_ACT_STATUS].push(common.EV_ACT_STATUS_NEW);

        setReqData({
          ...reqData
        })
        newReqData[common.REQ_ADMIN_EV_ID] = reqData[common.REQ_ADMIN_EV_ID];
        newReqData[common.REQ_ADMIN_EV_ERROR_CODE] = reqData[common.REQ_ADMIN_EV_ERROR_CODE];
        newReqData[common.REQ_ADMIN_EV_DATEX] =  reqData[common.REQ_ADMIN_EV_DATEX];
        newReqData[common.REQ_ADMIN_EV_ACT] = reqData[common.REQ_ADMIN_EV_ACT];
        newReqData[common.REQ_ADMIN_EV_ACT_STATUS] = reqData[common.REQ_ADMIN_EV_ACT_STATUS];
      }
      else {
        reqData[common.REQ_ADMIN_EV_ID] = [ notiChangeStatusRef.id];
        reqData[common.REQ_ADMIN_EV_ERROR_CODE] = [ errorCode ];
        reqData[common.REQ_ADMIN_EV_DATEX] = [dateX] ;
        reqData[common.REQ_ADMIN_EV_ACT] = [ false ];
        reqData[common.REQ_ADMIN_EV_ACT_STATUS] = [common.EV_ACT_STATUS_NEW];
        setReqData({
          ...reqData
        })
        newReqData[common.REQ_ADMIN_EV_ID] = [ notiChangeStatusRef.id];
        newReqData[common.REQ_ADMIN_EV_ERROR_CODE] = [ errorCode ];
        newReqData[common.REQ_ADMIN_EV_DATEX] = [dateX];
        newReqData[common.REQ_ADMIN_EV_ACT] = [ false ];
        newReqData[common.REQ_ADMIN_EV_ACT_STATUS] = [common.EV_ACT_STATUS_NEW];
      }

    }

    batch.update(reqRef, newReqData);
    batch.update(jobRef, newJobData, {merge: true});
    batch.update(jobPublicRef, newJobPublicData, {merge: true});

    console.log("Request Data: ")
    console.log(newReqData)
    console.log("Job Data: ")
    console.log(newJobData)
    console.log(newJobPublicData)


    try {
      await batch.commit();
      addToast( Toast({color: "success",  message:"Job Successuly Updated"}) )
      handleJobEditModalClose("Edit Job Success")
      handleJobEditConfirmModalClose()

      // Reload Job
      await loadRequest(reqData[common.REQ_ADMIN_ID]);

    } catch (error) {
      addToast( Toast({color: "danger",  message:"Updating Job Failed. Please contact Alric immediately"}) )
      handleJobEditModalClose("Edit Job Failed")
      handleJobEditConfirmModalClose()
    }

  }

  // Modal: Job Update
  const [modalJobEditVisible, setModalJobEditVisible] = useState(false)
  const [modalJobEditContent, setModalJobEditContent] = useState(false) // Disable save button when saved button is clicked

  const [modalJobEditConfirmVisible, setModalJobEditConfirmVisible] = useState(false)
  const [modalJobEditConfirmContent, setModalJobEditConfirmContent] = useState(false) // Disable save button when saved button is clicked

  const [jobEditJobRefIdVisible, setJobEditJobRefIdVisible] = useState("d-none")
  const [jobEditJobPartnerNamedVisible, setJobEditJobPartnerNameVisible] = useState("d-none")

  const handleJobEditModalOpen = () => {
    // Reload the job
    loadJob(reqData[common.REQ_ADMIN_JOB_ID], reqData[common.REQ_ADMIN_JOB_PUBLIC_ID])

    setModalJobEditVisible(true)

    // Reset validation Job Edit form
    setFormJobEditValidated(false)


  }

  const handleJobEditModalClose = (e) => {
    console.log(e)
    setModalJobEditContent("Update")
    setModalJobEditVisible(false)
  }

  // Modal: JOb Create Confirm
  const handleJobEditConfirmModalClose = () => {
    setModalJobEditConfirmContent("Confirm")
    setModalJobEditConfirmVisible(false)
  }

  // Job Changes
  const handleJobEditChange = (e) => {

    switch (e.target.name) {
      // Input & Textarea
      case common.JOB_REF_NO:
      case common.JOB_DETAIL:
      case common.JOB_FEE:
      case common.JOB_REFID:
      case common.JOB_PARTNER_NAME:
      case common.JOB_NAME:
      case common.JOB_PHONE:
      case common.JOB_EMAIL:
      case common.JOB_PLACE:
      case common.JOB_OWNER:{
        jobEditData[e.target.name] = e.target.value;
        setJobEditData({
          ...jobEditData
        })
        break;
      }
      // Checkbox
      case "jobEdit"+common.JOB_ONLINE:{
        console.log("Checkbox Job ONLINE")
        jobEditData[e.target.name.replace("jobEdit", "")] = e.target.checked;
        setJobEditData({
          ...jobEditData
        })
        break;
      }
      case "jobEdit"+common.JOB_PARTNER:{
        jobEditData[e.target.name.replace("jobEdit", "")] = e.target.checked;
        setJobEditData({
          ...jobEditData
        })
        if (e.target.checked){
          setJobEditJobPartnerNameVisible("")
        }else {
          setJobEditJobPartnerNameVisible("d-none")
        }
        break;
      }
      case "jobEdit"+common.JOB_DAY_OF_WEEK:
      case "jobEdit"+common.JOB_TIME: {
        console.log("Checkbox Other")
        let checkBoxEleArr = Array.from(
          document.getElementsByName(e.target.name)
        );
        let checkedArray = []

        checkBoxEleArr.forEach(ele => {
          if (ele.checked)
            checkedArray.push(ele.getAttribute('value'))
        });

        console.log(checkedArray)
        jobEditData[e.target.name.replace("jobEdit", "")] = checkedArray;
        // reqData[e.target.name + 'CheckedCount'] = checkedArray.length;
        setJobEditData({
          ...jobEditData
        })
        break;
      }
      // Radio
      case "jobEdit"+common.JOB_JOB_STATUS: {
        jobEditData[e.target.name.replace("jobEdit", "")] = e.target.value;
        setJobEditData({
          ...jobEditData
        })
        if (e.target.value === common.REQ_ADMIN_REQ_STATUS_SUCCESS){
          setJobEditJobRefIdVisible("")
        }else {
          setJobEditJobRefIdVisible("d-none")
        }
        break;
      }
      case "jobEdit"+common.JOB_FEE_TYPE:
      case "jobEdit"+common.JOB_COMMISSION_POLICY:
      case "jobEdit"+common.JOB_DURATION:
      case "jobEdit"+common.JOB_LESS_PER_WEEK: {
        jobEditData[e.target.name.replace("jobEdit", "")] = e.target.value;
        setJobEditData({
          ...jobEditData
        })
        break;
      }
      // Dropdown


      default:
    }

  }
  // Changes for Phone Only
  const handleJobEditPhoneChange = (val) => {
    jobEditData[common.JOB_PHONE] = val;
    setJobEditData({
      ...jobEditData
    })
  }

  // ================================  Link Job ================================ //
  const [linkJobData, setLinkJobData] = React.useState({"jobRefNoExist":false, "jobRefNoLinkable":false, [common.JOB_REF_NO]: ""});

  // Modal: Link Job
  const [modalLinkJobConfirmVisible, setModalLinkJobConfirmVisible] = useState(false)
  const [modalLinkJobConfirmContent, setModalLinkJobConfirmContent] = useState(false) // Disable save button when saved button is clicked

  const handleLinkJobModalOpen = () => {
    // Reload the job
    setModalLinkJobConfirmVisible(true)
  }

  const handleLinkJobConfirmModalClose = () => {
    setModalLinkJobConfirmContent("Link Job")
    setModalLinkJobConfirmVisible(false)
  }

  // Validate Link Job Entries
  const validateLinkJobRefNo = async () => {

    const q = query(collection(db, myConst.JOB_JOB), where(common.JOB_REF_NO, "==", linkJobData[common.JOB_REF_NO]));
    const querySnapshot = await getDocs(q);

    // Initialized
    let tempJobData = {}
    tempJobData[common.JOB_REF_NO] = linkJobData[common.JOB_REF_NO];
    tempJobData["jobRefNoExist"] = false;

    // Get the document
    let isLinkable = false;
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());

      // A Request can only be linked to a Job that does not attach to any Request
      if (doc.data()[common.JOB_REQ_ID] == "" ){
        tempJobData = doc.data();
        isLinkable = true;
        tempJobData["jobRefNoLinkable"] = true;
      }

      tempJobData["jobRefNoExist"] = true;

    });

    // if (isLinkable ){
    //   // tempJobData["jobRefNoExist"] = true;
    //   tempJobData["jobRefNoLinkable"] = true;
    // }
    // else {
    //   // tempJobData[common.JOB_REF_NO] = linkJobData[common.JOB_REF_NO];
    //   // tempJobData["jobRefNoExist"] = false;
    //   tempJobData["jobRefNoLinkable"] = false;
    // }
    setLinkJobData(tempJobData)

  }

  const handleLinkJobChange = (e) => {
    switch (e.target.name) {
      // Input & Textarea
      case common.JOB_REF_NO:{
        linkJobData[e.target.name] = e.target.value;
        linkJobData["jobRefNoExist"] = false; // If user change the input, set it to faulse

        setLinkJobData({
          ...linkJobData
        })
        break;
      }
      default:
      }
  }

  const validateLinkJob = (e) => {

    if (!linkJobData["jobRefNoExist"]  || linkJobData[common.JOB_REF_NO] == "" ){
      addToast( Toast({color: "warning",  message:"Please enter valid Job Ref No."}) )
    }
    else if (!linkJobData["jobRefNoLinkable"]  || linkJobData[common.JOB_REF_NO] == ""){
      addToast( Toast({color: "warning",  message:"This Job Ref No. is currently linked to another request. Please try another one."}) )
    }
    else {
      linkJob(e)
    }

  }

  // Linking A job
  // 1. Update the reqId to the newly linked Job and refresh the public Job
  // 2. Update jobRef, jobId, jobPublicId, jobStatus,... to current request
  // Note: If a job is linked (reqId is not empty), action cannot be performed
  const linkJob = async(e) => {

    setModalLinkJobConfirmContent("Updating... Please wait")

    e.target.disabled = true;

    const jobRef = doc(db, myConst.JOB_JOB, linkJobData[common.JOB_ID]);
    const jobPublicRef = doc(db, myConst.JOB_PUBLIC, linkJobData[common.JOB_PUBLIC_ID]);

    const batch = writeBatch(db);

    let newJobData = {
      // [common.JOB_ID]: jobRef.id,
      // [common.JOB_PUBLIC_ID]: jobPublicRef.id,
      [common.JOB_REQ_ID]: reqData[common.REQUEST_ID],
      // [common.JOB_REF_NO]: jobEditData[common.JOB_REF_NO],

      // [common.JOB_NAME]: jobEditData[common.JOB_NAME],
      // [common.JOB_CLIENT_ID]: jobEditData[common.JOB_CLIENT_ID],
      // [common.JOB_PHONE]: jobEditData[common.JOB_PHONE],
      // [common.JOB_EMAIL]: jobEditData[common.JOB_EMAIL],
      // [common.JOB_DURATION]: jobEditData[common.JOB_DURATION],
      // [common.JOB_LESS_PER_WEEK]: jobEditData[common.JOB_LESS_PER_WEEK],
      // [common.JOB_DAY_OF_WEEK]: jobEditData[common.JOB_DAY_OF_WEEK],
      // [common.JOB_TIME]: jobEditData[common.JOB_TIME],
      // [common.JOB_DETAIL]: jobEditData[common.JOB_DETAIL],
      // [common.JOB_ONLINE]: jobEditData[common.JOB_ONLINE],
      // [common.JOB_PLACE]: jobEditData[common.JOB_PLACE],
      // [common.JOB_SUB_ARR]: jobEditData[common.JOB_SUB_ARR],
      // [common.JOB_AREA]: jobEditData[common.JOB_AREA],
      // [common.JOB_STATE]: jobEditData[common.JOB_STATE],

      // [common.JOB_FEE]: jobEditData[common.JOB_FEE],
      // [common.JOB_FEE_TYPE]: jobEditData[common.JOB_FEE_TYPE],
      // [common.JOB_COMMISSION_POLICY]: jobEditData[common.JOB_COMMISSION_POLICY],
      // [common.JOB_PARTNER]: jobEditData[common.JOB_PARTNER],
      // [common.JOB_PARTNER_NAME]: jobEditData[common.JOB_PARTNER_NAME],

      // [common.JOB_JOB_STATUS]: linkJobData[common.JOB_JOB_STATUS],
      // [common.JOB_DATE_CREATE]: jobEditData[common.JOB_DATE_CREATE],
      // [common.JOB_DATE_CLOSE]: jobEditData[common.JOB_DATE_CLOSE],
      [common.JOB_DATE_QUERY]: new Date(),

      [common.JOB_OWNER]: reqData[common.JOB_OWNER],
      // [common.JOB_STATUS]: true,
      // [common.JOB_REFID]: jobEditData[common.JOB_REFID],

      // [common.JOB_APPLY_ID_ARR]: [],
      // [common.JOB_APPLICANT_ARR]: [],

    }


    let newJobPublicData = {
      // [common.JOB_ID]: jobPublicRef.id,
      // [common.JOB_REF_NO]: jobEditData[common.JOB_REF_NO],

      // [common.JOB_DURATION]: jobEditData[common.JOB_DURATION],
      // [common.JOB_LESS_PER_WEEK]: jobEditData[common.JOB_LESS_PER_WEEK],
      // [common.JOB_DAY_OF_WEEK]: jobEditData[common.JOB_DAY_OF_WEEK],
      // [common.JOB_TIME]: jobEditData[common.JOB_TIME],
      // [common.JOB_DETAIL]: jobEditData[common.JOB_DETAIL],
      // [common.JOB_ONLINE]: jobEditData[common.JOB_ONLINE],
      // [common.JOB_PLACE]: jobEditData[common.JOB_PLACE],
      // [common.JOB_SUB_ARR]: jobEditData[common.JOB_SUB_ARR],
      // [common.JOB_AREA]: jobEditData[common.JOB_AREA],
      // [common.JOB_STATE]: jobEditData[common.JOB_STATE],

      // [common.JOB_FEE]: jobEditData[common.JOB_FEE],
      // [common.JOB_FEE_TYPE]: jobEditData[common.JOB_FEE_TYPE],
      // [common.JOB_COMMISSION_POLICY]: jobEditData[common.JOB_COMMISSION_POLICY],
      // [common.JOB_PARTNER]: jobEditData[common.JOB_PARTNER],
      // [common.JOB_PARTNER_NAME]: jobEditData[common.JOB_PARTNER_NAME],

      // [common.JOB_JOB_STATUS]: jobEditData[common.JOB_JOB_STATUS],
      // [common.JOB_DATE_CREATE]: jobEditData[common.JOB_DATE_CREATE],
      // [common.JOB_DATE_CLOSE]: jobEditData[common.JOB_DATE_CLOSE],
      [common.JOB_DATE_QUERY]: new Date(),
      // [common.JOB_STATUS]: true,

      // [common.JOB_PUBLIC_JOB_ID]: jobRef.id,
      // [common.JOB_PUBLIC_APPLICANT_NUM]: 0,
    }

    // Update Request
    const reqRef = doc(db, myConst.REQUEST_ADMIN, reqData[common.REQ_ADMIN_ID]);

    reqData[common.REQ_ADMIN_JOB_ID] = linkJobData[common.JOB_ID],
    reqData[common.REQ_ADMIN_JOB_PUBLIC_ID] = linkJobData[common.JOB_PUBLIC_ID],
    reqData[common.REQ_ADMIN_JOB_REF_NO] = linkJobData[common.JOB_REF_NO],
    reqData[common.REQ_ADMIN_JOB_STATUS] = linkJobData[common.JOB_JOB_STATUS],
    reqData[common.REQ_ADMIN_REQ_STATUS] = linkJobData[common.JOB_JOB_STATUS],
    reqData[common.REQ_ADMIN_REFID] = linkJobData[common.JOB_REFID],

    setReqData({
      ...reqData
    })

    let newReqData = {
      [common.REQ_ADMIN_JOB_ID]: linkJobData[common.JOB_ID],
      [common.REQ_ADMIN_JOB_PUBLIC_ID]: linkJobData[common.JOB_PUBLIC_ID],
      [common.REQ_ADMIN_JOB_REF_NO]: linkJobData[common.JOB_REF_NO],
      [common.REQ_ADMIN_JOB_STATUS]: linkJobData[common.JOB_JOB_STATUS],
      [common.REQ_ADMIN_REQ_STATUS]: linkJobData[common.JOB_JOB_STATUS],
      [common.REQ_ADMIN_REFID]: linkJobData[common.JOB_REFID],
    }
    console.log(newReqData)

    // batch.update(reqRef, newReqData);
    // batch.update(jobRef, newJobData, {merge: true});
    // batch.update(jobPublicRef, newJobPublicData, {merge: true});

    // console.log(newReqData)
    console.log(newJobData)
    console.log(newJobPublicData)


    try {
      // await batch.commit();
      addToast( Toast({color: "success",  message:"Job Successuly Linked"}) )
      handleLinkJobConfirmModalClose()

      // Reload Job
      await loadRequest(reqData[common.REQ_ADMIN_ID]);

    } catch (error) {
      addToast( Toast({color: "danger",  message:"Linking Job Failed. Please contact Alric immediately"}) )
      handleLinkJobConfirmModalClose()
    }
  }

  // ================================  Unlink Job ================================ //

  // Modal: Link Job
  const [modalUnlinkJobConfirmVisible, setModalUnlinkJobConfirmVisible] = useState(false)
  const [modalUnlinkJobConfirmContent, setModalUnlinkJobConfirmContent] = useState(false) // Disable save button when saved button is clicked

  const handleUnlinkJobModalOpen = () => {
    // Reload the job
    setModalUnlinkJobConfirmVisible(true)
  }

  const handleUnlinkJobConfirmModalClose = () => {
    setModalUnlinkJobConfirmContent("Confirm")
    setModalUnlinkJobConfirmVisible(false)
  }

  // Unlink A job
  const unlinkJob = async(e) => {

    setModalUnlinkJobConfirmContent("Unlinking... Please wait")

    e.target.disabled = true;

    const jobRef = doc(db, myConst.JOB_JOB, jobEditData[common.JOB_ID]);
    const jobPublicRef = doc(db, myConst.JOB_PUBLIC, jobEditData[common.JOB_PUBLIC_ID]);

    const batch = writeBatch(db);

    let newJobData = {
      [common.JOB_REQ_ID]: "",
    }

    let newJobPublicData = {}

    // Update Request
    const reqRef = doc(db, myConst.REQUEST_ADMIN, reqData[common.REQ_ADMIN_ID]);

    reqData[common.REQ_ADMIN_JOB_ID] = "",
    reqData[common.REQ_ADMIN_JOB_PUBLIC_ID] = "",
    reqData[common.REQ_ADMIN_JOB_REF_NO] = "",
    reqData[common.REQ_ADMIN_JOB_STATUS] = "",

    setReqData({
      ...reqData
    })

    let newReqData = {
      [common.REQ_ADMIN_JOB_ID]: "",
      [common.REQ_ADMIN_JOB_PUBLIC_ID]: "",
      [common.REQ_ADMIN_JOB_REF_NO]: "",
      [common.REQ_ADMIN_JOB_STATUS]: "",
    }

    console.log(newReqData)

    batch.update(reqRef, newReqData);
    batch.update(jobRef, newJobData, {merge: true});

    // console.log(newReqData)
    console.log(newJobData)
    console.log(newJobPublicData)


    try {
      await batch.commit();
      addToast( Toast({color: "success",  message:"Job Successuly Unlinked"}) )
      handleUnlinkJobConfirmModalClose()

      // Reload Job
      await loadRequest(reqData[common.REQ_ADMIN_ID]);

    } catch (error) {
      addToast( Toast({color: "danger",  message:"Unlinking Job Failed. Please contact Alric immediately"}) )
      handleUnlinkJobConfirmModalClose()
    }
  }
  // ================================  Add Notification ================================ //
  const [notiAddData, setNotiAddData] = React.useState({
    [common.EV_ID]:"",
    [common.EV_OWNER]:reqData[common.REQ_ADMIN_OWNER],
    [common.EV_SENDER]:reqData[common.REQ_ADMIN_OWNER],
    [common.EV_RECEIVER]:reqData[common.REQ_ADMIN_OWNER],

    [common.EV_EVENT]:"",
    [common.EV_DESC]:"",
    [common.EV_STATUS]:"6",
    [common.EV_ERRORCODE]:"",
    [common.EV_DATA]:{},

    [common.EV_DATE_CREATE]:new Date(),
    [common.EV_DATE_UPDATE]:"",
    [common.EV_REFID]:reqData[common.REQ_ADMIN_ID],
    [common.EV_SEEN]: false,

    [common.EV_ACT]:false,
    [common.EV_ACT_TARGET]: [reqData[common.REQ_ADMIN_OWNER]].join(","),
    [common.EV_ACT_DATE]: new Date(),
    [common.EV_ACT_DESC]: "",
    [common.EV_ACT_STATUS]:"",
    [common.EV_ACT_DATE_UPDATE]:"",
  });
  // For Date of Birth Init
  const arrayRange = (start, stop, step) =>
  Array.from(
  { length: (stop - start) / step + 1 },
  (value, index) => start + index * step
  );
  const years = arrayRange(1970, new Date().getFullYear() + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Modal: Link Job
  const [modalAddNotiVisible, setModalAddNotiVisible] = useState(false)
  const [modalAddNotiConfirmContent, setModalAddNotiConfirmContent] = useState(false) // Disable save button when saved button is clicked

  const handleAddNotiModalOpen = () => {

    let evData = {
      [common.EV_ID]:"",
      [common.EV_OWNER]:reqData[common.REQ_ADMIN_OWNER],
      [common.EV_SENDER]:reqData[common.REQ_ADMIN_OWNER],
      [common.EV_RECEIVER]:reqData[common.REQ_ADMIN_OWNER],

      [common.EV_EVENT]:"",
      [common.EV_DESC]:"",
      [common.EV_STATUS]:"6",
      [common.EV_ERRORCODE]:"",
      [common.EV_DATA]:{},

      [common.EV_DATE_CREATE]:new Date(),
      [common.EV_DATE_UPDATE]:"",
      [common.EV_REFID]:reqData[common.REQ_ADMIN_ID],
      [common.EV_SEEN]: false,

      [common.EV_ACT]:false,
      [common.EV_ACT_TARGET]: [reqData[common.REQ_ADMIN_OWNER]].join(","),
      [common.EV_ACT_DATE]: new Date(),
      [common.EV_ACT_DESC]: "",
      [common.EV_ACT_STATUS]:common.EV_ACT_STATUS_NEW,
      [common.EV_ACT_DATE_UPDATE]:"",
    }
    setNotiAddData(evData);

    setModalAddNotiVisible(true)

  }

  const handleAddNotiModalClose = () => {
    setModalAddNotiConfirmContent("Create")
    setModalAddNotiVisible(false)
  }

  const handleAddNotiChange = (e) => {
    console.log(e)
    switch (e.target.name) {
      // Input & Textarea
      case common.EV_ERRORCODE:
      case common.EV_DESC:
      case common.EV_ACT_DESC:
      case common.EV_ERRORCODE:
      case common.EV_ACT_TARGET:
      {
        notiAddData[e.target.name] = e.target.value;
        setNotiAddData({
          ...notiAddData
        })
        break;
      }
      // Checkbox
      case common.EV_ACT:{
        notiAddData[e.target.name] = e.target.checked;
        setNotiAddData({
          ...notiAddData
        })
        if (e.target.checked){

        }
        else {

        }
        break;
      }

      default:
        break;
    }

  }
  const handleDateChange = (e) => {
    notiAddData[common.EV_ACT_DATE]= new Date(e);
    setNotiAddData({
      ...notiAddData
    })
  }

  const validateNotiAdd = (e) => {

    if ( notiAddData[common.EV_ERRORCODE]  == "" ){
      addToast( Toast({color: "warning",  message:"Please select a Notification type "}) )
    }
    else if ( notiAddData[common.EV_DESC]  == "" ){
      addToast( Toast({color: "warning",  message:"Please write some Message."}) )
    }
    else if ( notiAddData[common.EV_ACT] && notiAddData[common.EV_ACT_TARGET] == "" ){
      addToast( Toast({color: "warning",  message:"Please enter a Person. If you do not know what to do, close this Create Notification popup and redo. "}) )
    }
    else if ( notiAddData[common.EV_ACT] && notiAddData[common.EV_ACT_DESC] == "" ){
      addToast( Toast({color: "warning",  message:"Please write some Reminder Message"}) )
    }
    else {
      createNotification(e)
    }

  }

  // Create Notification
  const createNotification = async(e) => {

    setModalAddNotiConfirmContent("Creating... Please wait")

    e.target.disabled = true;

    const notiRef = doc(collection(db, myConst.ADMIN_NOTIFICATION_PATH))

    const batch = writeBatch(db);

    let evData = [
      {
        date: new Date(),
        desc: "Creation",
        owner: notiAddData[common.REQ_ADMIN_OWNER],
      }
    ]
    let notiData = {
      [common.EV_ID]: notiRef.id,
      [common.EV_OWNER]:notiAddData[common.REQ_ADMIN_OWNER],
      [common.EV_SENDER]:notiAddData[common.REQ_ADMIN_OWNER],
      [common.EV_RECEIVER]:notiAddData[common.REQ_ADMIN_OWNER],

      [common.EV_EVENT]:"",
      [common.EV_DESC]:notiAddData[common.EV_DESC],
      [common.EV_STATUS]:"6",
      [common.EV_ERRORCODE]:notiAddData[common.EV_ERRORCODE],
      [common.EV_DATA]:evData,

      [common.EV_DATE_CREATE]:new Date(),
      [common.EV_DATE_UPDATE]:new Date(),
      [common.EV_REFID]:notiAddData[common.EV_REFID], // linked Request
      [common.EV_SEEN]: false,

      [common.EV_ACT]:notiAddData[common.EV_ACT],
      [common.EV_ACT_TARGET]: notiAddData[common.EV_ACT_TARGET].split(','),
      [common.EV_ACT_DATE]: notiAddData[common.EV_ACT_DATE],
      [common.EV_ACT_DESC]: notiAddData[common.EV_ACT_DESC],
      [common.EV_ACT_STATUS]:common.EV_ACT_STATUS_NEW,
      [common.EV_ACT_DATE_UPDATE]:"",
    }

    // Update Request
    const reqRef = doc(db, myConst.REQUEST_ADMIN, reqData[common.REQ_ADMIN_ID]);

    // let dateX = moment().format("YYYYMMDD")
    // console.log(notiAddData[common.EV_ACT_DATE])
    let dateX = format(new Date(notiAddData[common.EV_ACT_DATE]), "yyyyMMdd")
    let newReqData = {}

    // Add the first noti to the request
    if (reqData[common.REQ_ADMIN_EV_ID] == null || reqData[common.REQ_ADMIN_EV_ID] == "" || reqData[common.REQ_ADMIN_EV_ID].length <= 0){
      reqData[common.REQ_ADMIN_EV_ID] = [ notiRef.id];
      reqData[common.REQ_ADMIN_EV_ERROR_CODE] = [ notiAddData[common.EV_ERRORCODE] ];
      reqData[common.REQ_ADMIN_EV_DATEX] = [dateX] ;
      reqData[common.REQ_ADMIN_EV_ACT] = [ notiAddData[common.EV_ACT] ];
      reqData[common.REQ_ADMIN_EV_ACT_STATUS] = [common.EV_ACT_STATUS_NEW];
      setReqData({
        ...reqData
      })
      console.log("reqData[REQ_ADMIN_EV_ID] is empty")
      newReqData = {
        [common.REQ_ADMIN_EV_ID]:  [ notiRef.id],
        [common.REQ_ADMIN_EV_ERROR_CODE]: [ notiAddData[common.EV_ERRORCODE] ],
        [common.REQ_ADMIN_EV_DATEX]: [dateX],
        [common.REQ_ADMIN_EV_ACT]: [ notiAddData[common.EV_ACT] ],
        [common.REQ_ADMIN_EV_ACT_STATUS]: [common.EV_ACT_STATUS_NEW],
      }
    }
    else if (reqData[common.REQ_ADMIN_EV_ID].length > 0) {
      reqData[common.REQ_ADMIN_EV_ID].push( notiRef.id ) ;
      reqData[common.REQ_ADMIN_EV_ERROR_CODE].push( notiAddData[common.EV_ERRORCODE] );
      reqData[common.REQ_ADMIN_EV_DATEX].push(dateX);
      reqData[common.REQ_ADMIN_EV_ACT].push(notiAddData[common.EV_ACT] );
      reqData[common.REQ_ADMIN_EV_ACT_STATUS].push(common.EV_ACT_STATUS_NEW);

      setReqData({
        ...reqData
      })
      newReqData = {
        [common.REQ_ADMIN_EV_ID]:  reqData[common.REQ_ADMIN_EV_ID],
        [common.REQ_ADMIN_EV_ERROR_CODE]: reqData[common.REQ_ADMIN_EV_ERROR_CODE],
        [common.REQ_ADMIN_EV_DATEX]: reqData[common.REQ_ADMIN_EV_DATEX],
        [common.REQ_ADMIN_EV_ACT]: reqData[common.REQ_ADMIN_EV_ACT],
        [common.REQ_ADMIN_EV_ACT_STATUS]: reqData[common.REQ_ADMIN_EV_ACT_STATUS],
      }
    }
    else {
      console.log("reqData[REQ_ADMIN_EV_ID] null ")
      reqData[common.REQ_ADMIN_EV_ID] = [ notiRef.id];
      reqData[common.REQ_ADMIN_EV_ERROR_CODE] = [ notiAddData[common.EV_ERRORCODE] ];
      reqData[common.REQ_ADMIN_EV_DATEX] = [dateX] ;
      reqData[common.REQ_ADMIN_EV_ACT] = [ notiAddData[common.EV_ACT] ];
      reqData[common.REQ_ADMIN_EV_ACT_STATUS] = [common.EV_ACT_STATUS_NEW];
      setReqData({
        ...reqData
      })
      newReqData = {
        [common.REQ_ADMIN_EV_ID]:  [ notiRef.id],
        [common.REQ_ADMIN_EV_ERROR_CODE]: [ notiAddData[common.EV_ERRORCODE] ],
        [common.REQ_ADMIN_EV_DATEX]: [dateX],
        [common.REQ_ADMIN_EV_ACT]: [ notiAddData[common.EV_ACT] ],
        [common.REQ_ADMIN_EV_ACT_STATUS]: [common.EV_ACT_STATUS_NEW],
      }
    }

    console.log(newReqData)
    console.log(notiData)

    batch.update(reqRef, newReqData);
    batch.set(notiRef, notiData);


    try {
      await batch.commit();
      addToast( Toast({color: "success",  message:"Created New Notification"}) )
      handleAddNotiModalClose()

      // Reload Job
      await loadRequest(reqData[common.REQ_ADMIN_ID]);

    } catch (error) {
      addToast( Toast({color: "danger",  message:"Create Notification Failed. Please contact Alric immediately"}) )
      handleAddNotiModalClose()
    }
  }

  // ================================  Edit Notification ================================ //
  const [notiEditData, setNotiEditData] = React.useState({
    [common.EV_ID]:"",
    [common.EV_OWNER]:reqData[common.REQ_ADMIN_OWNER],
    [common.EV_SENDER]:reqData[common.REQ_ADMIN_OWNER],
    [common.EV_RECEIVER]:reqData[common.REQ_ADMIN_OWNER],

    [common.EV_EVENT]:"",
    [common.EV_DESC]:"",
    [common.EV_STATUS]:"6",
    [common.EV_ERRORCODE]:"",
    [common.EV_DATA]:[],

    [common.EV_DATE_CREATE]:new Date(),
    [common.EV_DATE_UPDATE]:"",
    [common.EV_REFID]:reqData[common.REQ_ADMIN_ID],
    [common.EV_SEEN]: false,

    [common.EV_ACT]:false,
    [common.EV_ACT_TARGET]: [reqData[common.REQ_ADMIN_OWNER]].join(","),
    [common.EV_ACT_DATE]: new Date(),
    [common.EV_ACT_DESC]: "",
    [common.EV_ACT_STATUS]:common.EV_ACT_STATUS_NEW,
    [common.EV_ACT_DATE_UPDATE]:"",
  });

  // Original copy of notification: Used to indentify the changes made.
  const [notiEditOriData, setNotiEditOriData] = React.useState({
    [common.EV_ID]:"",
    [common.EV_OWNER]:reqData[common.REQ_ADMIN_OWNER],
    [common.EV_SENDER]:reqData[common.REQ_ADMIN_OWNER],
    [common.EV_RECEIVER]:reqData[common.REQ_ADMIN_OWNER],

    [common.EV_EVENT]:"",
    [common.EV_DESC]:"",
    [common.EV_STATUS]:"6",
    [common.EV_ERRORCODE]:"",
    [common.EV_DATA]:[],

    [common.EV_DATE_CREATE]:new Date(),
    [common.EV_DATE_UPDATE]:"",
    [common.EV_REFID]:reqData[common.REQ_ADMIN_ID],
    [common.EV_SEEN]: false,

    [common.EV_ACT]:false,
    [common.EV_ACT_TARGET]: [reqData[common.REQ_ADMIN_OWNER]].join(","),
    [common.EV_ACT_DATE]: new Date(),
    [common.EV_ACT_DESC]: "",
    [common.EV_ACT_STATUS]:common.EV_ACT_STATUS_NEW,
    [common.EV_ACT_DATE_UPDATE]:"",
  });

  // Modal: Link Job
  const [modalEditNotiVisible, setModalEditNotiVisible] = useState(false)
  const [modalEditNotiConfirmContent, setModalEditNotiConfirmContent] = useState(false) // Disable save button when saved button is clicked

  const handleEditNotiModalOpen = (notiId) => {
    console.log("notiId: " + notiId)
    setModalEditNotiVisible(true)

    loadNoti(notiId);

  }

  const handleEditNotiModalClose = () => {
    setModalEditNotiConfirmContent("Update")
    setModalEditNotiVisible(false)
  }

  // Load single notification
  const loadNoti = async (notiId) => {

    const notiRef = doc(db, myConst.ADMIN_NOTIFICATION_PATH, notiId);

    const docSnap = await getDoc(notiRef);

    if (docSnap.exists()) {
      console.log("Notification")
      console.log(docSnap.data())

      // convert all the date component in EV_DATA
      let evHistory = [];
      docSnap.data()[common.EV_DATA].forEach((data) => {
        evHistory.push({
          "date": new Date( new Date(0).setUTCSeconds(data.date.seconds) ),
          "owner": data.owner,
          "desc": data.desc,
        })
      })


      let evData = {
        [common.EV_ID]: docSnap.data()[common.EV_ID],
        [common.EV_OWNER]: docSnap.data()[common.EV_OWNER],
        [common.EV_SENDER]: docSnap.data()[common.EV_SENDER],
        [common.EV_RECEIVER]: docSnap.data()[common.EV_RECEIVER],

        [common.EV_EVENT]: docSnap.data()[common.EV_EVENT],
        [common.EV_DESC]: docSnap.data()[common.EV_DESC],
        [common.EV_STATUS]: docSnap.data()[common.EV_STATUS],
        [common.EV_ERRORCODE]: docSnap.data()[common.EV_ERRORCODE],
        [common.EV_DATA]: evHistory,

        [common.EV_DATE_CREATE]: docSnap.data()[common.EV_DATE_CREATE] == "" ? new Date() :  new Date( new Date(0).setUTCSeconds(docSnap.data()[common.EV_DATE_CREATE].seconds) ),// Convert epoch to normal date format
        [common.EV_DATE_UPDATE]: docSnap.data()[common.EV_DATE_UPDATE],
        [common.EV_REFID]: docSnap.data()[common.EV_REFID],
        [common.EV_SEEN]:  docSnap.data()[common.EV_SEEN],
        [common.EV_ACT]: docSnap.data()[common.EV_ACT],
        [common.EV_ACT_TARGET]: docSnap.data()[common.EV_ACT_TARGET].join(","), // Join the target
        [common.EV_ACT_DATE]:  docSnap.data()[common.EV_ACT_DATE] == "" ? new Date() :  new Date( new Date(0).setUTCSeconds(docSnap.data()[common.EV_ACT_DATE].seconds) ) , // Convert epoch to normal date format
        [common.EV_ACT_DESC]:  docSnap.data()[common.EV_ACT_DESC],
        [common.EV_ACT_STATUS]: docSnap.data()[common.EV_ACT_STATUS],
        [common.EV_ACT_DATE_UPDATE]: docSnap.data()[common.EV_ACT_DATE_UPDATE],
      }
      setNotiEditData(evData);

      // Save an original copy
      setNotiEditOriData(evData);

    }
    else {
      addToast( Toast({color: "danger",  message:"Notification no found. Please contact Alric immediately"}) )

      // setNotiEditData({})
      // setNotiEditOriData({});

    }
  }

  const handleEditNotiChange = (e) => {
    console.log(e)
    switch (e.target.name) {
      // Input & Textarea
      case common.EV_ERRORCODE:
      case common.EV_DESC:
      case common.EV_ACT_DESC:
      case common.EV_ERRORCODE:
      case common.EV_ACT_TARGET:
      {
        notiEditData[e.target.name] = e.target.value;
        setNotiEditData({
          ...notiEditData
        })
        break;
      }
      // Checkbox
      case common.EV_ACT:{
        notiEditData[e.target.name] = e.target.checked;
        setNotiEditData({
          ...notiEditData
        })

        if (e.target.checked){

        }
        else {

        }
        break;
      }
      case common.EV_SEEN:
      {
        notiEditData[e.target.name] = e.target.checked;
        setNotiEditData({
          ...notiEditData
        })
        break;
      }

      default:
        break;
    }

  }
  const handleEditNotiDateChange = (e) => {
    notiEditData[common.EV_ACT_DATE]= new Date(e);
    setNotiEditData({
      ...notiEditData
    })
  }

  const validateNotiEdit = (e) => {

    if ( notiEditData[common.EV_ERRORCODE]  == "" ){
      addToast( Toast({color: "warning",  message:"Please select a Notification type "}) )
    }
    else if ( notiEditData[common.EV_DESC]  == "" ){
      addToast( Toast({color: "warning",  message:"Please write some Message."}) )
    }
    else if ( notiEditData[common.EV_ACT] && notiEditData[common.EV_ACT_TARGET] == "" ){
      addToast( Toast({color: "warning",  message:"Please enter a Person. If you do not know what to do, close this Create Notification popup and redo. "}) )
    }
    else if ( notiEditData[common.EV_ACT] && notiEditData[common.EV_ACT_DESC] == "" ){
      addToast( Toast({color: "warning",  message:"Please write some Reminder Message"}) )
    }
    else {
      updateNotification(e)
    }

  }

  const NotiEditChangeSummarize = () => {
    let summary = [];
    if (notiEditOriData[common.EV_ERRORCODE] != notiEditData[common.EV_ERRORCODE]){
      summary.push("Type: " + notiEditOriData[common.EV_ERRORCODE] + " -> " + notiEditData[common.EV_ERRORCODE])
    }
    if (notiEditOriData[common.EV_DESC] != notiEditData[common.EV_DESC]){
      summary.push("Message: " + notiEditOriData[common.EV_DESC] + " -> " + notiEditData[common.EV_DESC])
    }
    if (notiEditOriData[common.EV_ACT] != notiEditData[common.EV_ACT]){
      let reminderMsg = notiEditData[common.EV_ACT] ? summary.push("Reminder added") : summary.push("Reminder removed")
      summary.push(reminderMsg)
    }
    if (notiEditOriData[common.EV_ACT_DATE] != notiEditData[common.EV_ACT_DATE]){

      summary.push("Reminder Date: " + notiEditOriData[common.EV_ACT_DATE]+ " -> " + notiEditData[common.EV_ACT_DATE])

      // if ( moment(notiEditOriData[EV_ACT_DATE].toDate()).format('DD/MM/YYYY') != notiEditActDate.value){
      //   summary.push("Reminder Date: " + moment(notiEditOriData[EV_ACT_DATE].toDate()).format('DD/MM/YYYY') + " -> " + notiEditActDate.value)
      // }
    }
    if (notiEditOriData[common.EV_ACT_TARGET] != notiEditData[common.EV_ACT_TARGET]){
      summary.push("Reminder Person: " + notiEditOriData[common.EV_ACT_TARGET] + " -> " + notiEditData[common.EV_ACT_TARGET])
    }
    if (notiEditOriData[common.EV_ACT_DESC] != notiEditData[common.EV_ACT_DESC]){
      summary.push("Reminder Message: " + notiEditOriData[common.EV_ACT_DESC] + " -> " + notiEditData[common.EV_ACT_DESC])
    }
    if (notiEditOriData[common.EV_ACT_STATUS] != notiEditOriData[common.EV_ACT_STATUS]){
      summary.push("Reminder Status: " + notiEditOriData[common.EV_ACT_STATUS] + " -> " + notiEditOriData[common.EV_ACT_STATUS])
    }
    if (notiEditOriData[common.EV_SEEN] != notiEditOriData[common.EV_SEEN]){
      summary.push("Seen?: " + notiEditOriData[common.EV_SEEN] + " -> " + notiEditOriData[common.EV_SEEN])
    }
    // UNLIKELY to happen
    if (notiEditOriData[common.EV_REFID] != notiEditData[common.EV_REFID] ){
      summary.push("Reference: " + notiEditOriData[common.EV_REFID] + " -> " + notiEditData[common.EV_REFID] )
    }

    if (summary.length == 0){
      return "";
    }else {
      return summary.join(", ")
    }
  }
  const NotiEditReminderChange = () => {
    let reminderChanged = false;
    if (notiEditOriData[common.EV_ACT] != notiEditData[common.EV_ACT] ||  notiEditOriData[common.EV_ACT_DATE] != notiEditData[common.EV_ACT_DATE] ||
      notiEditOriData[common.EV_ACT_TARGET] != notiEditData[common.EV_ACT_TARGET] || notiEditOriData[common.EV_ACT_DESC] != notiEditData[common.EV_ACT_DESC] ||
      notiEditOriData[common.EV_ACT_STATUS] != notiEditOriData[common.EV_ACT_STATUS] ){
        reminderChanged = true
    }
    return reminderChanged;
  }

  // Update Notification
  const updateNotification = async(e) => {

    setModalEditNotiConfirmContent("Updating... Please wait")

    e.target.disabled = true;

    // const notiRef = doc(collection(db, myConst.ADMIN_NOTIFICATION_PATH))
    const notiRef = doc(db, myConst.ADMIN_NOTIFICATION_PATH, notiEditData[common.EV_ID]);

    const batch = writeBatch(db);

    let evChanges = NotiEditChangeSummarize();

    let evData = {
      date: new Date(),
      desc: evChanges,
      owner: reqData[common.REQ_ADMIN_OWNER],
    }
    console.log(evData)

    if (Array.isArray(notiEditData[common.EV_DATA])){
      notiEditData[common.EV_DATA].push(evData)
    }

    // Check if Reminder changes
    let reminderChanged = NotiEditReminderChange();

    let notiData = {
      // [common.EV_ID]: notiRef.id,
      // [common.EV_OWNER]:notiEditData[common.REQ_ADMIN_OWNER],
      // [common.EV_SENDER]:notiEditData[common.REQ_ADMIN_OWNER],
      // [common.EV_RECEIVER]:notiEditData[common.REQ_ADMIN_OWNER],

      // [common.EV_EVENT]:"",
      [common.EV_DESC]:notiEditData[common.EV_DESC],
      // [common.EV_STATUS]:"6",
      [common.EV_ERRORCODE]:notiEditData[common.EV_ERRORCODE],
      [common.EV_DATA]: notiEditData[common.EV_DATA],

      // [common.EV_DATE_CREATE]:new Date(),
      [common.EV_DATE_UPDATE]:new Date(),
      // [common.EV_REFID]:notiEditData[common.EV_REFID], // linked Request
      [common.EV_SEEN]: notiEditData[common.EV_SEEN],

      [common.EV_ACT]: notiEditData[common.EV_ACT],
      [common.EV_ACT_TARGET]: notiEditData[common.EV_ACT_TARGET].split(','),
      [common.EV_ACT_DATE]: notiEditData[common.EV_ACT_DATE],
      [common.EV_ACT_DESC]: notiEditData[common.EV_ACT_DESC],
      [common.EV_ACT_STATUS]: notiEditData[common.EV_SEEN] ? common.EV_ACT_STATUS_DONE :  common.EV_ACT_STATUS_NEW,
      [common.EV_ACT_DATE_UPDATE]: reminderChanged  ? new Date() : notiEditData[common.EV_ACT_DATE_UPDATE], // Update only when reminder changes only
    }

    // Update Request
    const reqRef = doc(db, myConst.REQUEST_ADMIN, reqData[common.REQ_ADMIN_ID]);

    // let dateX = moment().format("YYYYMMDD")
    // console.log(notiEditData[common.EV_ACT_DATE])
    // console.log(new Date(notiEditData[common.EV_ACT_DATE]))
    let dateX = format(new Date(notiEditData[common.EV_ACT_DATE]), "yyyyMMdd")
    let newReqData = {}

    // From Request, get the related event
    if (Array.isArray(reqData[common.REQ_ADMIN_EV_ID]) ){
      reqData[common.REQ_ADMIN_EV_ID].forEach((notiId, index) => {
        if (notiId === notiEditData[common.EV_ID] ){
          reqData[common.REQ_ADMIN_EV_ERROR_CODE][index] = notiEditData[common.EV_ERRORCODE],
          reqData[common.REQ_ADMIN_EV_DATEX][index] = dateX,
          reqData[common.REQ_ADMIN_EV_ACT][index] = notiEditData[common.EV_ACT],
          reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] = notiEditData[common.EV_SEEN] ? common.EV_ACT_STATUS_DONE :  common.EV_ACT_STATUS_NEW,

          setReqData({
            ...reqData
          })

          newReqData = {
            // [REQ_ADMIN_EV_ID]: doc[REQ_ADMIN_EV_ID],
            [common.REQ_ADMIN_EV_ERROR_CODE]: reqData[common.REQ_ADMIN_EV_ERROR_CODE],
            [common.REQ_ADMIN_EV_DATEX]: reqData[common.REQ_ADMIN_EV_DATEX],
            [common.REQ_ADMIN_EV_ACT]: reqData[common.REQ_ADMIN_EV_ACT],
            [common.REQ_ADMIN_EV_ACT_STATUS]: reqData[common.REQ_ADMIN_EV_ACT_STATUS],
          }

        }
      })
    }

    console.log(newReqData)

    batch.update(reqRef, newReqData);
    batch.update(notiRef, notiData);

    console.log(notiData)


    try {
      await batch.commit();
      addToast( Toast({color: "success",  message:"Notification Updated"}) )
      handleEditNotiModalClose()

      // Reload Job
      await loadRequest(reqData[common.REQ_ADMIN_ID]);

    } catch (error) {
      addToast( Toast({color: "danger",  message:"Update Notification Failed. Please contact Alric immediately"}) )
      handleEditNotiModalClose()
    }
  }


  //
  if (initializing) {
    return null
  }

  console.log("=====================================")
  console.log(notiEditData)
  console.log(reqData)
  // console.log(jobEditData)
  console.log("=====================================")

  if (reqId !== null){
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
            <CButton color="primary"onClick={(e) => updateRequest(e)} >{modalUpdateConfirmContent || "Update"}</CButton>
          </CModalFooter>
        </CModal>

        {/* Create Job */}
        <CModal visible={modalJobAddVisible}
          onClose={(e) => handleJobAddModalClose("Create Job Modal")}
          alignment="center"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          backdrop ="static"
          centered
          fullscreen>
          <CModalHeader onClose={() => handleJobAddModalClose("Create Job Header")}>
            <CModalTitle>Create A New Job For This Request</CModalTitle>
          </CModalHeader>
          <CModalBody>

            <Form className='form-req text-start' name="form-req" noValidate validated={formJobAddValidated} ref={formJobAddRef}>
              <div className='form-req-header pt-4 pb-2'>
                <h5>For Admin</h5>
              </div>
              <div className='form-req-content'>
                <Row>
                  {/* Subject */}
                  <div className="col-md-3">
                    <Form.Group className='' controlId="name" >
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Job Ref No.<strong className='text-danger'>*</strong></Form.Label>
                      <Form.Control
                        type="text"
                        defaultValue={""}
                        name={common.JOB_REF_NO}
                        onChange={handleJobChange}
                        value={jobData[common.JOB_REF_NO]}
                        required

                      />
                    </Form.Group>

                    <button type="button" className="btn btn-primary btn-sm ms-1" onClick={ () => validateJobRefNo() }>Validate</button>
                    <p className="ms-3 d-inline" style={{fontSize: "smaller", fontWeight: "300"}}>Valid? {jobData["jobRefNoValid"] ? <span className="text-success">Yes</span> : <span className="text-danger">No</span>}</p>


                    <Form.Group className="mb-1 mt-1" controlId="subject">
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Job Details & Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Job Details & Description"
                        name={common.JOB_DETAIL}
                        onChange={handleJobChange}
                        value={jobData[common.JOB_DETAIL]}
                      />
                    </Form.Group>


                  </div>

                  <div className="col-md-3">
                    <Form.Group className='' controlId="name" >
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Fee<strong className='text-danger'>*</strong></Form.Label>
                      <Form.Control
                        type="number"
                        defaultValue={ 0 }
                        name={common.JOB_FEE}
                        onChange={handleJobChange}
                        value={jobData[common.JOB_FEE]}
                        required

                      />
                    </Form.Group>

                    <Form.Group controlId={"job"+common.JOB_FEE_TYPE}>

                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Fee Type<strong className='text-danger'>*</strong></Form.Label>
                      <div key={`inline-radio`} className="mb-1">
                        <Form.Check
                          inline
                          label="Hourly"
                          name={ "job"+common.JOB_FEE_TYPE}
                          type="radio"
                          value= { common.FEE_TYPE_HOUR_KEY }
                          id={ "job"+common.FEE_TYPE_HOUR_KEY}
                          checked={jobData[common.JOB_FEE_TYPE] === common.FEE_TYPE_HOUR_KEY}
                          onChange={handleJobChange}
                          />
                        <Form.Check
                          inline
                          label="Monthly"
                          name={ "job"+common.JOB_FEE_TYPE}
                          type="radio"
                          value= { common.FEE_TYPE_MONTH_KEY }
                          id={ "job"+common.FEE_TYPE_MONTH_KEY}
                          checked={jobData[common.JOB_FEE_TYPE] === common.FEE_TYPE_MONTH_KEY}
                          onChange={handleJobChange}
                        />
                        <Form.Check
                          inline
                          label="Package"
                          name={ "job"+common.JOB_FEE_TYPE}
                          type="radio"
                          value= { common.FEE_TYPE_PACKAGE_KEY }
                          id={ "job"+common.FEE_TYPE_PACKAGE_KEY}
                          checked={jobData[common.JOB_FEE_TYPE] === common.FEE_TYPE_PACKAGE_KEY}
                          onChange={handleJobChange}
                        />
                      </div>
                    </Form.Group>

                    <Form.Group controlId={common.JOB_COMMISSION_POLICY}>

                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Commission Policy<strong className='text-danger'>*</strong></Form.Label>
                      <div key={`inline-radio`} className="mb-1">
                      <Form.Check
                          inline
                          label="50% of the first month's fee"
                          name={ "job"+common.JOB_COMMISSION_POLICY}
                          type="radio"
                          value= { common.JOB_COMMISSION_POLICY_50PC }
                          id={ "job"+common.JOB_COMMISSION_POLICY_50PC}
                          checked={jobData[common.JOB_COMMISSION_POLICY] === common.JOB_COMMISSION_POLICY_50PC}
                          onChange={handleJobChange}
                          />
                        <Form.Check
                          inline
                          label="40% of the first month's fee"
                          name={ "job"+common.JOB_COMMISSION_POLICY}
                          type="radio"
                          value= { common.JOB_COMMISSION_POLICY_40PC }
                          id={ "job"+common.JOB_COMMISSION_POLICY_40PC}
                          checked={jobData[common.JOB_COMMISSION_POLICY] === common.JOB_COMMISSION_POLICY_40PC}
                          onChange={handleJobChange}
                        />
                        <Form.Check
                          inline
                          label="30% of the first month's fee"
                          name={common.JOB_COMMISSION_POLICY}
                          type="radio"
                          value= { "job"+common.JOB_COMMISSION_POLICY_30PC }
                          id={ "job"+common.JOB_COMMISSION_POLICY_30PC}
                          checked={jobData[common.JOB_COMMISSION_POLICY] === common.JOB_COMMISSION_POLICY_30PC}
                          onChange={handleJobChange}
                        />
                        <Form.Check
                          inline
                          label="25% of the first month's fee"
                          name={ "job"+common.JOB_COMMISSION_POLICY}
                          type="radio"
                          value= { common.JOB_COMMISSION_POLICY_25PC }
                          id={ "job"+common.JOB_COMMISSION_POLICY_25PC}
                          checked={jobData[common.JOB_COMMISSION_POLICY] === common.JOB_COMMISSION_POLICY_25PC}
                          onChange={handleJobChange}
                          />
                        <Form.Check
                          inline
                          label="20% of the first month's fee"
                          name={ "job"+common.JOB_COMMISSION_POLICY}
                          type="radio"
                          value= { common.JOB_COMMISSION_POLICY_20PC }
                          id={ "job"+common.JOB_COMMISSION_POLICY_20PC}
                          checked={jobData[common.JOB_COMMISSION_POLICY] === common.JOB_COMMISSION_POLICY_20PC}
                          onChange={handleJobChange}
                        />
                        <Form.Check
                          inline
                          label="10% of the first month's fee"
                          name={ "job"+common.JOB_COMMISSION_POLICY}
                          type="radio"
                          value= { common.JOB_COMMISSION_POLICY_10PC }
                          id={ "job"+common.JOB_COMMISSION_POLICY_10PC}
                          checked={jobData[common.JOB_COMMISSION_POLICY] === common.JOB_COMMISSION_POLICY_10PC}
                          onChange={handleJobChange}
                        />
                        <Form.Check
                          inline
                          label="No Commission"
                          name={ "job"+common.JOB_COMMISSION_POLICY}
                          type="radio"
                          value= { common.JOB_COMMISSION_POLICY_NOCOM }
                          id={ "job"+common.JOB_COMMISSION_POLICY_NOCOM}
                          checked={jobData[common.JOB_COMMISSION_POLICY] === common.JOB_COMMISSION_POLICY_NOCOM }
                          onChange={handleJobChange}
                        />
                      </div>
                    </Form.Group>


                  </div>

                  <div className="col-md-5">
                    <Form.Group controlId={ "job"+common.JOB_JOB_STATUS}>
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Status<strong className='text-danger'>*</strong></Form.Label>
                      <div key={`inline-radio`} className="mb-1">
                        <Form.Check
                          inline
                          label="New"
                          name={ "job"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ `job`+ common.REQ_ADMIN_REQ_STATUS_NEW }
                          value={common.REQ_ADMIN_REQ_STATUS_NEW}
                          checked={ jobData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_NEW}
                          onChange={handleJobChange}
                          disabled
                        />
                        <Form.Check
                          inline
                          label="No Response"
                          name={ "job"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ `job`+ common.REQ_ADMIN_REQ_STATUS_NO_RESPONSE}
                          value={common.REQ_ADMIN_REQ_STATUS_NO_RESPONSE}
                          checked={ jobData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_NO_RESPONSE}
                          onChange={handleJobChange}
                          disabled
                        />
                        <Form.Check
                          inline
                          label="Expensive"
                          name={ "job"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ `job`+ common.REQ_ADMIN_REQ_STATUS_TOO_EXPENSIVE}
                          value={common.REQ_ADMIN_REQ_STATUS_TOO_EXPENSIVE}
                          checked={ jobData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_TOO_EXPENSIVE}
                          onChange={handleJobChange}
                          disabled
                        />
                      <Form.Check
                          inline
                          label="Other Offers"
                          name={ "job"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ `job`+ common.REQ_ADMIN_REQ_STATUS_OTHER_OFFER}
                          value={ common.REQ_ADMIN_REQ_STATUS_OTHER_OFFER}
                          checked={ jobData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_OTHER_OFFER}
                          onChange={handleJobChange}
                          disabled
                        />
                        <Form.Check
                          inline
                          label="In Progress"
                          name={ "job"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ `job`+common.REQ_ADMIN_REQ_STATUS_JOB_IN_PROGRESS}
                          value={common.REQ_ADMIN_REQ_STATUS_JOB_IN_PROGRESS}
                          checked={ jobData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_IN_PROGRESS}
                          onChange={handleJobChange}
                        />
                        <Form.Check
                          inline
                          label="Sent to Client"
                          name={ "job"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ `job`+ common.REQ_ADMIN_REQ_STATUS_JOB_SENT}
                          value={common.REQ_ADMIN_REQ_STATUS_JOB_SENT}
                          checked={ jobData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_SENT}
                          onChange={handleJobChange}
                        />
                        <hr />
                        <Form.Check
                          inline
                          label="Job No Response"
                          name={ "job"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ `job`+ common.REQ_ADMIN_REQ_STATUS_JOB_NO_RESPONSE}
                          value={common.REQ_ADMIN_REQ_STATUS_JOB_NO_RESPONSE}
                          checked={ jobData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_NO_RESPONSE}
                          onChange={handleJobChange}
                        />
                        <Form.Check
                          inline
                          label="Reject All Tutors"
                          name={ "job"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ "job"+common.REQ_ADMIN_REQ_STATUS_JOB_REJECT}
                          value={common.REQ_ADMIN_REQ_STATUS_JOB_REJECT}
                          checked={ jobData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_REJECT}
                          onChange={handleJobChange}
                        />
                        <Form.Check
                          inline
                          label="Stop After Trial"
                          name={ "job"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ `job`+ common.REQ_ADMIN_REQ_STATUS_JOB_STOP_AFTER_TRIAL}
                          value={common.REQ_ADMIN_REQ_STATUS_JOB_STOP_AFTER_TRIAL}
                          checked={ jobData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_STOP_AFTER_TRIAL}
                          onChange={handleJobChange}
                        />
                        <Form.Check
                          inline
                          label="No Tutor"
                          name={ "job"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ `job`+ common.REQ_ADMIN_REQ_STATUS_JOB_NO_TUTOR}
                          value={common.REQ_ADMIN_REQ_STATUS_JOB_NO_TUTOR}
                          checked={ jobData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_NO_TUTOR}
                          onChange={handleJobChange}
                        />
                        <Form.Check
                          inline
                          label="Time Issues"
                          name={ "job"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ `job`+ common.REQ_ADMIN_REQ_STATUS_JOB_TIME}
                          value={common.REQ_ADMIN_REQ_STATUS_JOB_TIME}
                          checked={ jobData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_TIME}
                          onChange={handleJobChange}
                        />
                        <Form.Check
                          inline
                          label="Success"
                          name={ "job"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ `job`+ common.REQ_ADMIN_REQ_STATUS_SUCCESS}
                          value={common.REQ_ADMIN_REQ_STATUS_SUCCESS}
                          checked={ jobData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_SUCCESS}
                          onChange={handleJobChange}
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className={'mb-1 ' + jobAddJobRefIdVisible } controlId={ "job"+common.JOB_REFID} >
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Success Check <strong className='text-danger'>*</strong>
                      <CTooltip
                        content="Success Check is needed to prove a job is Successful."
                        placement="top"
                      >
                        <a className="px-1 mx-2 rounded-1" style={{color: "white", textDecoration: 'none', background: "#08ae8e", fontSize:'small'}} href="javascript:void(0);">?</a>
                      </CTooltip>
                      </Form.Label>
                      <Form.Control
                      type="text"
                      name={common.JOB_REFID}
                      value={ jobData[common.JOB_REFID] }
                      onChange={handleJobChange}
                      />
                    </Form.Group>

                    {/* Partner */}
                    <div className="mt-3">
                      <Form.Check
                          inline
                          label="Is Partner? ( Job from institutions/partners.)"
                          name={ "job"+common.JOB_PARTNER}
                          type="checkbox"
                          value={common.JOB_PARTNER}
                          id={ "job"+common.JOB_PARTNER}
                          checked={ jobData[common.JOB_PARTNER] == null || jobData[common.JOB_PARTNER] == "" ? false : jobData[common.JOB_PARTNER]}
                          onChange={handleJobChange}
                        />

                      <Form.Group className={jobAddJobPartnerNamedVisible } controlId="name" >
                        <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Partner Name</Form.Label>
                        <Form.Control
                          type="text"
                          defaultValue={""}
                          name={common.JOB_PARTNER_NAME}
                          onChange={handleJobChange}
                          value={jobData[common.JOB_PARTNER_NAME]}
                          inline
                        />
                      </Form.Group>

                    </div>


                  </div>

                </Row>
              </div>

              <div className='form-req-header pt-4 pb-2'>
                <h5>Job Details</h5>
              </div>
              <div className='form-req-content'>
                <Row>
                  {/* Detail Top */}
                  <div className="col-md-4">
                    <Form.Group style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}} className="mb-1" controlId="subject">
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Subject  <strong className='text-danger'>*</strong></Form.Label>
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
                          readOnly

                        />
                      </div>
                    </Form.Group>

                    <Form.Check
                        inline
                        label="Online Only"
                        name={ "job"+common.JOB_ONLINE}
                        type="checkbox"
                        value={common.JOB_ONLINE}
                        id={ "job"+common.JOB_ONLINE}
                        checked={ jobData[common.JOB_ONLINE] == null || jobData[common.JOB_ONLINE] == "" ? false : jobData[common.JOB_ONLINE]}
                        onChange={handleJobChange}
                      />


                    <Form.Group style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}} className="mb-1" controlId="area">
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

                    <Form.Group className="mb-1" controlId="place">
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Address</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder='i.e appartment, street, city, ...'
                        name={common.JOB_PLACE}
                        onChange={handleJobChange}
                        value={jobData[common.JOB_PLACE]}
                      />
                      <Form.Text muted>
                        Enter "Online" for online tuition only.
                      </Form.Text>
                    </Form.Group>

                  </div>

                  {/* Detail Middle */}
                  <div className="col-md-4">

                    <Form.Group className='mb-1' controlId={common.JOB_NAME} >
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Name <strong className='text-danger'>*</strong></Form.Label>
                      <Form.Control
                      type="text"
                      defaultValue={ jobData[common.JOB_NAME] }
                      name={common.JOB_NAME}
                      required
                      onChange={handleJobChange}
                      />
                    </Form.Group>


                    <Form.Group className='mb-1' controlId="phone">
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Phone <strong className='text-danger'>*</strong></Form.Label>
                      {/* <Form.Control
                      type="text"
                      defaultValue={ jobData[common.REQ_ADMIN_PHONE] }
                      name="phone"
                      required
                      onChange={handleJobChange}
                      /> */}
                      <PhoneInput
                        defaultCountry="MY"
                        placeholder="Phone"
                        value={  jobData[common.JOB_PHONE] }
                        name={common.JOB_PHONE }
                        initialValueFormat="national"
                        onChange={ handleJobPhoneChange }
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
                      <p className="m-0" style={{fontSize: "smaller", fontWeight: "300"}}>Phone: {jobData[common.JOB_PHONE]}</p>
                      <p className="m-0 d-inline" style={{fontSize: "smaller", fontWeight: "300"}}>Possible? {jobData[common.JOB_PHONE] && isPossiblePhoneNumber(jobData[common.JOB_PHONE]) ? <span className="text-success">Yes</span> : <span className="text-danger">No</span>}</p>
                      <p className="m-0 ms-3 d-inline" style={{fontSize: "smaller", fontWeight: "300"}}>Valid? {jobData[common.JOB_PHONE] && isValidPhoneNumber(jobData[common.JOB_PHONE]) ? <span className="text-success">Yes</span> : <span className="text-danger">No</span>}</p>

                    </Form.Group>

                    <Form.Group className='mb-1' controlId="email">
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Email <strong className='text-danger'>*</strong></Form.Label>
                      <Form.Control
                      type="text"
                      defaultValue={jobData[common.JOB_EMAIL] }
                      name="email"
                      required
                      onChange={handleJobChange}
                      />
                    </Form.Group>

                  </div>

                  {/* Detail Bottom */}
                  <div className="col-md-4">

                    <Form.Group  controlId={ "job"+common.JOB_DAY_OF_WEEK } >
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Days Of The Week <strong className='text-danger'>*</strong></Form.Label>
                      <div key={`default-checkbox`} className="mb-1">
                        <Form.Check
                          inline
                          label="Monday"
                          name={ "job"+common.JOB_DAY_OF_WEEK}
                          type="checkbox"
                          value={common.DAY_OF_WEEK_MON}
                          id={ "job"+common.DAY_OF_WEEK_MON}
                          checked={jobData[common.JOB_DAY_OF_WEEK].includes(common.DAY_OF_WEEK_MON) }
                          onChange={handleJobChange}
                        />
                        <Form.Check
                          inline
                          label="Tuesday"
                          name={"job"+common.JOB_DAY_OF_WEEK}
                          type="checkbox"
                          value={common.DAY_OF_WEEK_TUE}
                          id={ "job"+common.DAY_OF_WEEK_TUE}
                          checked={ jobData[common.JOB_DAY_OF_WEEK].includes(common.DAY_OF_WEEK_TUE) }
                          onChange={handleJobChange}
                        />
                        <Form.Check
                          inline
                          label="Wednesday"
                          name={"job"+common.JOB_DAY_OF_WEEK}
                          type="checkbox"
                          value={common.DAY_OF_WEEK_WED}
                          id={ "job"+common.DAY_OF_WEEK_WED}
                          checked={jobData[common.JOB_DAY_OF_WEEK].includes(common.DAY_OF_WEEK_WED) }
                          onChange={handleJobChange}
                        />
                        <Form.Check
                          inline
                          label="Thursday"
                          name={"job"+common.JOB_DAY_OF_WEEK}
                          type="checkbox"
                          value={common.DAY_OF_WEEK_THU}
                          id={ "job"+common.DAY_OF_WEEK_THU}
                          checked={jobData[common.JOB_DAY_OF_WEEK].includes(common.DAY_OF_WEEK_THU) }
                          onChange={handleJobChange}
                        />
                        <Form.Check
                          inline
                          label="Friday"
                          name={"job"+common.JOB_DAY_OF_WEEK}
                          type="checkbox"
                          value={common.DAY_OF_WEEK_FRI}
                          id={ "job"+common.DAY_OF_WEEK_FRI}
                          checked={jobData[common.JOB_DAY_OF_WEEK].includes(common.DAY_OF_WEEK_FRI) }
                          onChange={handleJobChange}
                        />
                        <Form.Check
                          inline
                          label="Saturday"
                          name={"job"+common.JOB_DAY_OF_WEEK}
                          type="checkbox"
                          value={common.DAY_OF_WEEK_SAT}
                          id={ "job"+common.DAY_OF_WEEK_SAT}
                          checked={jobData[common.JOB_DAY_OF_WEEK].includes(common.DAY_OF_WEEK_SAT) }
                          onChange={handleJobChange}
                        />
                        <Form.Check
                          label="Sunday"
                          name={"job"+common.JOB_DAY_OF_WEEK}
                          type="checkbox"
                          value={common.DAY_OF_WEEK_SUN}
                          id={ "job"+common.DAY_OF_WEEK_SUN}
                          checked={jobData[common.JOB_DAY_OF_WEEK].includes(common.DAY_OF_WEEK_SUN) }
                          onChange={handleJobChange}
                        />

                      </div>
                    </Form.Group>

                    <Form.Group controlId={ "job"+common.JOB_TIME}>
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Available Timings <strong className='text-danger'>*</strong></Form.Label>
                      <div key={`default-checkbox`} className="mb-1">
                        <Form.Check
                          inline
                          label="8am - 12pm"
                          name={ "job"+common.JOB_TIME}
                          type="checkbox"
                          value={ common.TIME_SLOT_8AM }
                          id={ "job"+common.TIME_SLOT_8AM}
                          checked={jobData[common.JOB_TIME].includes( common.TIME_SLOT_8AM ) }
                          onChange={handleJobChange}
                          />
                        <Form.Check
                          inline
                          label="12pm - 3pm"
                          name={ "job"+common.JOB_TIME}
                          type="checkbox"
                          value={ common.TIME_SLOT_12PM }
                          id={ "job"+common.TIME_SLOT_12PM}
                          checked={jobData[common.JOB_TIME].includes(common.TIME_SLOT_12PM ) }
                          onChange={handleJobChange}
                        />
                        <Form.Check
                          inline
                          label="3pm - 6pm"
                          name={ "job"+common.JOB_TIME}
                          type="checkbox"
                          value={ common.TIME_SLOT_3PM }
                          id={ "job"+common.TIME_SLOT_3PM}
                          checked={jobData[common.JOB_TIME].includes(common.TIME_SLOT_3PM ) }
                          onChange={handleJobChange}
                          />
                        <Form.Check
                          inline
                          label="6pm - 9pm"
                          name={ "job"+common.JOB_TIME}
                          type="checkbox"
                          value={ common.TIME_SLOT_6PM }
                          id={ "job"+common.TIME_SLOT_6PM}
                          checked={jobData[common.JOB_TIME].includes(common.TIME_SLOT_6PM ) }
                          onChange={handleJobChange}
                        />
                      </div>
                    </Form.Group>
                    <Form.Group controlId={"job"+common.JOB_DURATION}>
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Duration <strong className='text-danger'>*</strong></Form.Label>
                    <div key={`inline-radio`} className="mb-1">
                      <Form.Check
                        inline
                        label="30 min"
                        name={"job"+common.JOB_DURATION}
                        type="radio"
                        value= { "0.5" }
                        id="jobDuration0.5"
                        checked={jobData[common.JOB_DURATION] === "0.5"}
                        onChange={handleJobChange}
                        />
                      <Form.Check
                        inline
                        label="1 hr"
                        name={"job"+common.JOB_DURATION}
                        type="radio"
                        value= { "1" }
                        id="jobDuration1"
                        checked={jobData[common.JOB_DURATION] === "1"}
                        onChange={handleJobChange}
                      />
                      <Form.Check
                        inline
                        label="1.5 hr"
                        name={"job"+common.JOB_DURATION}
                        type="radio"
                        value= { "1.5" }
                        id="jobDuration1.5"
                        checked={jobData[common.JOB_DURATION] === "1.5"}
                        onChange={handleJobChange}
                        defaultChecked
                        />
                      <Form.Check
                        inline
                        label="2 hr"
                        name={ "job"+common.JOB_DURATION}
                        type="radio"
                        value= { "2" }
                        id="jobDuration2"
                        checked={jobData[common.JOB_DURATION] === "2"}
                        onChange={handleJobChange}
                      />
                      <Form.Check
                        inline
                        label="2.5 hr"
                        name={ "job"+common.JOB_DURATION}
                        type="radio"
                        value= { "2.5" }
                        id="jobDuration2.5"
                        checked={jobData[common.JOB_DURATION] === "2.5"}
                        onChange={handleJobChange}
                      />
                      <Form.Check
                        inline
                        label="3 hr and above"
                        name={ "job"+common.JOB_DURATION}
                        type="radio"
                        value= { "3" }
                        id="jobDuration3"
                        checked={jobData[common.JOB_DURATION] === "3"}
                        onChange={handleJobChange}
                      />
                    </div>
                    </Form.Group>

                    <Form.Group  className='mb-1' controlId={ "job"+common.JOB_LESS_PER_WEEK}>
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Frequency Of Lessons <strong className='text-danger'>*</strong></Form.Label>
                      <div key={`inline-radio`} className="mb-1">
                        <Form.Check
                          inline
                          label="1 Class/Week"
                          name={ "job"+common.JOB_LESS_PER_WEEK}
                          type="radio"
                          value= { "1" }
                          id="jobLessPerWeek1"
                          checked={jobData[common.REQ_ADMIN_LESS_PER_WEEK] === "1"}
                          onChange={handleJobChange}
                          />
                        <Form.Check
                          inline
                          label="2 Class/Week"
                          name={ "job"+common.JOB_LESS_PER_WEEK}
                          type="radio"
                          value= { "2" }
                          id="jobLessPerWeek2"
                          checked={jobData[common.JOB_LESS_PER_WEEK] === "2"}
                          onChange={handleJobChange}
                        />
                        <Form.Check
                          inline
                          label="3 Class/Week"
                          name={ "job"+common.JOB_LESS_PER_WEEK}
                          type="radio"
                          value= { "3" }
                          id="jobLessPerWeek3"
                          checked={jobData[common.JOB_LESS_PER_WEEK] === "3"}
                          onChange={handleJobChange}
                          defaultChecked
                          />
                        <Form.Check
                          inline
                          label="4 Class/Week"
                          name={ "job"+common.JOB_LESS_PER_WEEK}
                          type="radio"
                          value= { "4" }
                          id="jobLessPerWeek4"
                          checked={jobData[common.JOB_LESS_PER_WEEK] === "4"}
                          onChange={handleJobChange}
                        />
                        <Form.Check
                          inline
                          label="5 Class/Week"
                          name={ "job"+common.JOB_LESS_PER_WEEK}
                          type="radio"
                          value= { "5" }
                          id="jobLessPerWeek5"
                          checked={jobData[common.JOB_LESS_PER_WEEK] === "5"}
                          onChange={handleJobChange}
                        />
                      </div>
                    </Form.Group>

                  </div>

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
                      <p id="reqEditId">{jobData[common.JOB_REQ_ID]}</p>

                    </div>

                  </div>
                  <div class="col-md-2">
                    <div class="form-group" >
                      <span class="" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Job Id</span>
                      <p id="reqEditJobId">{jobData[common.JOB_ID] || "-"}</p>

                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="form-group" >
                      <span class="" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Job Public Id</span>
                      <p id="reqEditJobPublicId">{jobData[common.JOB_PUBLIC_ID] || "-"}</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div class="form-group" >
                      {/* <span class="" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Who own this request?</span> */}
                      {/* <input id="reqEditInOwner" type="text" class="form-control" disabled/> */}
                      <Form.Group className='' controlId="name" >
                        <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Who own this request? <strong className='text-danger'>*</strong></Form.Label>
                        <Form.Control
                          type="text"
                          defaultValue={ jobData[common.JOB_OWNER] }
                          name={common.JOB_OWNER}
                          required
                          onChange={handleJobChange}
                        />
                      </Form.Group>

                      <p class="text-danger m-0" style={{fontSize: "x-small"}}>The client will contact this person after they chose the tutor!</p>
                    </div>
                  </div>

                </div>
              </div>
            </Form>
          </CModalBody>
          <CModalFooter>
            <CButton color="" onClick={() => handleJobAddModalClose("Create Job Not Now")}>
              Not Now
            </CButton>
            <CButton color="primary"onClick={() => validateJobAdd() } >{modalJobAddContent || "Create"}</CButton>
          </CModalFooter>
        </CModal>

        {/* Confirm Create Job */}
        <CModal visible={modalJobAddConfirmVisible} onClose={() => handleJobAddConfirmModalClose()} alignment="center">
          <CModalHeader onClose={() => handleJobAddConfirmModalClose()}>
            <CModalTitle>Confirmation</CModalTitle>
          </CModalHeader>
          <CModalBody>Are you sure you want to continue?</CModalBody>
          <CModalFooter>
            <CButton color="" onClick={() => handleJobAddConfirmModalClose()}>
              Not Now
            </CButton>
            <CButton color="primary"onClick={(e) => createJob(e)} >{modalJobAddConfirmContent || "Confirm"}</CButton>
          </CModalFooter>
        </CModal>

        {/* Edit Job */}
        <CModal visible={modalJobEditVisible}
          onClose={(e) => handleJobEditModalClose("Edit Job Modal")}
          alignment="center"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          backdrop ="static"
          centered
          fullscreen>
          <CModalHeader onClose={() => handleJobEditModalClose("Edit Job Header")}>
            <CModalTitle>Edit Job</CModalTitle>
          </CModalHeader>
          <CModalBody>

          {/* noValidate validated={validated} ref={formJobRef} */}
            <Form className='form-req text-start' name="form-req" noValidate validated={formJobEditValidated} ref={formJobEditRef}>
              <div className='form-req-header pt-4 pb-2'>
                <h5>For Admin</h5>
              </div>
              <div className='form-req-content'>
                <Row>
                  {/* Subject */}
                  <div className="col-md-3">
                    <Form.Group className='' controlId="name" >
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Job Ref No.<strong className='text-danger'>*</strong></Form.Label>
                      <Form.Control
                        type="text"
                        defaultValue={""}
                        name={common.JOB_REF_NO}
                        onChange={handleJobEditChange}
                        value={jobEditData[common.JOB_REF_NO]}
                        readOnly

                      />
                    </Form.Group>

                    {/* <button type="button" className="btn btn-primary btn-sm ms-1" onClick={ () => validateJobRefNo() }>Validate</button> */}
                    {/* <p className="ms-3 d-inline" style={{fontSize: "smaller", fontWeight: "300"}}>Valid? {true ? <span className="text-success">Yes</span> : <span className="text-danger">No</span>}</p> */}


                    <Form.Group className="mb-1 mt-1" controlId="subject">
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Job Details & Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Job Details & Description"
                        name={common.JOB_DETAIL}
                        onChange={handleJobEditChange}
                        value={jobEditData[common.JOB_DETAIL]}
                      />
                    </Form.Group>


                  </div>

                  <div className="col-md-3">
                    <Form.Group className='' controlId="name" >
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Fee<strong className='text-danger'>*</strong></Form.Label>
                      <Form.Control
                        type="number"
                        defaultValue={0}
                        name={common.JOB_FEE}
                        onChange={handleJobEditChange}
                        value={jobEditData[common.JOB_FEE]}
                        required

                      />
                    </Form.Group>

                    <Form.Group controlId={"jobEdit"+common.JOB_FEE_TYPE}>

                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Fee Type<strong className='text-danger'>*</strong></Form.Label>
                      <div key={`inline-radio`} className="mb-1">
                        <Form.Check
                          inline
                          label="Hourly"
                          name={ "jobEdit"+common.JOB_FEE_TYPE}
                          type="radio"
                          value= { common.FEE_TYPE_HOUR_KEY }
                          id={ "jobEdit"+common.FEE_TYPE_HOUR_KEY}
                          checked={jobEditData[common.JOB_FEE_TYPE] === common.FEE_TYPE_HOUR_KEY}
                          onChange={handleJobEditChange}
                          />
                        <Form.Check
                          inline
                          label="Monthly"
                          name={ "jobEdit"+common.JOB_FEE_TYPE}
                          type="radio"
                          value= { common.FEE_TYPE_MONTH_KEY }
                          id={ "jobEdit"+common.FEE_TYPE_MONTH_KEY}
                          checked={jobEditData[common.JOB_FEE_TYPE] === common.FEE_TYPE_MONTH_KEY}
                          onChange={handleJobEditChange}
                        />
                        <Form.Check
                          inline
                          label="Package"
                          name={ "jobEdit"+common.JOB_FEE_TYPE}
                          type="radio"
                          value= { common.FEE_TYPE_PACKAGE_KEY }
                          id={ "jobEdit"+common.FEE_TYPE_PACKAGE_KEY}
                          checked={jobEditData[common.JOB_FEE_TYPE] === common.FEE_TYPE_PACKAGE_KEY}
                          onChange={handleJobEditChange}
                        />
                      </div>
                    </Form.Group>

                    <Form.Group controlId={common.JOB_COMMISSION_POLICY}>

                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Commission Policy<strong className='text-danger'>*</strong></Form.Label>
                      <div key={`inline-radio`} className="mb-1">
                      <Form.Check
                          inline
                          label="50% of the first month's fee"
                          name={ "jobEdit"+common.JOB_COMMISSION_POLICY}
                          type="radio"
                          value= { common.JOB_COMMISSION_POLICY_50PC }
                          id={ "jobEdit"+common.JOB_COMMISSION_POLICY_50PC}
                          checked={jobEditData[common.JOB_COMMISSION_POLICY] === common.JOB_COMMISSION_POLICY_50PC}
                          onChange={handleJobEditChange}
                          />
                        <Form.Check
                          inline
                          label="40% of the first month's fee"
                          name={ "jobEdit"+common.JOB_COMMISSION_POLICY}
                          type="radio"
                          value= { common.JOB_COMMISSION_POLICY_40PC }
                          id={ "jobEdit"+common.JOB_COMMISSION_POLICY_40PC}
                          checked={jobEditData[common.JOB_COMMISSION_POLICY] === common.JOB_COMMISSION_POLICY_40PC}
                          onChange={handleJobEditChange}
                        />
                        <Form.Check
                          inline
                          label="30% of the first month's fee"
                          name={ "jobEdit"+common.JOB_COMMISSION_POLICY}
                          type="radio"
                          value= { common.JOB_COMMISSION_POLICY_30PC }
                          id={ "jobEdit"+common.JOB_COMMISSION_POLICY_30PC}
                          checked={jobEditData[common.JOB_COMMISSION_POLICY] === common.JOB_COMMISSION_POLICY_30PC}
                          onChange={handleJobEditChange}
                        />
                        <Form.Check
                          inline
                          label="25% of the first month's fee"
                          name={ "jobEdit"+common.JOB_COMMISSION_POLICY}
                          type="radio"
                          value= { common.JOB_COMMISSION_POLICY_25PC }
                          id={ "jobEdit"+common.JOB_COMMISSION_POLICY_25PC}
                          checked={jobEditData[common.JOB_COMMISSION_POLICY] === common.JOB_COMMISSION_POLICY_25PC}
                          onChange={handleJobEditChange}
                          />
                        <Form.Check
                          inline
                          label="20% of the first month's fee"
                          name={ "jobEdit"+common.JOB_COMMISSION_POLICY}
                          type="radio"
                          value= { common.JOB_COMMISSION_POLICY_20PC }
                          id={ "jobEdit"+common.JOB_COMMISSION_POLICY_20PC}
                          checked={jobEditData[common.JOB_COMMISSION_POLICY] === common.JOB_COMMISSION_POLICY_20PC}
                          onChange={handleJobEditChange}
                        />
                        <Form.Check
                          inline
                          label="10% of the first month's fee"
                          name={ "jobEdit"+common.JOB_COMMISSION_POLICY}
                          type="radio"
                          value= { common.JOB_COMMISSION_POLICY_10PC }
                          id={ "jobEdit"+common.JOB_COMMISSION_POLICY_10PC}
                          checked={jobEditData[common.JOB_COMMISSION_POLICY] === common.JOB_COMMISSION_POLICY_10PC}
                          onChange={handleJobEditChange}
                        />
                        <Form.Check
                          inline
                          label="No Commission"
                          name={ "jobEdit"+common.JOB_COMMISSION_POLICY}
                          type="radio"
                          value= { common.JOB_COMMISSION_POLICY_NOCOM }
                          id={ "jobEdit"+common.JOB_COMMISSION_POLICY_NOCOM}
                          checked={jobEditData[common.JOB_COMMISSION_POLICY] === common.JOB_COMMISSION_POLICY_NOCOM }
                          onChange={handleJobEditChange}
                        />
                      </div>
                    </Form.Group>


                  </div>

                  <div className="col-md-5">
                    <Form.Group controlId={ "jobEdit"+common.JOB_JOB_STATUS}>
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Status<strong className='text-danger'>*</strong></Form.Label>
                      <div key={`inline-radio`} className="mb-1">
                        <Form.Check
                          inline
                          label="New"
                          name={ "jobEdit"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ "jobEdit"+ common.REQ_ADMIN_REQ_STATUS_NEW }
                          value={common.REQ_ADMIN_REQ_STATUS_NEW}
                          checked={ jobEditData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_NEW}
                          onChange={handleJobEditChange}
                          disabled
                        />
                        <Form.Check
                          inline
                          label="No Response"
                          name={ "jobEdit"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ "jobEdit"+ common.REQ_ADMIN_REQ_STATUS_NO_RESPONSE}
                          value={common.REQ_ADMIN_REQ_STATUS_NO_RESPONSE}
                          checked={ jobEditData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_NO_RESPONSE}
                          onChange={handleJobEditChange}
                          disabled
                        />
                        <Form.Check
                          inline
                          label="Expensive"
                          name={ "jobEdit"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ "jobEdit"+ common.REQ_ADMIN_REQ_STATUS_TOO_EXPENSIVE}
                          value={common.REQ_ADMIN_REQ_STATUS_TOO_EXPENSIVE}
                          checked={ jobEditData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_TOO_EXPENSIVE}
                          onChange={handleJobEditChange}
                          disabled
                        />
                      <Form.Check
                          inline
                          label="Other Offers"
                          name={ "jobEdit"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ "jobEdit"+ common.REQ_ADMIN_REQ_STATUS_OTHER_OFFER}
                          value={ common.REQ_ADMIN_REQ_STATUS_OTHER_OFFER}
                          checked={ jobEditData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_OTHER_OFFER}
                          onChange={handleJobEditChange}
                          disabled
                        />
                        <Form.Check
                          inline
                          label="In Progress"
                          name={ "jobEdit"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ "jobEdit"+common.REQ_ADMIN_REQ_STATUS_JOB_IN_PROGRESS}
                          value={common.REQ_ADMIN_REQ_STATUS_JOB_IN_PROGRESS}
                          checked={ jobEditData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_IN_PROGRESS}
                          onChange={handleJobEditChange}
                        />
                        <Form.Check
                          inline
                          label="Sent to Client"
                          name={ "jobEdit"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ "jobEdit"+ common.REQ_ADMIN_REQ_STATUS_JOB_SENT}
                          value={common.REQ_ADMIN_REQ_STATUS_JOB_SENT}
                          checked={ jobEditData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_SENT}
                          onChange={handleJobEditChange}
                        />
                        <hr />
                        <Form.Check
                          inline
                          label="Job No Response"
                          name={ "jobEdit"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ "jobEdit"+ common.REQ_ADMIN_REQ_STATUS_JOB_NO_RESPONSE}
                          value={common.REQ_ADMIN_REQ_STATUS_JOB_NO_RESPONSE}
                          checked={ jobEditData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_NO_RESPONSE}
                          onChange={handleJobEditChange}
                        />
                        <Form.Check
                          inline
                          label="Reject All Tutors"
                          name={ "jobEdit"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ "jobEdit"+common.REQ_ADMIN_REQ_STATUS_JOB_REJECT}
                          value={common.REQ_ADMIN_REQ_STATUS_JOB_REJECT}
                          checked={ jobEditData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_REJECT}
                          onChange={handleJobEditChange}
                        />
                        <Form.Check
                          inline
                          label="Stop After Trial"
                          name={ "jobEdit"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ "jobEdit"+ common.REQ_ADMIN_REQ_STATUS_JOB_STOP_AFTER_TRIAL}
                          value={common.REQ_ADMIN_REQ_STATUS_JOB_STOP_AFTER_TRIAL}
                          checked={ jobEditData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_STOP_AFTER_TRIAL}
                          onChange={handleJobEditChange}
                        />
                        <Form.Check
                          inline
                          label="No Tutor"
                          name={ "jobEdit"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ "jobEdit"+ common.REQ_ADMIN_REQ_STATUS_JOB_NO_TUTOR}
                          value={common.REQ_ADMIN_REQ_STATUS_JOB_NO_TUTOR}
                          checked={ jobEditData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_NO_TUTOR}
                          onChange={handleJobEditChange}
                        />
                        <Form.Check
                          inline
                          label="Time Issues"
                          name={ "jobEdit"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ "jobEdit"+ common.REQ_ADMIN_REQ_STATUS_JOB_TIME}
                          value={common.REQ_ADMIN_REQ_STATUS_JOB_TIME}
                          checked={ jobEditData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_JOB_TIME}
                          onChange={handleJobEditChange}
                        />
                        <Form.Check
                          inline
                          label="Success"
                          name={ "jobEdit"+common.JOB_JOB_STATUS}
                          type="radio"
                          id={ "jobEdit"+ common.REQ_ADMIN_REQ_STATUS_SUCCESS}
                          value={common.REQ_ADMIN_REQ_STATUS_SUCCESS}
                          checked={ jobEditData[common.JOB_JOB_STATUS] === common.REQ_ADMIN_REQ_STATUS_SUCCESS}
                          onChange={handleJobEditChange}
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className={'mb-1 ' + jobEditJobRefIdVisible } controlId={"jobEdit"+common.JOB_REFID} >
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Success Check <strong className='text-danger'>*</strong>
                        <CTooltip
                          content="Success Check is needed to prove a job is Successful."
                          placement="top"
                        >
                          <a className="px-1 mx-2 rounded-1" style={{color: "white", textDecoration: 'none', background: "#08ae8e", fontSize:'small'}} href="javascript:void(0);">?</a>
                        </CTooltip>
                      </Form.Label>
                      <Form.Control
                      type="text"
                      name={ common.JOB_REFID}
                      value={ jobEditData[common.JOB_REFID] }
                      onChange={handleJobEditChange}
                      />
                    </Form.Group>

                    {/* Partner */}
                    <div className="mt-3">
                      <Form.Check
                        inline
                        label="Is Partner? ( Job from institutions/partners.)"
                        name={ "jobEdit"+common.JOB_PARTNER}
                        type="checkbox"
                        value={common.JOB_PARTNER}
                        id={ "jobEdit"+common.JOB_PARTNER}
                        checked={ jobEditData[common.JOB_PARTNER] == null || jobEditData[common.JOB_PARTNER] == "" ? false : jobEditData[common.JOB_PARTNER]}
                        onChange={handleJobEditChange}
                      />

                      <Form.Group className={ jobEditJobPartnerNamedVisible } controlId={"jobEdit" + common.JOB_PARTNER_NAME} >
                        <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Partner Name</Form.Label>
                        <Form.Control
                          type="text"
                          defaultValue={""}
                          name={ common.JOB_PARTNER_NAME}
                          onChange={handleJobEditChange}
                          value={jobEditData[common.JOB_PARTNER_NAME]}
                          inline
                        />
                      </Form.Group>

                    </div>


                  </div>

                </Row>
              </div>

              <div className='form-req-header pt-4 pb-2'>
                <h5>Job Details</h5>
              </div>
              <div className='form-req-content'>
                <Row>
                  {/* Detail Top */}
                  <div className="col-md-4">
                    <Form.Group style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}} className="mb-1" controlId="subject">
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Subject  <strong className='text-danger'>*</strong></Form.Label>
                      <div>
                        <ReactTags
                          placeholder="Press enter to add new subject"
                          tags={jobEditSubTags}
                          suggestions={subjectSuggestions}
                          delimiters={delimiters}
                          handleDelete={handleJobEditSubDelete}
                          handleAddition={handleJobEditSubAddition}
                          handleDrag={handleJobEditSubDrag}
                          handleTagClick={handleJobEditSubTagClick}
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

                    <Form.Check
                        inline
                        label="Online Only"
                        name={ "jobEdit"+common.JOB_ONLINE}
                        type="checkbox"
                        value={common.JOB_ONLINE}
                        id={ "jobEdit"+common.JOB_ONLINE}
                        checked={ jobEditData[common.JOB_ONLINE] == null || jobEditData[common.JOB_ONLINE] == "" ? false : jobEditData[common.JOB_ONLINE]}
                        onChange={handleJobEditChange}
                      />


                    <Form.Group style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}} className="mb-1" controlId="area">
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Area  <strong className='text-danger'>*</strong> [Place][Postcode (1st 2 Digit)][Region]</Form.Label>
                      <div>
                        <ReactTags
                          placeholder="Press enter to add an area"
                          tags={jobEditAreaTags}
                          suggestions={placeSuggestions}
                          labelField="text"
                          delimiters={delimiters}
                          handleDelete={handleJobEditAreaDelete}
                          handleAddition={handleJobEditAreaAddition}
                          handleDrag={handleJobEditAreaDrag}
                          handleTagClick={handleJobEditAreaTagClick}
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

                    <Form.Group className="mb-1" controlId="place">
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Address</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder='i.e appartment, street, city, ...'
                        name={common.JOB_PLACE}
                        onChange={handleJobEditChange}
                        value={jobEditData[common.JOB_PLACE]}
                      />
                      <Form.Text muted>
                        Enter "Online" for online tuition only.
                      </Form.Text>
                    </Form.Group>

                  </div>

                  {/* Detail Middle */}
                  <div className="col-md-4">

                    <Form.Group className='mb-1' controlId={common.JOB_NAME} >
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Name <strong className='text-danger'>*</strong></Form.Label>
                      <Form.Control
                      type="text"
                      defaultValue={ jobEditData[common.JOB_NAME] }
                      name={common.JOB_NAME}
                      required
                      onChange={handleJobEditChange}
                      />
                    </Form.Group>


                    <Form.Group className='mb-1' controlId="phone">
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Phone <strong className='text-danger'>*</strong></Form.Label>
                      {/* <Form.Control
                      type="text"
                      defaultValue={ jobEditData[common.REQ_ADMIN_PHONE] }
                      name="phone"
                      required
                      onChange={handleJobEditChange}
                      /> */}
                      <PhoneInput
                        defaultCountry="MY"
                        placeholder="Phone"
                        value={  jobEditData[common.JOB_PHONE] }
                        name={common.JOB_PHONE }
                        initialValueFormat="national"
                        onChange={ handleJobEditPhoneChange }
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
                      <p className="m-0" style={{fontSize: "smaller", fontWeight: "300"}}>Phone: {jobEditData[common.JOB_PHONE]}</p>
                      <p className="m-0 d-inline" style={{fontSize: "smaller", fontWeight: "300"}}>Possible? {jobEditData[common.JOB_PHONE] && isPossiblePhoneNumber(jobEditData[common.JOB_PHONE]) ? <span className="text-success">Yes</span> : <span className="text-danger">No</span>}</p>
                      <p className="m-0 ms-3 d-inline" style={{fontSize: "smaller", fontWeight: "300"}}>Valid? {jobEditData[common.JOB_PHONE] && isValidPhoneNumber(jobEditData[common.JOB_PHONE]) ? <span className="text-success">Yes</span> : <span className="text-danger">No</span>}</p>

                    </Form.Group>

                    <Form.Group className='mb-1' controlId="email">
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Email <strong className='text-danger'>*</strong></Form.Label>
                      <Form.Control
                      type="text"
                      defaultValue={jobEditData[common.JOB_EMAIL] }
                      name="email"
                      required
                      onChange={handleJobEditChange}
                      />
                    </Form.Group>

                  </div>

                  {/* Detail Bottom */}
                  <div className="col-md-4">

                    <Form.Group  controlId={ "jobEdit"+common.JOB_DAY_OF_WEEK } >
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Days Of The Week <strong className='text-danger'>*</strong></Form.Label>
                      <div key={`default-checkbox`} className="mb-1">
                        <Form.Check
                          inline
                          label="Monday"
                          name={ "jobEdit"+common.JOB_DAY_OF_WEEK}
                          type="checkbox"
                          value={common.DAY_OF_WEEK_MON}
                          id={ "jobEdit"+common.DAY_OF_WEEK_MON}
                          checked={jobEditData[common.JOB_DAY_OF_WEEK].includes(common.DAY_OF_WEEK_MON) }
                          onChange={handleJobEditChange}
                        />
                        <Form.Check
                          inline
                          label="Tuesday"
                          name={"jobEdit"+common.JOB_DAY_OF_WEEK}
                          type="checkbox"
                          value={common.DAY_OF_WEEK_TUE}
                          id={ "jobEdit"+common.DAY_OF_WEEK_TUE}
                          checked={ jobEditData[common.JOB_DAY_OF_WEEK].includes(common.DAY_OF_WEEK_TUE) }
                          onChange={handleJobEditChange}
                        />
                        <Form.Check
                          inline
                          label="Wednesday"
                          name={"jobEdit"+common.JOB_DAY_OF_WEEK}
                          type="checkbox"
                          value={common.DAY_OF_WEEK_WED}
                          id={ "jobEdit"+common.DAY_OF_WEEK_WED}
                          checked={jobEditData[common.JOB_DAY_OF_WEEK].includes(common.DAY_OF_WEEK_WED) }
                          onChange={handleJobEditChange}
                        />
                        <Form.Check
                          inline
                          label="Thursday"
                          name={"jobEdit"+common.JOB_DAY_OF_WEEK}
                          type="checkbox"
                          value={common.DAY_OF_WEEK_THU}
                          id={ "jobEdit"+common.DAY_OF_WEEK_THU}
                          checked={jobEditData[common.JOB_DAY_OF_WEEK].includes(common.DAY_OF_WEEK_THU) }
                          onChange={handleJobEditChange}
                        />
                        <Form.Check
                          inline
                          label="Friday"
                          name={"jobEdit"+common.JOB_DAY_OF_WEEK}
                          type="checkbox"
                          value={common.DAY_OF_WEEK_FRI}
                          id={ "jobEdit"+common.DAY_OF_WEEK_FRI}
                          checked={jobEditData[common.JOB_DAY_OF_WEEK].includes(common.DAY_OF_WEEK_FRI) }
                          onChange={handleJobEditChange}
                        />
                        <Form.Check
                          inline
                          label="Saturday"
                          name={"jobEdit"+common.JOB_DAY_OF_WEEK}
                          type="checkbox"
                          value={common.DAY_OF_WEEK_SAT}
                          id={ "jobEdit"+common.DAY_OF_WEEK_SAT}
                          checked={jobEditData[common.JOB_DAY_OF_WEEK].includes(common.DAY_OF_WEEK_SAT) }
                          onChange={handleJobEditChange}
                        />
                        <Form.Check
                          label="Sunday"
                          name={"jobEdit"+common.JOB_DAY_OF_WEEK}
                          type="checkbox"
                          value={common.DAY_OF_WEEK_SUN}
                          id={ "jobEdit"+common.DAY_OF_WEEK_SUN}
                          checked={jobEditData[common.JOB_DAY_OF_WEEK].includes(common.DAY_OF_WEEK_SUN) }
                          onChange={handleJobEditChange}
                        />

                      </div>
                    </Form.Group>

                    <Form.Group controlId={ "jobEdit"+common.JOB_TIME}>
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Available Timings <strong className='text-danger'>*</strong></Form.Label>
                      <div key={`default-checkbox`} className="mb-1">
                        <Form.Check
                          inline
                          label="8am - 12pm"
                          name={ "jobEdit"+common.JOB_TIME}
                          type="checkbox"
                          value={ common.TIME_SLOT_8AM }
                          id={ "jobEdit"+common.TIME_SLOT_8AM}
                          checked={jobEditData[common.JOB_TIME].includes( common.TIME_SLOT_8AM ) }
                          onChange={handleJobEditChange}
                          />
                        <Form.Check
                          inline
                          label="12pm - 3pm"
                          name={ "jobEdit"+common.JOB_TIME}
                          type="checkbox"
                          value={ common.TIME_SLOT_12PM }
                          id={ "jobEdit"+common.TIME_SLOT_12PM}
                          checked={jobEditData[common.JOB_TIME].includes(common.TIME_SLOT_12PM ) }
                          onChange={handleJobEditChange}
                        />
                        <Form.Check
                          inline
                          label="3pm - 6pm"
                          name={ "jobEdit"+common.JOB_TIME}
                          type="checkbox"
                          value={ common.TIME_SLOT_3PM }
                          id={ "jobEdit"+common.TIME_SLOT_3PM}
                          checked={jobEditData[common.JOB_TIME].includes(common.TIME_SLOT_3PM ) }
                          onChange={handleJobEditChange}
                          />
                        <Form.Check
                          inline
                          label="6pm - 9pm"
                          name={ "jobEdit"+common.JOB_TIME}
                          type="checkbox"
                          value={ common.TIME_SLOT_6PM }
                          id={ "jobEdit"+common.TIME_SLOT_6PM}
                          checked={jobEditData[common.JOB_TIME].includes(common.TIME_SLOT_6PM ) }
                          onChange={handleJobEditChange}
                        />
                      </div>
                    </Form.Group>
                    <Form.Group controlId={"jobEdit"+common.JOB_DURATION}>
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Duration <strong className='text-danger'>*</strong></Form.Label>
                    <div key={`inline-radio`} className="mb-1">
                      <Form.Check
                        inline
                        label="30 min"
                        name={"jobEdit"+common.JOB_DURATION}
                        type="radio"
                        value= { "0.5" }
                        id="jobDuration0.5"
                        checked={jobEditData[common.JOB_DURATION] === "0.5"}
                        onChange={handleJobEditChange}
                        />
                      <Form.Check
                        inline
                        label="1 hr"
                        name={"jobEdit"+common.JOB_DURATION}
                        type="radio"
                        value= { "1" }
                        id="jobDuration1"
                        checked={jobEditData[common.JOB_DURATION] === "1"}
                        onChange={handleJobEditChange}
                      />
                      <Form.Check
                        inline
                        label="1.5 hr"
                        name={"jobEdit"+common.JOB_DURATION}
                        type="radio"
                        value= { "1.5" }
                        id="jobDuration1.5"
                        checked={jobEditData[common.JOB_DURATION] === "1.5"}
                        onChange={handleJobEditChange}
                        defaultChecked
                        />
                      <Form.Check
                        inline
                        label="2 hr"
                        name={ "jobEdit"+common.JOB_DURATION}
                        type="radio"
                        value= { "2" }
                        id="jobDuration2"
                        checked={jobEditData[common.JOB_DURATION] === "2"}
                        onChange={handleJobEditChange}
                      />
                      <Form.Check
                        inline
                        label="2.5 hr"
                        name={ "jobEdit"+common.JOB_DURATION}
                        type="radio"
                        value= { "2.5" }
                        id="jobDuration2.5"
                        checked={jobEditData[common.JOB_DURATION] === "2.5"}
                        onChange={handleJobEditChange}
                      />
                      <Form.Check
                        inline
                        label="3 hr and above"
                        name={ "jobEdit"+common.JOB_DURATION}
                        type="radio"
                        value= { "3" }
                        id="jobDuration3"
                        checked={jobEditData[common.JOB_DURATION] === "3"}
                        onChange={handleJobEditChange}
                      />
                    </div>
                    </Form.Group>

                    <Form.Group  className='mb-1' controlId={ "jobEdit"+common.JOB_LESS_PER_WEEK}>
                      <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Frequency Of Lessons <strong className='text-danger'>*</strong></Form.Label>
                      <div key={`inline-radio`} className="mb-1">
                        <Form.Check
                          inline
                          label="1 Class/Week"
                          name={ "jobEdit"+common.JOB_LESS_PER_WEEK}
                          type="radio"
                          value= { "1" }
                          id="jobLessPerWeek1"
                          checked={jobEditData[common.REQ_ADMIN_LESS_PER_WEEK] === "1"}
                          onChange={handleJobEditChange}
                          />
                        <Form.Check
                          inline
                          label="2 Class/Week"
                          name={ "jobEdit"+common.JOB_LESS_PER_WEEK}
                          type="radio"
                          value= { "2" }
                          id="jobLessPerWeek2"
                          checked={jobEditData[common.JOB_LESS_PER_WEEK] === "2"}
                          onChange={handleJobEditChange}
                        />
                        <Form.Check
                          inline
                          label="3 Class/Week"
                          name={ "jobEdit"+common.JOB_LESS_PER_WEEK}
                          type="radio"
                          value= { "3" }
                          id="jobLessPerWeek3"
                          checked={jobEditData[common.JOB_LESS_PER_WEEK] === "3"}
                          onChange={handleJobEditChange}
                          defaultChecked
                          />
                        <Form.Check
                          inline
                          label="4 Class/Week"
                          name={ "jobEdit"+common.JOB_LESS_PER_WEEK}
                          type="radio"
                          value= { "4" }
                          id="jobLessPerWeek4"
                          checked={jobEditData[common.JOB_LESS_PER_WEEK] === "4"}
                          onChange={handleJobEditChange}
                        />
                        <Form.Check
                          inline
                          label="5 Class/Week"
                          name={ "jobEdit"+common.JOB_LESS_PER_WEEK}
                          type="radio"
                          value= { "5" }
                          id="jobLessPerWeek5"
                          checked={jobEditData[common.JOB_LESS_PER_WEEK] === "5"}
                          onChange={handleJobEditChange}
                        />
                      </div>
                    </Form.Group>

                  </div>

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
                      <p id="reqEditId">{jobEditData[common.JOB_REQ_ID]}</p>

                    </div>

                  </div>
                  <div class="col-md-2">
                    <div class="form-group" >
                      <span class="" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Job Id</span>
                      <p id="reqEditJobId">{jobEditData[common.JOB_ID] || "-"}</p>

                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="form-group" >
                      <span class="" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Job Public Id</span>
                      <p id="reqEditJobPublicId">{jobEditData[common.JOB_PUBLIC_ID] || "-"}</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div class="form-group" >
                      {/* <span class="" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Who own this request?</span> */}
                      {/* <input id="reqEditInOwner" type="text" class="form-control" disabled/> */}
                      <Form.Group className='' controlId="name" >
                        <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Who own this request? <strong className='text-danger'>*</strong></Form.Label>
                        <Form.Control
                          type="text"
                          defaultValue={ jobEditData[common.JOB_OWNER] }
                          name={common.JOB_OWNER}
                          required
                          onChange={handleJobEditChange}
                        />
                      </Form.Group>

                      <p class="text-danger m-0" style={{fontSize: "x-small"}}>The client will contact this person after they chose the tutor!</p>
                    </div>
                  </div>

                </div>
              </div>
            </Form>
          </CModalBody>
          <CModalFooter>
            <CButton color="" onClick={() => handleJobEditModalClose()}>
              Not Now
            </CButton>
            <CButton color="primary"onClick={() =>  validateJobUpdate() } >{modalJobEditContent || "Update"}</CButton>
          </CModalFooter>
        </CModal>

        {/* Confirm Update Job */}
        <CModal visible={modalJobEditConfirmVisible} onClose={() => handleJobEditConfirmModalClose()} alignment="center">
          <CModalHeader onClose={() => handleJobEditConfirmModalClose()}>
            <CModalTitle>Update Job</CModalTitle>
          </CModalHeader>
          <CModalBody>Are you sure you want to continue?</CModalBody>
          <CModalFooter>
            <CButton color="" onClick={() => handleJobEditConfirmModalClose()}>
              Not Now
            </CButton>
            <CButton color="primary"onClick={(e) => updateJob(e)} >{modalJobEditConfirmContent || "Update"}</CButton>
          </CModalFooter>
        </CModal>

        {/* Link Job */}
        <CModal visible={modalLinkJobConfirmVisible} onClose={() => handleLinkJobConfirmModalClose()} alignment="center" backdrop="static">
          <CModalHeader onClose={() => handleLinkJobConfirmModalClose()}>
            <CModalTitle>Link to Existing Job</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <Row>
              <div className="col-md-12">
                <Form.Group className='' controlId="name" >
                  <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Job Ref No.<strong className='text-danger'>*</strong></Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={""}
                    name={common.JOB_REF_NO}
                    onChange={handleLinkJobChange}
                    value={linkJobData[common.JOB_REF_NO]}
                    required

                  />
                </Form.Group>

                <button type="button" className="btn btn-primary btn-sm ms-1" onClick={ () => validateLinkJobRefNo() }>Check</button>
                <p className="ms-3 d-inline" style={{fontSize: "smaller", fontWeight: "300"}}>Exist? {linkJobData["jobRefNoExist"] ? <span className="text-success">Yes</span> : <span className="text-danger">No</span>}</p>
                <p className="ms-3 d-inline" style={{fontSize: "smaller", fontWeight: "300"}}>Linkable? {linkJobData["jobRefNoLinkable"] ? <span className="text-success">Yes</span> : <span className="text-danger">No</span>}</p>

              </div>
            </Row>
          </CModalBody>
          <CModalFooter>
            <CButton color="" onClick={() => handleLinkJobConfirmModalClose()}>
              Not Now
            </CButton>
            <CButton color="primary" onClick={(e) => validateLinkJob(e)} >{modalLinkJobConfirmContent || "Link Job"}</CButton>
          </CModalFooter>
        </CModal>

        {/* Unlink Job */}
        <CModal visible={modalUnlinkJobConfirmVisible} onClose={() => handleUnlinkJobConfirmModalClose()} alignment="center">
          <CModalHeader onClose={() => handleUnlinkJobConfirmModalClose()}>
            <CModalTitle>Unlink Job From This Request</CModalTitle>
          </CModalHeader>
          <CModalBody>Are you sure you want to continue?</CModalBody>
          <CModalFooter>
            <CButton color="" onClick={() => handleUnlinkJobConfirmModalClose()}>
              Not Now
            </CButton>
            <CButton color="primary"onClick={(e) => unlinkJob(e)} >{modalUnlinkJobConfirmContent || "Confirm"}</CButton>
          </CModalFooter>
        </CModal>

        {/* Create Notification */}
        <CModal visible={modalAddNotiVisible} onClose={() => handleAddNotiModalClose()} alignment="center" backdrop="static" size="xl">
          <CModalHeader onClose={() => handleAddNotiModalClose()}>
            <CModalTitle>Create Notification</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <Row>
              <div className="col-md-12">

                <Form.Group className="mb-1" controlId="subject">
                  <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Notification Type <strong className='text-danger'>*</strong>
                    <CTooltip
                        content="Give your notification a accurate type to visualize the conversation flow."
                        placement="top"
                      >
                      <a className="px-1 mx-2 rounded-1" style={{color: "white", textDecoration: 'none', background: "#08ae8e", fontSize:'small'}} href="javascript:void(0);">?</a>
                    </CTooltip>
                  </Form.Label>
                  <Form.Select aria-label="Default select example"
                    value={ notiAddData[common.EV_ERRORCODE] }
                    name={ common.EV_ERRORCODE }
                    onChange={(e)=> handleAddNotiChange(e) }
                  >
                    <option value="" selected>Select Notification</option>
                    <option value="3712">Callback</option>
                    <option value="3713">Whatsapp / Conversation</option>
                    <option value="3714">Trial Class</option>
                    <option value="3711">Need Attention</option>
                    <option value="3710">General</option>
                    <option value="3720" disabled>Owner Changed</option>
                    <option value="3721" disabled>Status Changed - Any</option>
                    <option value="3722" disabled>Status Changed to New</option>
                    <option value="3723" disabled>Status Changed to Job In Progress</option>
                    <option value="3724" disabled>Status Changed to Sent</option>
                    <option value="3725" disabled>Status Changed to Success</option>
                    <option value="3726" disabled>Status Changed to No Response</option>
                    <option value="3727" disabled>Status Changed to Too Expensive</option>
                    <option value="3728" disabled>Status Changed to Other Offers</option>
                    <option value="3729" disabled>Status Changed to Job No Response</option>
                    <option value="3730" disabled>Status Changed to Rejected All Tutors</option>
                    <option value="3731" disabled>Status Changed to Stop After Trial</option>
                    <option value="3732" disabled>Status Changed to No Tutor</option>
                    <option value="3733" disabled>Status Changed to Time Issues </option>
                  </Form.Select>
                </Form.Group>

               <Form.Group className="mb-1" controlId="subject">
                  <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Message<strong className='text-danger'>*</strong></Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Notification message"
                    name={common.EV_DESC}
                    onChange={handleAddNotiChange}
                    value={notiAddData[common.EV_DESC]}
                  />
                </Form.Group>

                <div class="form-check" >
                  <label class="form-check-label">
                    <CFormCheck
                      type="checkbox"
                      name={common.EV_ACT}
                      id={common.EV_ACT}
                      checked={notiAddData[common.EV_ACT] == null || notiAddData[common.EV_ACT] == "" ? false : notiAddData[common.EV_ACT]}
                      onChange={handleAddNotiChange}
                      inline
                    />
                    Reminder?
                    <CTooltip
                        content="Check this to set a reminder in future dates."
                        placement="top"
                      >
                      <a className="px-1 mx-2 rounded-1" style={{color: "white", textDecoration: 'none', background: "#08ae8e", fontSize:'small'}} href="javascript:void(0);">?</a>
                    </CTooltip>
                  </label>
                </div>
              </div>

            </Row>
            <div className="row">
              <div className="col-md-3">
                <Form.Group className='' controlId={common.EV_ACT_DATE} >
                  <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Reminder Date<strong className='text-danger'>*</strong></Form.Label>

                  <DatePicker className='form-control'
                    name={common.EV_ACT_DATE}
                    // renderCustomHeader={({
                    //   date,
                    //   changeYear,
                    //   changeMonth,
                    //   decreaseMonth,
                    //   increaseMonth,
                    //   prevMonthButtonDisabled,
                    //   nextMonthButtonDisabled,
                    // }) => (
                    //   <div
                    //     style={{
                    //       margin: 10,
                    //       display: "flex",
                    //       justifyContent: "center",
                    //     }}
                    //   >
                    //     {/* <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                    //       {"<"}
                    //     </button> */}
                    //     <select style={{height: "30px", paddingLeft: "15px", paddingRight: "15px"}}
                    //       value={getYear(date)}
                    //       onChange={({ target: { value } }) => changeYear(value)}
                    //     >
                    //       {years.map((option) => (
                    //         <option key={option} value={option}>
                    //           {option}
                    //         </option>
                    //       ))}
                    //     </select>

                    //     <select
                    //       value={months[getMonth(date)]}
                    //       onChange={({ target: { value } }) =>
                    //         changeMonth(months.indexOf(value))
                    //       }
                    //     >
                    //       {months.map((option) => (
                    //         <option key={option} value={option}>
                    //           {option}
                    //         </option>
                    //       ))}
                    //     </select>

                    //     {/* <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                    //       {">"}
                    //     </button> */}
                    //   </div>
                    // )}
                    dateFormat="dd/MM/yyyy"
                    selected={ notiAddData[common.EV_ACT_DATE]|| new Date()}
                    onChange={handleDateChange}
                    minDate={new Date()}
                  />

                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className='' controlId={common.EV_ACT_TARGET} >
                  <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Person<strong className='text-danger'>*</strong>
                    <CTooltip
                        content="The person who will see this reminder in future"
                        placement="top"
                      >
                      <a className="px-1 mx-2 rounded-1" style={{color: "white", textDecoration: 'none', background: "#08ae8e", fontSize:'small'}} href="javascript:void(0);">?</a>
                    </CTooltip>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name={common.EV_ACT_TARGET}
                    onChange={handleAddNotiChange}
                    value={notiAddData[common.EV_ACT_TARGET]}
                    required

                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className='' controlId={common.EV_ACT_DESC} >
                  <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Reminder Message<strong className='text-danger'>*</strong>
                    <CTooltip
                        content="A short reminder message to tell you what to do when you see this reminder in future."
                        placement="top"
                      >
                      <a className="px-1 mx-2 rounded-1" style={{color: "white", textDecoration: 'none', background: "#08ae8e", fontSize:'small'}} href="javascript:void(0);">?</a>
                    </CTooltip>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Write something ..."
                    name={common.EV_ACT_DESC}
                    onChange={handleAddNotiChange}
                    value={notiAddData[common.EV_ACT_DESC]}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <Form.Group className='' controlId="refId" >
                  <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Linked Request</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={notiAddData[common.EV_REFID]}
                    name={common.EV_REFID}
                    onChange={handleAddNotiChange}
                    value={notiAddData[common.EV_REFID]}
                    disabled

                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className='' controlId={common.EV_OWNER} >
                  <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Owner</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={notiAddData[common.EV_OWNER]}
                    name={common.EV_OWNER}
                    onChange={handleAddNotiChange}
                    value={notiAddData[common.EV_OWNER]}
                    disabled

                  />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className='' controlId={common.EV_DATE_CREATE}>
                  <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Date Created</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={new Date().toLocaleDateString("en-gb")}
                    name={common.EV_DATE_CREATE}
                    onChange={handleAddNotiChange}
                    value={notiAddData[common.EV_DATE_CREATE]}
                    disabled

                  />
                </Form.Group>
              </div>
            </div>
          </CModalBody>
          <CModalFooter>
            <CButton color="" onClick={() => handleAddNotiModalClose()}>
              Not Now
            </CButton>
            <CButton color="primary" onClick={(e) => validateNotiAdd(e)} >{modalAddNotiConfirmContent || "Create"}</CButton>
          </CModalFooter>
        </CModal>

        {/* Edit Notification */}
        <CModal visible={modalEditNotiVisible} onClose={() => handleEditNotiModalClose()} alignment="center" backdrop="static" size="xl">
          <CModalHeader onClose={() => handleEditNotiModalClose()}>
            <CModalTitle>Edit Notification</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <Row>
              <div className="col-md-12">

                <Form.Group className="mb-1" controlId="subject">
                  <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Notification Type <strong className='text-danger'>*</strong>
                    <CTooltip
                        content="Give your notification a accurate type to visualize the conversation flow."
                        placement="top"
                      >
                      <a className="px-1 mx-2 rounded-1" style={{color: "white", textDecoration: 'none', background: "#08ae8e", fontSize:'small'}} href="javascript:void(0);">?</a>
                    </CTooltip>
                  </Form.Label>
                  <Form.Select aria-label="Default select example"
                    value={ notiEditData[common.EV_ERRORCODE] }
                    name={ common.EV_ERRORCODE }
                    onChange={(e)=> handleEditNotiChange(e) }
                  >
                    <option value="" selected>Select Notification</option>
                    <option value="3712">Callback</option>
                    <option value="3713">Whatsapp / Conversation</option>
                    <option value="3714">Trial Class</option>
                    <option value="3711">Need Attention</option>
                    <option value="3710">General</option>
                    <option value="3720" disabled>Owner Changed</option>
                    <option value="3721" disabled>Status Changed - Any</option>
                    <option value="3722" disabled>Status Changed to New</option>
                    <option value="3723" disabled>Status Changed to Job In Progress</option>
                    <option value="3724" disabled>Status Changed to Sent</option>
                    <option value="3725" disabled>Status Changed to Success</option>
                    <option value="3726" disabled>Status Changed to No Response</option>
                    <option value="3727" disabled>Status Changed to Too Expensive</option>
                    <option value="3728" disabled>Status Changed to Other Offers</option>
                    <option value="3729" disabled>Status Changed to Job No Response</option>
                    <option value="3730" disabled>Status Changed to Rejected All Tutors</option>
                    <option value="3731" disabled>Status Changed to Stop After Trial</option>
                    <option value="3732" disabled>Status Changed to No Tutor</option>
                    <option value="3733" disabled>Status Changed to Time Issues </option>
                  </Form.Select>
                </Form.Group>

               <Form.Group className="mb-1" controlId="subject">
                  <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Message<strong className='text-danger'>*</strong></Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Notification message"
                    name={common.EV_DESC}
                    onChange={handleEditNotiChange}
                    value={notiEditData[common.EV_DESC]}
                  />
                </Form.Group>

                <div class="form-check" >
                  <label class="form-check-label">
                    <CFormCheck
                      type="checkbox"
                      name={common.EV_ACT}
                      id={common.EV_ACT}
                      checked={notiEditData[common.EV_ACT] == null || notiEditData[common.EV_ACT] == "" ? false : notiEditData[common.EV_ACT]}
                      onChange={handleEditNotiChange}
                      inline
                    />
                    Reminder?
                    <CTooltip
                        content="Check this to set a reminder in future dates."
                        placement="top"
                      >
                      <a className="px-1 mx-2 rounded-1" style={{color: "white", textDecoration: 'none', background: "#08ae8e", fontSize:'small'}} href="javascript:void(0);">?</a>
                    </CTooltip>
                  </label>
                </div>
              </div>

            </Row>
            <div className="row">
              <div className="col-md-3">
                <Form.Group className='' controlId={common.EV_ACT_DATE} >
                  <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Reminder Date<strong className='text-danger'>*</strong></Form.Label>

                  <DatePicker className='form-control'
                    name={common.EV_ACT_DATE}
                    dateFormat="dd/MM/yyyy"
                    selected={ notiEditData[common.EV_ACT_DATE] || new Date() }
                    onChange={handleEditNotiDateChange}
                    minDate={new Date()}
                  />

                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group className='' controlId={common.EV_ACT_TARGET} >
                  <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Person<strong className='text-danger'>*</strong>
                    <CTooltip
                        content="The person who will see this reminder in future"
                        placement="top"
                      >
                      <a className="px-1 mx-2 rounded-1" style={{color: "white", textDecoration: 'none', background: "#08ae8e", fontSize:'small'}} href="javascript:void(0);">?</a>
                    </CTooltip>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name={common.EV_ACT_TARGET}
                    onChange={handleEditNotiChange}
                    value={notiEditData[common.EV_ACT_TARGET]}
                    required

                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className='' controlId={common.EV_ACT_DESC} >
                  <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Reminder Message<strong className='text-danger'>*</strong>
                    <CTooltip
                        content="A short reminder message to tell you what to do when you see this reminder in future."
                        placement="top"
                      >
                      <a className="px-1 mx-2 rounded-1" style={{color: "white", textDecoration: 'none', background: "#08ae8e", fontSize:'small'}} href="javascript:void(0);">?</a>
                    </CTooltip>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Write something ..."
                    name={common.EV_ACT_DESC}
                    onChange={handleEditNotiChange}
                    value={notiEditData[common.EV_ACT_DESC]}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <div class="form-check" >
                  <label class="form-check-label">
                    <CFormCheck
                      type="checkbox"
                      name={common.EV_SEEN}
                      id={common.EV_SEEN}
                      checked={notiEditData[common.EV_SEEN] == null || notiEditData[common.EV_SEEN] == "" ? false : notiEditData[common.EV_SEEN]}
                      onChange={handleEditNotiChange}
                      inline
                    />
                    Seen?
                    <CTooltip
                        content="Check this after action had taken against this reminder."
                        placement="top"
                      >
                      <a className="px-1 mx-2 rounded-1" style={{color: "white", textDecoration: 'none', background: "#08ae8e", fontSize:'small'}} href="javascript:void(0);">?</a>
                    </CTooltip>
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <Form.Group className='' controlId="refId" >
                  <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Linked Request</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={notiEditData[common.EV_REFID]}
                    name={common.EV_REFID}
                    onChange={handleEditNotiChange}
                    value={notiEditData[common.EV_REFID]}
                    disabled

                  />
                </Form.Group>
                <Form.Group className='' controlId="id" >
                  <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Notification Id</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={notiEditData[common.EV_ID]}
                    name={common.EV_ID}
                    onChange={handleEditNotiChange}
                    value={notiEditData[common.EV_ID]}
                    disabled

                  />
                </Form.Group>

              </div>
              <div className="col-md-3">
                <Form.Group className='' controlId={common.EV_OWNER} >
                  <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Owner</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={notiEditData[common.EV_OWNER]}
                    name={common.EV_OWNER}
                    onChange={handleEditNotiChange}
                    value={notiEditData[common.EV_OWNER]}
                    disabled

                  />
                </Form.Group>

                <Form.Group className='' controlId={common.EV_DATE_CREATE}>
                  <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Date Created</Form.Label>
                  <Form.Control
                    type="text"
                    name={common.EV_DATE_CREATE}
                    onChange={handleEditNotiChange}
                    value={ notiEditData[common.EV_DATE_CREATE] }
                    disabled
                  />
                </Form.Group>

              </div>

              <div className="col-md-6">
                <p style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>History</p>
                {
                  notiEditData[common.EV_DATA] && notiEditData[common.EV_DATA].map((data, index) =>

                    <p style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}} >{ format( new Date( data.date) , "dd/MM/yyyy hh:mm:ss") } ({ data.owner}): {data.desc}</p>
                )}
              </div>

            </div>
          </CModalBody>
          <CModalFooter>
            <CButton color="" onClick={() => handleEditNotiModalClose()}>
              Not Now
            </CButton>
            <CButton color="primary" onClick={(e) => validateNotiEdit(e)} >{modalEditNotiConfirmContent || "Update"}</CButton>
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
              <CButton className="me-auto" type="submit" color="primary" size="sm" variant="outline" onClick={() => validateRequest()} >
                Update Request
              </CButton>

              <div >
                <button className={"btn btn-primary btn-sm ms-1 "+ btnJobEditVisible} onClick={ () => handleJobEditModalOpen() }>Edit Job: {jobEditData[common.JOB_REF_NO]}</button>
                <button className={"btn btn-primary btn-sm ms-1 "+ btnJobAddVisible} onClick={ () => handleJobAddModalOpen() }>Create Job</button>
                <button className={"btn btn-primary btn-sm ms-1 "+ btnJobAddVisible} onClick={ () => handleLinkJobModalOpen() }>Link Job</button>
                <button className={"btn btn-primary btn-sm ms-1 "+ btnJobEditVisible} onClick={ () => handleUnlinkJobModalOpen() }>Unlink Job</button>
                {/* <button className={"btn btn-primary btn-sm ms-1 "+ btnJobEditVisible} disabled>Job <FontAwesomeIcon icon={faArrowRight}/></button> */}

              </div>

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
                        disabled={reqStatusDisabled_sent}
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
                        disabled={reqStatusDisabled_jobNoRes}
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
                        disabled={reqStatusDisabled_rejectAllTutors}
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
                        disabled={reqStatusDisabled_stopAfterTrial}
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
                        disabled={reqStatusDisabled_noTutor}
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
                        disabled={reqStatusDisabled_timeXMatch}
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
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className={'mb-1 ' + reqEditJobRefIdVisible} controlId={common.REQ_ADMIN_REFID} >
                    <Form.Label style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Success Check <strong className='text-danger'>*</strong>
                      <CTooltip
                        content="Success Check is needed to prove a job is Successful."
                        placement="top"
                      >
                        <a className="px-1 mx-2 rounded-1" style={{color: "white", textDecoration: 'none', background: "#08ae8e", fontSize:'small'}} href="javascript:void(0);">?</a>
                      </CTooltip>
                    </Form.Label>
                    <Form.Control
                    type="text"
                    name={common.REQ_ADMIN_REFID}
                    value={ reqData[common.REQ_ADMIN_REFID] }
                    onChange={handleChange}
                    />
                  </Form.Group>

                  <span className="mt-3" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Notification</span>
                  <div>
                    {/* <button className="btn btn-primary btn-sm ms-1">1</button>
                    <button className="btn btn-primary btn-sm ms-1">2</button>
                    <button className="btn btn-primary btn-sm ms-1">3</button>
                    <button className="btn btn-primary btn-sm ms-1">4</button>
                    <button className="btn btn-primary btn-sm ms-1">5</button> */}
                    {
                      reqData[common.REQ_ADMIN_EV_ID] && reqData[common.REQ_ADMIN_EV_ID].map((notiId, index) =>{

                        switch(reqData[common.REQ_ADMIN_EV_ERROR_CODE][index] ){
                          case "3710": {
                            return (
                              <span>
                                <button type="button"
                                  className=""
                                  onClick={() => handleEditNotiModalOpen(notiId) }
                                  style={{background: "#ffe6ee", display: "inline-block", padding: "3px 8px", marginTop: "4px", marginRight: "2px", fontSize: "small", borderRadius: "4px"}}>
                                    <FontAwesomeIcon icon={faBell} />
                                    {/* {index + 1} */}
                                </button>
                                { reqData[common.REQ_ADMIN_EV_ACT][index] && (reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == "" || reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_NEW) ?
                                  <span style={{ color:"#424242", content:`\xb93`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "#bbb", display: "inline-block" }}></span> :
                                  <span style={{ color:"#424242", content:`\x00a1`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "red", display: "inline-block" }}></span>
                                }
                              </span>
                            )
                            break;
                          }
                          case "3711": {
                            return (
                              <span>
                                <button type="button"
                                  className=""
                                  onClick={() => handleEditNotiModalOpen(notiId) }
                                  style={{background: "#ffe6ee", display: "inline-block", padding: "3px 8px", marginTop: "4px", marginRight: "2px", fontSize: "small", borderRadius: "4px"}}>
                                    <FontAwesomeIcon icon={faBullhorn} />
                                    {/* {index + 1} */}
                                </button>
                                { reqData[common.REQ_ADMIN_EV_ACT][index] && (reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == "" || reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_NEW) ?
                                  <span style={{ color:"#424242", content:`\x00a1`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "red", display: "inline-block" }}></span> :
                                  reqData[common.REQ_ADMIN_EV_ACT][index] && reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_DONE ?
                                  <span style={{ color:"#424242", content:`\xb93`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "#bbb", display: "inline-block" }}></span> : ""
                                }
                              </span>
                            )
                            break;
                          }
                          case "3712": {
                            return (
                              <span>
                                <button type="button"
                                  className=""
                                  onClick={() => handleEditNotiModalOpen(notiId) }
                                  style={{background: "#ffe6ee", display: "inline-block", padding: "3px 8px", marginTop: "4px", marginRight: "2px", fontSize: "small", borderRadius: "4px"}}>
                                    <FontAwesomeIcon icon={faPhone} />
                                </button>
                                { reqData[common.REQ_ADMIN_EV_ACT][index] && (reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == "" || reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_NEW) ?
                                  <span style={{ color:"#424242", content:`\x00a1`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "red", display: "inline-block" }}></span> :
                                  reqData[common.REQ_ADMIN_EV_ACT][index] && reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_DONE ?
                                  <span style={{ color:"#424242", content:`\xb93`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "#bbb", display: "inline-block" }}></span> : ""
                                }
                              </span>
                            )
                            break;
                          }
                          case "3713": {
                            return (
                              <span>
                                <button type="button"
                                  className=""
                                  onClick={() => handleEditNotiModalOpen(notiId) }
                                  style={{background: "#ffe6ee", display: "inline-block", padding: "3px 8px", marginTop: "4px", marginRight: "2px", fontSize: "small", borderRadius: "4px"}}>
                                  <FontAwesomeIcon icon={faComment} />
                                </button>
                                { reqData[common.REQ_ADMIN_EV_ACT][index] && (reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == "" || reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_NEW) ?
                                  <span style={{ color:"#424242", content:`\x00a1`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "red", display: "inline-block" }}></span> :
                                  reqData[common.REQ_ADMIN_EV_ACT][index] && reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_DONE ?
                                  <span style={{ color:"#424242", content:`\xb93`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "#bbb", display: "inline-block" }}></span> : ""
                                }
                              </span>
                            )
                            break;
                          }
                          case "3714": {
                            return (
                              <span>
                                <button type="button"
                                  className=""
                                  onClick={() => handleEditNotiModalOpen(notiId) }
                                  style={{background: "#ddd5f3", color:"#291749", display: "inline-block", padding: "3px 8px", marginTop: "4px", marginRight: "2px", fontSize: "small", borderRadius: "4px"}}>
                                    <FontAwesomeIcon icon={faChalkboardUser} />
                                </button>
                                { reqData[common.REQ_ADMIN_EV_ACT][index] && (reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == "" || reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_NEW) ?
                                  <span style={{ color:"#424242", content:`\x00a1`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "red", display: "inline-block" }}></span> :
                                  reqData[common.REQ_ADMIN_EV_ACT][index] && reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_DONE ?
                                  <span style={{ color:"#424242", content:`\xb93`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "#bbb", display: "inline-block" }}></span> : ""
                                }
                              </span>
                            )
                            break;
                          }
                          case "3720": {
                            return (
                              <span>
                                <button type="button"
                                  className="btn btn-sm btn-outline-primary"
                                  onClick={() => handleEditNotiModalOpen(notiId) }
                                  style={{display: "inline-block", padding: "3px 8px", marginTop: "4px", marginRight: "2px", fontSize: "small", borderRadius: "4px"}}>
                                    <FontAwesomeIcon icon={faUserPen} />
                                </button>
                                { reqData[common.REQ_ADMIN_EV_ACT][index] && (reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == "" || reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_NEW) ?
                                  <span style={{ color:"#424242", content:`\x00a1`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "red", display: "inline-block" }}></span> :
                                  reqData[common.REQ_ADMIN_EV_ACT][index] && reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_DONE ?
                                  <span style={{ color:"#424242", content:`\xb93`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "#bbb", display: "inline-block" }}></span> : ""
                                }
                              </span>
                            )
                            break;
                          }
                          case "3722": {
                            return (
                              <span>
                                <button type="button"
                                  className=""
                                  onClick={() => handleEditNotiModalOpen(notiId) }
                                  style={{background: "#ccdbf3", display: "inline-block", padding: "3px 8px", marginTop: "4px", marginRight: "2px", fontSize: "small", borderRadius: "4px"}}>
                                    {index + 1}
                                </button>
                                { reqData[common.REQ_ADMIN_EV_ACT][index] && (reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == "" || reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_NEW) ?
                                  <span style={{ color:"#424242", content:`\x00a1`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "red", display: "inline-block" }}></span> :
                                  reqData[common.REQ_ADMIN_EV_ACT][index] && reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_DONE ?
                                  <span style={{ color:"#424242", content:`\xb93`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "#bbb", display: "inline-block" }}></span> : ""
                                }
                              </span>
                            )
                            break;
                          }
                          case "3723": {
                            return (
                              <span>
                                <button type="button"
                                  className=""
                                  onClick={() => handleEditNotiModalOpen(notiId) }
                                  style={{color:"red", background: "#ffcccb", display: "inline-block", padding: "3px 8px", marginTop: "4px", marginRight: "2px", fontSize: "small", borderRadius: "4px"}}>
                                    {index + 1}
                                </button>
                                { reqData[common.REQ_ADMIN_EV_ACT][index] && (reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == "" || reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_NEW) ?
                                  <span style={{ color:"#424242", content:`\x00a1`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "red", display: "inline-block" }}></span> :
                                  reqData[common.REQ_ADMIN_EV_ACT][index] && reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_DONE ?
                                  <span style={{ color:"#424242", content:`\xb93`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "#bbb", display: "inline-block" }}></span> : ""
                                }
                              </span>
                            )
                            break;
                          }
                          case "3724": {
                            return (
                              <span>
                                <button type="button"
                                  className=""
                                  onClick={() => handleEditNotiModalOpen(notiId) }
                                  style={{ color: "#cc7000", background: "#ffdfbf", display: "inline-block", padding: "3px 8px", marginTop: "4px", marginRight: "2px", fontSize: "small", borderRadius: "4px"}}>
                                    {index + 1}
                                </button>
                                { reqData[common.REQ_ADMIN_EV_ACT][index] && (reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == "" || reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_NEW) ?
                                  <span style={{ color:"#424242", content:`\x00a1`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "red", display: "inline-block" }}></span> :
                                  reqData[common.REQ_ADMIN_EV_ACT][index] && reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_DONE ?
                                  <span style={{ color:"#424242", content:`\xb93`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "#bbb", display: "inline-block" }}></span> : ""
                                }
                              </span>
                            )
                            break;
                          }
                          // Success
                          case "3725": {
                            return (
                              <span>
                                <button type="button"
                                  className=""
                                  onClick={() => handleEditNotiModalOpen(notiId) }
                                  style={{ color: "#21896c", background: "#c1e1d2", display: "inline-block", padding: "3px 8px", marginTop: "4px", marginRight: "2px", fontSize: "small", borderRadius: "4px"}}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </button>
                                { reqData[common.REQ_ADMIN_EV_ACT][index] && (reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == "" || reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_NEW) ?
                                  <span style={{ color:"#424242", content:`\x00a1`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "red", display: "inline-block" }}></span> :
                                  reqData[common.REQ_ADMIN_EV_ACT][index] && reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_DONE ?
                                  <span style={{ color:"#424242", content:`\xb93`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "#bbb", display: "inline-block" }}></span> : ""
                                }
                              </span>
                            )
                            break;
                          }
                          // Failed
                          case "3727":
                          case "3728":
                          case "3729":
                          case "3730":
                          case "3731":
                          case "3732":
                          case "3733":
                          {
                            return (
                              <span>
                                <button type="button"
                                  className=""
                                  onClick={() => handleEditNotiModalOpen(notiId) }
                                  style={{ color: "red", background: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 2px 5px 0px", display: "inline-block", padding: "3px 8px", marginTop: "4px", marginRight: "2px", fontSize: "small", borderRadius: "4px"}}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                                { reqData[common.REQ_ADMIN_EV_ACT][index] && (reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == "" || reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_NEW) ?
                                  <span style={{ color:"#424242", content:`\x00a1`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "red", display: "inline-block" }}></span> :
                                  reqData[common.REQ_ADMIN_EV_ACT][index] && reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_DONE ?
                                  <span style={{ color:"#424242", content:`\xb93`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "#bbb", display: "inline-block" }}></span> : ""
                                }
                              </span>
                            )
                            break;
                          }
                          default: {
                            return (
                              <span>
                                <button type="button"
                                  className="btn btn-sm btn-outline-primary"
                                  onClick={() => handleEditNotiModalOpen(notiId) }
                                  style={{ display: "inline-block", padding: "3px 8px", marginTop: "4px", marginRight: "2px", fontSize: "small", borderRadius: "4px"}}>
                                    {index + 1}
                                </button>
                                { reqData[common.REQ_ADMIN_EV_ACT][index] && (reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == "" || reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_NEW) ?
                                  <span style={{ color:"#424242", content:`\x00a1`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "red", display: "inline-block" }}></span> :
                                  reqData[common.REQ_ADMIN_EV_ACT][index] && reqData[common.REQ_ADMIN_EV_ACT_STATUS][index] == common.EV_ACT_STATUS_DONE ?
                                  <span style={{ color:"#424242", content:`\xb93`, width: "10px", height: "10px", top: "-10px", right: "10px", borderRadius: "50%",position: "relative", background: "#bbb", display: "inline-block" }}></span> : ""
                                }
                              </span>
                            )
                            break;
                          }

                        }
                        // // New
                        // else if (doc[REQ_ADMIN_EV_ERROR_CODE][index] == "3722"){
                        //   itemHtml = `<span><a class="chip-item" data-toggle="modal" data-target="#notiEditModal" data-id="`+doc[REQ_ADMIN_ID]+`" data-notiid="`+notiId +
                        //   `" href="javascript:;" style="color:#2e74b6; background: #ccdbf3;">`+ (index+1) +`</a>` + actionClass + `</span>`
                        // }
                        // // Job In Progress
                        // else if (doc[REQ_ADMIN_EV_ERROR_CODE][index] == "3723"){
                        //   itemHtml = `<span><a class="chip-item" data-toggle="modal" data-target="#notiEditModal" data-id="`+doc[REQ_ADMIN_ID]+`" data-notiid="`+notiId +
                        //   `" href="javascript:;" style="color:red; background: #ffcccb;">`+ (index+1)  +`</a>` + actionClass + `</span>`
                        // }
                        // // Sent
                        // else if (doc[REQ_ADMIN_EV_ERROR_CODE][index] == "3724"){
                        //   itemHtml = `<span><a class="chip-item" data-toggle="modal" data-target="#notiEditModal" data-id="`+doc[REQ_ADMIN_ID]+`" data-notiid="`+notiId +
                        //   `" href="javascript:;" style="color:#cc7000; background: #ffdfbf;">`+ (index+1)  +`</i></a>` + actionClass + `</span>`
                        // }
                        // // Success
                        // else if (doc[REQ_ADMIN_EV_ERROR_CODE][index] == "3725"){
                        //   itemHtml = `<span><a class="chip-item" data-toggle="modal" data-target="#notiEditModal" data-id="`+doc[REQ_ADMIN_ID]+`" data-notiid="`+notiId +
                        //   `" href="javascript:;" style="color: #21896c; background: #c1e1d2; "><i class="fas fa-check"></i></a>` + actionClass + `</span>`
                        // }
                        // // Failed
                        // else if (["3727","3728","3729","3730","3731","3732","3733"].includes(doc[REQ_ADMIN_EV_ERROR_CODE][index])){
                        //   itemHtml = `<span><a class="chip-item" data-toggle="modal" data-target="#notiEditModal" data-id="`+doc[REQ_ADMIN_ID]+`" data-notiid="`+notiId +
                        //   `" href="javascript:;" style="color:red; background: white; box-shadow: rgba(100, 100, 111, 0.2) 0px 2px 5px 0px;"><i class="fas fa-times"></i></a>` + actionClass + `</span>`
                        // }




                        // <button type="button" className="btn btn-primary btn-sm ms-1" onClick={() => handleEditNotiModalOpen(notiId) }>{index + 1}</button>
                      })
                    }


                  </div>


                  <CButton className="mt-1" type="button" color="primary" size="sm" variant="outline" onClick={() => handleAddNotiModalOpen()} >
                    Add Notification
                  </CButton>
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
                    <p class="m-0" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>Add <strong className='text-danger'>partner_[XX]</strong> for Partner Requests. <em>Check your spelling!</em></p>
                    <p class="m-0" style={{fontSize: "smaller", fontWeight: "300", color: "gray", marginBottom: "0"}}>You should <strong className='text-danger'>enter the original link EXACTLY</strong> here. Modifying the link will cause the utm fields below to change, hence incurring errors to analytics.</p>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder=''
                      name="message"
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

export default RequestEdit