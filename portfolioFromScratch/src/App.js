import React, {Component} from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from './assets/profile.png';

// class RegularClass {}
// class ComponentClass extends Component {}

// const regularClassInstance = new RegularClass();
// const componentClassInstance = new ComponentClass();

// console.log('regularClass Instance', regularClassInstance);
// console.log('componentClassInstance', componentClassInstance);

class App extends Component {
    state = {displayBio: false};
    // constructor() {
    //     super();
    //     this.state = {displayBio: false}; //won't work alone, call super()

    //     console.log('Component this', this);

    //     //defining method in constructor
    //     // this.readMore = () => {
    //     //     console.log('readMore this', this);
    //     // }

    //     //bind method
    //     //this.readMore = this.readMore.bind(this);
    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);


    //now, we don't need to use bind once there's callback fn.
    //     this.toggleDisplayBio = () => {...};
    // }

    readMore() {
        // this.state.displayBio = true;
        //bad practice to directly modify component's state
        //instead use setState()

        this.setState({displayBio: true})
        console.log('readMore this', this);
    }

    //Rule: To never directly modify the state
    //call setState() to change values in state to change
    //changes that occur in render method

    // this.setState.displayBio = !this.setState.displayBio;
    //WRONG (bad practice)
    //directly modifying the state

    // this.setState({displayBio: !this.state.displayBio});
    //RIGHT

    //Wrong
    // this.state.text = this.state.text + '...'; 
    //Correct
    // this.setState({text: this.state.text + '...'});

    //React re-calls render() at the end of setState()
    //render now has something new to return based on updated values

    //this.state.foo = 'foo'
    //doesn't work when state is modified directly, won't re-trigger render
    //render doesn't notice, application won't update

    showLess() {
        this.setState({displayBio: false});
    }

    //adding arrows to make it callback function
    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
        // this.state.displayBio = !this.state.displayBio;
        //doesn't work
    }

    //can have render also as callback fn.
    //but it's fundamental to have render like this
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
                <img src={profile} alt='profile' className="profile"/>
                {/* image dimension 400 X 400  */}
                {/* using CSS for className, same as in HTML for class */}
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
                                <button onClick={this.toggleDisplayBio}>Show less</button>
                                
                            </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
                <hr/>
                <Projects/> 
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

//handlers like onClick shoeld be given function names, not fn. call
//because setState triggers a render call

export default App;

