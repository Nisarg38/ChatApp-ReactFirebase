import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { auth } from "../firebase.js";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { motion } from "framer-motion";
import transitions from "@material-ui/core/styles/transitions";
import b from "../images/blob.svg";

const Blob = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: b;
  font-size: 2rem;
`;

const Image = styled(motion.img)`
display: flex;
justify-content: center;
align-items: center;
width: 100%
height: 100%;
`;

const Text = styled(motion.div)`
  position: absolute;

  font-size: 2rem;
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
    }, 0);
  }, []);

  return (
    <>
      {loading ? (
        <>
          {/*
            <Blob animate={{}}>
            <Image
              src={b}
              alt="planet"
              initial={{ scale: 0 }}
              animate={{
                scale: 30,
                transition: { duration: 2 },
              }}
            />
          </Blob>
          <h1
            styles={{
              position: "absolute",
              marignBotton: "2rem",
              margin: "0",
              padding: "0",
            }}
          >
            Hi, Thanks for visiting my website!!
          </h1>
        */}
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
