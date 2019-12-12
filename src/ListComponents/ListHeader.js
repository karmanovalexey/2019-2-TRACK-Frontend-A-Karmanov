import React from 'react';
import styles from '../styles/list.module.css';
import burger from '../assets/menu_list.svg';
import search from '../assets/search.svg';
import user from '../assets/user.svg';
import { Link } from 'react-router-dom';

function ListHeader() {
	return (
		<div className={ styles.chatlisthead }>
			<button className={ styles.burger }>
				<img className={ styles.burgericon } src={ burger } alt="menu"/>
			</button>
			<Link to="/profile" className={ styles.interlocutor }>
				<img className={ styles.interlocutor_icon } src={ user } alt="interlocutor"/>
			</Link>
			<div className={ styles.header}>
				Chats
			</div>
			<button className={ styles.search }>
				<img className={ styles.searchicon } src={ search } alt="search"/>
			</button>
		</div>
	);
}

export default ListHeader;
