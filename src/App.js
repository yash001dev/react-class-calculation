import React,{Component} from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from './components/KeyPadComponent';

class App extends Component{
  constructor(){
    super();

    this.state={
      result:""
    }
  }

  onClick=btnValue=>{

    if(btnValue==="="){
      this.calculate()
    }

    else if(btnValue==="x^2"){
      let existingNumber=Number(this.state.result)
      console.log(existingNumber);
      this.setState({
        result:existingNumber*existingNumber
      });
    }

    else if(btnValue==="sqrt"){
      let existingNumber=Number(this.state.result)
      this.setState({
        result:Math.sqrt(existingNumber)
      });
    }

    else if(btnValue==="C"){
      this.reset()
    }

    else if(btnValue==="CE"){
      this.backspace()
    }


    else{
      this.setState({
        result:this.state.result+btnValue
      })
    }

  };

  calculate=()=>{
    var checkResult=''
    if(this.state.result.includes('--')){
      checkResult=this.state.result.replace('--','+')
    }

    else{
      checkResult=this.state.result
    }

    try {
      this.setState({
        result:(eval(checkResult)|| "")+""
      })
    } catch (e) {
      this.setState({
        result:"error"
      })
    }
  };

  reset = () => {
    this.setState({
        result: ""
    })
  };

backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
};

render() {
  return (
      <div>
          <div className="calculator-body">
              <h1>Simple Calculator</h1>
              <ResultComponent result={this.state.result}/>
              <KeyPadComponent onClick={this.onClick}/>
          </div>
      </div>
  );
}

}
export default App;
