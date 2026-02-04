import { createBrowserRouter } from "react-router-dom";
import { EntertainmentApp } from "@/EntertainmentApp";

export const router = createBrowserRouter([
    {
        index: true,
        path: "/",
        element: <EntertainmentApp />,
    }
])