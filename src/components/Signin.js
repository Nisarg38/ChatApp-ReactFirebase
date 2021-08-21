import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { auth } from "../firebase.js";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { motion } from "framer-motion";

const blob = styled.div`
  display: flex;
`;

function Signin() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 8000);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <blob></blob>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100vh",
              alignItems: "center",
            }}
          >
            <Button
              style={{
                padding: "30px",
                fontSize: "20px",
                borderRadius: "0",
                fontWeight: "600",
              }}
              onClick={signInWithGoogle}
            >
              Sign In With Google
            </Button>
          </div>
        </>
      )}
    </>
  );
}

export default Signin;
