import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Board from '../src/components/Board.js'

describe('<Board/>', function() {
	it('calls componentDidMount', () => {
		sinon.spy(Board.prototype, 'componentDidMount');
		const wrapper = mount(<Board titles={["Title1", "Title2", "Title3"]}/>);
		expect(Board.prototype.componentDidMount.calledOnce).to.equal(true);
	});
});