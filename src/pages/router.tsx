import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFoundPage from "./NotFoundPage";
import ThreeWordsPage from "./ThreeWordsPage";
function AppRouter() {
	const router = createBrowserRouter(
		[
			{
				path: "/",
				Component: ThreeWordsPage,
			},
			{
				path: "/*",
				Component: NotFoundPage,
			},
		],
		{ basename: process.env.PUBLIC_URL }
	);
	return <RouterProvider router={router}></RouterProvider>;
}

export default AppRouter;
