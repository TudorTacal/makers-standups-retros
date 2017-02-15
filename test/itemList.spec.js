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

  it("starts with no data saved in state", () => {
    const wrapper = shallow(<ItemList />)
    expect(wrapper.state('data').length).to.equal(0);
  })

  // it("can save data into state", () => {
  //   const wrapper = shallow(<ItemList />)
  //   sinon.spy(ItemList.prototype, 'updateList')
  //   const form = wrapper.find("item-list-submit").simulate('click', {preventDefault(){}});
  //   expect(wrapper.state('data').length).to.equal(1);
  // })
});
