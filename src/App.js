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
  Route, Link, Redirect
} from 'react-router-dom'

import './App.css'
import HomepageLayout from './components/HomepageLayout'
import ProductsLayout from './components/ProductsLayout'
import MessagesLayout from './components/MessagesLayout'
import MessagePageLayout from './components/MessagePageLayout'

import { fetchMessages } from './reducers/messageReducer'


const App = () => {

  return (
    <Router>
      <Route exact path="/" component={HomepageLayout} render={() =>
        <HomepageLayout />
      } />
      <Route exact path="/tuotteet" render={() =>
        <ProductsLayout />
      } />
      <Route exact path="/viestit" render={() =>
        <MessagesLayout />
      } />
      <Route path="/viestit/:id" render={() =>
        <MessagePageLayout />
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
  mapStateToProps, { fetchMessages }
)(App)


