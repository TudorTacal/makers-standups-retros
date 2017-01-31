import React from 'react';
import ReactTestUtils from 'react-addons-test-utils'
import ReactDOM from 'react-dom';
import ItemList from '../ItemList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemList />, div);
});

it("renders an unordered list of items", function(){
	const renderer = ReactTestUtils.createRenderer();
	renderer.render(<ItemList text="this is an item list item"/>);
	const result = renderer.getRenderOutput();
	expect(result.type).toBe("ul")
	// expect(result.children.props.text).toEqual("this is an item list item")
});