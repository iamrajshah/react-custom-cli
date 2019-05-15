/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add new component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Please select the type of component',
      default: 'Stateless Function',
      choices: () => [
        'Stateless Function',
        'React.PureComponent',
        'React.Component',
      ],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What it should be called?',
      default: 'Home',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name is already exists, please select different name'
            : true;
        }

        return 'Without name we cannot proceed!!';
      },
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    let componentTemplate;

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = './component/statelessComponent.js.hbs';
        break;
      }
      default: {
        componentTemplate = './component/reactComponent.js.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path: '../src/app/components/{{properCase name}}.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/app/tests/components/{{properCase name}}.test.js',
        templateFile: './component/test.js.hbs',
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'prettify',
      path: '/components/',
    });

    return actions;
  },
};
