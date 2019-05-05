import React, { Component } from 'react';

import './App.css';
import ChatApp from './chatApp';


class App extends Component {
  constructor(){
    super();
    this.state={
      users:{
        'emma':'emma',
        'puma':'puma'
      },
      messages:{
        origin:{
          sender:"puma",
          timestamp:"past",
          text:"hello"
        }
      },
      currentValue:''
    };
    this.addMessage=this.addMessage.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
  addMessage(e){
    if(e.which===13&&this.state.currentValue) {
      const newMessage = {
        sender: 'emma',
        timestamp: new Date().toString(),
        text: this.state.currentValue,
      };
      const newMessages=this.state.messages;
      newMessages[newMessage.timestamp] = newMessage;
      e.target.value='';
      this.setState({
        messages:newMessages,
        currentValue:''
      });
    }
  };

  handleChange(e){
    this.setState({
      currentValue:e.target.value
    })
  };

  render() {
    return (
      <ChatApp users={this.state.users} messages={this.state.messages} addMessage={this.addMessage} handleChange={this.handleChange}/>
    );
  }
}

export default App;
