import { connect } from 'react-redux'
import { parkeringsplassNameChanged, createParkeringsplass } from './actions'
import View from './registrer.jsx'

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNameChanged: function(input) {
            dispatch(parkeringsplassNameChanged(input.target.value)); 
        },

        onParkeringsplassCreate: function() {
            dispatch(createParkeringsplass());
        }
    }
}

const RegistrerComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(View);

export default RegistrerComponent