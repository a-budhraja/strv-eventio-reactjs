import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';
import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators,
} from "react-reactive-form";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import styles from "./styles";
import Button from '@material-ui/core/Button/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

export default class Login extends Component {
  loginForm = FormBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
    rememberMe: false
  });

  // handleReset = () => {
  //   this.loginForm.reset();
  // }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form values", this.loginForm.value);
  }
  render() {
    return (
      <FieldGroup
        control={this.loginForm}
        render={({ get, invalid }) => (
          <Card>
            <form onSubmit={this.handleSubmit} autoComplete="off">
              <FieldControl
                name="username"
                render={({ handler, touched, hasError }) => (
                  <div>
                    <TextField
                      required
                      error={touched
                        && hasError("required")
                        && "Username is required"}
                      label="Email"
                      margin="normal"
                      {...handler()} />
                    <FormHelperText>
                      {touched
                        && hasError("required")
                        && "Username is required"}
                    </FormHelperText>
                  </div>
                )}
              />
              <FieldControl
                name="password"
                render={({ handler, touched, hasError }) => (
                  <div>
                    <TextField
                      required
                      error={touched
                        && hasError("required")
                        && "Username is required"}
                      label="Password"
                      margin="normal"
                      type="password"
                      {...handler()} />
                    <FormHelperText>
                      {touched
                        && hasError("required")
                        && "Password is required"}
                    </FormHelperText>
                  </div>
                )}
              />
              <FieldControl
                name="rememberMe"
                render={({ handler }) => (
                  <div>
                    <input {...handler("checkbox")} />
                  </div>
                )}
              />
              <Button variant="contained" color="primary"
                type="submit"
                disabled={invalid}
              >
                Submit
              </Button>
            </form>
          </Card>
        )}
      />
    );
  }
}