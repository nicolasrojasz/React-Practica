
import React from 'react'

import ReactDom from 'react-dom'
//librerias que si o si se tienen que importar para usar react

const user = {

  firstName: 'nicolas',
  lastName: 'rojas',
  avatar: 'http://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'
}


function getName(user) {
  //recibe el objeto


  return `${user.firstName} ${user.lastName}`


}



function condicional(user) {

  if (user) {
    //si existe un objeto entonces haga algo

    return <h1>Hola {getName(user)}</h1>

  }

  return <h1>Hola Extraño</h1>

}

//eso que parece html es jsx es una libreria de js que brinda la facilidad de almacenar codigo parecid al html
//pero que a su vez se pueden llamar varibales u objetos, funciones, etc

  const element = (
    <div>
      <h1>{condicional(user)}</h1>
      <img src={user.avatar} />
    </div>
  )
//asi se crean hijos en jsx


const container = document.getElementById('root')
//variable que contiene el espacio del index donde se va a almacenar la informacion


//ReactDom.render(__QUE__DONDE__)

ReactDom.render(element, container)

//Esta metodo se usa para unir componentes y hacerlas visibles en el index agregando la variable donde contiene
//el espacio donde se va a mandar la informacion 