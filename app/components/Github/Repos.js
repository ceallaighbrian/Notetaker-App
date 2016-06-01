var React = require('react');

var Repos = React.createClass({
    render: function(){
        return (
            <div>
               <p> REPOS</p>
               <p> REPOS: {this.props.repo}</p>
            </div>
        )
    }
})

module.exports = Repos;