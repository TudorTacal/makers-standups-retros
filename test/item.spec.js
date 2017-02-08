import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';
import {shallow} from 'enzyme'
import Item from '../src/components/Item.js'

describe("Item />", () => {
  it("renders an '.item'", function() {
    const wrapper = shallow(<Item />);
    expect(wrapper.find('.item').exists()).to.equal(true);
  })

  it("takes 'search', 'text' and 'userId' as props", () => {
    const wrapper = mount(<Item  font="Arial" color="blue" userId="123" id="543" search="yes" text="testing"  />);
    expect(wrapper.props().font).to.equal("Arial");
    expect(wrapper.props().color).to.equal("blue");
    expect(wrapper.props().userId).to.equal("123");
    expect(wrapper.props().id).to.equal("543");
    expect(wrapper.props().search).to.equal("yes");
    expect(wrapper.props().text).to.equal("testing");
  })

  it("start with 0 clicks in state", () => {
    const wrapper = shallow(<Item />)
    expect(wrapper.state('clicks')).to.equal(0);
  })

  it("increases the clicks on 'updatePlusClick'", () => {
    const wrapper = mount(<Item />)
    sinon.spy(Item.prototype, 'updatePlusClick')
    wrapper.find('img').simulate('click', {preventDefault(){}})
    expect(wrapper.state('clicks')).to.equal(1);
  })

  it("calls a 'notifyServer' function when the tick image is clicked upon", () => {
    const notifyServer = sinon.spy(Item.prototype, 'notifyServer')
    const wrapper = mount(<Item />)
    wrapper.find('img').simulate('click', { preventDefault() {} });
    expect(notifyServer).to.have.property('callCount', 1);
  })
});
