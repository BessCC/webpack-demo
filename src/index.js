import _ from 'lodash';
@import "~bootstrap/dist/css/bootstrap";

function component() {
    var element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;  // Lodash, now imported by this script
  }
  
  document.body.appendChild(component());
