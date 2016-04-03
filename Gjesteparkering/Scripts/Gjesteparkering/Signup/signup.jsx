import React, { Component, PropTypes }  from 'react'
import { Router, Route, Link } from 'react-router'
import Constants from '../constants'

import { connect } from 'react-redux';

class App extends Component {
    render() {
        return(
            <div>
                <div className="signup">
                  <h1>Registrer deg</h1>
                  <form>
                      Navn: <input type='text' />
                  </form>
                </div>
            </div>
        );
    }
}

export default App
