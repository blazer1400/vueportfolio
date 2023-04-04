import Home from "@/views/Home.vue";

export default [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'Home',
            icon: 'estate'
        }
    },
    {
        path: '/overview',
        name: 'overview',
        component: () => import("@/views/Overview.vue"),
        meta: {
            title: 'Overview',
            icon: 'eye'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import("@/views/About.vue"),
        meta: {
            title: 'About me',
            icon: 'info'
        }
    },
    {
        path: '/work',
        name: 'work',
        component: import("@/views/Work.vue"),
        meta: {
            title: 'My work',
            icon: 'constructor'
        }
    },
    {
        path:'/work/:id',
        name: 'work.show',
        component: () => import("@/views/Show.vue"),
        meta: {
            title: 'My work'
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import("@/views/Contact.vue"),
        meta: {
            title: 'Contact',
            icon: 'phone'
        }
    }
]