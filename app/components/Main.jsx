var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return (
        <div>
            <Nav/>
            <p>Main.jsx Rendered</p>
            <div className="row">
                {props.children}
            </div>

        </div>
    );
}
module.exports = Main;