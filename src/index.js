import myName from './myName';
import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    element.textContent = myName("Cody") ; 
    return element;
  }
  
  document.body.appendChild(component());

