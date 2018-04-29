//Core
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Layout from '../layout/layout';
import Home from '../../routes/home/home';
import Work from '../../routes/work/work';
import About from '../../routes/about/about';
import Contact from '../../routes/contact/contact';
import Work1 from '../../routes/work/work1/work1';
import Work2 from '../../routes/work/work2/work2';

const app = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/work' component={Work} exact/>
          <Route path='/about' component={About} exact/>
          <Route path='/contact' component={Contact} exact/>
          <Route path='/work/1' component={Work1} exact/>
          <Route path='/work/2' component={Work2} exact/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default app;