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
              <Menu.Item><NavLink to='/' exact activeClassName='active item'>Etusivu</NavLink></Menu.Item>
              <Menu.Item><NavLink to='/tuotteet' activeClassName='active item'>Tuotteet</NavLink></Menu.Item>
              <Menu.Item as='a'>Lisää tuote</Menu.Item>
              <Menu.Item as='a'>Yhteystiedot</Menu.Item>
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
        <Menu.Item as='a' active>
            Etusivu
        </Menu.Item>
        <Menu.Item as='a'>Tuotteet</Menu.Item>
        <Menu.Item as='a'>Lisää tuote</Menu.Item>
        <Menu.Item as='a'>Yhteystiedot</Menu.Item>
        <Menu.Item as='a'>Kirjaudu</Menu.Item>
        <Menu.Item as='a'>Rekisteröidy</Menu.Item>
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

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

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
)(ResponsiveContainer)