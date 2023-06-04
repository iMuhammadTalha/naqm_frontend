import Index from './Index';
import {authRoles} from 'app/auth';
import IndexApp from './IndexApp';

export const IndexConfig = {
    settings: {
        layout: {
            config: {
                navbar: {
                    display: false
                },
                toolbar: {
                    display: false
                },
                footer: {
                    display: false
                },
                leftSidePanel: {
                    display: false
                },
                rightSidePanel: {
                    display: false
                }
            }
        }
    },
    routes: [
        {
            path: '/aqm',
            component: IndexApp
        }
    ]
};
