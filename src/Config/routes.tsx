import React from 'react';

import Login from '../Pages/Login';
import Main from '../Pages/Main';
import SignUp from '../Pages/SignUp';

// TODO: tipar o any
const routesConfig: any[] = [
  {
    component: Login,
    exact: true,
    path: '/'
  },
  {
    component: SignUp,
    exact: true,
    path: '/sign-up'
  },
  {
    component: Main,
    path: '/main'
  }
];

export default routesConfig;
