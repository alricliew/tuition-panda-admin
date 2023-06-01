import React, { Component, Suspense, useState, useEffect } from 'react'
// import { HashRouter, Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './scss/style.scss'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { setUserBase } from './redux-reducers/User'
// import { setUserInfo } from './redux-reducers/userInfo'

// Custom Library
import * as common from "./js/common";
import * as myConst from "./js/const-v2.js";

// Firebase
import { initializeApp } from "firebase/app";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getFirestore, doc, getDoc,} from "firebase/firestore";
import { auth, firebaseConfig } from "./js/firebase"
// Auto Login
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App = () => {

  // User
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // lock the user read if it already started. To make sure we only get document at 1 times
  const [updateUserBase, setUpdateUserBase] = useState(true);

  var uuid = "";
  // Set userBase
  const userBase = useSelector((state) => state.userBase)
  // console.log(userBase)
  const dispatch = useDispatch()

  // Handle user state changes
  async function updateUserInfo(user) {
    setUser(user);
    const promiseAll = [];
    const docRef = doc(db, myConst.USER_BASE_PATH, uuid);
    promiseAll.push(getDoc(docRef))

    Promise.all(promiseAll).then((snapshots) => {
      let userBaseSnap = snapshots[0]
      let userInfoSnap = snapshots[1]
      if (userBaseSnap.exists()) {
        // console.log("UserBase:", userBaseSnap.data());
        // Redux: Save User
        dispatch(setUserBase(userBaseSnap.data()))
      } else {
        // userBaseSnap.data() will be undefined in this case
        console.log("userBaseSnap: No such document! Go to login page");
        // alert("userBaseSnap: No such document!")
        if (window.location.pathname == "/login"){
          window.location.href = "/dashboard"
        }
      }

    })
    .then(() => {
      // Initialization Done
      if (initializing) setInitializing(false);
    })

  }

  onAuthStateChanged(auth, (user) => {

    console.log(user)
    if (!user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log("Go To Login Page" )
      // console.log(window.location.pathname);
      if (initializing) setInitializing(false);
      if (window.location.pathname !== "/login")
        window.location.href = "/login"

    } else {
      // User is signed in
      uuid = user.uid
      // console.log(!userBase.uid )
      if (userBase.uid == "" && updateUserBase){
        // console.log("User is Logged In: " + uuid + " UserBase is empty: ")
        updateUserInfo(user)

        setUpdateUserBase(false); // Start setting user
      }
      else {
        // console.log("User is Logged In: " + uuid)
        if (initializing) {setInitializing(false)}

        // UserBase already set. Get the userBase and userInfo & Skip
        if (window.location.pathname == "/login"){
          window.location.href = "/dashboard"
        }

      }
    }
  });

  // While initializing, show nothing.
  if (initializing) {
    console.log("initializing")
    return null
  }
  return (
    <Router>
      <Suspense fallback={loading}>
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
