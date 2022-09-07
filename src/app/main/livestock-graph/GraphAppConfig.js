/** @format */

import GraphApp from "./GraphApp";
import {authRoles} from "app/auth";

export const LiveStockGraphAppConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    auth: authRoles.fleet,
    routes: [
        {
            path: "/livestock-graph",
            component: GraphApp,
        },
    ],
};
