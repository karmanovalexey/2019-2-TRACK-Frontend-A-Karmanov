import React, { useState } from 'react'
import ChatFormat from './ChatFormat'
import styles from '../styles/list.module.css'
import create from '../assets/edit.svg'

const chatsArrayKey = 'Chats'

function ListContent(props) {
  let chatCount = 0
  const [chats, setChats] = useState(InitChats())
  const ScrollChat = React.createRef()

  function getChatProps(chatObj) {
    const lastmessageText = ''
    const lastmessageTime = ''
    const indicator = 0
    // if (chatObj.messages.length !== 0) {
    // indicator = 1;
    // const lastmessageObj = chatObj.messages[chatObj.messages.length - 1];
    // lastmessageText = lastmessageObj.messageText;
    // lastmessageTime = new Date(lastmessageObj.messageTime).toTimeString().slice(0, 5);
    // }
    const chatElemProps = {
      key: chatCount,
      id: chatCount,
      indicator,
      lastmessageText,
      lastmessageTime,
      companionName: chatObj.companion,
      onClickFunc: props.openChatFunc,
    }

    return chatElemProps
  }

  function InitChats() {
    setTimeout(() => {
      ScrollChat.current.scrollTop = 9999
    }, 0)
    const storageChatArray = JSON.parse(localStorage.getItem(chatsArrayKey))
    if (storageChatArray !== null) {
      const chatsInitArray = []
      for (; chatCount < storageChatArray.length; chatCount += 1) {
        const chatElemProps = getChatProps(storageChatArray[chatCount])

        chatsInitArray.push(
          <ChatFormat
            key={chatElemProps.key}
            id={chatElemProps.id}
            indicator={chatElemProps.indicator}
            lastmessageText={chatElemProps.lastmessageText}
            lastmessageTime={chatElemProps.lastmessageTime}
            companionName={chatElemProps.companionName}
            onClickFunc={chatElemProps.onClickFunc}
          />,
        )
      }
      return chatsInitArray
    }
    return []
  }

  function handleCreateChat() {
    const name = prompt('Enter name')
    const chatObj = {
      id: chatCount,
      companion: name,
      messages: [],
    }
    addChat(chatObj)
    chatToLocal(chatObj)
    chatCount += 1
  }

  function addChat(chatObj) {
    const chatElemProps = getChatProps(chatObj)
    ScrollChat.current.scrollIntoView()
    setChats(
      chats.concat(
        <ChatFormat
          key={chatElemProps.key}
          data-id={chatElemProps.id}
          indicator={chatElemProps.indicator}
          lastmessageText={chatElemProps.lastmessageText}
          lastmessageTime={chatElemProps.lastmessageTime}
          companionName={chatElemProps.companionName}
          onClickFunc={chatElemProps.onClickFunc}
        />,
      ),
    )
  }

  function chatToLocal(chatObj) {
    let storageChatArray = JSON.parse(localStorage.getItem(chatsArrayKey))
    if (storageChatArray === null) {
      storageChatArray = []
    }
    storageChatArray.push(chatObj)
    localStorage.setItem(chatsArrayKey, JSON.stringify(storageChatArray))
  }

  return (
    <div className={styles.chatlistcontent} ref={ScrollChat}>
      <button className={styles.createchat} onClick={handleCreateChat}>
        <img className={styles.createchaticon} src={create} alt="create" />
      </button>
      {chats}
    </div>
  )
}

export default ListContent
