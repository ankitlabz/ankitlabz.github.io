import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const repo = 'https://github.com/ankitlabz/ankitlabz.github.io'

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
        <a href={repo} style={{ textDecoration: 'underline' }}>
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
