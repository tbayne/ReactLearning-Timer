var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({

    getInitialState: function () {
        return {count: 0, runStatus: 'stopped'};
    },
    componentWillUnmount: function () {
        clearInterval(this.timer);
        this.timer = undefined;
    },

    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.runStatus !== prevState.runStatus) {
            switch (this.state.runStatus) {
                case 'started':
                    this.startTimer();
                    break;

                case 'stopped':
                    this.setState({count: 0});

                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;

            }
        }
    },

    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0
                    ? newCount
                    : 0
            });
            if (newCount === 0) 
                this.setState({runStatus: 'stopped'})

        }, 1000);
    },

    handleSetCountdown: function (seconds) {
        this.setState({count: seconds, runStatus: 'started'});
    },
    handleStatusChange: function (newStatus) {
        this.setState({runStatus: newStatus});
    },
    render: function () {
        var {count, runStatus} = this.state;
        var renderControlArea = () => {
            if (runStatus !== 'stopped') {
                return <Controls runStatus={runStatus} onStatusChange={this.handleStatusChange}/>;
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
            }

        };
        return (
            <div>
                <h1 className="page-title">
                    Countdown
                </h1>
                <Clock totalSeconds={count}/> {renderControlArea()}

            </div>
        )
    }
});

module.exports = Countdown;