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
})
