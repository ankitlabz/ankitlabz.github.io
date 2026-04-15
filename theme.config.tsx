import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const repo = 'https://github.com/ankitlabz/ankitlabz.github.io'
const aboutUrl = 'https://ankitlabz.github.io/portfolio/#/'
const contactUrl = 'https://ankitlabz.github.io/portfolio/#/contact'

const navLinkStyle: React.CSSProperties = {
  fontWeight: 500,
  fontSize: '0.875rem',
  opacity: 0.9,
}

const config: DocsThemeConfig = {
  logo: <span>Ankit · DevOps notes</span>,
  project: {
    link: repo,
  },
  docsRepositoryBase: `${repo}/tree/main`,
  footer: {
    text: (
      <span style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
        <span>Ankit Pandey</span>
        <span aria-hidden style={{ opacity: 0.35 }}>
          ·
        </span>
        <a href={aboutUrl} target="_blank" rel="noreferrer" style={navLinkStyle}>
          About
        </a>
        <span aria-hidden style={{ opacity: 0.35 }}>
          ·
        </span>
        <a href={contactUrl} target="_blank" rel="noreferrer" style={navLinkStyle}>
          Contact
        </a>
        <span aria-hidden style={{ opacity: 0.35 }}>
          ·
        </span>
        <a href={repo} style={navLinkStyle}>
          GitHub
        </a>
      </span>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent: ({ title, type }) => <>{title}</>,
  },
}

export default config;
