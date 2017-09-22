import React, { Component } from 'react';
import studentRecords from '../../static/files/results.json';


class StudentStats extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {

    }

    render() {
      return (
        <div className="App">
            <div className="App-header">
                <h2>Student Statics</h2>
            </div>
            <div className="body">
            </div>
        </div>
      );
    }

    componentDidMount() {

    }

    componentWillReceiveProps(next) {

    }

    shouldComponentUpdate() {

    }

    componentWillUnmount() {

    }

    forceUpdate() {

    }
}

export default StudentStats
