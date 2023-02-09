import React, { Component } from "react";

class Jokes extends Component {
    state = { joke: {} };

    // place fetch (& other asynchronous code) in componentDidMount()
    // fetch is asynchronous, don't know duration of loading
    // slow request - delay rendering of component
    // result of asynchronous code - update state with this.setState when data finished fetching
    componentDidMount() {
        // returns JS promise - handler (.then)
        // promise - JS ways to represent results of a value that'll be resolved in future
        // .then - takes callback fn
        fetch('https://official-joke-api.appspot.com/random_joke')
            // .then(response => console.log('response', response));
            .then(response => response.json())
            // .then(json => console.log('json', json));
            .then(json => this.setState({ joke: json}));

    }

    render() {
        const { setup, punchline } = this.state.joke;
        return (
            <div>
                <h2>Highlighted Joke</h2>
                <p>{setup}<em>{punchline}</em></p>
            </div>
        )
    }
}

export default Jokes;