import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import ContentWrapper from '../components/styles/contentWrapper';

const FormStyles = styled.form`
  * + * {
    margin-top: 1em;
  }
  input,
  textarea {
    background-color: #f1f1f1;
    border: 2px solid transparent;
    display: block;
    font-size: 1em;
    margin-top: 1em;
    padding: 0.5em;
    &:focus {
      border: 2px solid ${props => props.theme.darkRed};
    }
  }
  input[type=submit] {
    background-color: ${props => props.theme.darkRed};
    border: 2px solid ${props => props.theme.darkRed};
    color: ${props => props.theme.white};
    font-size: 1.3em;
    padding: 1rem 2rem;
    &:hover,
    &:focus {
      background-color: ${props => props.theme.white};
      color: ${props => props.theme.darkRed};
    }
  }
`

const Contact = () => (
  <Layout page="contact">
    <ContentWrapper>
      <h1>Hi!</h1>
      <p>Have a comment or question? Feel free to be in touch and I'll get back to you as soon as I can.</p>
      <FormStyles
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field">
        <div style={{ visibility: `hidden`, height: 0 }}>
          <input name="bot-field" />
        </div>
        <div>
          <label htmlFor="name">Name:
          <input
            id="name"
            name="name"
            placeholder="Sam Smith"
            required
            size="40"
            type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="email">Email:
            <input
              id="email"
              name="email"
              placeholder="sam@example.com"
              type="email"
              size="40" />
          </label>
        </div>
        <div>
          <label htmlFor="message">Message:
          <textarea
            id="message"
            cols="50"
            rows="10"
            name="message"
            placeholder="Your message"></textarea>
          </label>
        </div>
        <div>
          <input type="submit" value="Say hello!" />
        </div>
      </FormStyles>
    </ContentWrapper>
  </Layout>
)

export default Contact;