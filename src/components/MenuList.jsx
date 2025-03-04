import React from "react";
import MenuItem from "./MenuItem";

const MenuList = () => {
	return (
		<div className="flex flex-col w-[360px] h-[700px] bg-[#605858] align-middle m-auto text-[#F4F3F1F0] txt-shadow">
			<h1 className="m-5 text-4xl">MENY</h1>
			<MenuItem />
			<MenuItem />
			<MenuItem />
			<MenuItem />
			<MenuItem />
			<MenuItem />
			<MenuItem />
		</div>
	);
};

export default MenuList;
