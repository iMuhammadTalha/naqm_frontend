/** @format */

import GraphApp from "./GraphApp";
import {authRoles} from "app/auth";

export const GraphAppConfig = {
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
            path: "/graph",
            component: GraphApp,
        },
    ],
};
