import React from 'react';
import '../modal/Modal.scss';
interface check {
  openWindow:boolean;
  openModal:() => void;
}
export const Modal = (props:check) => {
  const cancel = () => {
    return props.openModal();
  }
  const done = () => {
    return props.openModal();
  }
  return (
      <div className={props.openWindow ? "modal-container" : "modal-container-hide"}>
        <div className="back-drop">
            <div className="back-drop-modal">
                <h1>you are no longer pro</h1>
                <div className="back-drop-modal-buttons">
                <button className="back-drop-modal-buttons-exit" onClick={cancel}>Cancel</button>
                <button className="back-drop-modal-buttons-ok" onClick={done}>OK</button>
                </div>
            </div>
        </div>
       </div> 
  );
}
