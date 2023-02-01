import React, {Component} from "react";

// class RegularClass {}
// class ComponentClass extends Component {}

// const regularClassInstance = new RegularClass();
// const componentClassInstance = new ComponentClass();

// console.log('regularClass Instance', regularClassInstance);
// console.log('componentClassInstance', componentClassInstance);

class App extends Component {
    constructor() {
        super();
        this.state = {displayBio: false}; //won't work alone, call super()

        console.log('Component this', this);
    }

    readMore() {
        // this.state.displayBio = true;
        //bad practice to directly modify component's state
        //instead use setState()

        // this.setState({displayBio: true});

        console.log('readMore this', this);
    }

    render() {
        // let bio = this.state.displayBio ? (
        //     <div>
        //             <p>I live in Lucknow, and code almost every day.</p>
        //             <p>My favourite language is JavaScript, and I think React.js is awesome.</p>
        //             <p>Besides coding, I also love music!</p>
        //         </div>
        // ) : null ;

        // if(!this.state.displayBio) {
        //     bio = null;
        // }
        
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Samriddhi. I'm a web developer.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {/* {bio} */}
                {
                    this.state.displayBio ? (
                        <div>
                                <p>I live in Lucknow, and code almost every day.</p>
                                <p>My favourite language is JavaScript, and I think React.js is awesome.</p>
                                <p>Besides coding, I also love music!</p>
                            </div>
                    ) : (
                        <div>
                            <button onClick={this.readMore}>Read More</button>
                        </div>
                    )
                } 
            </div>
        )
    }
}

export default App;

