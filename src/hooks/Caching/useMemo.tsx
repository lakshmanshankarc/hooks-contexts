import { useRef } from "react";
function Memoize() {
  const inputRef = useRef<HTMLInputElement>(null);
  const placholder = useRef<HTMLDivElement>(null);
  let handleChange = () => {
    if (inputRef.current !== null) {
      const currentValue: string = inputRef.current.value;
      console.log(currentValue)// i wnt the value of this
    }
  }
  return (
    <div>
      <input type="text" ref={inputRef} id="godzilla" onChange={handleChange} />
      <div className="idontknoe" ref={placholder}></div>
    </div>
  )
}

export default Memoize;
