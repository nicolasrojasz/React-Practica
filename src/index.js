import React from 'react'
import ReactDom from 'react-dom'
//librerias que si o si se tienen que importar para usar react
import Exercises from './pages/Exercises'
import App from './components/App'
//se importa el componente

const container = document.getElementById('root')
//variable que contiene el espacio del index donde se va a almacenar la informacion


//ReactDom.render(__QUE__DONDE__)

ReactDom.render(<App/>, container)

//para renderear un componente, se debe poner las etiquetas del mismo
//Este metodo se usa para unir componentes y hacerlas visibles en el index agregando la variable donde contiene
//el espacio donde se va a mandar la informacion 