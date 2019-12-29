import React from 'react';
import styles from '../styles/City.module.css';
import CityHeader from './CityHeader';
import CityContent from './CityContent';

function City(props) {
	return (
		<div className={styles.citywrapper}>
			<CityHeader />
			<CityContent />
		</div>
	)
}

export default City;