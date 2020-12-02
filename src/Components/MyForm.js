import React from "react";
import "./myform.scss"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div class="box-form flex-container">
        <div class="flex-item flex-item-1"></div>
        <div class="flex-item flex-item-2">
          <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/xdoplbao"
          method="POST"
          >
          <label>Email:</label><br></br>
          <input type="email" name="email" /><br></br>
          <label>Message:</label><br></br>
          <input type="text" name="message" /><br></br>
          {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        </div>
      <div class="flex-item flex-item-3"></div>
      </div>
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