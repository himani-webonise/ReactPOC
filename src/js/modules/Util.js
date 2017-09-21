import React, { Component } from 'react';

class Util extends Component {
    constructor(props) {
        super(props)
        this.state= {
            isDistinction: false
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }
}

export default Util;
