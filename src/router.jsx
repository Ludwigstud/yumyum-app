import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Menu from "./pages/Menu.jsx";
import Order from "./pages/Order.jsx";
import Receipt from "./pages/Receipt.jsx";
import ETA from "./pages/Eta.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Menu />,
			},
			{
				path: "order",
				element: <Order />,
			},
			{
				path: "receipt/:id",
				element: <Receipt />,
			},
			{
				path: "eta/:id",
				element: <ETA />,
			},
			{
				path: "*",
				element: <div>Page not found</div>,
			},
		],
	},
]);

export default router;
