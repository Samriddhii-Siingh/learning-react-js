import React, { Component } from 'react';

const TITLES = [
    'a student',
    'a web developer',
    'an enthusistic learner',
    'exploring more & more'
];

class Title extends Component  {
    state = { titleIndex: 0, fadeIn: true };

    // using as a class method,
    // not as class property
    componentDidMount() {
        // setTimeout() - queuing an asynchronous setState call
        // so we need to clean this up

        // after 2s, change in fade
        this.timeout = setTimeout(() => this.setState({ fadeIn: false} ), 2000);

        // console.log('Title component has mounted');

        // to increment titleIndex in a state at regular interval, new title appear in render()
        this.animateTitles();
    }

    // after 4s this.setState will fire, but after 4s time is up, the component is unmounted
    // thus, ERROR (no display of Title)
    // memoery leak to call setState on unmounted component
    componentWillUnmount() {
        // console.log('Title component will unmount!');

        // takes interval id and stops a queued interval from firing in bg
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    // setInterval() - 2 arguments
    // 1- callback fn
    // 2- millisec value - rate at which we fire callback fn for a value
    // 4000ms = 4s
    animateTitles = () => {
        // titleInterval - we don't want setInterval() functionality firing in bg, there's no longer title in app
        // directly attaching to component - value of setInterval no need to appear in JSX and render
        this.titleInterval = setInterval(() => {
            // problem - once limit reached, index invalid of array, loop back
            // use modulo operator
            // 4 % 4 = 0
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            // 2nd one - local var declared above
            // this.setState({ titleIndex: titleIndex });
            // shorten this, JS recognixes same key: value pairs
            this.setState({ titleIndex, fadeIn: true });

            // so that after fade in, it fades out
            this.timeout = setTimeout(() => this.setState({ fadeIn: false } ), 2000);

        }, 4000);

        // console.log('this.titleInterval', this.titleInterval);
    };

    render() {
        // allows to simplify and remove this.state
        // can selectively apply fade in or out class depending on fadeIn
        const { fadeIn, titleIndex } = this.state;

        // const title = TITLES[this.state.titleIndex];
        const title = TITLES[titleIndex];

        return (
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        )
    }
}

export default Title;