/** @format */

import AirApp from "./AirApp";
import {authRoles} from "app/auth";

export const FarmBotDataAppConfig = {
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
            path: "/farmbot-data",
            component: AirApp,
        },
    ],
};
