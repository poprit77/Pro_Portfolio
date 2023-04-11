import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import pizza from "../pizza.JPG";
import hiking from "../hiking.jpg";
import coffee from "../coffe.jpg";
import archery from "../archery.jpg";
import FullHeight from "react-full-height";


export const Story = () => {
  const styles = {
    background: {
      backgroundColor: "#212529",

    },
    cardBackground:{
        backgroundColor:"#C3CED1"
    },
    text: {
      color: "black",
      textAlign: "center",
      fontFamily: "Open Sans",
    },
    textHeader: {
      color: "black",
      textAlign: "center",
      fontFamily: "Open Sans",
      fontSize: "25px",
      fontWeight:"bolder",
      width: "50%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    cardStyle: {
      display: "flex",
      gap: "30px",
    },
    secondaryText: {
      color: "black",
      fontFamily: "Open Sans",
      fontSize: "20px",
    },
    listStyle: {
      lineHeight: "30px",
    },
    imgStyle: {
      boxShadow: "3px 3px 12px 8px #d8b65c",
      width: "95%",
      marginBottom: "15px",
      marginLeft: "auto",
      marginRight: "auto",
    },
  };
  return (
    <FullHeight canExceed style={styles.background}>
      <Row xs={1} md={2} className="g-4">
        <Col class="col-sm-12 col-md-6 col-lg-3">
          <Card style={styles.imgStyle}>
            <Card.Img variant="top" src={pizza} />
            <Card.Body style={styles.cardBackground}>
              <Card.Title style={styles.textHeader}>My love for cooking!</Card.Title>
              <Card.Text style={styles.secondaryText}>
                I have always loved cooking for as long as I can remember.
                Eventually this love turned into a passion. I spent a decade
                dedicating myself fully to the pursuit of that passion. It led
                me to new countries, countless friends, and many learning
                experiences. The culinary field taught me many valuable life
                lessons such as; time management, customer relationships,
                management, interpersonal relationships, and a can do attitude
                no matter the challenge. Eventually I decided to move onto new
                challenges. However; this does not mean I have lost my passion
                for cooking, I am simply exploring it in new ways.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={styles.imgStyle}>
            <Card.Img variant="top" src={coffee} />
            <Card.Body style={styles.cardBackground}>
              <Card.Title style={styles.textHeader}>International travel</Card.Title>
              <Card.Text style={styles.secondaryText}>
                Growing up I had quite the imagination, but pictures of foreign
                places always caught my eye. Pretty soon I realized I wanted to
                travel as much as possible and see all these mesmerizing places
                in person. When I was 19 I traveled through Europe and Guyana
                for 3 months. Since then I have returned to Europe and South
                America and yearn to travel to more remote and beautiful places.
                I hope my new career will give me the opportunity to work
                remotely, so I can further explore the world.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col class="col-sm-12 col-md-6 col-lg-3">
          <Card style={styles.imgStyle}>
            <Card.Img variant="top" src={hiking} />
            <Card.Body style={styles.cardBackground}>
              <Card.Title style={styles.textHeader}>The great outdoors</Card.Title>
              <Card.Text style={styles.secondaryText}>
                For as long as I can remember I have always loved the outdoors.
                Growing up we would go camping nearly every month. Although
                these days I can’t get out quite that often I still go whenever
                I have a chance. I especially enjoy going on backpacking trips
                and canoe trips. I hope to hike the PCT one day and take my
                outdoor adventures abroad.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={styles.imgStyle}>
            <Card.Img variant="top" src={archery} />
            <Card.Body style={styles.cardBackground}>
              <Card.Title style={styles.textHeader}>Archery</Card.Title>
              <Card.Text style={styles.secondaryText}>
                Another hobby of mine is archery. I grew up shooting bows, but
                did not pick one up for nearly a decade. Lately I have gotten
                back into archery and savor spending my evening at the range. I
                enjoy shooting from different vantage points, terrains, and
                obstacles. After some more practice I hope to join in on some
                competitions. In addition to the act of shooting I love the
                history behind it and learning all the different types of bows,
                arrows, and archery cultures that have developed over time.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </FullHeight>
  );
};
