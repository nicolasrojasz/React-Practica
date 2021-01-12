import React from 'react'
import './styles/Welcome.css'

function Welcome(props){
//esta es la forma mas sencilla de crar un componente dentro de react, usando funciones de javascript(en la funcion)
//se declara el nombre del componente
// a esto se le llama componentes funcionales
//esta forma se usa cuando no se va a usar el estado ni el ciclo de vida del componente, ya que no lo permite

return(

    <div className="container">
        <div className="Fitness-User-Info">
            <h1>Hello {props.username}</h1>
            {/*en los componentes funcionales no hay necesidad de poner el this antes del props */}
            <p>Let's workout to get someone gains!</p>
        </div>
    </div>
    //jsx
)

}
export default Welcome;
//se exporta la funcion
