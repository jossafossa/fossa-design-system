import React from 'react';
import { MemoryRouter } from 'react-router-dom';

export const withMemoryRouter = (Story, context) => {
  const initialEntries = context.parameters?.router?.initialEntries || ['/'];
  const initialIndex = context.parameters?.router?.initialIndex;

  return (
    <MemoryRouter initialEntries={initialEntries} initialIndex={initialIndex}>
      <Story {...context} />
    </MemoryRouter>
  );
};
