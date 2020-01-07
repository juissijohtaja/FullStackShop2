import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMessages, createMessage, removeMessage } from '../reducers/messageReducer'

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
import { withRouter } from 'react-router-dom'

import Products from './Products'
import ProductForm from './ProductForm'
import Footer from './Footer'
import ResponsiveContainer from './ResponsiveContainer'

const AdminLayout = (props) => {

  return(
    <ResponsiveContainer>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em' }}>
          Ylläpito
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Terve {props.loggeduser.username}! Hallinnoi tuotteita.
          </p>
          <Products />
          <ProductForm />
        </Container>
      </Segment>
      <Footer />
    </ResponsiveContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    products: state.products,
    loggeduser: state.loggeduser
  }
}
export default connect(
  mapStateToProps, { fetchMessages, createMessage, removeMessage }
)(withRouter(AdminLayout))