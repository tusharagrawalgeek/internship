import React, { useState } from "react";
import bg from "./img/bg.png";
import {Input,Form} from "antd"
function Footer() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    emailerror:false
  });
  function handleChange(e) {
    const obj = e.target;
    if (obj.name === "email") {
      if (
        !String(obj.value)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        // error = true;
        
        setState(prev=>{
            return({
                ...prev,
                [obj.name]:obj.value,
                emailerror:true
            });
        })
      }}
      setState(prev=>{
        return({
            ...prev,
            [obj.name]:obj.value,
        });
    })
    
  }
  function submit() {
    console.log(state);
  }
  return (
    <>
      <div>
        <div
          style={{
            padding: "82px 103px ",
            background: `url(${bg})`,
            width: "100%",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          <div style={{ display: "inline-block" }}>
            <div className="title2">Newsletter</div>
            <div className="desc2">
              Get news about articles and updates in your inbox.
            </div>
          </div>
          <div
            style={{
              display: "inline-block",
              paddingLeft: "190px",
              verticalAlign: "top",
            }}
          >
            {/* <input
              type="text"
              name="name"
              className="input1"
              placeholder="NAME"
              autoComplete="off"
              onChange={handleChange}
              value={state.name}
    
            />
            <br /> */}
            <Form>
            <Form.Item
            
          name="name"
          rules={[
            { required: true, message: "Please input value!" },
            { max: 10, message: "length should be less then 10 letters!" }
          ]}
        >
          <Input
            name="name"
            className="input1"
            placeholder="NAME"
            autoComplete="off"
            onChange={handleChange}
            value={state.name}
          ></Input>
        </Form.Item>
        <Form.Item
          name="email"
          autoComplete="off"
          rules={[
            { required: true, message: "Please input value!" },
            { max: 10, message: "length should be less then 10 letters!" }
          ]}
        >
          <Input
          type="email"
            name="email"
            className="input1"
            placeholder="EMAIL"
            autoComplete="off"
            onChange={handleChange}
            value={state.email}
          ></Input>
        </Form.Item>
        <Form.Item
          name="message"
          rules={[
            { required: true, message: "Please input value!" },
            { max: 10, message: "length should be less then 10 letters!" }
          ]}
        >
          <Input
            name="message"
            className="input1"
            placeholder="MESSAGE"
            autoComplete="off"
            onChange={handleChange}
            value={state.message}
          ></Input>
        </Form.Item>
      </Form>
            {/* <br />
            <input
              type="text"
              name="message"
              className="input1"
              placeholder="MESSAGE"
              autoComplete="off"
              onChange={handleChange}
              value={state.message}
            />
            <hr className="hr5"/> */}
          </div>
          <div className="text8">GET</div>
          <div className="text8" style={{ paddingTop: "0px" }}>
            IN TOUCH
          </div>
          <button className="btn4" onClick={submit}>
            SEND
          </button>
        </div>
        <div
          className="copyright"
          style={{
            background: "black",
            textAlign: "center",
            margin: "auto",
            padding: "24px 0",
          }}
        >
          Copyright 2022 All Right Reserved By SG
        </div>
      </div>
    </>
  );
}
export default Footer;
