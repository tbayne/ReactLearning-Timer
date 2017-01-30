var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({

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
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount >= 0
                    ? newCount
                    : 0
            });
            //if (newCount === 0)    this.setState({runStatus: 'stopped'})

        }, 1000);
    },

    handleStatusChange: function (newStatus) {
        this.setState({runStatus: newStatus});
    },

    render: function () {
        var {count, runStatus} = this.state;
        return (
            <div>
                <h1 className="page-title">
                    Timer
                </h1>
                <Clock totalSeconds={count}/>
                <Controls runStatus={runStatus} onStatusChange={this.handleStatusChange}/>;
            </div>
        )
    }
});

module.exports = Timer;