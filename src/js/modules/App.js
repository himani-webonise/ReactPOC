import React, { Component } from 'react';
import studentRecords from '../../static/files/results.json';


class Percentage extends React.Component {
  render() {
    const subjects = this.props.value
    const percentage = calculatePercentage(subjects)
    if (percentage> 35)  {
      this.props.bColor = true
    }
    return <td key={"M-"+this.props.index}>{percentage.toFixed(2)}</td>
  }
}

function calculatePercentage(subjects) {
  var sum = subjects.english + subjects.hindi + subjects.mathematics
  return sum/3
}

function setBackground() {

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
      <table border="1">
        <thead>
          <tr bgcolor="red">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Percentage</th>
          </tr>
        </thead>
          <TableBody value={this.props.value} search={this.props.search}/>
      </table>
    )
  }
}

function TableBody(props) {
  const records = props.value.results
  const search = props.search
  var bColor = false
  var recordResult = records.map((record, index) => {
    if (!search.length || search == record.firstName || search == record.lastName) {
      return <tr key={index} { this.bColor ? className="fail" : ''}>
        <FirstName firstName={record.firstName} index={index} />
        <LastName lastName={record.lastName} index={index} />
        <Percentage value={record.marks} index={index} bColor={this.bColor}/>
      </tr>
    }
  })
  return <tbody key="tbody">{recordResult}</tbody>
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state= {
            isDistinction: false,
            isFirstCls: false,
            isSecondCls: false,
            isFail: false,
            records: studentRecords,
            search: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        const name = event.target.name
        this.setState({
            [name]: event.target.checked
        })
    }

    searchClick(event) {
        var x = document.getElementsByClassName('searchBox')
        console.log(x)
        this.setState({
            search: document.getElementsByClassName('searchBox')[0].value
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
                    <button className="searchBtn" name="search" onClick={this.searchClick.bind(this)} return false>Search</button>
                </div>
                <div className="selectionCnt">
                    Ditinction <input name="isDistinction" type="checkbox" checked={this.state.isDistinction} onChange={this.handleInputChange}/>
                    First Class <input name="isFirstCls" type="checkbox"checked={this.state.isFirstCls} onChange={this.handleInputChange}/>
                    Second Class <input name="isSecondCls" type="checkbox"checked={this.state.isSecondCls} onChange={this.handleInputChange}/>
                    Fail <input name="isFail" type="checkbox" checked={this.state.isFail} onChange={this.handleInputChange}/>
                </div>
                <div className="studentRecordCnt">
                  <StudentTable value={this.state.records} search={this.state.search}/>
                </div>
            </div>
        </div>
      );
    }


    componentWillReceiveProps(next) {

    }

    shouldComponentUpdate() {
      return true
    }

    componentWillUnmount() {

    }

    forceUpdate() {

    }
}

export default App;
