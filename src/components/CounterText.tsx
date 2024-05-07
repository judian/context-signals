import { Signal } from "@preact/signals-react";
import React from "react";
export default function CounterText(props: { counter: Signal<number> }) {
  return <div>num is: {props.counter}</div>;
}
