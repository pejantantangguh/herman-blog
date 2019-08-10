import React from 'react';
import Layout from '../components/layout';
import {css} from '@emotion/core';
import {styled} from '@emotion/styled';
import Image from 'gatsby-image';


class Contact extends React.Component{


    state= {
        firstName: "",
        lastName :"",
        email:"",
        message:""
    }
    handleInputChange = e => {
        const target = e.target;
        const value = e.value;
        const name = target.name
        this.setState({
            [name]:value,
        });
    };
    
    render(){

    return (    
        <>
            <Layout>
            <h1>Contact Page</h1>
                <form method="post" netlify-honeypot="bot-field" data-netlify="true">
                      <input type="hidden" name="bot-field"/>
                    <label>First Name
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                    />
                    </label>
                    <label>Last Name
                        <input 
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label>Email
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label>
                        Message
                        <textarea name="message" id="message" rows="5" />
                    </label>
                    <button type="submit">Submit</button>
                </form>        
            </Layout>
        </>
        );
    }
}

export default Contact;