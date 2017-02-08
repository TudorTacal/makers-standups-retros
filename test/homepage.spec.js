import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';
import {shallow} from 'enzyme'
import HomePage from '../src/components/HomePage.js'

describe("<HomePage />", () => {
  it("renders with '.homePageContent'", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('.homePageContent').exists()).to.equal(true);
  })
});
