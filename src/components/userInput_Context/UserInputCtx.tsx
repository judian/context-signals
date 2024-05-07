import React, { useContext } from "react";
import { MyUserLiveContext } from "./UserLiveFormCtx";


export default function UserInputCtx() {
    const ctx = useContext(MyUserLiveContext);

    console.log("render:","UserInputCtx");
    return (
    <>
      <input
        type="text"
        value={ctx.userText}
        onChange={(e)=>{
            console.log(e.target.value)
            ctx.setUserText(e.target.value);
        }}
      />
    </>
  );
}
