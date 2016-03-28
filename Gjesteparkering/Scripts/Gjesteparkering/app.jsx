import React, { Component, PropTypes }  from 'react'
import { Router, Route, Link } from 'react-router'

import { connect } from 'react-redux';

const App2 = ({ props }) => (
  <div>
       <ul>
           <li><Link to='Registrer-parkeringsplass'>Registrer parkeringsplass</Link></li>
       </ul>

        <div className="body-content">
          {props.children}

          <hr />

          <footer>
            <p>Copyright...</p>
          </footer>
        </div>
  </div>
)  

class App extends Component {
    render() {
        return(
            <div>
               <ul>
                   <li><Link to='Registrer-parkeringsplass'>Registrer parkeringsplass</Link></li>
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