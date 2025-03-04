import { createRoot } from "react-dom/client";
import router from "./router.jsx";
// import './styles/main.scss'
import "./styles/main.css";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
	<>
		<RouterProvider router={router} />
	</>,
);
