import React, { useState } from "react";
import Head from "next/head";
import {
  Button,
  FormFeedback,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import * as emailjs from 'emailjs-com'

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submit = e => {
    e.preventDefault();

    let templateParams = {
      from_name: email,
      to_name: name,
      subject: subject,
      message_html: message,
    }

    emailjs.send(
      'gmail',
      'template_Ye0UPNLe',
       templateParams,
      'user_TQsung4qd1pK7KNcRAfdq'
    )

    resetForm()
  }

  const resetForm = () => {
    setEmail('');
    setName('');
    setSubject('');
    setMessage('');
  }

  return (
    <div className="m-3">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        ></link>
      </Head>

      <h1 className="p-heading1">Get in Touch</h1>
      <Form onSubmit={submit} className="w-75 p-3">
        <FormGroup>
          <Label className="text-muted">Email address</Label>
          <Input
            type="email"
            name="email"
            value={email}
            className="text-primary"
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </FormGroup>
        <FormGroup controlId="formBasicName">
          <Label className="text-muted">Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
            className="text-primary"
            onChange={e => setName(e.target.value)}
            placeholder="Name"
          />
        </FormGroup>
        <FormGroup controlId="formBasicSubject">
          <Label className="text-muted">Subject</Label>
          <Input
            type="text"
            name="subject"
            className="text-primary"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            placeholder="Subject"
          />
        </FormGroup>
        <FormGroup controlId="formBasicMessage">
          <Label className="text-muted">Message</Label>
          <Input
            type="textarea"
            name="message"
            className="text-primary"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </FormGroup>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Home;
