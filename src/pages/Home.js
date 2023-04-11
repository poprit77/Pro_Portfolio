import React from "react";
import { Container } from "react-bootstrap";
import BG from "../IMG-2650.png";
import PP from "../ProfilePicture.jpg";

export const Home = () => {
  const styles = {
    backgroundImage: {
      backgroundImage: `url(${BG})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "200vh",
      width: "100%",
    },
    background: {
        backgroundColor: '#212529',
        height: '100vh'
    },
    textAlign: {
      textAlign: "center",
    },
    textStyle: {
      color: "white",
      fontFamily: "Open Sans",
    },
    textHeader: {
      fontSize: "50px",
    },
    textContent: {
      height: "50%",
      fontSize: "30px",
    },
    imgAlign: {
      width: "20%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    imgStyle: {
      border: "2px groove",
      borderRadius: "10px",
      padding: "10px",
      boxShadow: "3px 3px 12px 8px #d8b65c",
    },
  };
  return (
    <div style={styles.backgroundImage}>
      <Container style={{height: "200vh"}}>
        <div
          style={{
            ...styles.textAlign,
            ...styles.textStyle,
            ...styles.textHeader,
          }}
        >
          <p>Hello and welcome!</p>
        </div>
        <br></br>
        <div style={styles.imgAlign}>
          <img
            className="d-block w-100 img-fluid rounded-circle"
            src={PP}
            alt="Profile"
            style={styles.imgStyle}
          />
        </div>
        <div
          style={{
            ...styles.textAlign,
            ...styles.textStyle,
            ...styles.textContent,
          }}
        >
          <br></br>
          <p>
            My name is Peter Ataras
            <br></br>I am a passionate Full Stack Engineer based in beautiful
            Portland Oregon where I design and build websites for everyone to
            use! As I work with code I find every "problem" is not a problem,
            but a challenge and an opportunity to grow and learn. Chasing these
            challenges is something I have come to enjoy very much, a reaction I
            was not expecting whem I first started coding. As you explore my
            website I hope you are able to see not only some examples of my 
            previous work, but also my life outside web development.
          </p>
        </div>
      </Container>
    </div>
  );
};
