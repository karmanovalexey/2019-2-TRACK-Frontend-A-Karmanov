import React from 'react';
import styles from '../styles/list.module.css';
import ListHeader from './ListHeader';
import ListContent from './ListContent';

function ChatList(props) {
	return (
		<div className={ styles.chat_list }>
			<ListHeader />
			<ListContent />
		</div>
	);
}

export default ChatList;
