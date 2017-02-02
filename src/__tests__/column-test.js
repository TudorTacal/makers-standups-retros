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
  const result = ReactTestUtils.findRenderedDOMComponentWithTag(testDoc, "h1");
  expect(result.innerHTML).toEqual("I am a column");
});

it('renders with a content div', function() {
  const testDoc = ReactTestUtils.renderIntoDocument(<Column title="I am a column" />);
  const result = ReactTestUtils.findRenderedDOMComponentWithClass(testDoc, "column-content")
  expect(ReactTestUtils.isDOMComponent(result)).toBe(true);
});