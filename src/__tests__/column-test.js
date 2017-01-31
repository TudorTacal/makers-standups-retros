import React from 'react';
import ReactTestUtils from 'react-addons-test-utils'
import ReactDOM from 'react-dom';
import Column from '../Column';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Column />, div);
});

it('renders with a title', function() {
  const testDoc = ReactTestUtils.renderIntoDocument(<Column title="I am a column" />);
  const result = ReactTestUtils.scryRenderedDOMComponentsWithTag(testDoc, "h1");
  expect(result.children).toEqual("I am a column");
});
