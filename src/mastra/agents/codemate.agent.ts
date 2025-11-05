import { Agent } from '@mastra/core';

export const codemate = new Agent({
  name: 'codemate',
  instructions: `
You are CodeMate, a helpful AI code assistant.
Explain, debug, and write clean code clearly and concisely.
  `,
  model: {
    id: 'google/gemini-2.0-flash',
  },
});
