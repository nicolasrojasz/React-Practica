import React from 'react'
//se importa la libreria de react
import exerciseImg from '../images/exercise.png'
//se importa la imagen guardada en la carpeta
import './styles/Card.css'
//se importa los estilos
import 'bootstrap/dist/css/bootstrap.css'
//luego de instalar bootstrap, se importa para darle uso


class Card extends React.Component{
//se crea la clase con ese componente y se extiende de react.component
    render(){
        
        //esta funcion lo que hace es pintar lo que este dentro, es vital y siempre se debe poner cuando se cre
        //un componente
        return (

            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                        <div className="row center">
                            <div className="col-6">
                                <img src={exerciseImg} className="float-right" />
                                {/*se llama la imagen a traves se las props*/}
                            </div>
                            <div className="col-6 Fitness-Card-Info">
                                <h1>Technique Guides</h1>
                                <p>Learn amazing street workout and calisthenics</p>
                            </div>
                        </div>
                </div>
            </div>
            //jsx

        )
        
    }

}

export default Card
//como es una clase, se debe de exportar dicha clase y se exporta el componente