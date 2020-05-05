import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider, connect } from 'react-redux'

import Header from './components/Header'
import Slider from './components/Slider'
import Footer from './components/Footer'
import Message from './components/Message'
import Login from './components/Login'

import Home from './pages/Home'
import Introduction from './pages/Introduction'
import Blog from './pages/Blog'
import DetailBlog from './pages/DetailBlog'
import Product from './pages/Product'

const App = ({ store, isActive }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div style={{ position: 'relative' }}>
          {isActive === true ? <Login /> : ''}
          <Header />
          <Slider />
          <Message />

          <div className="container-fluid">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/Introduction">
                <Introduction />
              </Route>
              <Route path="/product">
                <Product />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path='/blog/detail'>
                <DetailBlog />
              </Route>
            </Switch>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  )
}
const mapStateToProps = ({ helperReducer }) => ({
  isActive: helperReducer.isActive
})
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(App);