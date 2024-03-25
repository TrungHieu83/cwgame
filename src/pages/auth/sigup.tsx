import React from "react";
import { useEffect, useRef, useState } from "react";

import "@/styles/auth.css";
import "@/styles/common/common.css";
import { Box } from "@mui/material";
import Layout from "@/layouts/layout";

const LoginForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputPWRef = useRef<HTMLInputElement>(null);
  const [hidePassword, setHidePassword] = useState<boolean>(false);
  const [emailOrUserName, setEmailOrUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <Layout>
      <Box
        sx={{
          padding: `0px`,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <section className="section-form-login mx-auto">
          <div className="container wrapper">
            <form className="form-auth">
              <h2 className="form-title">Signup</h2>
              <div className="form-group">
                <input
                  type="text"
                  id="input_email"
                  className={`input ${emailOrUserName ? 'has-val' : ''}`}
                  onChange={(e) => setEmailOrUserName(e.target.value)}
                  name="email"
                />
                <label htmlFor="input_email" className="label-input">
                  Email or username
                </label>
              </div>
              <div className="form-group">
                <input
                  ref={inputPWRef}
                  type={hidePassword ? 'text' : 'password'}
                  id="input_pass"
                  className={`input ${password ? 'has-val' : ''}`}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                />
                <label htmlFor="input_pass" className="label-input">
                  Password
                </label>
                <span
                  className={`btn-toggle-display btn-show-pass ${hidePassword ? '' : 'active'}`}
                >
                  <img src="/icons/show-password.png" alt="" loading="lazy" onClick={() => {
                    setHidePassword(true);
                  }}/>
                </span>
                <span 
                  className={`btn-toggle-display btn-hide-pass ${hidePassword ? 'active' : ''}`}
                >
                  <img src="/icons/hide-password.png" alt="" loading="lazy" onClick={() => setHidePassword(false)}/>
                </span>
              </div>
              <button className="form-btn btn-submit" type="submit">
                Create an account
              </button>
              <div className="form-bottom">
                <span>Already have an account?</span>
                <a
                  href="./login.html"
                  title=""
                  className="form-btn btn-login d-block"
                >
                  Login
                </a>
              </div>
            </form>
          </div>
        </section>
      </Box>
    </Layout>
  );
};

export default LoginForm;
