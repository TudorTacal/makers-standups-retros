import React from 'react';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import UserList from '../src/components/UserList.js'

describe('<UserList/>', function() {

  it('should render a list of users', () => {
    const wrapper = mount(<UserList/>);
    expect(wrapper.find('div.userListContainer')).to.have.length(1);
    expect(wrapper.find('#userList')).to.have.length(1);
  });

  it('sets an array of users', () => {
    const wrapper = shallow(<UserList />);
    wrapper.setProps({userNames: {1: {name: "name", color: "blue", font: "arial"}} });
    expect(wrapper.state("userNames")).to.eql([["1", "name"]])
  });

});
