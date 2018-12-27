import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const NavigationLinks = () => (
  <Fragment>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/blog">Blog</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li className="social">
      <a href="https://github.com/aberkow">
        <span className="screen-reader">Adam Berkowitz on Github</span>
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
    </li>
  </Fragment>
)

export default NavigationLinks;

