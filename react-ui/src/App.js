import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: ''
        };
        this.onSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/input', {
            method: 'POST',
            body:  JSON.stringify({
                inputValue: this.refs.inputValue.value
            }),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            response.json().then(data => this.setState({response: data.express}));
        })
    };

    render() {
        var rows = [];
        if(this.state.response)
            for (var i = 0; i < this.state.response.length; i++) {
                rows.push(<div key={i}>{this.state.response[i].text}</div>);
            } else {
                rows.push(<div key="key">Insert username to display tweets</div>);
            }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Twitter timeline by name of user</h1>
                </header>
                <div className="App-input">
                    <form method="post" onSubmit={this.onSubmit}>
                        <input type="text" placeholder="username" name="username" ref="inputValue" />
                        <input type="submit"/>
                    </form>
                </div>
                <div className="App-intro">{rows}</div>
            </div>
        );
    }
}

export default App;
