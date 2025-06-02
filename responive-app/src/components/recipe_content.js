import React, { useState } from 'react';
import BasicExample from "./cards";
import './Recipe_content.css';
import { Modal, Button } from 'react-bootstrap';
import Timebox from './timebox';
import Bot from './chatbot/App';

function Recipe_content({ results,showBtn,showBot }) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleShowModal = (json) => {
    setModalContent(json);
    setShowModal(true);
    showBtn(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent(null);
    showBtn(false)
  };
// console.log(modalContent)
  return (
    <div className="container" id="recipes">
      {results.map((result) => (
        <BasicExample key={result.id} json={result} handleShowModal={handleShowModal} showBtn={showBtn}/>
      ))}

      {modalContent && (
        <Modal show={showModal} onHide={handleCloseModal} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>{modalContent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {showBot && <Bot json_obj={modalContent}/>}
            <h5>Description</h5>
            {modalContent.description}
            <h5>Ingredients</h5>
            {modalContent.ingredients}
            <h5>Instructions</h5>
            {modalContent.instructions}
            {/* <h5></h5> */}
            <Timebox json_obj={modalContent} result_selected={false}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Recipe_content;
