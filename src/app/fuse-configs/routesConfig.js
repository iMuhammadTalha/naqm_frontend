/** @format */

import React from "react";
import {Redirect} from "react-router-dom";
import {FuseUtils} from "@fuse/index";
import {IndexConfig} from "app/main/index/IndexConfig";
import {DashboardAppConfig} from "app/main/dashboard/DashboardAppConfig";
import {AirDashboardAppConfig} from "app/main/airdashboard/AirDashboardAppConfig";
import {BrandUsersLoginConfig} from "app/main/login/LoginConfig";
import {LoginConfig} from "app/main/super-login/LoginConfig";
import {RegisterConfig} from "app/main/register/RegisterConfig";
import {Error404PageConfig} from "app/main/errors/Error404PageConfig";
import {ReadingsAppConfig} from "app/main/reading/ReadingsAppConfig";
import {AirAppConfig} from "app/main/air/AirAppConfig";
import {GraphAppConfig} from "app/main/graph/GraphAppConfig";
import {GraphPredictionAppConfig} from "app/main/graph-prediction/GraphPredictionAppConfig";
import {LiveStockGraphAppConfig} from "app/main/livestock-graph/GraphAppConfig";
import {LiveStockDataAppConfig} from "app/main/livestock-data/AirAppConfig";
import {FarmBotGraphAppConfig} from "app/main/farmbot-graph/GraphAppConfig";
import {FarmBotDataAppConfig} from "app/main/farmbot-data/DataAppConfig";
import {Config as FarmBotConfig} from "app/main/farmbot/Config";

import {LogoutConfig} from "app/main/logout/LogoutConfig";

const routeConfigs = [
    IndexConfig,
    DashboardAppConfig,
    AirDashboardAppConfig,
    BrandUsersLoginConfig,
    LoginConfig,
    RegisterConfig,
    ReadingsAppConfig,
    AirAppConfig,
    GraphAppConfig,
    GraphPredictionAppConfig,
    LogoutConfig,
    Error404PageConfig,
    LiveStockGraphAppConfig,
    LiveStockDataAppConfig,
    FarmBotGraphAppConfig,
    FarmBotDataAppConfig,
    FarmBotConfig
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
