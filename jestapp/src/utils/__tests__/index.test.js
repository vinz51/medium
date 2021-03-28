import { iOS } from '../index';

describe('Function iOS', () => {
  it.each([
    ['iPhone'],
    ['iPad'],
    ['iPod'],
  ])('renders array with the userAgent: %s', (userAgent) => {
    global.navigator.userAgent = userAgent;

    expect(iOS()).toContain(userAgent);
  });
});
