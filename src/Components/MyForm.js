import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;

  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;
export const FormWrap = styled.div`
  margin-top: 55px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;
export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
export const Form = styled.form`
  border: ${(props) => `1px solid #fff`};
  background: ${(props) => `linear-gradient(45deg, #151D24, #ec533f23)`};
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;
export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;
export const FormButton = styled.button`
  background: rgba(155, 155, 155, 0.2);
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :active {
    background: ${(props) => `#151D24`};
  }
`;
export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }
  render() {
    const { status } = this.state;
    return (
      <>
        {/* <Container> */}
        <FormWrap>
          <FormContent>
            <Form
              onSubmit={this.submitForm}
              action="https://formspree.io/f/xdoplbao"
              method="POST"
            >
              <FormH1>Connect with Me:</FormH1>
              <FormLabel htmlFor="for">Name:</FormLabel>
              <FormInput type="name" name="name" required />
              <FormLabel htmlFor="for">Email:</FormLabel>
              <FormInput type="email" name="email" required />
              <FormLabel htmlFor="for">Message:</FormLabel>
              <FormInput type="text" name="message" required />
              {/* <FormButton type='submit'>Continue</FormButton> */}
              {status === "SUCCESS" ? <p></p> : <FormButton>Submit</FormButton>}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
              {/* <FormButton>Connect on Social Media</FormButton> */}
              {/* <Text>Forgot password</Text> */}
            </Form>
          </FormContent>
        </FormWrap>
        {/* </Container> */}
      </>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
