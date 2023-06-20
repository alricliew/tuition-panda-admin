
import React, {useState, useEffect} from 'react'
import { CButton,
  CAlert,
  CIcon,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CToast, CToastHeader, CToastBody,
  CToastClose,
} from '@coreui/react'
import { cilInfo, cilCheckCircle, cilWarning, cilBurn } from '@coreui/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faCircleCheck, faCircleInfo, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

// props:
// color
// message
// icon
const Toast = (props) => {
  return (

    <CToast visible={true} color={props.color || "primary"} className="text-white align-items-center">
      <div className="d-flex">
        <CToastBody>
          <FontAwesomeIcon icon={props.color == "primary" || props.color == "secondary" || props.color == "success" ? faCircleCheck :
            props.color == "warning" ?  faCircleExclamation : props.color == "danger" ? faCircleXmark : props.color == "info" ? faCircleInfo : props.icon} className="flex-shrink-0 me-2" width={24} height={24} />
          {props.message}
        </CToastBody>

        <CToastClose className="me-2 m-auto" white />
      </div>
    </CToast>

    // <CToast>
    //   <CToastHeader closeButton>
    //     <svg
    //       className="rounded me-2"
    //       width="20"
    //       height="20"
    //       xmlns="http://www.w3.org/2000/svg"
    //       preserveAspectRatio="xMidYMid slice"
    //       focusable="false"
    //       role="img"
    //     >
    //       <rect width="100%" height="100%" fill="#007aff"></rect>
    //     </svg>
    //     <div className="fw-bold me-auto">CoreUI for React.js</div>
    //     <small>7 min ago</small>
    //   </CToastHeader>
    //   <CToastBody>
    //     <FontAwesomeIcon icon={props.color == "primary" || props.color == "secondary" || props.color == "success" ? faCircleCheck :
    //       props.color == "warning" || props.color == "danger" ?  faCircleXmark : props.color == "info" ? faCircleInfo : props.icon} className="flex-shrink-0 me-2" width={24} height={24} />
    //     {props.message}
    //   </CToastBody>
    // </CToast>
  )
}

export default Toast;