import { Signal } from "@preact/signals-react";


export default function UserInput_Sgnl(props:{userText:Signal<string>}) {

    console.log("render:","UserInputCtx");
    return (
    <>
      <input
        type="text"
        defaultValue={props.userText.value}
        onChange={(e)=>{
            console.log(e.target.value)
            props.userText.value = e.target.value;
        }}
      />
      <span>{props.userText}</span>
    </>
  );
}
