import React, { Component } from 'react';
import './App.css';

import jQuery from 'jquery';

// import testServer from './testServer';
// import './testServer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ciphertexts: [],
      ciphertextTextarea: '',
      state: 0
    }
    this.addCipherText = this.addCipherText.bind(this);
    this.ctTaChange = this.ctTaChange.bind(this);
    this.doThings = this.doThings.bind(this);
  }

  ctTaChange(event) {
    this.setState({
      ciphertextTextarea: event.target.value
    });
  }

  addCipherText(event) {
    this.setState({
      ciphertexts: this.state.ciphertexts.concat(this.state.ciphertextTextarea)
    }, () => {
      console.log("ciphertexts:", this.state.ciphertexts);
    });
  }

  doThings(event) {
    jQuery.ajax({
      method: 'post',
      url: '/api/runTest',
      data: JSON.stringify({  ciphertexts: this.state.ciphertexts }),
      dataType: 'json',
      error: function (jQReq, status, error) {
        console.log("error", arguments);
      }/*.bind(this)*/,
      success: function (data, status, jQReq) {
        // var success;
        // console.log('success', data, arguments);
        if (!data.err) {
          // success = true;
          console.log('success', data, arguments);

          return;
        }

        // this.setState({ error: true });
      }/*.bind(this)*/
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{ marginTop: '30px' }}>
          <div className="col-md-10 col-md-offset-1">
            <div className="panel panel-default">
              <div className="panel-heading">Ciphertexts</div>
              <div className="panel-body">
                <textarea
                  className="form-control"
                  rows="3"
                  value={this.state.ciphertextTextarea}
                  onChange={this.ctTaChange}>
                </textarea>
                <button className="btn btn-default" type="submit" onClick={this.addCipherText}>
                  Add Ciphertext
                </button>
                <button className="btn btn-default" type="submit" onClick={this.doThings}>
                  Do Things
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
