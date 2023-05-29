import { useEffect, useState } from "react";
export default function ClassicCounter() {
    var [counter, setCounter] = useState<number>(0);
    let [visible,setVisible]=useState<boolean>(false)
    var handleCount = () => {
        let temp:number = counter;
        setCounter(temp+1)
    }

    useEffect(() => {
        let dom = document.getElementById("secrent");
        if (visible && dom) {
            dom.innerText = "Some SideEffects"
            setVisible(!visible)
        } else if(dom) {
            dom.innerText = "Another  SideEffects"
            setVisible(!visible)
        }
    }, [counter])
    

    return (
        <div>
            <button onMouseLeave={handleCount} className="bigbtn">+</button>
            {counter}

            <div className="sideEffect" id="secrent">

            </div>
        </div>
    )
}