/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'App reference',
      collapsible: true,
      collapsed: false,
      link: {type: 'doc', id: 'program/index'},
      items: [
          'shortcuts',
          'synchronization',
      ],
    },
    {
      type: 'category',
      label: 'CLI reference',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'cli/index'},
      items: [
          'cli/basics',
        {
          type: 'category',
          label: 'Manpages',
          collapsible: true,
          collapsed: true,
          items: [
            {type: 'autogenerated', dirName: 'cli/man'}
          ],
        }
      ],
    },
  {
      type: 'category',
      label: 'Troubleshooting',
      collapsible: true,
      collapsed: false,
      link: {type: 'doc', id: 'troubleshooting'},
      items: [
          'directories',
          'double-prompts',
          'license-activation',
          'iot',
          'proxmox',
          'terminal'
      ]
  },
    {
      type: 'category',
      label: 'Legal',
      collapsible: true,
      collapsed: true,
      items: [
          'license',
          'terms-of-service',
          'end-user-license-agreement',
          'privacy-policy',
          'reporter-privacy-policy'
        ]
    },
      'security',
  ],
};

module.exports = sidebars;
