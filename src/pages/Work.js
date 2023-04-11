import { Container, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

import rQ from "../Road Quest.png";
import yodaTranslate from "../yoda.png";

export const Work = () => {
  const styles = {
    background: {
      backgroundColor: "#212529",
      height: "200vh",
    },
    container:{
      backgroundColor:"#C3CED1"

    },
    text: {
      color: "black",
      textAlign: "center",
      fontSize: "25px",
    },
    updateText: {
      color: "black",
      textAlign: "center",
      fontSize: "25px",
    },
    alignment: {
      fontSize: "20px",
    },
    card: {
      width: "50%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: "5%",
    },
    cardPanel: {
      borderRadius: "5px",
      width: "100%",

    },
    linkLogo: {
      color: "#1E3050",
      paddingRight: "5px",
    },
    footer: {
      display: "flex",
      justifyContent: "center",
    },
    containerStyle: {
      border: "2px groove",
      borderRadius: "10px",
      padding: "10px",
      boxShadow: "3px 3px 12px 8px #d8b65c",
      height:"100vh",
      backgroundColor:"#C3CED1",

    },
    carouselStyle: {
      height:"100vh"
    }
  };
  return (
    <div style={styles.background}>
      <Container>
        <Carousel style={styles.containerStyle}>
          <Carousel.Item style={styles.carouselStyle}>
            <img
              className="d-block w-100"
              src={yodaTranslate}
              alt="First slide"
              style={styles.cardPanel}
            />
            <Carousel.Caption>
              <h5 style={styles.text}>Yoda Translate Application</h5>
              <hr style={styles.text}></hr>
              <p style={styles.text}>
                This unique application utilizes two API's that when combined,
                produce an inspirational quote from the widely known character,
                Yoda!
              </p>
              <div>
                <a
                  href="https://github.com/Morralytics/Yoda-Translator"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faSquareGithub}
                    size="3x"
                    style={styles.linkLogo}
                  />
                </a>{" "}
                <a
                  href="https://morralytics.github.io/Yoda-Translator/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    size="3x"
                    style={styles.linkLogo}
                  />
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={styles.carouselStyle}>
            <img
              className="d-block w-100"
              src={rQ}
              alt="Second slide"
              style={styles.cardPanel}
            />
            <Carousel.Caption>
              <h5 style={styles.updateText}>Road Quest Social Application</h5>
              <hr style={styles.text}></hr>
              <p style={{ ...styles.text, ...styles.alignment }}>                
                This webpage allows users to create and share roadtrip routes so
                that other users can look at your route and suggest stoppping
                points along the way.
              </p>
              <div style={styles.footer}>
                <a
                  href="https://github.com/poprit77/Road_Quest"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faSquareGithub}
                    size="3x"
                    style={styles.linkLogo}
                  />
                </a>{" "}
                <a
                  href="https://limitless-sea-80342.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    size="3x"
                    style={styles.linkLogo}
                  />
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};
