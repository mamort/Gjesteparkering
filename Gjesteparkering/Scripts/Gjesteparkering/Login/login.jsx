import React, { Component, PropTypes }  from 'react'
import { Router, Route, Link } from 'react-router'
import Constants from '../constants'

import { connect } from 'react-redux';

const Login = ({ onEmailChange, onPasswordChange }) => (
   
            <div>
                <div className="login">
                  <h1>Logg inn <span className='signup'>eller <Link to={Constants.RoutePrefix + 'Registrer-deg'}>Registrer deg</Link></span></h1>

                  <form>
                    <fieldset>
                        <div className="field" id="field-email-input">
                            <label htmlFor="email-input">E-post</label>
                            <input id="email-input" data-bhc="email:email" type="email" name="email" required="" className="field-input" onChange={onEmailChange} />
                        </div>

                        <div className="field" id="field-forgot-password">
                            <label htmlFor="forgot-password">

                            <a id="forgot-password-link" href="/forgot_password">
                                Glemt passord?
                            </a>
                            </label>
                        </div>

                        <div className="field" id="field-password-input">
                            <label htmlFor="password-input">Passord</label>
                            <input id="password-input" type="password" name="password" required="" className="field-input" onChange={onPasswordChange} />
                        </div>

                      <div className="field" id="field-remember-me-checkbox">
                          <label htmlFor="remember-me-checkbox">
                            <input id="remember-me-checkbox" type="checkbox" name="remember_me" checked="checked" value="1" />
                            Husk min innlogging på denne datamaskinen <span className="optional-field">(valgfri)</span>
                          </label>
                      </div>

                    </fieldset>
          
                    <fieldset className="buttons">
                        <div className="field">
                            <input id="signin-button" type="button" className="signin-btn" value="Logg inn" />
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
);


export default Login