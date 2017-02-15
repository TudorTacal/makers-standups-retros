import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';
import {shallow} from 'enzyme'
import Layout from '../src/components/Layout.js'

describe("Layout />", () => {
  it("renders with '.logo'", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('.logo').exists()).to.equal(true);
  })
});
