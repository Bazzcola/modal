import React from 'react';
import '../modal/Modal.scss';
interface check {
  openWindow:boolean;
  openModal:() => void;
}
export const Modal:React.FC<check> = ({openModal, openWindow}) => {

  const cancel = () => {
    return openModal();
  }

  const done = () => {
    return openModal();
  }

  window.onclick = (event:any) => {
    if(event.target.matches('.back-drop')) {
      openModal();
    }
  }

  return (
      <div className={openWindow ? "modal-container" : "modal-container-hide"}>
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
