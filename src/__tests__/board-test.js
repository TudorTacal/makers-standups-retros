import React from 'react';
import ReactTestUtils from 'react-addons-test-utils'
import ReactDOM from 'react-dom';
import Board from '../components/Board';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Board />, div);
});

it("a board will be rendered with three columns", function(){
  const testDoc = ReactTestUtils.renderIntoDocument(<Board />);
  const result = ReactTestUtils.scryRenderedDOMComponentsWithClass(testDoc, "column")
  expect(result.length).toBe(3);
});
