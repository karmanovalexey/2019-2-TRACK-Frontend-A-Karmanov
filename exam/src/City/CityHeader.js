import React from 'react';
import styles from '../styles/City.module.css';

function CityHeader(props) {
	return (
		<div className={styles.header}>
			<div className={styles.button}></div>
			<div> {props.city} </div>
			<div className={styles.button}></div>
		</div>
	)
}

export default CityHeader;