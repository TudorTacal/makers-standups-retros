import React from 'react';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import UserInfo from '../src/components/UserInfo.js'
import UserList from '../src/components/UserList.js'

describe('<UserInfo/>', function() {
	it('calls componentDidMount', () => {
		sinon.spy(UserInfo.prototype, 'componentDidMount');
		const wrapper = mount(<UserInfo/>);
		expect(UserInfo.prototype.componentDidMount.calledOnce).to.equal(true);
	});

  it('should render a user list', () => {
		const wrapper = mount(<UserInfo/>);
    expect(wrapper.find(UserList)).to.have.length(1);
  });

  it('should render a user list', () => {
    const wrapper = mount(<UserInfo/>);
    expect(wrapper.find('div.userInfoContainer')).to.have.length(1);
  });

  it('should render a name input', () =>{
    const wrapper = mount(<UserInfo/>);
    expect(wrapper.find('#name-input')).to.have.length(1);
  });

  it('should start with one user', () => {
    const wrapper = shallow(<UserInfo/>);
    expect(wrapper.state('userCount')).to.eql(1);
  });

  it('updates the user count', () => {
    const wrapper = shallow(<UserInfo/>);
    wrapper.instance().updateUserCount(2);
    expect(wrapper.state('userCount')).to.eql(2)
  });

  it('sets the user properties', () => {
    const wrapper = shallow(<UserInfo/>);
    wrapper.instance().setUserProperties(1, "name", "blue", "arial");
    expect(wrapper.state("userNames")).to.eql({1: {name: "name", color: "blue", font: "arial"}})
  });

  it('updates name when input changes', () => {
    const wrapper = shallow(<UserInfo/>);
    const form = wrapper.find('#name-input');
    const updateName = wrapper.instance().updateName
    expect(form.prop('onChange')).to.eql(updateName)
  })

});
