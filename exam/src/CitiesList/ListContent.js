import React, { useState } from 'react';
import styles from '../styles/List.module.css';
import ListElement from './ListElement';

function ListContent(props) {
	const [cities, SetCities] = useState([]);


	function createCity() {
		const name = prompt("Enter city name");

		let cityObj = {
			'name': name,
			'temp': 0,
		};

		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=2c729211472dd4714b5b703801c1c157`)
      .then(res => res.json())
      .then(data => {
				cityObj.temp = Math.round(data.main.temp - 273);
				addCity(cityObj)
      });
		
	}

	function addCity(Obj) {
		SetCities(
			cities.concat(
				<ListElement 
					name={Obj.name}
					temp={Obj.temp}
				/>
			)
		)
	}

	return (
		<div className={styles.content}>
			{cities}
			<button className={styles.addcity} onClick={createCity}>
				+
			</button> 
		</div>
	)
}

export default ListContent;