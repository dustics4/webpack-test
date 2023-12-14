import myName from './myName';
import _ from 'lodash';
import './style.css';
import Icon from './icon.jpeg';

function component() {
    const element = document.createElement('div');
  
    element.textContent = myName("Cody") ; 
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());

