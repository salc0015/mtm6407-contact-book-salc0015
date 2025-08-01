import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../routes/Home';
import NewContact from '../routes/NewContact';
import EditContact from '../routes/EditContact';
import ContactDetails from '../routes/ContactDetails';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/', 
            component: Home
        },
        {
            path: '/new', 
            component: NewContact
        },
        {
            path: '/edit/:id', 
            component: EditContact
        },
        {
            path: '/contact/:id', 
            component: ContactDetails
        }
    ]
})

export default router;