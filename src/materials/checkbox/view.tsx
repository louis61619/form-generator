import { PlaygroundCompProps, ViewCompProps } from '../../types/schema';
import { CompProps } from './type';
import { Checkbox, Group } from '@mantine/core';
import { useField } from '@mantine/form';
import { CommonInputWrapper } from '../common';
import { useState } from 'react';

const data = [
  {
    name: '@mantine/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
  },
  { name: '@mantine/hooks', description: 'Collection of reusable hooks for React applications.' },
  { name: '@mantine/notifications', description: 'Notifications system' },
];

export const View: ViewCompProps<CompProps> = ({ configValue, inputProps }) => {
  const { options, disabled } = configValue;

  return (
    <CommonInputWrapper {...configValue}>
      <Checkbox.Group {...inputProps}>
        <Group>
          {options?.map((option, index) => {
            return <Checkbox disabled={disabled} key={option} label={option} value={option} />;
          })}
        </Group>
      </Checkbox.Group>
    </CommonInputWrapper>
  );
};
