import React, { Component } from 'react';
import studentRecords from '../../static/files/results.json';


class Percentage extends React.Component {
  render() {
    const subjects = this.props.value
    const percentage = (subjects.english + subjects.hindi + subjects.mathematics)/3
    return <td key={"M-"+this.props.index}>{percentage.toFixed(2)}</td>
  }
}

function RecordTable(props) {
  const records = props.value.results
  var test = records.map((record, index) => {
    return <tr key={index}><td key={"FN-"+index}>{record.firstName}</td>
      <td key={"LN-"+index}>{record.lastName}</td>
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
                    <table>
                      <thead>
                        <tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Percentage</th>
                        </tr>
                      </thead>
                        <RecordTable value={this.state.records}/>
                    </table>
                </div>
            </div>
        </div>
      );
    }
}

export default App;
