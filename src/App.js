import React, { useState, useEffect } from 'react'

import './App.css'
import fire from './fire'
import ProductForm from './components/ProductForm'
import Products from './components/Products'

import NewNote from './components/NewNote'
//import Notes from './components/Notes'
import { connect } from 'react-redux'
import { initializeNotes } from './reducers/noteReducer'
import { fetchMessages } from './reducers/messageReducer'


const App = (props) => {

  const [messages2, setMessages2] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [page, setPage] = useState('products')
  console.log('page', page)

  useEffect(() => {
    props.fetchMessages()
  }, [])

  console.log('App props', props.messages)

  const AddMessage = (e) => {
    e.preventDefault() // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('messages').push( newMessage )
    setNewMessage('') // <- clear the input
  }

  const MessageContent = () => {

    return (
      <ul>
        {props.messages.map(message => <li key={message.id}>{message.text}</li>)}
      </ul>
    )

  }

  return (
    <div className="App">
      <div>
        <button onClick={() => setPage('products')}>Products</button>
        <button onClick={() => setPage('productform')}>Product form</button>
      </div>
      <h2>Old School Shop</h2>

      <Products show={page === 'products'} />
      <ProductForm show={page === 'productform'}  />

      <form onSubmit={AddMessage}>
        <div>
          Add message
          <input
            type="text"
            value={newMessage}
            onChange={({ target }) => setNewMessage(target.value)}
          />
        </div>
        <input type="submit" value="Save"/>
      </form>

      <div>
        <h3>Messages Redux</h3>
        <ul>
          {props.messages.map(message => <li key={message.id}>{message.text}</li>)}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}
export default connect(
  mapStateToProps, { initializeNotes, fetchMessages }
)(App)


