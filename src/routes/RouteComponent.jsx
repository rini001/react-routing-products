import React from "react";
import { Navbar } from "./Navbar";
import { Home } from "../components/Home";
import { AllProduct } from "../components/AllProduct";
import { Route, Routes } from "react-router-dom";
import { Product } from "../components/Product";
import {DoNotExist } from "../components/DoNotExist";


export const RouteComponent = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/Product" element={<Product />}></Route>
				<Route path="/Product/:userId" element={<AllProduct />}></Route>
				<Route path="*" element={<DoNotExist />}></Route>
			</Routes>
		</div>
	);
};