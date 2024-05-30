import DefaultLayout from "../Layout/default"
import Home from "../Page/Home"
import NoPage from "../Page/NoPage"
import Login from "../Page/Login/Login"
import Notification from "../Page/Notification/Notification"
import paths from "./path"
import Meeting from "../Page/Meeting"


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
        name: "meeting",
        page: <DefaultLayout><Meeting /></DefaultLayout>,
        path: paths.meeting,
        exact: true,
    },
    {
        name: "noPage",
        page: <NoPage />,
        path: paths.noPage,
        exact: true,
    }
]