import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Style from "./TaskBar.module.css";

function TaskBar() {
  return (
    <>
      <div className={Style.bg}>
        <div className="d-flex">
          <div className=" ">
            
            <h2 className="p-2 m-3 text-danger">RobyMuzik</h2>
          </div>
          <div className=''>
            <ul className={`d-flex  ${Style.listTaskBar}`}>
              <li className={`fs-3 ${Style.item}`}>
                <a className={Style.link} href="">
                  SignIn
                </a>
              </li>
              <li className={`fs-3 ${Style.item}`}>
                <a className={Style.link} href="">
                  SignUp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskBar;
