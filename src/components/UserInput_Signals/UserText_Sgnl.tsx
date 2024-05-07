import { Signal } from "@preact/signals-react";


export default function UserText_Sgnl(props:{userText:Signal<string>}) {
  return (
    <div>{props.userText}</div>
  )
}
