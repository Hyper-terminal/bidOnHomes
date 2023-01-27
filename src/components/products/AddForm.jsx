import React, { useState } from "react";
import { Button, Input, Modal, Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productActions } from "../../store/product-Slice";

const AddForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    quantity: "",
    image: "",
  });

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const totalPrice = Number(formData.price) * Number(formData.quantity);
    dispatch(productActions.addItem({ ...formData, totalPrice: totalPrice }));
    navigate("/products");
  };
  return (
    <>
      <Button color="gradient" onPress={handler} ghost>
        Add Product
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <form onSubmit={submitHandler}>
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Add Item{" "}
              <Text b size={18}>
                to Inventory
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Name (required)"
              type="text"
              name="title"
              value={formData.title}
              onChange={changeHandler}
              required
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              type="text"
              name="description"
              value={formData.description}
              onChange={changeHandler}
              placeholder="Description (Optional)"
            />

            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              type="number"
              name="price"
              value={formData.price}
              onChange={changeHandler}
              placeholder="Price (Required, Decimal)"
              required
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              name="quantity"
              value={formData.quantity}
              onChange={changeHandler}
              size="lg"
              required
              type="number"
              placeholder="Quantity (Required, Number)"
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              name="image"
              value={formData.image}
              onChange={changeHandler}
              size="lg"
              placeholder="Image (Optional, user image url)"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onPress={closeHandler}>
              Close
            </Button>
            <Button auto type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default AddForm;
