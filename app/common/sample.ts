import { Schema } from '@l-lib/low-code-engine';

export const sample: Schema = {
  type: 'object',
  properties: {
    'input_dccbf99e-f40a-44a8': {
      type: 'input',
      configValue: {
        label: 'Input',
        description: "I'm input",
        placeholder: 'Enter something',
      },
    },
    'select_0536aeeb-aead-4564': {
      type: 'select',
      configValue: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        label: 'Select',
        description: "I'm select",
        placeholder: 'choose one item',
      },
    },
    'checkbox_f19b5a85-7797-4849': {
      type: 'checkbox',
      configValue: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        label: 'Checkbox',
        description: "I'm checkbox",
      },
    },
  },
  order: ['input_dccbf99e-f40a-44a8', 'select_0536aeeb-aead-4564', 'checkbox_f19b5a85-7797-4849'],
};
