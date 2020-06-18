/* eslint-disable no-underscore-dangle */
import '@testing-library/jest-dom';
import { format } from 'util';

global.___loader = {
  enqueue: jest.fn(),
};

const { error } = global.console;
global.console.error = (...args) => {
  error(...args);
  throw new Error(format(...args));
};

const mockIntersectionObserver = jest.fn().mockReturnValue({
  observe: jest.fn(),
  disconnect: jest.fn(),
});
Object.defineProperty(window, 'IntersectionObserver', {
  value: mockIntersectionObserver,
});
