import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
export const Navbar = () => {
	return (
		<div className={styles.Navbar}>
			<div className={styles.link}>
				<Link to="/">Home</Link>
			</div>
			<div className={styles.link}>
				<Link to="/Product">Product</Link>
			</div>
		</div>
	);
};