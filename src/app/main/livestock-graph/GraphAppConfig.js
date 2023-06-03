/** @format */

import GraphApp from "./GraphApp";
import {authRoles} from "app/auth";

export const LiveStockGraphAppConfig = {
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
            path: "/livestock-graph",
            component: GraphApp,
        },
    ],
};
