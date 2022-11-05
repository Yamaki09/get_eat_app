import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const API_URL = process.env.REACT_APP_API_URL;

export default function NewItemModal({ listid, items, setItems }) {

  // modal states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(e) {
    e.preventDefault();
    (async () => {
      try {
        // not sure what the best way to grab values from a bootstrap list is, but this works for now.
        const body = JSON.stringify({ listid, itemName: e.target[0].value, quantity: e.target[1].value, purchaseStatus: false });
        const rawData = await fetch(`${API_URL}/list/item`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: body,
        })
        let data = await rawData.json();
        data = { itemName: data.item_name, quantity: data.quantity, purchased: data.purchased };
        handleClose()
        setItems([...items, data]);
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
              <Form.Control placeholder="item name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control placeholder="quantity" />
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

// value={itemName} onChange={handleItemName} 
//value={quantity} onChange={handleQuantity}