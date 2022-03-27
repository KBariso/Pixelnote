import React, { useState } from "react";
import { Modal } from "../../context/Modal";
// import LoginForm from "./LoginForm";
import CreateNotebook from "../CreateNotebook";
import './NewNotebookModal.css'


function NewNotebookModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="NewNotebookBttnContainer">
      <button className="NewNotebookBttn" onClick={() => setShowModal(true)}>
        New Notebook +
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateNotebook />
        </Modal>
      )}
    </div>
  );
}

export default NewNotebookModal;
