/** @format */

import AirApp from "./AirApp";
import {authRoles} from "app/auth";

export const FarmBotDataAppConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    auth: authRoles.fleet,
    routes: [
        {
            path: "/farmbot-data",
            component: AirApp,
        },
    ],
};
