import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';
import {shallow} from 'enzyme'
import Button from '../src/components/Button.js'

describe('<Button/>', function (){
  it("renders a '.homepageButton'", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('.homepageButton').exists()).to.equal(true);
  })

  it("it takes 'route' and 'name' as props", function (){
    const wrapper = mount(<Button route="standups" name="S" />);
    expect(wrapper.props().route).to.equal("standups");
    expect(wrapper.props().name).to.equal("S");
  })
})
