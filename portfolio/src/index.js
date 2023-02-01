import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

//ReactDOM.render(<App/>, document.getElementById('root'));
//NOT WORKING {error in console}

// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     speak() {
//         console.log('I am ',this.name, ' and I am ', this.age, ' years old.');
//     }
// }

// const animal_1 = new Animal('Simba', 3);
// animal_1.speak();
// //output in console

// console.log(animal_1);

// class Lion extends Animal {
//     constructor(name, age, furColor, speed) {
//         super(name, age);
//         this.furColor = furColor;
//         this.speed = speed;
//     }

//     roar() {
//         console.log('ROOOAR! I have ',
//          this.furColor,
//          ' fur, and I can run ',
//          this.speed,
//          ' miles an hour!');
//     }
// }

// const lion_1 = new Lion('Mufasa', 20, 'golden', 25);
// lion_1.speak();
// lion_1.roar();
// console.log(lion_1);