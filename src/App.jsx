import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import  { BrowserRouter, Switch } from 'react-router-dom';
import Form from './pages/InputText/InputText';
import Trainee from './pages/Trainee/components/AddDialog';
import Login from './pages/Login/Login';
import ChildrenDemo from './pages/ChildrenDemo/ChildrenDemo';
import theme from './theme';
import FirstHook from './pages/Hooks/Hooks';
import { MuiThemeProvider } from '@material-ui/core';
import { AuthRoute, PrivateRoute } from './routes';
// import RandomNumber from './libs/utills/random';
// import RoundRobin from './libs/utills/roundrobin';
// import Slider from './pages/Slider/Slider'; 
// import TextField from './pages/TextFieldDemo/TextFieldDemo';
// import NotFound from './pages/NotFound';
// import PrivateLayout from './layouts/PrivateLayout';

const App = () => (
  <MuiThemeProvider theme={theme}>
  <BrowserRouter>
  <Switch>
  <div className="App">
  <CssBaseline />
    {/* <TextField value="hello" /> */}
    {/* <TextField error="It is error" /> */}
    {/* <TextField disabled="disabled" /> */}

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
      <AuthRoute
      exact
      path="/hooks-demo"
      component={FirstHook}
      />
  </div>
  </Switch>
  </BrowserRouter>
  </MuiThemeProvider>
  )



export default App;
