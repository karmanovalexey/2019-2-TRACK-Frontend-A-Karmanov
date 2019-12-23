import React from 'react';
import styles from '../styles/List.module.css';
import { Link } from 'react-router-dom';

function ListElement(props) {
	return (
		<Link to="/city" className={styles.city}>
			<div className={styles.name}>
				{props.name}
			</div>
			<div className={styles.temp}>
				{props.temp}
			</div>
		</Link>
	)
}

export default ListElement;