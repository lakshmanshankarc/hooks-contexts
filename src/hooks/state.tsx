import { Component } from 'react'


type PropType = {
    initalCounter: number,
    initialVisibility: boolean
}
type StateType = {
    counter: number,
    isVisible: boolean
}

export default class Statfeull extends Component<PropType, StateType>{
    constructor(props: PropType) {
        super(props);
        this.state = {
            counter: 0,
            isVisible: false,
        }
    }
    
    handleCounter(): void{
        this.setState({counter:this.state.counter+1})
    }
    render() {

        return (
            <div>
                <button className="bigbtn" >+</button>
               {this.state.counter}
                <div className="sideEffect" id="secret">
                </div>
            </div>
        )
    }
}
