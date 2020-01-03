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
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

import './App.css'
import Products from './components/Products'
import HomepageLayout from './components/HomepageLayout'
import ProductsLayout from './components/ProductsLayout'


//import Notes from './components/Notes'
import { initializeNotes } from './reducers/noteReducer'
import { fetchMessages } from './reducers/messageReducer'


const App = (props) => {

  const [page, setPage] = useState('')
  console.log('page', page)

  return (
    <Router>
      <Route exact path="/" render={() =>
        <HomepageLayout />
      } />
      <Route exact path="/tuotteet" render={() =>
        <ProductsLayout />
      } />
    </Router>
  )
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    router: state.router
  }
}
export default connect(
  mapStateToProps, { initializeNotes, fetchMessages }
)(App)


