import React from 'react';
import ReactTestUtils from 'react-addons-test-utils'
import ReactDOM from 'react-dom';
import Item from '../Item';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Item />, div);
});

describe("Item", () => {
  beforeEach(function(){

  });

  it("renders a paragraph with item text", function(){
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Item text="this is our first item"/>);
    let renderedParagraph = this.rgetRenderOutput().querySelectorAll("p");
    expect(renderedParagraph[0].textContent).toEqual("this is our first item");
  });

});
