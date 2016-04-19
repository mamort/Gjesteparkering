import { connect } from 'react-redux'
import View from './login.jsx'
import { loginEmailChanged, loginPasswordChanged, login } from './actions'

const mapStateToProps = (state) => {
    return {
        props: {
            isWrongUsernameOrPass: state.login.loginFailed
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEmailChange: (input) => {
            dispatch(loginEmailChanged(input.target.value)); 
        },

        onPasswordChange: (input) => {
            dispatch(loginPasswordChanged(input.target.value)); 
        },

        onLogin:() => {
            dispatch(login()); 
        }
    }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(View);

export default Login