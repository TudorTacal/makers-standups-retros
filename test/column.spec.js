import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';
import {shallow} from 'enzyme'
import Column from '../src/components/Column.js'

describe("Column />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Column />);
    expect(wrapper).to.have.length(1);
  })

  it("has 'type', 'title' and 'id' as props", () => {
    const wrapper = mount(<Column type="standup" title="Learnt" id="123" />);
    expect(wrapper.props().type).to.equal("standup");
    expect(wrapper.props().title).to.equal("Learnt");
    expect(wrapper.props().id).to.equal("123");
  })
});
