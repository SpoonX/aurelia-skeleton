export default [
  {
    route   : '',
    name    : 'index',
    moduleId: 'page/index',
    nav     : true,
    auth    : true,
    title   : 'Home'
  },
  {
    route   : '/login',
    name    : 'login',
    moduleId: 'page/auth/login',
    nav     : true,
    auth    : false,
    title   : 'Login'
  },
  {
    route   : 'logout',
    name    : 'logout',
    moduleId: 'page/auth/logout',
    title   : 'Logout'
  }
];
