import React from 'react';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Message from '../src/components/Message.js'

describe('<Message/>', function() {

	it('should render one list item', () =>{
		const wrapper = mount(<Message/>);
    expect(wrapper.find('li')).to.have.length(1);
	});

  it('should take a name and a text', () =>{
    const wrapper = mount(<Message userName="name" text="text"/>);
    expect(wrapper.find('li').text()).to.equal("name: text");
  });

});
