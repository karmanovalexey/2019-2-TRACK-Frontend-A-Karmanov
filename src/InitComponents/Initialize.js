import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/init.module.css';

function Initialize(props) {
	const [username, setUsername] = useState(InitUsername());

	function InitUsername() {
		localStorage.setItem('UserId', JSON.stringify({'username': 'anonymous'}));
		return 'anonymous';
	}
	function handleChange(event) {
		setUsername(event.target.value);
	}

	function handleClick(event) {
		localStorage.setItem('UserId', JSON.stringify({'username': username}));
	}

	return(
		<div className={styles.init}>
			<div> Please, enter your username</div>
			<input className={styles.initform} onChange={handleChange}/>
			<Link to="/chats" onClick={handleClick} className={styles.enter}> Confirm </Link>
		</div>
	)
}

export default Initialize;