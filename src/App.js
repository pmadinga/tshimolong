// import bootstrap components
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// import page views and components
import Home from './views/pages/Home'
import Survey from './views/pages/Survey'
import Results from './views/pages/Results'
import SiteHeader from './views/components/SiteHeader'
import SiteFooter from './views/components/SiteFooter'

function App() {
  
  return (
    <div className="App">
      <Router>
        <SiteHeader/>
        <Switch>
          <Route exact path='/'>
            <Home/> 
          </Route>
          <Route path="/survey">
            <Survey/> 
          </Route>
          <Route path="/results">
            <Results/> 
          </Route>
        </Switch>
        {/* <SiteFooter/> */}
      </Router>
    </div>
  );
}

export default App;
