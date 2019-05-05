const loginFrom = {
    loginPage: function () {
        return ` <html>
    <head>
    <link rel="stylesheet" href="login.css" />
        <title>Login</title>
        </head>
        <body scroll="no">
        <div class="login-frame">
        
           <form class="login-page" action="/login" method="post">
            <span class="login-label">Login</span>
            <input name="username" class="username-to-send" type="text" value="" placeholder="Enter username"/>
             <button class="send-button" type="submit">Login</button>
             </form>
            
        </div>
        </body>
       
        
</html>
        `
    }
};
module.exports = loginFrom;
