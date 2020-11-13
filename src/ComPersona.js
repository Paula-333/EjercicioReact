
import React from 'react';

class CompPersona extends React.Component{
    constructor(){
        super();
        this.state = {
            nombre: "Patricia",
            apellidos: "Millan",
            profesion: "Fotografa",
            hobbie: "Cine"
        };
    }
   
    render(){
        return(

         <div>
           <h1>Datos</h1>
    
            <ul>
                <li><label>Nombre:{this.state.nombre}</label></li>
                <li><label>Edad:{this.state.apellidos}</label></li>
                <li><label>profesion:{this.state.profesion}</label></li>
                <li><label>hobbie:{this.state.hobbie}</label></li>
            </ul>

        </div>
    )
}
}

export default CompPersona;