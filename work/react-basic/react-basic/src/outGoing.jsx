import React from 'react';
import './chat.css';

const OutGoing=({onKey,onChange})=>(
    <div className="outgoing">

            <input   onChange={(e)=>onChange(e)} onKeyDown={(e)=>{onKey(e)}} className="to-send"  />


        {/*<div className="button-set">*/}
            {/*<form action="/logout" method="post">*/}
                {/*<input name="username" className="to-send" type="hidden" value='${chat.currentuser}'*/}
                       {/*placeholder="Enter message to send"/>*/}
                {/*<button className="logout-button" type="submit">Logout</button>*/}
            {/*</form>*/}
        {/*</div>*/}
        </div>
);

export default OutGoing;
