import React, { useState } from 'react';
import './index.css';
import User from './User';
import Loader from './Loader';



function Navbar() {

  const [visible, setVis] = useState("");
  const [load, setLoad] = useState();

  const userData = () => {


    // Set Loader
    setTimeout(() => {
      setLoad(
        <Loader />
      )
    }, 0)

    // Fetching Data after 4 sec
    setTimeout(() => {
      // alert("email")
      setLoad()
      setVis(
        <User />
      )
    }, 4000)

  }

  return (
    <>
      <nav>
        {/* <p>Hello this is Para from nevbar</p> */}
        <div className='mainDiv'>

          <div id='logo'>
            <h1>MARK - 2</h1>
          </div>

          <div className='item'>
            <button onClick={userData}>Get Users</button>
          </div>
        </div>
      </nav>
      <hr />

      {/* <Loader /> */}

      <div>
        {load}
      </div>


      {/* User's Data */}
      <div>
        {visible}
      </div>

    </>
  )
}

export default Navbar;
