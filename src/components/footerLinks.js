import React from 'react';

const FooterLinks = () => {
  const links = [
    {
      name: 'Contentful',
      link: 'https://www.contentful.com/'
    },
    {
      name: 'GatsbyJS',
      link: 'https://www.gatsbyjs.org/'
    },
    {
      name: 'Unsplash',
      link: 'https://www.unsplash.com'
    }
  ]
  const linkItems = links.map(({name, link}, index) => {
    return (
      <li key={`footer-link-${index}`}>
        <a href={link}>{name}</a>
      </li>
    )
  })
  return (
    <ul>
      <span>Made with:</span>
      {linkItems}
    </ul>
  )
}

export default FooterLinks;
