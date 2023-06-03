/** @format */

import GraphApp from "./GraphApp";
import {authRoles} from "app/auth";

export const FarmBotGraphAppConfig = {
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
            path: "/farmbot-graph",
            component: GraphApp,
        },
    ],
};
