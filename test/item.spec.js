import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';
import {shallow} from 'enzyme'
import Item from '../src/components/Item.js'

describe("Item />", function (){
  it("renders an '.item'", function() {
    const wrapper = shallow(<Item />);
    expect(wrapper.find('.item').exists()).to.equal(true);
  })
});
