import React, { Component } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import emailjs from "emailjs-com";
import "../styles.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      successMessage: "",
      resColor: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, phone, message } = this.state;
    let fieldValidation = true;
    if (message === "") {
      this.setState({
        successMessage: "Please fill details",
        resColor: "text-danger",
      });
      fieldValidation = false;
    }
    if (phone === "") {
      this.setState({
        successMessage: "Please fill phone",
        resColor: "text-danger",
      });
      fieldValidation = false;
    }
    if (email === "") {
      this.setState({
        successMessage: "Please fill Email",
        resColor: "text-danger",
      });
      fieldValidation = false;
    }
    if (name === "") {
      this.setState({
        successMessage: "Please fill Name",
        resColor: "text-danger",
      });
      fieldValidation = false;
    }
    if (fieldValidation) {
      this.setState({ successMessage: "" });
      this.submitForm(e);
    }
  }

  submitForm(e) {
    e.preventDefault();
    console.log("submit clicked", this.state);
    const { name, email, phone, message } = this.state;
    let templateParams = {
      from_name: name,
      from_email: email,
      to_name: "hey@gmail.com",
      subject: phone,
      message_html: message,
    };
    emailjs
      .send("gmail", "mobiux", templateParams, "user_1VYpUSHrxNxyFxuYwgBhu")
      .then((res) => {
        console.log("Email successfully sent!", res);
        this.setState({
          successMessage: "Email successfully sent!",
          resColor: "text-success",
        });
        this.resetForm();
      })
      .catch((err) => {
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        );
        this.setState({
          successMessage: "Error sending mail!",
          resColor: "text-danger",
        });
      });
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <footer>
        <div className="container my-4" id="contact-us">
          <div className="row ">
            <div className="col-md-6 contact-details p-4">
              {/* <img className="contact-us" src={ContactUs} alt="contact-us" /> */}
              <div className="row mt-4">
                <div className="col-md-7">
                  <span>
                    <p>
                      Contact us &nbsp; &nbsp;
                      <a className="contact-us" href="mailto:hey@gmail.com">
                        hey@gmail.com
                      </a>
                    </p>
                  </span>
                </div>
                <div className="col-md-5">
                  <span className="contact-us">
                    <p>+91 1234567890</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-4">
              <h1 className="footer-text">Contact US</h1>
              <Form onSubmit={(e) => this.handleSubmit(e)}>
                <Form.Group className="mt-4">
                  <Row className="mt-3 ml-0">
                    <label>My name is</label>
                    <Col>
                      <Form.Control
                        size="sm"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={(e) => this.handleChange(e)}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3 ml-0">
                    <label>Email ID</label>
                    <Col>
                      <Form.Control
                        size="sm"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={(e) => this.handleChange(e)}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3 ml-0">
                    <label>Phone number</label>
                    <Col>
                      <Form.Control
                        size="sm"
                        type="text"
                        name="phone"
                        value={this.state.phone}
                        onChange={(e) => this.handleChange(e)}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3 ml-0">
                    <label>Details</label>
                    <Col>
                      <Form.Control
                        size="sm"
                        type="text"
                        name="message"
                        value={this.state.message}
                        onChange={(e) => this.handleChange(e)}
                      />
                    </Col>
                  </Row>
                  {this.state.successMessage !== "" ? (
                    <div className="mt-3">
                      <h6 className={this.state.resColor}>
                        {this.state.successMessage}
                      </h6>
                    </div>
                  ) : (
                    ""
                  )}
                  <Button
                    className="button float-right mt-5 pl-5 pr-5"
                    type="submit"
                  >
                    Send
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </div>
          <div className="row contact-detail align-items-center mt-5">
            <div className="col-6 pl-4 pr-4">
              <p>
                <a href="/">
                  <span
                    style={{
                      fontSize: "1.225rem",
                      fontWeight: "900",
                      fontFamily: "Flama-Bold",
                    }}
                  >
                    Dandeli Forest Escapes
                  </span>
                </a>
                &nbsp; &nbsp; &nbsp;3rd Floor, street, Sector , Layout, City
              </p>
            </div>

            <div className="col-6 social-icons">
              <a className="fa fa-instagram"></a>
              <a className="fa fa-facebook"></a>
            </div>
          </div>
          <div className="text-center my-3">
            <p>©2023 by Dandeli Forest Escapes.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
