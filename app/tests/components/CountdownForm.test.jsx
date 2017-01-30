var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });

    it('should call onSetCountDown if valid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownform = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownform));
        countdownform.refs.seconds.value = "109";
        TestUtils
            .Simulate
            .submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(109);
    });

    it('should not call onSetCountDown if invalid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownform = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownform));
        countdownform.refs.seconds.value = "abc123";
        TestUtils
            .Simulate
            .submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });

});