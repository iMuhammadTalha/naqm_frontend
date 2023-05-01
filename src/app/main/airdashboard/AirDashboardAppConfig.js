/** @format */

import AirDashboardApp from "./AirDashboardApp";
import {authRoles} from "app/auth";

export const AirDashboardAppConfig = {
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
            path: "/airdashboard",
            component: AirDashboardApp,
        },
    ],
};
