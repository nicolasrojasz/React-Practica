import React from 'react'
import ReactDom from 'react-dom'
//librerias que si o si se tienen que importar para usar react
import Card from './components/Card'
//se importa el componente

const container = document.getElementById('root')
//variable que contiene el espacio del index donde se va a almacenar la informacion


//ReactDom.render(__QUE__DONDE__)

ReactDom.render(<Card 
                    title='Technique Guides'
                    description='Learn amazing street workout and calisthenics'
                    img='https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
                    leftColor='#A74CF2'
                    rightColor=' #617BFB'
                    //Estos son las props, son propiedades de las cuales se asignan al componente para luego ser
                    //llamadas y utilizadas, esto con el fin de que el componente quede aun mas reutilizable
                    />, container)

//para renderear un componente, se debe poner las etiquetas del mismo
//Este metodo se usa para unir componentes y hacerlas visibles en el index agregando la variable donde contiene
//el espacio donde se va a mandar la informacion 