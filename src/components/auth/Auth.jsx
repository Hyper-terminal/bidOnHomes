import { Button, Container, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./auth.module.css";
import { authActions } from "../../store/auth-Slice";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(authActions.login({ user: formData }));
    setFormData({ username: "", email: "" });
    navigate("/", { replace: true });
  };

  return (
    <Container fluid>
      <form onSubmit={submitHandler} className={classes.form}>
        <Input
          type="text"
          color="secondary"
          underlined
          labelPlaceholder="User Name"
          name="username"
          onChange={inputHandler}
          value={formData.username}
          required
        />
        <Input
          required
          value={formData.email}
          onChange={inputHandler}
          name="email"
          type="email"
          color="secondary"
          underlined
          labelPlaceholder="Email"
        />

        <Button flat color="secondary" shadow type="submit">
          Sign in
        </Button>
      </form>
    </Container>
  );
};

export default Auth;
