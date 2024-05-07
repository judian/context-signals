import {counter} from './Counter';

export default function CounterButton() {
  return (
    <>
      <div className="">
          <button onClick={()=>{
            counter.value++;
            }}>Click ➕</button>
        </div>
    </>
  );
}
