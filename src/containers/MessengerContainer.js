import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ActionTypes from '../constants/ActionTypes';

export default class MessengerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChatOpen = this.handleChatOpen.bind(this);
    this.handleChatClosed = this.handleChatClosed.bind(this);
    this.chatListStyle = { display: 'flex' };
    this.messageFormStyle = { display: 'none' };
    this.state = {
			isChatOpen: 0,
			interlocutorName: "Companion's name",
			messageForm: '',
			chatList: <ChatList isChatOpen={0} openChatFunc={this.handleChatOpen} />,
    }
  }

  handleChatOpen(event) {
    const { target } = event;
		while (target.className !== chatElemStyles.chat_elem) {
			target = target.parentElement;
			if (target === null) {
				return;
			}
		}
		const openedChatId = +target.getAttribute('id');
		const storageChatArray = JSON.parse(localStorage.getItem(chatsArrayKey));
		if (storageChatArray !== null) {
			this.setState({
				companionName: storageChatArray[openedChatId].companion,
			});
  }

}
