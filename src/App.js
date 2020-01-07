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
import ProductPageLayout from './components/ProductPageLayout'
import MessagesLayout from './components/MessagesLayout'
import MessagePageLayout from './components/MessagePageLayout'
import ShoppingCartLayout from './components/ShoppingCartLayout'


import { fetchMessages } from './reducers/messageReducer'

const App = (props) => {

  return (
    <Router>
      <Route exact path="/" component={HomepageLayout} render={() =>
        <HomepageLayout />
      } />
      <Route exact path="/tuotteet" render={() =>
        <ProductsLayout />
      } />
      <Route path="/tuotteet/:id" render={() =>
        <ProductPageLayout />
      } />
      <Route exact path="/viestit" render={() =>
        <MessagesLayout />
      } />
      <Route path="/viestit/:id" render={() =>
        <MessagePageLayout />
      } />
      <Route path="/ostoskori" render={() =>
        <ShoppingCartLayout />
      } />
    </Router>
  )
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    router: state.router,
    shoppingcart: state.shoppingcart
  }
}
export default connect(
  mapStateToProps, { fetchMessages }
)(App)


