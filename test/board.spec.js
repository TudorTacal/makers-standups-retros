import React from 'react';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Board from '../src/components/Board.js'
import Column from '../src/components/Column.js'

describe('<Board/>', function() {
	it('calls componentDidMount', () => {
		sinon.spy(Board.prototype, 'componentDidMount');
		const wrapper = mount(<Board titles={["Title1", "Title2", "Title3"]}/>);
		expect(Board.prototype.componentDidMount.calledOnce).to.equal(true);
	});

	it('should test thet amount of titles the board is given', () =>{
		const wrapper = mount(<Board titles={["Title1", "Title2", "Title3"]}/>);
		expect(wrapper.props().titles).to.have.length(3);
	});

	it('should render one column for each title', () =>{
		const wrapper = mount(<Board titles={["Title1", "Title2", "Title3"]}/>);
    expect(wrapper.find(Column)).to.have.length(3);
	});

	it('should have one whiteboard attached', () =>{
		const wrapper = mount(<Board titles={["Title1", "Title2", "Title3"]}/>);
		expect(wrapper.find('div.whiteBoard')).to.have.length(1);
	});
});
