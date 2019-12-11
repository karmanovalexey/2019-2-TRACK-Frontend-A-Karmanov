import React from 'react';
import styles from '../styles/list.module.css';
import { ChatOpenContext } from '../containers/MessengerContainer';

function ChatFormat(props) {
	
	return(
		<ChatOpenContext.Consumer>
			{value => {return(
				<div className={ styles.chatform } onClick={ value } id={ props.id } companion={ props.companionName }>
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
				</div>
			);
			}
			}
		</ChatOpenContext.Consumer>
	);
}

export default ChatFormat;