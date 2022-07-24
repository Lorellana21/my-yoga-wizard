import { Router } from '@vaadin/router';
import './pages/home.page';
import './pages/poses.page';
import './pages/session.page';

const outlet = document.querySelector('#outlet');
const router = new Router(outlet);

router.setRoutes([
    { 
        path: '/', 
        component: 'home-page' 
    },
    { 
        path: '/poses',
        component: 'poses-page'
    },
    { 
        path: '/session',
        component: 'session-page'
    },
    { 
        path: '(.*)', redirect: '/' }
])