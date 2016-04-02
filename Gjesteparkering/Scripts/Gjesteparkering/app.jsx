import React, { Component, PropTypes }  from 'react'
import { Router, Route, Link } from 'react-router'
import Constants from './constants'

import { connect } from 'react-redux';

class App extends Component {
    render() {
        return(
            <div>
               <ul>
                   <li><Link to={Constants.RoutePrefix + 'Registrer-parkeringsplass'}>Registrer parkeringsplass</Link></li>
               </ul>

                <div className="body-content">
                  {this.props.children}

                  <hr />

                  <footer>
                    <p>Copyright...</p>
                  </footer>
                </div>
            </div>
        );
    }
}

export default App

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);