import { connect } from 'react-redux'
import View from './login.jsx'
import { loginEmailChanged, loginPasswordChanged } from './actions'

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEmailChange: (input) => {
            dispatch(loginEmailChanged(input.target.value)); 
        },

        onPasswordChange: (input) => {
            dispatch(loginPasswordChanged(input.target.value)); 
        }
    }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(View);

export default Login