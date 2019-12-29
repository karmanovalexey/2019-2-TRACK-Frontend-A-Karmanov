import React from 'react';
import styles from '../styles/List.module.css';

function ListHeader(props) {
	return (
		<div className={styles.header}>
			<div className={styles.button}></div>
			<div>Manage cities</div>
			<div className={styles.button}></div>
		</div>
	)
}

export default ListHeader;