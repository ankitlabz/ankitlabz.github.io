import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const repo = 'https://github.com/ankitlabz/ankitlabz.github.io'
const portfolioUrl = 'https://ankitlabz.github.io/portfolio/#/'

const config: DocsThemeConfig = {
  logo: <span>Ankit · DevOps notes</span>,
  project: {
    link: repo,
  },
  docsRepositoryBase: `${repo}/tree/main`,
  footer: {
    text: (
      <span>
        Ankit Pandey —{' '}
        <a href={portfolioUrl} style={{ textDecoration: 'underline' }}>
          Portfolio
        </a>
        {' · '}
        <a href={repo} style={{ textDecoration: 'underline' }}>
          GitHub
        </a>
      </span>
    ),
  },
  navbar: {
    extraContent: (
      <>
        <a
          href={portfolioUrl}
          target="_blank"
          rel="noreferrer"
          style={{ fontWeight: 600 }}
        >
          Portfolio ↗
        </a>
      </>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent: ({ title, type }) => <>{title}</>,
  },
}

export default config;
