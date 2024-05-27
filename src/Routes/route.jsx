import DefaultLayout from "../Layout/default"
import Home from "../Page/Home"
import NoPage from "../Page/NoPage"
import Login from "../Page/Login"
import Notification from "../Page/Notification/Notification"
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
        name: "noPage",
        page: <NoPage />,
        path: paths.noPage,
        exact: true,
    }
]