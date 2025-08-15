import React from 'react';
import { Input, Space } from '@mantine/core';

export const AIKeyInput: React.FC<{ apiKey: string; setApiKey: (key: string) => void; placeholder: string }> = ({
  apiKey,
  setApiKey,
  placeholder,
}) => {
  if (process.env.NEXT_PUBLIC_HIDE_API_KEY_INPUT === 'yes') {
    return null;
  }

  return (
    <>
      <Input placeholder={placeholder} value={apiKey} onInput={(e) => setApiKey(e.currentTarget.value)} />
      <Space h="md" />
    </>
  );
};
