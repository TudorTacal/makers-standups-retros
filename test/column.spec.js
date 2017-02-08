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
});
