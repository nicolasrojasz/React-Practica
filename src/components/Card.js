import React from 'react'
//se importa la libreria de react
import exerciseImg from '../images/exercise.png'
//se importa la imagen guardada en la carpeta
import './styles/Card.css'
//se importa los estilos
import 'bootstrap/dist/css/bootstrap.css'
//luego de instalar bootstrap, se importa para darle uso
import circlesimg from '../images/circles.png'

class Card extends React.Component{
//se crea la clase con ese componente y se extiende de react.component
        // constructor(props){
        //     //se pasan las props al metodo
        //     super(props)
        //     //estas props se tiene que pasar al constructor base
        //     this.state={

        //         image:'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc'
        //         //el estado va a ser igual a un objeto de informacion           
        //     }

        // }
        // componentDidMount(){
        //     //se ejecuta inmediantamente cuando un componente se inicie
        //     setTimeout(()=>{
        //         //esta funcion indica el tiempo en el que se va hacer un cambio en el estado (hilo)
        //         this.setState({
        //             //this.setState es una funcion que permite poner la informacion de cambio del componente
        //             image:'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
        //         })
        //     },5000)
        //     //se da una duracion de 5 segundos(esto va dentro en la funcion de setTimeout)
        // }
        
    render(){
        
        //esta funcion lo que hace es pintar lo que este dentro, es vital y siempre se debe poner cuando se cre
        //un componente
        return (
     
            <div className="card mx-auto Fitness-Card"
            
            style = {{
                backgroundImage:` url(${ circlesimg }) ,  linear-gradient(to right, ${this.props.leftColor}, ${this.props.rightColor})`
            }}
            
            >
            
            {/* Aqui basicamente se hizo "estilos en linea" donde se importo la imgen usada de fondo,
            se interpolo y se utilizo la imagen para dar el estilo que en el mismo archivo css
            esto para hacer el componente aun mas reutilizable
            css: background: url('../../images/circles.png') no-repeat, linear-gradient(to right, #A74CF2, #617BFB);
            */}


                <div className="card-body">
                        <div className="row center">
                            <div className="col-6">
                                <img src={this.props.img} className="float-right" />
                                {/*se llama la imagen a traves se las props*/}
                            </div>
                            <div className="col-6 Fitness-Card-Info">
                                <h1>{this.props.title}</h1>
                                 {/*se llama el titulo a traves se las props*/}
                                <p>{this.props.description}</p>
                                 {/*se llama la descripcion a traves se las props*/}
                            </div>
                        </div>
                </div>
            </div>
            //jsx

        )
        
    }

}

export default Card
//como es una clase, se debe de exportar dicha clase