import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from '../Footer';
const DeleteTourForm = () => {
  const [tourId, setTourId] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (event) => {
    setTourId(event.target.value);
  };

  const handleDelete = () => {
    let token = localStorage.getItem('token');
    axios
      .delete(`http://localhost:3001/tour/delete/${tourId}`, {
        headers: {
          token: token,
        },
      })
      .then((response) => {
        console.log(response);
        const result = response.data;
        const { status, message } = result;
        if (status === 'SUCCESS') {
          alert(message, status);
        } else {
          alert(message);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
  <Navbar/>
      <section className="vh-300">
        <div className="container  " id="cont">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" id="card">
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">DELETE TOUR</h3>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter a Tour ID"
                      value={tourId}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={openModal}
                  >
                    Delete Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the tour with ID: <strong>{tourId}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteTourForm;
