import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
//React Router es una coleccion de componentes de navegacion dinamica y se
// concentra en mostrar los componentes necesitados segun su
// navegacion

import Exercises from '../pages/Exercises'
import ExercisesNew from '../pages/ExercisesNew'
import NotFound from './NotFound'

function App(){
    return(
         /* Una vez importado el react router se debe colocar los
          el componente bases y ya adentro de ellos
          invocar los otros componentes del react router */
        
        <BrowserRouter>
         {/* componente base */}
         
           <Switch>
               {/* este componente lo que hace es que si encuetra alguna ruta no declarada es sus hijo(<Route>)
               digitada por el usuario, entonces
               se va a una ruta nueva creada el cual puede decir(NotFound)     */}
       
                <Route exact path='/exercises' component={Exercises}/>
                {/*exact es para que tome exactamente la ruta mandada y sin posible confusion de alguna ruta parecida*/ }

                <Route exact path="/exercises/new" component={ExercisesNew}/>
                {/* Componentes no base */}
                {/*los componentes route ayudan a crear una ruta
                y señala el componente que va a renderear una vez que la ruta exista*/}

                <Route component={NotFound}/>
                {/* solos se manda un componente ya que la ruta igresada no existe */}
           
           </Switch>

        </BrowserRouter>
    )

}
export default App;