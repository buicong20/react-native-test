/**
 * @format
 */

import React from 'react';
import App from '../src/App';
import renderer from 'react-test-renderer';

it('Test App', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
