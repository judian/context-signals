//import React, { useContext } from 'react'
//import { MyUserLiveContext } from './UserLiveFormCtx';

export default function UserTextCtx(props:{userText:string}) {
    //const ctx = useContext(MyUserLiveContext);
  return (
    <div><textarea readOnly value={props.userText}></textarea></div>
  )
}
