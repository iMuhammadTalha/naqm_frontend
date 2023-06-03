/** @format */

import AirApp from "./AirApp";
import {authRoles} from "app/auth";

export const LiveStockDataAppConfig = {
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
            path: "/livestock-data",
            component: AirApp,
        },
    ],
};
