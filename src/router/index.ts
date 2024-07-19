import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Catalog from '../views/Catalog.vue';
import Membership from '../views/Membership.vue';
import Events from '../views/Events.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/catalog', name: 'Catalog', component: Catalog },
  { path: '/membership', name: 'Membership', component: Membership },
  { path: '/events', name: 'Events', component: Events },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
