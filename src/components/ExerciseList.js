import React from'react'
import Card from './Card'
function ExerciseList(props){
    //creamos un componente funcional ya que no vemos la necesidad de manejar el ciclo de vida del componente
      
    return(
        <div>
            
            {props.exercises.map((exercise)=>{ 
                //esta funcion de map() sirve para iterar componentes, es como un for que lo que va hacer es recorrer
                //la cantidad de bloques de informacion que hay en el objeto del constructor() en Exercises.js
                // para luego plasmar la cantidad de veces que conto 
                //con lo que hay dentro del return y con la variable exercise sirve para acceder a las propiedades
                //de cada bloque y luego ser llamadas para luego volverlas propiedades de un componente(props)
                //exercises es la propiedad del componente invocado en Exercises.js que contiene la informacion del
                //objeto que esta en el contructor para ser recorrida
                //exercise es la variable que recibe toda es informacion que trae exercises

                return(
                    <Card 
                    title={exercise.title}
                    description={exercise.description}
                    img={exercise.img}
                    leftColor={exercise.leftColor}
                    rightColor={exercise.rightColor}
                    //Estos son las props, son propiedades de las cuales se asignan al componente para luego ser
                    //llamadas y utilizadas, esto con el fin de que el componente quede aun mas reutilizable
                    />                    
                )
              })
            }
        </div>
    )


}
export default ExerciseList