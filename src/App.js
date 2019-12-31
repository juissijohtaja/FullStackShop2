import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Table, Menu, Link } from 'semantic-ui-react'
import { connect } from 'react-redux'

import './App.css'
import fire from './fire'
import ProductForm from './components/ProductForm'
import Products from './components/Products'

//import Notes from './components/Notes'
import { initializeNotes } from './reducers/noteReducer'
import { fetchMessages } from './reducers/messageReducer'


const App = (props) => {

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

  return (
    <Container>
      <Menu inverted color='red' >
        <Menu.Item link>
          <a onClick={() => setPage('products')}>Products</a>
        </Menu.Item>
        <Menu.Item link>
          <a onClick={() => setPage('productform')}>Add Product</a>
        </Menu.Item>
      </Menu>
      <h2>Old School Shop</h2>

      <Products show={page === 'products'} />
      <ProductForm show={page === 'productform'}  />

      <div>
        <h3>Messages Redux</h3>
        <ul>
          {props.messages.map(message => <li key={message.id}>{message.text}</li>)}
        </ul>
      </div>

      <Form onSubmit={AddMessage}>
        <div>
          <Form.Field>
            <label>Add message</label>
            <input
              type="text"
              value={newMessage}
              onChange={({ target }) => setNewMessage(target.value)}
            />
          </Form.Field>
        </div>
        <Button type='submit'>Save</Button>
      </Form>
    </Container>
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


