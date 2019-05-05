import React from 'react';
import './chat.css';

const OutGoing=({onKey,onChange,onClick,value,logOut,ifDisabled})=>(
    <div className="outgoing">

        {/*    <input   onChange={(e)=>onChange(e)} onKeyDown={(e)=>{onKey(e)}} value={value} className="to-send"  />*/}
        {/*<div className="button-set">*/}

        {/*        <button className="logout-button" onClick={()=>{logOut()}}>Logout</button>*/}

        {/* <button className="refresh-button" onClick={(e)=>{onClick(e)}} > Send</button>*/}
            <form method="post" onKeyDown={(e)=>{onKey(e,value)}} onSubmit={(e)=>{onClick(e)}}>
                <input  name="text" type="text" onChange={(e)=>onChange(e)}   className="to-send" value={value}  />
                <button className="logout-button" onClick={()=>{logOut()}}>Logout</button>
                <button className="refresh-button"  type="submit" disabled={ifDisabled}>Send</button>

            </form>
        </div>


);

export default OutGoing;
