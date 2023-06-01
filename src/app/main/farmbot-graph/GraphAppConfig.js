/** @format */

import GraphApp from "./GraphApp";
import {authRoles} from "app/auth";

export const FarmBotGraphAppConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    auth: authRoles.fleet,
    routes: [
        {
            path: "/farmbot-graph",
            component: GraphApp,
        },
    ],
};
