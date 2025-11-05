import { Mastra } from '@mastra/core';
import { codemate } from './agents/codemate.agent';

export const mastra = new Mastra({
  agents: { codemate },
});
