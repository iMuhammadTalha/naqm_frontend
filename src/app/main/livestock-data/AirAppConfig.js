/** @format */

import AirApp from "./AirApp";
import {authRoles} from "app/auth";

export const LiveStockDataAppConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    auth: authRoles.fleet,
    routes: [
        {
            path: "/livestock-data",
            component: AirApp,
        },
    ],
};
