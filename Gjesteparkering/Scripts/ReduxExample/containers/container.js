import { connect } from 'react-redux'
import { fetchData, testAction, exampleFormSubmit} from '../actions/actions'
import { test, exampleUiSelector } from '../../stateSelectors'
import View from '../components/view.jsx'

const mapStateToProps = (state) => {
    var exampleUi = exampleUiSelector(state);
    return {
        isFetching: exampleUi.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: (input) => {
            dispatch(fetchData('filter')); 
            dispatch(testAction(input.target.value)); 
        },

        onFormChange: (field, value) => {
            //alert(field);
        },

        onFormSubmit: () => {
            dispatch(exampleFormSubmit());
        }
    }
}

const ExampleApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(View);

export default ExampleApp