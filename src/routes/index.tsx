import { createBrowserRouter } from "react-router-dom";
import WorkshopRegForm from "../pages/WorkshopRegForm/WorkshopRegForm";
import AdminIndex from "../pages/Admin/AdminIndex";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <WorkshopRegForm />,
        errorElement: <NotFoundPage />
    },
    {
        path: "/workshop/register/:expertise",
        element: <WorkshopRegForm />,
    },
    {
        path: "/admin",
        element: <AdminIndex />,
    },
]);

export { router }