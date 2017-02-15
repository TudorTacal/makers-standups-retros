import React from 'react';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import HomePage from '../src/components/HomePage.js'
import Layout from '../src/components/Layout.js'

describe('<HomePage/>', function() {

  it('should render a content div', () => {
  	const wrapper = mount(<HomePage/>);
  	expect(wrapper.find('div.homePageContent')).to.have.length(1);
  });

  it('should render a header with the Layout component', () => {
	const wrapper = mount(<HomePage/>);
	expect(wrapper.find('div.header')).to.have.length(1);
    expect(wrapper.find(Layout)).to.have.length(1);
  });

  it('should have two buttons', () => {
  	const wrapper = mount(<HomePage/>);
    expect(wrapper.find('div.homePageButtons')).to.have.length(1);
  	expect(wrapper.find('Button')).to.have.length(2);
  });

});
