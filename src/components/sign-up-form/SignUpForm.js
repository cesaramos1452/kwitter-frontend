import React, { useState } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";
import { Link } from "react-router-dom";
import "./SignUpForm.css";
import { Hide, View } from "grommet-icons";
import { grommet } from "grommet/themes";
import { Box, Button, Form, FormField, Grommet, TextInput } from "grommet";

export const SignUpForm = ({ createUser, loading, error }) => {
  // Not to be confused with "this.setState" in classes
  const [state, setState] = useState({
    username: "",
    displayName: "",
    password: "",
  });

  const [reveal, setReveal] = React.useState(false);

  const handleSignUp = () => {
    createUser(state);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };
  return (
    <Grommet full theme={grommet} style={{ height: "75vh" }}>
      <Box fill align="center" justify="center">
        <Box align="center">
          {loading && <Loader />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
          <Form className="SignUpForm" id="signup-form" onSubmit={handleSignUp}>
            <Box margin="small" direction="row" align="center" round="small" border>
              <TextInput
                type="text"
                label="username"
                placeholder="username"
                name="username"
                autoFocus
                value={state.username}
                required
                htmlFor="username"
                onChange={handleChange}
              />
             </Box>
            <Box margin="small" direction="row" align="center" round="small" border>
              <TextInput
                type="text"
                label="display name"
                name="displayName"
                placeholder="display name"
                autoFocus
                value={state.displayName}
                required
                htmlFor="displayName"
                onChange={handleChange}
              />
             </Box>
            <Box margin="small" direction="row" align="center" round="small" border>
              <TextInput
                type={reveal ? "text" : "password"}
                name="password"
                placeholder="password"
                value={state.password}
                required
                htmlFor="password"
                onChange={handleChange}
              />
              <Button
                icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
                onClick={() => setReveal(!reveal)}
              />
            </Box>
            <Box direction="row" justify="end" margin={{ top: "medium" }}>
              <Link to={`/`}>
                <Button
                  type="submit"
                  label="Sign Up"
                  onClick={handleSignUp}
                  primary
                  disabled={loading}
                  color="lightgreen"
                />
              </Link>
              </Box>
              <Box direction="row" justify="end" margin={{ top: "medium" }}>
                <Link to={`/`}>
                    <Button
                      label="Login"
                      primary
                      disabled={loading}
                    />
                </Link>
              </Box>
          </Form>
        </Box>
      </Box>
    </Grommet>
  );
};

SignUpForm.propTypes = {
  createUser: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
};
