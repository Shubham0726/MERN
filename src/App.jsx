import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
// import RandomNumber from './libs/utills/random';
// import RoundRobin from './libs/utills/roundrobin';
// import Slider from './pages/Slider/Slider'; 
import TextField from './pages/TextFieldDemo/TextFieldDemo';
import Form from './pages/InputText/InputText';
import NotFound from './pages/NotFound';
import Trainee from './pages/Trainee/components/AddDialog';
import Login from './pages/Login/Login';
import ChildrenDemo from './pages/ChildrenDemo/ChildrenDemo';
import theme from './theme';
import { MuiThemeProvider } from '@material-ui/core';
import { AuthRoute, PrivateRoute } from './routes';
import PrivateLayout from './layouts/PrivateLayout';
const App = () => (
  <MuiThemeProvider theme={theme}>
  <BrowserRouter>
  <Switch>
  <div className="App">
  <CssBaseline />
    {/* <TextField value="hello" /> */}
    {/* <TextField error="It is error" /> */}
    {/* <TextField disabled="disabled" /> */}

    {/* <AuthRoute
      component={Login}
      exact
      path="/"
      /> */}
      <PrivateRoute
      exact
      path="/login"
      component={Login}
      />
      <AuthRoute
      exact
       path="/"
      component={Trainee}
      />
       <AuthRoute
      exact
      path="/input-demo"
      component={Form}
      />
      <AuthRoute
      exact
      path="/children-demo"
      component={ChildrenDemo}
      />
      {/* <AuthRoute
       component={NotFound}
      /> */}
  </div>
  </Switch>
  </BrowserRouter>
  </MuiThemeProvider>
  )



export default App;
