import React from 'react';
import {CotactSection, ContactTitle, Span, Form, FormInput, InputText, InputEmail,  InputSub, TextArea, InputSubmit    } from './Contactstyle.js';
import Footer from './../Footer/Footer';
function Contact(props) {
    return (
        <React.Fragment>
        <CotactSection>
        <div className="container">
            <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
            <Form action="">
                <FormInput>
                    <InputText type="text" placeholder="Your Name" />
                    <InputEmail type="email" placeholder="Your Email" />
                </FormInput>
                <InputSub type="text" className="sub" placeholder="Your Subject" />
                <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                <InputSubmit type="submit" value="Send Message" />
            </Form>
        </div>
    </CotactSection>
    <Footer />
    </React.Fragment>
    );
}

export default Contact;