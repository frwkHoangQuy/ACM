import DefaultLayout from "../Layout/default"
import Home from "../Page/Home"
import NoPage from "../Page/NoPage"
import Planner from "../Page/Planner.mobile"
import Login from "../Page/Login"
import Notification from "../Page/Notification"
import paths from "./path"


export const routes = [
    {
        name: "login",
        page: <Login />,
        path: paths.login,
        exact: true,
    },
    {
        name: "home",
        page: <DefaultLayout><Home /></DefaultLayout>,
        path: paths.home,
        exact: true,
    },
    {
        name: "notification",
        page: <DefaultLayout><Notification /></DefaultLayout>,
        path: paths.notification,
        exact: true,
    },
    {
        name: "planner",
        page: <DefaultLayout><Planner /></DefaultLayout>,
        path: paths.planner,
        exact: true,
    },
    {
        name: "noPage",
        page: <NoPage />,
        path: paths.noPage,
        exact: true,
    }
]