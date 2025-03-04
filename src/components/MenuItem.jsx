import React from "react";

const MenuItem = () => {
	const item = {
		name: "Karlstad",
		price: 9,
		ingredients: ["Kantarell", "scharlottenlök", "morot", "bladpersilja"],
	};
	return (
		<div className="mx-auto w-85 my-3 hover:bg-[#F4F3F1F0] hover:text-[#605858] hover:cursor-pointer p-2 rounded-lg bg-[#605858] text-[#F4F3F1F0] txt-shadow group">
			<div className="flex justify-between text-2xl relative">
				<div className="absolute border-b border-dotted border-white/70 left-0 right-0 top-1/2 -z-0"></div>

				<h3 className="bg-[#605858] pr-2 relative z-10 group-hover:bg-[#F4F3F1F0]">{item.name}</h3>
				<h3 className="bg-[#605858] pl-2 relative z-10 group-hover:bg-[#F4F3F1F0]">
					{item.price} SEK
				</h3>
			</div>
			<div className="text-xs">{item.ingredients.join(", ")}</div>
		</div>
	);
};

export default MenuItem;
