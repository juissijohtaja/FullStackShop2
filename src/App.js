import React, { useState, useEffect } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Form
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './App.css'
import fire from './fire'
import ProductForm from './components/ProductForm'
import Products from './components/Products'
import HomepageLayout from './components/HomepageLayout'


//import Notes from './components/Notes'
import { initializeNotes } from './reducers/noteReducer'
import { fetchMessages } from './reducers/messageReducer'


const App = () => {

  const [page, setPage] = useState('products')
  console.log('page', page)

  return (
    <div>
      <HomepageLayout show={page === 'homepagelayout'} />
      <Container>
        <Menu inverted color='red'>
          <Menu.Item link>
            <a onClick={() => setPage('products')}>Products</a>
          </Menu.Item>
          <Menu.Item link>
            <a onClick={() => setPage('productform')}>Add Product</a>
          </Menu.Item>
          <Menu.Item link>
            <a onClick={() => setPage('homepagelayout')}>HomepageLayout</a>
          </Menu.Item>
        </Menu>

        <ProductForm show={page === 'productform'}  />

      </Container>
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


