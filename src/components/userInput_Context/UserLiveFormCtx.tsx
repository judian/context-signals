import { createContext, useContext, useState } from "react";
import UserInputCtx from "./UserInputCtx";
import UserTextCtx from "./UserTextCtx";

export type UserLiveContent = {
  userText: string;
  setUserText: (s:string)=>void;
};
export const MyUserLiveContext = createContext<UserLiveContent>({
  userText: "...", // set a default value
  setUserText: ()=>{console.log("please implement use state")}
});
export default function UserLiveFormCtx() {
    const [userText, setUserText] = useState("Let's start")
  return (
    <>
      <div>
        <MyUserLiveContext.Provider value={{ userText: userText, setUserText:setUserText }}>
          <h2>UserLiveFormCtx: {userText}</h2>
          <UserInputCtx/>
          <UserTextCtx userText={userText}/>
        </MyUserLiveContext.Provider>
      </div>
    </>
  );
}
