import React from 'react'
import { Router, Route, Link } from 'react-router'

const Registrer = ({ onNameChanged, onParkeringsplassCreate }) => (
  <div>
      <h1>Registrer parkeringsplass</h1>
       <form>
           <label>Navn: </label> 
           <input type='text' onChange={onNameChanged} />
           <input type='button' onClick={onParkeringsplassCreate} />
        </form>
  </div>
)  
 

export default Registrer