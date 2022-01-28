import React from 'react';
import reactDom from 'react-dom';

function Greeting() {
    return <h4 > this is Zodo and this is my first component < /h4>;
}

reactDom.render( < Greeting / > , document.getElementById('root'));