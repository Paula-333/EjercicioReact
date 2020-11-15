
import React from 'react';

class CompNumAl extends React.Component{
    constructor(){
        super();
        this.state = {
            temporada: 1,
            capitulo: 1,

        };  

    }
     
    numTemporada(){
        let numTemp = Math.floor(Math.random()*10) + 1;
        this.setState({
            temporada: numTemp
        });
     
    }
    numCapitulo(){
        let numCap = Math.floor(Math.random()*25) + 1;
        this.setState({
            capitulo: numCap
        });
     
    }
    
    render(){
        return(
         <div>
            TEMPORADA: <input value={this.state.temporada} className="input1"/> 
           <input type="button" onClick={()=> this.numTemporada()} value="Click" className="button1"/>
           <br/>
           <br/>
           CAPITULO: <input value={this.state.capitulo} className="input2"/>
           <input type="button" onClick={()=> this.numCapitulo()} value="Click" className="button2"/>
           <br/>
           <br/>
           <br/>
        </div>
    )
}
}

export default CompNumAl;