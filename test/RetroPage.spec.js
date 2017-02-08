import React from 'react';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import RetroPage from '../src/components/RetroPage.js'
import Board from '../src/components/Board.js'
import UserInfo from '../src/components/UserInfo.js'
import Chat from '../src/components/Chat.js'

describe('<RetroPage/>', function() {

  it('should render container divs', () => {
	const wrapper = mount(<RetroPage/>);
	expect(wrapper.find('div.overallContainer')).to.have.length(1);
	expect(wrapper.find('div.boardContainer')).to.have.length(1);
  });

  it('should render a board', () => {
	const wrapper = mount(<RetroPage/>);
	expect(wrapper.find('div.board')).to.have.length(1);
    expect(wrapper.find(Board)).to.have.length(1);
  });

  it('should render a sidebar', () => {
	const wrapper = mount(<RetroPage/>);
	expect(wrapper.find('div.sideBar')).to.have.length(1);
  });

  it('should render the userInfo', () => {
	const wrapper = mount(<RetroPage/>);
	expect(wrapper.find('div.userInfo')).to.have.length(1);
    expect(wrapper.find(UserInfo)).to.have.length(1);
  });

  it('should render the chat', () => {
	const wrapper = mount(<RetroPage/>);
	expect(wrapper.find('div.chat')).to.have.length(1);
    expect(wrapper.find(Chat)).to.have.length(1);
  });

});