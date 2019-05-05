"use strict";

(
    function IIFE() {
      const sendButton = document.querySelector(".send button");
      const toSend = document.querySelector(".to-send");
      const list=document.querySelector('.users');
      let ifdelete=true;
      const selectedUsers={};
      const refresh=document.querySelector('.refresh button');
      const send=document.querySelector('.send button');
      const loginButton=document.querySelector(".login button");
      const logOutButton=document.querySelector(".logout button");

      window.onload=function () {
        const usersString=window.name;
        addSelectedUsers(usersString);
        setSelected();
        function addSelectedUsers(usersString){
          const users=usersString.split(",");
          users.map( item =>{
            if(item) {
              selectedUsers[item]=item;
            }
          });
        }
        function setSelected() {
          const userList = Array.from(document.querySelectorAll('.user .username'));
          userList.map(user => {
            if(selectedUsers[user.innerText]){
              user.classList.toggle('select');
            }
          });
          addButton();
          messageFilter();
        }
      };

  if(toSend && sendButton) {
    sendButton.disabled = !toSend.value;
    toSend.addEventListener('input', (e) => {
      sendButton.disabled = !e.target.value;
    });
  }

  const usernameToSend=document.querySelector(".login input");
  if(loginButton&&usernameToSend){
    loginButton.disabled=!usernameToSend.value;
    usernameToSend.addEventListener('input',(e)=>{
      loginButton.disabled = !e.target.value;
    })
  }

  window.onunload=function () {
    const selectedUsers= Array.from(document.querySelectorAll('.select'));
    window.name=formUsersString(selectedUsers);
    function formUsersString(Users) {
      let result="";
      Users.map(user=>{
        result=result+user.innerText+",";
      });
      return result;
    }
  };

  list.addEventListener('click',(e)=> {
    const hiddenMessageList=Array.from(document.querySelectorAll('.hidden-message'));
    messageReset(hiddenMessageList);
    if (e.target.classList.contains('username')) {
      e.target.classList.toggle('select');
    }
    else
    {
      unselectAll();
    }
    addButton();
    messageFilter();
  });

  refresh.addEventListener('click',(e)=>{
    ifdelete=false;
  }
  );

  send.addEventListener('click',(e)=>{
    ifdelete=false;
  }
  );

  logOutButton.addEventListener('click',(e)=>{
    window.name="";
  });

  function unselectAll(){
    const userList = Array.from(document.querySelectorAll('.select'));
    userList.map(user => {
      user.classList.remove('select');
    })
  }

  function addButton() {
    const button = document.querySelector('.users button');
    const selectedUser = document.querySelector('.select');
    if (selectedUser && !button) {
      const unselectAll = document.createElement('button');
      unselectAll.innerText = 'Unselect All';
      document.querySelector('.users').appendChild(unselectAll);
    } else if (!selectedUser && button) {
      button.parentNode.removeChild(button);
    }
  }


  function messageFilter(){
    const selectedUser=Array.from(document.querySelectorAll('.select'));
    const messageList = Array.from(document.querySelectorAll('.message'));
  if(!(selectedUser === undefined || selectedUser.length === 0)) {
    const selectedUserList = {};
    selectedUser.map(user => {
      selectedUserList[user.innerText] = user.innerText;
    });
    setIndicator(messageList,selectedUserList);
  }
  }

  function setIndicator(messageList,selectedUserList){
  let filter = false;
  messageList.map(message => {
    const currentUsername = message.querySelector('.username');
    if (!selectedUserList[currentUsername.innerText] && !filter) {
      message.classList.remove("message");
      message.classList.add("hidden-message");
      const indicator=document.createElement('p');
      indicator.classList.add('indicator');
      indicator.innerText='indicator';
      message.parentNode.appendChild(indicator);
      filter = true;
    } else if (!selectedUserList[currentUsername.innerText] && filter) {
      message.classList.remove("message");
      message.classList.add("hidden-message");
    } else {
      filter = false;
    }
  })
}

function messageReset(hiddenMessageList){
  hiddenMessageList.map(message=>{
    message.classList.remove('hidden-message');
    message.classList.add('message');
    const indicator=message.parentNode.querySelector('.indicator');
    if(indicator)
      indicator.parentNode.removeChild(indicator);
  });
}

})();
