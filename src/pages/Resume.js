import { Container, FloatingLabel, Button } from "react-bootstrap";
import { useState } from "react";
import Iframe from "react-iframe";
// react -pdf
export const Resume = () => {
  const [isHover, setIsHover] = useState(false);

  const handleHoverIn = () => {
    setIsHover(true);
  };

  const handleHoverOut = () => {
    setIsHover(false);
  };

  const downloadFile = () => {
    window.location.href =
      "https://docs.google.com/document/d/e/2PACX-1vTGUPoqkKyqFYDJg4G439Cd4PvywVUpV-TQpx6e_89KehUzg2rMt7zs_UJrxNa7mhg1EQUHejal-seU/pub";
  };
  const styles = {
    background: {
      backgroundColor: "#212529",
      height: "200vh",
      width: "100%",
    },
    text: {
      color: "white",
      textAlign: "center",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",

    },
    btn: {
      color: "#212529",
      backgroundColor: "white",
      border: "#212529",
    },
    hover: {
      backgroundColor: isHover ? "#45c490" : "white",
      opacity: isHover ? ".8" : "1",
      boxShadow: isHover ? "2px 2px 25px 1px #45c490" : "",
    },
    flexDisplay: {
      display: "flex",
      justifyContent: "center",
      paddingTop: "5px",
    },
  };
  return (
    <div style={styles.background}>
      <Container style={{ height: "200vh" }}>
        <div style={styles.text}>
          <Iframe
            src="https://docs.google.com/document/d/e/2PACX-1vRLTmWBHFiq2FrDrmzjRtWwpyuVzIvs1XMzBC5wrfKfAL-eendiKRSkV7C-5qCcy8nHq2ndv97jpC7J/pub?embedded=true"
            title="Resume"
            width="70%"
            height="600px"
            marginHeight="0"
            
          ></Iframe>
        </div>
        <FloatingLabel style={styles.flexDisplay}>
          <Button
            style={{ ...styles.btn, ...styles.hover }}
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
            onClick={downloadFile}
            as="input"
            type="submit"
            value="Download my Resume"
          />
        </FloatingLabel>
      </Container>
    </div>
  );
};
