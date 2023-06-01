import React, { useState } from 'react'
import {
  CAvatar,
  CBadge,
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CLoadingButton
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilExitToApp,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useSelector } from 'react-redux'

import avatar8 from './../../assets/images/avatars/8.jpg'

import { handleSignOut } from "../../js/firebase";
import * as common from "../../js/common";

const AppHeaderDropdown = () => {
  const [visible, setVisible] = useState(false)
  const newUserData = useSelector((state) => state.userBase)

  return (
    <>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>Log Out</CModalTitle>
        </CModalHeader>
        <CModalBody>Are you sure you want to continue?</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Not Now
          </CButton>
          <CButton color="primary" onClick={() => handleSignOut() }>Log Out</CButton>
        </CModalFooter>
      </CModal>

      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
          {/* <CAvatar src={avatar8} size="md" /> */}
          <div className="" style={{height: "2.25rem", width: "2.25rem"}}>
            <a href="javascript:;" >
              <img className="img" id="tutorImgUrl" style={{height:"100%", width:"100%", objectFit: "cover", borderRadius: "50%", pointerEvents: "none"}}
              src={newUserData[common.IMAGE_KEY]}/>
            </a>
          </div>
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
          <CDropdownItem href="/user">
            <CIcon icon={cilUser} className="me-2" />
            Update Profile
          </CDropdownItem>
          {/* <CDropdownItem href="#">
            <CIcon icon={cilCreditCard} className="me-2" />
            Payments
            <CBadge color="secondary" className="ms-2">
              42
            </CBadge>
          </CDropdownItem> */}
          <CDropdownDivider />
          <CDropdownItem href="#" onClick={() => setVisible(true)}>
            <CIcon icon={cilExitToApp} className="me-2" />
            Log Out
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </>

  )
}

export default AppHeaderDropdown
