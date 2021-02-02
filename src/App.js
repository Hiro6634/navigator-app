import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

import './App.css';

const MainPage = () => (<div><h1>MainPage</h1></div>);
const Page1 = () => (<div><h1>Page1</h1></div>);
const Page2 = () => (<div><h1>Page2</h1></div>);
const Page3 = () => (<div><h1>Page3</h1></div>);
const Page4 = () => (<div><h1>Page4</h1></div>);
const About = () => (<div><h1>About</h1></div>);

const App = () => {
  return (
    <div>
      <Layout isAuthenticated>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route path="/page1" component={Page1}/>
          <Route path="/page2" component={Page2}/>
          <Route path="/page3" component={Page3}/>
          <Route path="/page4" component={Page4}/>
          <Route path="/about" component={About}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
