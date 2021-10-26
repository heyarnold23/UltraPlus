import React from 'react';
import { Modal } from '../../context/Modal';
import {toggleModalView} from "../../store/session"
import {useDispatch,useSelector} from "react-redux"
import DeleteProfile from '../DeleteProfile'

import "./UserForm.css"
function FormModal() {
  const dispatch = useDispatch()
  const modalType= useSelector((state)=>state.session.modalType)
  const modalView = useSelector(state => state.session.modalView)
  let userForm

  if(modalView && modalType==="deleteProfile"){
    userForm = (<DeleteProfile/>)
  }
  // else if (modalView && modalType === "signup"){
  //   userForm = (<SignupForm/>)
  // }
  // else if (modalView && modalType === "loading"){
  //   userForm = (<LoadSpinner/>)
  // }



  return (
    <>
      {modalView && (
        <Modal onClose={() => dispatch(toggleModalView(false))}>
          {userForm}
        </Modal>
      )}
    </>
  );
}

export default FormModal;
