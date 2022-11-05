import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const API_URL = process.env.REACT_APP_API_URL;

export default function NewItemModal({ listid }) {

  // modal states
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // item states

  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleItemName = (e) => setItemName(e.value);
  const handleQuantity = (e) => setQuantity(e.value);

  function handleSubmit(e) {
    e.preventDefault();

    (async () => {
      try {
        const body = JSON.stringify({ listid, itemName, quantity, purchaseStatus: false });
        const rawData = await fetch(`${API_URL}/list/item`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: body,
        })
        console.log(rawData);
      } catch (e) {
        console.error(e);
      }
    })()
  }

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        New Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formItemName">
              <Form.Label>Item Name</Form.Label>
              <Form.Control placeholder="item name" value={itemName} onChange={handleItemName} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control placeholder="quantity" value={quantity} onChange={handleQuantity} />
            </Form.Group>
            <Button type="submit">
              Submit
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}