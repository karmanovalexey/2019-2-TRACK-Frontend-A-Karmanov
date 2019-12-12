import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChatList from '../ListComponents/ChatList';
import ConvWindow from '../ConversationComponents/ConvWindow';
import Profile from '../ProfileComponents/Profile';

export default class MessengerContainer extends React.Component {
	render() {
		return(
			<Router>
				<Switch>
					<Route path="/chat_id=:chatId">
						<ConvWindow/>
					</Route>
					<Route path="/profile">
						<Profile/>
					</Route>
					<Route path="/">
						<ChatList/>
					</Route>
				</Switch>
			</Router>
		); 
	}
}

