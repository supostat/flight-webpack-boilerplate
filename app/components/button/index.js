import {component} from 'flightjs';

let Button = component(button);

function button() {
    this.click = function () {
        console.log('Button clicked !!!');
    };

    this.after('initialize', function() {
        this.on('click', this.click);
    });
}

export {Button};



