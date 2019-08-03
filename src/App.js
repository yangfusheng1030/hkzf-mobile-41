import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './pages/Home'
import Map from './pages/Map'
import City from './pages/City'
import NoMatch from './pages/NoMatch'

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* <div className="app">app组件</div>

        <Link to="/home">首页</Link>
        <Link to="/map">地图导航</Link>
        <Link to="/city">城市选择</Link> */}

        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/map" component={Map} />
          <Route path="/city" component={City} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}
export default App
