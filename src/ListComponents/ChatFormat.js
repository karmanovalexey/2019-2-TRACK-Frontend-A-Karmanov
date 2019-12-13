import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/list.module.css';

function ChatFormat(props) {
	
	return(
		<Link to={`/chat_id=${ props.id }`} className={ styles.chatform }>
			<div className={ styles.chatbutton } >
				<button className={ styles.profile }/>
				<div className={ styles.name_message } >
					<div className={ styles.name } >
						{ props.companionName }
					</div>
					<div className={ styles.message }>
						{ props.message }
					</div>
				</div>
				<div className={ styles.time_status }>
					<div className={ styles.time }>
						{ props.time }
					</div>
					<div className={ styles.status }>
						!
					</div>
				</div>
			</div>
		</Link>
	);
}

export default ChatFormat;