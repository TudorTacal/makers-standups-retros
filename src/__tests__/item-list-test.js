import React from 'react';
import ReactTestUtils from 'react-addons-test-utils'
import ReactDOM from 'react-dom';
import ItemList from '../ItemList';

it('renders without crashing', () => {
  const items = [{text: "this is an item"}];
  const div = document.createElement('div');
  ReactDOM.render(<ItemList data={items}/>, div);
});

it("renders an unordered list of items", function(){
  const items = [{text: "this is an item"}];
  const testDoc = ReactTestUtils.renderIntoDocument(<ItemList data={items}/>);
	const result = ReactTestUtils.scryRenderedDOMComponentsWithTag(testDoc, "li");
	expect(result.length).toBe(1)
  console.log(result);
  expect()
});
