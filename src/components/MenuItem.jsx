import React from "react";

const MenuItem = () => {
	return (
		<div className="mx-auto w-85 my-3 hover:bg-[#F4F3F1F0] hover:text-[#605858] hover:cursor-pointer p-2 rounded-lg bg-[#605858] text-[#F4F3F1F0] txt-shadow">
			<div className="flex  justify-between text-2xl">
				<h3>KARLSTAD</h3>
				<h3>9 SEK</h3>
			</div>
			<div className="text-xs">Kantarell, scharlottenlök, morot, bladpersilja</div>
		</div>
	);
};

export default MenuItem;
