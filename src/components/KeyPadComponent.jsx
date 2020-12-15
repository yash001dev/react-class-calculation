import React,{Component} from 'react';

const arra1=["(","CE",")","C", "1","2","3","+","4","5","6","-","7","8","9","*",".","0","=","/"];

class KeyPadComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="button">
                {arra1.map((item,index)=>{
                    return <button name={item} onClick={e=>this.props.onClick(e.target.name)}>{item}</button>
                })}
            </div>
        );
    }
}

export default KeyPadComponent;