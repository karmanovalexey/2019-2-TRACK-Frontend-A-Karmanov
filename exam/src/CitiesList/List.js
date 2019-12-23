import React from 'react';
import ListHeader from './ListHeader';
import ListContent from './ListContent'
import styles from '../styles/List.module.css';

function List(props) {
	return (
		<div className={styles.listwrapper}>
			<ListHeader />
			<ListContent />
		</div>
	)
}

export default List;