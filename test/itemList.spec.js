import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';
import {shallow} from 'enzyme'
import ItemList from '../src/components/ItemList.js'

describe("ItemList />", () => {
  it("renders a '.list'", () => {
    const wrapper = shallow(<ItemList />);
    expect(wrapper.find('.list').exists()).to.equal(true);
  });

  it("has 'id' and 'title'", () => {
    const wrapper = mount(<ItemList id="123" title="Learnt" />);
    expect(wrapper.props().id).to.equal("123");
    expect(wrapper.props().title).to.equal("Learnt");
  })
});
