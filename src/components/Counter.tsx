import CounterButton from "./CounterButton";
import {signal} from "@preact/signals-react";
import CounterText from "./CounterText";

export const counter = signal(0);

export default function Counter() {
  console.log("Counter rendered...")
  return (
    <>
        <CounterButton/>
        <CounterText counter={counter}/>
    </>
  );
}
