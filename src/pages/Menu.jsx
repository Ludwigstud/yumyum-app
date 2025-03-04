import React from "react";
import Header from "../components/Header";
import MenuList from "../components/MenuList";

const Menu = () => {
	return (
		<div className="bg-[#8ED8BF] bg-[url('/src/assets/leafbg.png')] h-screen">
			<Header />
			<MenuList />
		</div>
	);
};

export default Menu;
