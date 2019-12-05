import React from 'react';
import styles from '../styles/chat.module.css';
import back from '../assets/back.svg';
import user from '../assets/user.svg';
import search from '../assets/search.svg';
import more from '../assets/more.svg';
import { ChatClosedContext } from '../containers/MessengerContainer';

function ConvHeader(){
	return (
		<ChatClosedContext.Consumer>
			{value => {
				return (
					<div className={ styles.conv_head }>
						<div className={ styles.top_line }>
							<button className={ styles.back } onClick= { value }>
								<img className={ styles.back_icon } src={ back } alt="back"/>
							</button>
							<div className={ styles.interlocutor }>
								<img className={ styles.interlocutor_icon } src={ user } alt="user"/>
								<div className={ styles.interlocutor_info }>
									<div className={ styles.interlocutor_name }>
										Name
									</div>
									<div className={ styles.interlocutor_time }>
										last seen 2 hours ago
									</div>
								</div>
							</div>
							<button className={ styles.search }>
								<img className={ styles.search_icon } src={ search } alt="search"/>
							</button>
							<button className={ styles.more }>
								<img className={ styles.more_icon } src={ more } alt="more"/>
							</button>
						</div>
					</div>
				);
			}
			}
		</ChatClosedContext.Consumer>
	);
}

export default ConvHeader;
