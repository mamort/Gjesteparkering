import React, { Component, PropTypes }  from 'react'
import { Router, Route, Link } from 'react-router'
import Constants from './constants'
import {logout} from './Login/actions'

import { connect } from 'react-redux';

class App extends Component {
    render() {
        return(
            <div>
                <div>
                   <ul className='menu-links'>
                       <li><Link to={Constants.RoutePrefix + 'Registrer-parkeringsplass'}>Registrer parkeringsplass</Link></li>
                   </ul>

                   <ul className='menu-logout'>
                       <li><a onClick={this.props.onLogout}>Logg ut</a></li>
                   </ul>

                   <div className='clearfix'></div>
                </div>

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

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => {
            dispatch(logout());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);