import React, { Component } from "react";

// in place of props as I/P, joke as I/P 
// const Joke = ({joke})=> {
    // const{ setup, punchline} = joke;
    // return <p style={{ marging: 20 }}> {setup} <em>{punchline}</em> </p>
// }

const Joke = ({joke: { setup, punchline}}) => (
    <p style={{ marging: 20 }}> {setup} <em>{punchline}</em> </p>
)

class Jokes extends Component {
    // array for 10 jokes 
    state = { joke: {}, jokes: []};

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

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(json => this.setState({jokes: json}));
    }

    render() {
        // const { setup, punchline } = this.state.joke;
        return (
            <div>
                <h2>Highlighted Joke</h2>
                {/* <p>{setup}<em>{punchline}</em></p> */}
                <Joke joke={this.state.joke} />
                <hr/>
                <h3>Want ten new jokes?</h3>
                <button onClick={this.fetchJokes}>Click me!</button>
                {
                    this.state.jokes.map(joke => (
                        // const { id, setup, punchline} = joke;
                        // return <p key={id}> {setup} <em>{punchline}</em></p>

                        // using inline return
                        <Joke key={joke.id} joke={joke} />
                    ))
                }
            </div>
        )
    }
}

export default Jokes;