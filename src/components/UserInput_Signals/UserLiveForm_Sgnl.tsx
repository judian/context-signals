import {useState } from "react";
import { useSignal } from "@preact/signals-react";
import UserText_Sgnl from "./UserText_Sgnl";
import UserInput_Sgnl from "./UserInput_Sgnl";


export default function UserLiveForm_Sgnl() {
    const userTextSgnl = useSignal("Let's start")
  return (
    <>
      <div>
          <h2>UserLiveForm_sgnl: {userTextSgnl}</h2>
          <UserInput_Sgnl userText={userTextSgnl}/>
          <UserText_Sgnl userText={userTextSgnl}/>
      </div>
    </>
  );
}
