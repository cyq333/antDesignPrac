import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import { createStore } from "redux";
//import Rx from 'rxjs/Rx';
import "./login.css";


//Rx.Observable.of(1,2,3)

// const action = {
//   type: "login",
//   payload: "login success"
// };

const loginType = "login";
function addLogin(text) {
  return {
    type: loginType,
    payload: text
  };
}
const loginSuccessAction = addLogin("login success"),
  loginFailAction = addLogin("login fail");
//View 发出 Action
//store.dispatch(loginSuccessAction);
const defaultState = "fail";
const reducer = (state = defaultState, loginSuccessAction) => {
  switch (loginSuccessAction.type) {
    case "login":
      return {
        loginState: loginSuccessAction.payload
      };
    default:
      return state;
  }
};
const store = createStore(reducer);
//当前时刻的state
const state = store.getState();
//监听
// store.subscribe(listener);
// let unsubscribe = store.subscribe(() => console.log(store.getState()))
// unsubscribe();

const FormItem = Form.Item;

class NormalLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginState: "fail"
    };
  }

  handleSubmit = e => {
    //console.log(this.props);
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(err, values);
      if (!err) {
        console.log("Received values of form: ", values);
        store.dispatch(loginSuccessAction);
        console.log(store.getState());
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            {/* <Link to={"/"}>Log in</Link> */}
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const Login = () => {
  return (
    <div className="loginwrapper">
      <WrappedNormalLoginForm />
    </div>
  );
};

export default Login;
