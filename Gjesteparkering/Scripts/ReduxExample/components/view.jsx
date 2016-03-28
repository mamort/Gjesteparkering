import React from 'react'

function showData(data) {
    if (data) {
        return(<span>{data.Name}</span>);
    }
}

const App = ({ isFetching, data, onButtonClick, onFormChange, onFormSubmit }) => (
  <div>
    This is a text: {isFetching}. Data: {showData(data)} 
    <input type="button" onClick={onButtonClick} value="Test" />

        <form>
            <input type="text" name="name" id="name" onChange={(input) => { onFormChange('name', input.target.value) }} />
            <input type="button" value="Submit" onClick={onFormSubmit} />
        </form>
  </div>
)  


export default App