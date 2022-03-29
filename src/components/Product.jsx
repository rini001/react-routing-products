import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css"

export const Product = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/posts", {
			method: "GET",
			headers: { "Content-type": "application/json;charset=UTF-8" },
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				setData(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<h1 className={styles.heading}>Welcome to Product Page!</h1>

			<div className={styles.product0}>
				{data.map((elem) => {
					return (
						<div key={elem.id} className={styles.product}>
							<div>{elem.name}</div>
							<div>{elem.price}</div>
							<div >	<img
					src={elem.image}
					alt="mobile"
					className={styles.image} 
				/></div>
							<Link to={`./${elem.id}`}>More Detail</Link>
						</div>
					);
				})}
			</div>
		</>
	);
};