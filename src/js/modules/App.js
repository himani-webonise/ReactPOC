import React, { Component } from 'react';
import studentRecords from '../../static/files/results.json';


class Percentage extends React.Component {
  render() {
    const subjects = this.props.value
    const percentage = (subjects.english + subjects.hindi + subjects.mathematics)/3
    return <td key={"M-"+this.props.index}>{percentage.toFixed(2)}</td>
  }
}

class FirstName extends React.Component {
  render() {
    return <td key={"FN-"+this.props.index}>{this.props.firstName}</td>
  }
}

class LastName extends React.Component {
  render() {
    return <td key={"LN-"+this.props.index}>{this.props.lastName}</td>
  }
}

class StudentTable extends React.Component {
  render() {
    return(
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Percentage</th>
          </tr>
        </thead>
          <TableBody value={this.props.value}/>
      </table>
    )
  }
}

function TableBody(props) {
  const records = props.value.results
  var test = records.map((record, index) => {
    return <tr key={index}>
      <FirstName firstName={record.firstName} index={index} />
      <LastName lastName={record.lastName} index={index} />
      <Percentage value={record.marks} index={index} />
    </tr>
  })
  return <tbody key="tbody">{test}</tbody>
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state= {
            isDistinction: false,
            isFirstCls: false,
            isSecondCls: false,
            isFail: false,
            records: studentRecords
        }

        this.handleInputChange = this.handleInputChange.bind(this)
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
                  <StudentTable value={this.state.records}/>
                </div>
            </div>
        </div>
      );
    }
}

export default App;
