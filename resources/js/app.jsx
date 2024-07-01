import './bootstrap';
import '../css/app.css';
import '../../public/assets/css/main.css';
import '../../public/assets/css/custom.css';
import '../../public/assets/css/dark-theme.css';
import '../../public/assets/css/main.min.css';
import '../../public/assets/plugins/bootstrap/css/bootstrap.min.css';
import '../../public/assets/plugins/font-awesome/css/all.min.css';
// import '../../public/assets/plugins/perfectscroll/perfect-scrollbar.css';

import '../../public/assets/js/main.js';
import '../../public/assets/plugins/jquery/jquery-3.4.1.min.js';
import '../../public/assets/plugins/bootstrap/js/bootstrap.min.js';
// import '../../public/assets/plugins/perfectscroll/perfect-scrollbar.min.js';
// import '/public/assets/plugins/perfectscroll/perfect-scrollbar.common.js';
// import '/public/assets/plugins/perfectscroll/perfect-scrollbar.esm.js';
// import '/public/assets/plugins/perfectscroll/perfect-scrollbar.js';
// import '../../public/assets/js/pages/dashboard.js';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Portofolio CRM Rama';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
