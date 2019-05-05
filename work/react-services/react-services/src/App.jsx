import React, { Component } from 'react';

import './App.css';
import ChatApp from './chatApp';
import {addMessages, getMessages} from './services';

class App extends Component {
  constructor(){
    super();
    this.state={
      timer:null,
      users:{
        'emma':'emma',
        'puma':'puma'
      },
      messages:{

      },
      currentValue:''
    };
    getMessages().then(messages=>{
      this.setState({
        messages:messages,
        currentValue:''
      });
    });

    this.addMessage=this.addMessage.bind(this);
    this.handleChange=this.handleChange.bind(this);

  }

  componentDidMount() {
      this.timer=setInterval(function () {
        getMessages().then(messages=>{


          this.setState({
            messages:messages,
            currentValue:''
          });
        })
      }.bind(this),5000);
  }
  
    addMessage(e){
    if((e.which===13||e===true)&&this.state.currentValue) {
      const newMessage = {
        sender: 'emma',
        timestamp: new Date().toString(),
        text: this.state.currentValue,
      };
      const newMessages=this.state.messages;
      e.target.value='';

    addMessages(newMessage).then(response=>{
        if(response.ok){
          newMessages[newMessage.timestamp] = newMessage;

          this.setState({
            messages:newMessages,
            currentValue:''
          });
          return ;
        }
      return Promise.reject({ error: 'service-complaint', err: response.statusText });
      })
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
