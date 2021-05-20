/** @format */

import React from "react";
import {Redirect} from "react-router-dom";
import {FuseUtils} from "@fuse/index";
import {DashboardConfig} from "app/main/dashboard/DashboardConfig";
import {BrandUsersLoginConfig} from "app/main/login/LoginConfig";
import {LoginConfig} from "app/main/super-login/LoginConfig";
import {RegisterConfig} from "app/main/register/RegisterConfig";
import {Error404PageConfig} from "app/main/errors/Error404PageConfig";
import {ReadingsAppConfig} from "app/main/reading/ReadingsAppConfig";
import {LogoutConfig} from "app/main/logout/LogoutConfig";

const routeConfigs = [
    DashboardConfig,
    BrandUsersLoginConfig,
    LoginConfig,
    RegisterConfig,
    ReadingsAppConfig,
    LogoutConfig,
    Error404PageConfig,
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path: "/",
        exact: true,
        component: () => <Redirect to="/login"/>,
    },
    {
        path: "/su-admin/",
        exact: true,
        component: () => <Redirect to="/su-admin/login"/>,
    },
    {
        path: "/dashboard/",
        exact: true,
        component: () => <Redirect to="/dashboard"/>,
    },
    {
        component: () => <Redirect to="/404"/>,
    },
];
export default routes;
