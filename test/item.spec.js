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
    const wrapper = mount(<Item search="yes" text="testing" userId="123" />);
    expect(wrapper.props().search).to.equal("yes");
    expect(wrapper.props().text).to.equal("testing");
    expect(wrapper.props().userId).to.equal("123");
  })
});
