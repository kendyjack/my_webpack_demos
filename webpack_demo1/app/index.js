import './main.scss';
import generateText22 from './sub';
import {test} from './main';

let app  = document.createElement('div');
app.innerHTML = '<h1>Hello World it haha</h1>';
document.body.appendChild(app);
app.appendChild(generateText22());
console.log(test(12));