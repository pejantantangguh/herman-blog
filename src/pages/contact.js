import React from 'react';
import Layout from '../components/layout';
import { css } from '@emotion/core';
import { styled } from '@emotion/styled';
import Image from 'gatsby-image';
import './assets/contact.css';



class Contact extends React.Component {


    state = {
        fullName: "",
        email: "",
        phone: "",
        reason: "",
        message: ""
    }
    handleInputChange = e => {
        const target = e.target;
        const value = e.value;
        const name = target.name
        this.setState({
            [name]: value,
        });
    };

    render() {

        return (
            <>
                <Layout>
                    <div>
                        <h3 className="white">
                        </h3>&hearts;
                    <h3>
                            Hello, Let's get in touch
                    </h3>
                    </div>
                    <form method="post" netlify-honeypot="bot-field" data-netlify="true" className="contact-form">
                        <input type="hidden" name="bot-field" />
                        <input type="text" name="fullName" value={this.state.fullName} onChange={this.handleInputChange}
                            placeHolder="Your Name please" />
                        <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange}
                            placeholder="Your Email" />
                        <input type="number" name="phone" value={this.state.phone} onChange={this.handleInputChange}
                            placeholder="Phone No" />
                        <input type="text" name="reason" value={this.state.reason} onChange={this.handleInputChange}
                            placeholder="Reason for contact" />
                        <textarea name="message" id="message" rows="2" placeholder="Message" value={this.state.message}
                            onChange={this.handleInputChange} />
                        <button type="submit">Submit</button>
                    </form>
                </Layout>
            </>
        );
    }
}

export default Contact;