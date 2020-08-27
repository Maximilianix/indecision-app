import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));






// //old syntax
// class OldSynt {
//     constructor() {
//         this.name = 'Max'
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting() {
//         return `Hi my name is ${this.name}.`;
//     }
// }
// const oldSynt = new OldSynt();
// const getGreeting = oldSynt.getGreeting;
// console.log(getGreeting());

// //new Syntax
// class NewSynt {
//     name = 'Max';
//     getGreeting = () => {
//         return `Hi my name is ${this.name}.`;
//     }
// }
// const newSynt = new NewSynt();
// const newGetGreeting = newSynt.getGreeting;
// console.log(newGetGreeting());






