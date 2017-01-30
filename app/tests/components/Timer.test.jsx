var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {

    it('should exist', () => {
        expect(Timer).toExist();
    });

    describe('Start Timer', () => {
        it('should set state to started and increment timer', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started')
            expect(timer.state.runStatus).toBe('started');
            setTimeout(() => {
                expect(timer.state.count).toBe(1);
                done();
            }, 1001);

        });
    });

    describe('Controls', () => {
        it('should pause timer on paused status', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started');
            setTimeout(() => {}, 1001);
            timer.handleStatusChange('paused');
            setTimeout(() => {
                expect(timer.state.runStatus).toBe('paused');
                done();
            }, 1001);
        });
        it('should stop/cancel timer on stopped status', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started');
            setTimeout(() => {}, 1001);
            timer.handleStatusChange('stopped');
            setTimeout(() => {
                expect(timer.state.count).toBe(0);
                expect(timer.state.runStatus).toBe('stopped');
                done();
            }, 1001);
        });
    });
});
