import Vue from 'vue';
import Router from 'vue-router';

import UsersIndex from './views/UsersIndex.vue';
import UsersNew from './views/UsersNew.vue';
import UsersShow from './views/UsersShow.vue';
import UsersEdit from './views/UsersEdit.vue';

// import Signup from "./views/Signup.vue";
// import Login from "./views/Login.vue";
// import Logout from "./views/Logout.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {path: '/', name: 'home', component: UsersIndex },

    {path: '/users', name: 'users-index', component: UsersIndex },
    {path: '/users/new', name: 'users-new', component: UsersNew },
    {path: '/users/:id', name: 'users-show', component: UsersShow },
    {path: '/users/:id/edit', name: 'users-edit', component: UsersEdit },

    // { path: "/signup", name: "signup", component: Signup },
    // { path: "/login", name: "login", component: Login },
    // { path: "/logout", name: "logout", component: Logout }
  ]
})
