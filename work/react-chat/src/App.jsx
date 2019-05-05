import React, { Component } from 'react';
  import './App.css';
import ChatApp from './chatApp';
import {addMessages, getMessages,addUser,logout} from './services';
import LoginPage from "./loginPage";

class App extends Component {
  constructor(){
    super();
    this.state={
      timer:null,
      ifLoginDisabled:true,
      ifSendDisabled:true,
      username:"",
      users:{
        'emma':'emma',
        'puma':'puma'
      },
      messages:{

      },
      currentValue:'',
      ifLogin:'flex',
      ifChat:'none'
    };
    getMessages().then(messages=>{
      this.setState({
        messages:messages,
        currentValue:''
      });
    });

    this.addMessage=this.addMessage.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.getUsername=this.getUsername.bind(this);
    this.login=this.login.bind(this);
    this.onClickSend=this.onClickSend.bind(this);
    this.logOut=this.logOut.bind(this)
  }

  componentDidMount() {

      this.timer = setInterval(function () {
        if(this.state.ifLogin==='none') {
          getMessages().then(result => {
            this.setState({
              messages: result.messages,
              users: result.users,
            });
          })
        }
      }.bind(this), 5000);
      }


  
    addMessage(e,value){

    if(e.which===13||e===true) {
      e.preventDefault();
      if (this.state.currentValue) {
        const newMessage = {
          sender: this.state.username,
          timestamp: new Date().toString(),
          text: this.state.currentValue,
        };
        const newMessages = this.state.messages;
        addMessages(newMessage).then(response => {
          if (response.ok) {
            newMessages[newMessage.timestamp] = newMessage;

            this.setState({
              messages: newMessages,
              currentValue: ''
            });
            value = '';
            return;
          }
          return Promise.reject({error: 'service-complaint', err: response.statusText});
        });
        return false;
      }
    }
  };

  handleChange(e){
    let disable=e.target.value==='';
    this.setState({
      currentValue:e.target.value,
      ifSendDisabled:disable
    })

  };

  login(e) {
    if (this.state.username){
      e.preventDefault();
      addUser(this.state.username).then(
          response => {

              this.setState({
                messages: response.messages,
                users: response.users,
                ifLogin:'none',
                ifChat:'flex'
              });

          })
  }
  }

  getUsername(e){
    let disable=e.target.value==='';
    this.setState({
      username:e.target.value,
      ifLoginDisabled:disable
    })
  }

  onClickSend(e){
    e.preventDefault();
    const newMessage = {
      sender: this.state.username,
      timestamp: new Date().toString(),
      text: this.state.currentValue,
    };
    const newMessages=this.state.messages;
    addMessages(newMessage).then(response=>{
      if(response.ok){
        newMessages[newMessage.timestamp] = newMessage;

        this.setState({
          messages:newMessages,
          currentValue:''
        });

        return;
      }
      return Promise.reject({ error: 'service-complaint', err: response.statusText });
    });
    return false;
  }

  logOut(){
    logout(this.state.username).then(response=>{
      this.setState(
          {
            ifLogin:'flex',
            ifChat:'none',
            messages:{},
            users:{}
          }
      )}
    )
  }
  render() {
      return (
<div>
          <ChatApp users={this.state.users} messages={this.state.messages} addMessage={this.addMessage}
                   handleChange={this.handleChange} ifDisplay={this.state.ifChat} ifDisabled={this.state.currentValue===''
                    } onClick={this.onClickSend}  logOut={this.logOut} value={this.state.currentValue}/>
          <LoginPage Login={this.login} username={this.getUsername} ifDisplay={this.state.ifLogin} ifDisabled={this.state.ifLoginDisabled}/>
</div>

      )


  }
}

export default App;
