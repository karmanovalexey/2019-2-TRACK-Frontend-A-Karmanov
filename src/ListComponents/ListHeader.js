import React from 'react';
import styles from '../styles/list.module.css';
import burger from '../assets/menu_list.svg';
import search from '../assets/search.svg';

function ListHeader() {
	return (
		<div className={ styles.chatlisthead }>
			<button className={ styles.burger }>
				<img className={ styles.burgericon } src={ burger } alt="menu"/>
			</button>
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
