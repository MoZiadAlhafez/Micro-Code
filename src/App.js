import React , {Component} from 'react';
import {BrowserRouter ,Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './bootstrap.min.css';

import NavigationBar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Portfolio from './Pages/PortFolio/Portfolio';
import Contact from './Pages/Contact/Contact'
import NotFound from './Pages/Not Found/NotFound';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Switch>
            
            <Route exact path='/' component={Home} />
            <Route exact path='/Micro-Code' component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contact' component={Contact} />
            <Route path='/:something' component={NotFound}/>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

function MapStateToProps(state)  {
  return {
    SiteLinks: state.SiteLinks
  }
}

export default connect(MapStateToProps)(App);
