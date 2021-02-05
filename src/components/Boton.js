import { render } from '@testing-library/react'
import React from 'react'
import './styles/Boton.css'
import {Link} from 'react-router-dom'
//link es un componente de react router que lo que soluciona es que la pagina no se recargue es basicamente como una
//etiqueta <a> pero el href es to

const Boton = () =>(
//funcion de flecha
        <div className='Boton'>
            <Link to ='/exercises/new'>
            
                <img src='https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d'/>
            </Link>
        </div>
        
    )


// function Boton(){
//     return(
//      <div className='Boton'>
//          <Link to ='/exercises/new'>
          
//                <img src='https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d'/>
//          </Link>
//      </div>
//     )
// }
export default Boton