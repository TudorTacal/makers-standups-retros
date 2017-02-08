import React from 'react';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import StandupPage from '../src/components/StandupPage.js'
import Chat from '../src/components/Chat.js'
import UserInfo from '../src/components/UserInfo.js'
import Board from '../src/components/Board.js'

describe('<StandupPage/>', function() {

	it('should render a chat component', () =>{
		const wrapper = mount(<StandupPage/>);
    expect(wrapper.find(Chat)).to.have.length(1);
	});

	it('should render a chat User info component', () =>{
		const wrapper = mount(<StandupPage/>);
		expect(wrapper.find(UserInfo)).to.have.length(1);
	});

	it('should render a board  component', () =>{
		const wrapper = mount(<StandupPage/>);
		expect(wrapper.find(Board)).to.have.length(1);
	});

	it('should have a board container', () =>{
		const wrapper = mount(<StandupPage/>);
		expect(wrapper.find('div.boardContainer')).to.have.length(1);
	});

	it('should have an overall container', () =>{
		const wrapper = mount(<StandupPage/>);
		expect(wrapper.find('div.overallContainer')).to.have.length(1);
	});

	it('should have a sidebar', () =>{
		const wrapper = mount(<StandupPage/>);
		expect(wrapper.find('div.sideBar')).to.have.length(1);
	});
});
