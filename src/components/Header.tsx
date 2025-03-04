import React from "react";
import logoImg from "../assets/YYGS.svg";
import logoCart from "../assets/cart.svg";
const Header = () => {
	return (
		<div className="header flex justify-between p-3">
			<img
				src={logoImg}
				className="w-24px h-auto "
				alt="yygs"
			/>
			<div className="w-16 h-16 rounded-lg flex items-center justify-center bg-white">
				<img
					src={logoCart}
					className="w-9"
					alt="cart"
				/>
			</div>
		</div>
	);
};

export default Header;
