import React from 'react';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Chat from '../src/components/Chat.js'

describe('<Chat/>', function() {
	it('calls componentDidMount', () => {
		sinon.spy(Chat.prototype, 'componentDidMount');
		const wrapper = mount(<Chat/>);
		expect(Chat.prototype.componentDidMount.calledOnce).to.equal(true);
	});

  it('should render a message list', () =>{
		const wrapper = mount(<Chat/>);
    expect(wrapper.find('ul.messageList')).to.have.length(1);
  });

  it('should start with empty messages', () => {
    const wrapper = shallow(<Chat/>);
    expect(wrapper.state('messages')).to.eql([]);
  });

  it('adds a message to messages', () => {
    const wrapper = shallow(<Chat/>);
    wrapper.instance().updateChat('hello', 'Kim');
    expect(wrapper.state('messages')).to.eql([{text: 'hello', userName: 'Kim'}])
  });

  it('notifies server when message is added', () => {
    const wrapper = shallow(<Chat/>);
    const form = wrapper.find('form');
    const notify = wrapper.instance().notifyServer
    expect(form.prop('onSubmit')).to.eql(notify)
  })

});
