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

  it('should render a message list', () =>{
    const wrapper = mount(<Chat/>);
    expect(wrapper.find('ul.messageList')).to.have.length(1);
  });

  it('add a message', () =>{

    const onSubmit = sinon.spy();
    const wrapper = mount(<Chat />);
    const spy = sinon.spy(Chat.prototype, "notifyServer");
    expect(spy).to.not.have.been.called;
    wrapper.find('[type="submit"]').get(0).click();
    expect(spy).to.have.been.called();
  });

});
