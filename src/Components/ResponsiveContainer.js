import PropTypes from 'prop-types'
import React, { useState } from 'react'
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
} from 'semantic-ui-react'

import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter, NavLink
} from 'react-router-dom'
import { connect } from 'react-redux'


// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
const DesktopContainer = (props) => {
  const [fixed, setFixed] = useState()
  console.log('DesktopContainer props', props)
  console.log('DesktopContainer pagePath', props.pagePath)
  console.log('DesktopContainer pagePath', props.pagePath.includes('/viestit'))


  const hideFixedMenu = () => {
    console.log('hideFixedMenu')
    setFixed(false)
  }
  const showFixedMenu = () => {
    console.log('showFixedMenu')
    setFixed(true)
  }

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
        once={false}
        onBottomPassed={() => showFixedMenu()}
        onBottomPassedReverse={() => hideFixedMenu()}
        offset='-500'
      >
        <Segment
          inverted
          textAlign='center'
          vertical
        >
          <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size='large'
          >
            <Container>
              <Menu.Item as={NavLink} to='/' exact>Etusivu</Menu.Item>
              <Menu.Item as={NavLink} to='/tuotteet'>Tuotteet</Menu.Item>
              <Menu.Item as={NavLink} to='/viestit' exact isActive={() => {
                return props.pagePath.includes('/viestit')
              }}>Viestit</Menu.Item>
              <Menu.Item position='right'>
                <Button as='a' inverted={!fixed}>
                    Kirjaudu
                </Button>
                <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Rekisteröidy
                </Button>
              </Menu.Item>

            </Container>
          </Menu>
        </Segment>
      </Visibility>

      {props.children}

    </Responsive>
  )

}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

const MobileContainer = (props) => {
  const [sidebarOpened, setSidebarOpened] = useState()

  const handleSidebarHide = () => setSidebarOpened(false)
  const handleToggle = () => setSidebarOpened(true)

  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyMobile.maxWidth}
    >
      <Sidebar
        as={Menu}
        animation='push'
        inverted
        onHide={() => handleSidebarHide()}
        vertical
        visible={sidebarOpened}
      >
        <Menu.Item as={NavLink} to='/' exact>Etusivu</Menu.Item>
        <Menu.Item as={NavLink} to='/tuotteet'>Tuotteet</Menu.Item>
        <Menu.Item as={NavLink} to='/viestit' exact>Viestit</Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment
          inverted
          textAlign='center'
          style={{ padding: '1em 0em' }}
          vertical
        >
          <Container>
            <Menu inverted pointing secondary size='large'>
              <Menu.Item onClick={() => handleToggle()}>
                <Icon name='sidebar' />
              </Menu.Item>
              <Menu.Item position='right'>
                <Button as='a' inverted>
                Kirjaudu
                </Button>
                <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                Rekisteröidy
                </Button>
              </Menu.Item>
            </Menu>
          </Container>
        </Segment>

        {props.children}
      </Sidebar.Pusher>
    </Responsive>
  )
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = (props) => {
  console.log('ResponsiveContainer props', props)
  console.log('ResponsiveContainer props', props.match.path)
  const pagePath = props.match.path
  return(
    <div>
      <DesktopContainer pagePath={pagePath}>{props.children}</DesktopContainer>
      <MobileContainer pagePath={pagePath}>{props.children}</MobileContainer>
    </div>
  )
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

//export default ResponsiveContainer
const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  }
}
export default connect(
  mapStateToProps, null
)(withRouter(ResponsiveContainer))