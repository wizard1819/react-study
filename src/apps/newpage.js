import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page() {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
      setModalOpen(!modalOpen);
    };
    return (
        <div>
        <Button color="primary" onClick={toggleModal}>
          Open Modal
        </Button>
  
        <Modal isOpen={modalOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Modal Title</ModalHeader>
          <ModalBody>
            <p>Modal Content Goes Here</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggleModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
}