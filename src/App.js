import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import studentRecords from './results.json';

class App extends Component {
    constructor(props) {
        super(props)
        this.state= {
            isDistinction: false,
            isFirstCls: false,
            isSecondCls: false,
            isFail: false
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        console.log(studentRecords)
    }

    handleInputChange(event) {
        console.log(event)
        const name = event.target.name
        this.setState({
            [name]: event.target.checked
        })
    }

    render() {
      return (
        <div className="App">
            <div className="App-header">
                <h2>Student Statics</h2>
            </div>
            <div className="body">
                <div className="searchCnt">
                    <input className="searchBox" type="text"/>
                    <button className="searchBtn">Search</button>
                </div>
                <div className="selectionCnt">
                    Ditinction <input name="isDistinction" type="checkbox" checked={this.state.isDistinction} onChange={this.handleInputChange}/>
                    First Class <input name="isFirstCls" type="checkbox"checked={this.state.isFirstCls} onChange={this.handleInputChange}/>
                    Second Class <input name="isSecondCls" type="checkbox"checked={this.state.isSecondCls} onChange={this.handleInputChange}/>
                    Fail <input name="isFail" type="checkbox" checked={this.state.isFail} onChange={this.handleInputChange}/>
                </div>
                <div className="studentRecordCnt">
                    <table>
                        <tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Percentage</th>
                        </tr>
                        <tr>
                          <td>Alfreds Futterkiste</td>
                          <td>Maria Anders</td>
                          <td>Germany</td>
                        </tr>
                        <tr>
                          <td>Centro comercial Moctezuma</td>
                          <td>Francisco Chang</td>
                          <td>Mexico</td>
                        </tr>
                        <tr>
                          <td>Ernst Handel</td>
                          <td>Roland Mendel</td>
                          <td>Austria</td>
                        </tr>
                        <tr>
                          <td>Island Trading</td>
                          <td>Helen Bennett</td>
                          <td>UK</td>
                        </tr>
                        <tr>
                          <td>Laughing Bacchus Winecellars</td>
                          <td>Yoshi Tannamuri</td>
                          <td>Canada</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
      );
    }
}

export default App;
