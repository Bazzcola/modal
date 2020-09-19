import React,{useState} from 'react';
import {Modal} from './modal/Modal';
import './App.scss';

export const App = () => {
  const [openWindow, setOpenWindow] = useState(false);
  const openModal = () => {
    setOpenWindow(prevState => !prevState);
  }
  window.onclick = (event:any) => {
    if(event.target.matches('.back-drop')) {
      openModal();
    }
  }
  return (
    <div className="container">
      <button className="test-modal" onClick={openModal}>Open modal</button>
      <Modal openWindow={openWindow} openModal={openModal}/>
    </div>
  );
}
