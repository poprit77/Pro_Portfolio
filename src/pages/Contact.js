import React, { useState, useRef } from "react";
import { Container, FloatingLabel, Form, Button } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

export const Contact = () => {
    const [isHover, setIsHover] = useState(false);

    const handleHoverIn = () => {
        setIsHover(true);
    };

    const handleHoverOut = () => {
        setIsHover(false);
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID
        )
            .then((result) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Your message was sent successfully!'
                })
            }, (err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops, something went wrong!',
                    text: err.text,
                })
            });
        e.target.reset();
    };

    const styles = {
        background: {
            backgroundColor: '#212529',
            height: '100vh',
            paddingTop: '10%',
        },
        containerStyle: {
            border: '2px groove',
            borderRadius: '5px',
            padding: '10px',
            boxShadow: '3px 3px 12px 8px #45c490'
        },
        text: {
            color: 'white',
            fontSize: '1.5rem'
        },
        form: {
            color: 'black',
            textAlign: 'center',
        },
        btn: {
            color: '#212529',
            backgroundColor: 'white',
            border: '#212529',
        },
        hover: {
            backgroundColor: isHover ? '#45c490' : 'white',
            opacity: isHover ? '.8' : '1',
            boxShadow: isHover ? '2px 2px 25px 1px #45c490' : '',
        }
    }
    return (
        <div style={styles.background}>
            <Container style={styles.containerStyle}>
                <Form ref={form} style={styles.form} onSubmit={sendEmail}>
                    <>
                        <div>
                            <p style={styles.text}>
                                Leave any comments, questions, or inquiries for collaboration! <br></br>
                                We are the ones to build our community and participate in the ever evolving Tech Industry! <br></br>
                                Let's connect!
                            </p>
                        </div>
                        <FloatingLabel
                            controlId="nameInput"
                            label="Your name"
                            className="mb-3"
                        >
                            <Form.Control type="text" name="from_name" as="textarea" placeholder="Your name" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="emailInput"
                            label="E-mail"
                            className="mb-3"
                        >
                            <Form.Control type="email" name="from_email" placeholder="E-mail" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="commentInput"
                            label="What would you like to say?"
                            className="mb-3">
                            <Form.Control
                                as="textarea"
                                name="message"
                                placeholder="What would you like to say?"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <FloatingLabel>
                            <Button style={{ ...styles.btn, ...styles.hover }} onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut} as="input" type="submit" value="Send" />
                        </FloatingLabel>
                    </>
                </Form>
            </Container>
        </div>
    )
}