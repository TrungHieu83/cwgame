import React from "react";
import { useEffect, useRef, useLayoutEffect, useState } from "react";

import "@/styles/auth.css";
import "@/styles/common/common.css";
import { Box } from "@mui/material";
import Layout from "@/layouts/layout";

const LoginForm = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const inputPWRef = useRef<HTMLInputElement>(null);
    const [hidePassword, setHidePassword] = useState<boolean>(true);
    const [emailOrUserName, setEmailOrUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

  return (
    <Layout>
      <Box
        sx={{
          padding: `0`,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <section className="section-form-login mx-auto">
          <div className="container wrapper">
            <form className="form-auth">
              <h2 className="form-title">Login</h2>
              <div className="form-group">
                <input
                  type="text"
                  ref={inputRef}
                  id="input_email"
                  name="email"
                  className={`input ${emailOrUserName ? 'has-val' : ''}`}
                  autoComplete="off"
                  onChange={(e) => setEmailOrUserName(e.target.value)}
                />
                <label htmlFor="input_email" className="label-input">
                  Email or username
                </label>
              </div>
              <div className="form-group">
                <input
                  ref={inputPWRef}
                  type={hidePassword ? 'password' : 'text'}
                  id="input_pass"
                  name="password"
                  className={`input ${password ? 'has-val' : ''}`}
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
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
                Login
              </button>

              <div className="form-bottom">
                <span>Don’t have an account?</span>
                <a
                  href="./register.html"
                  title=""
                  className="form-btn btn-register d-block"
                >
                  Create an account
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
