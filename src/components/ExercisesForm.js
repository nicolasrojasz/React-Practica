import React from 'react'

class ExercisesForm extends React.Component{

    constructor(props){

        super(props)

        //this.state={}
        //el estado inicial se declara que esta vacio pronto a recibir datos
        this.handleSumbit=this.handleSumbit.bind(this)
        //se crea la conexion con los controladores(funciones de los botones)

    }

    // handleChange(e){
    //     //lo que esta recibiendo es el evento(onChange) que se envio hacia la funcion
        
        
    //     //para poder almacenar un grupo de datos ingresados primero se debe hacer lo siguiente
        
    //     let estadoParcial={}
    //     //se crea un objeto el cual va a almacenar los datos ingresados de cada campo
        
    //     estadoParcial[e.target.name] = e.target.value
    //     //dicho objeto voy hacer que acceda al target(informacion) del componente y entre al campo name
    //     //y luego hago que almacene lo que hay dentro del campo value
 
    //     this.setState(estadoParcial)
    //     //por ultimo para poder guardar el estado almacenado del componente, pues hay que enviar los cambios
    //     //al mismo objeto para que los almacene cuando haya algun cambio
 
 
    //  //con babel seria de la siguiente manera
 
    //  //    this.setState({
    //  //        [e.target.name]: e.target.value
    //  //    })
        
    // }
   
   handleSumbit(e){

       e.preventDefault()
       console.log(this.state)  

   }





    render(){
        const {onChange, form} = this.props
        return (
            <div className="container">
            <form 
               onSubmit={this.handleSumbit}
               //este evento sirve para accionar el almacenamiento de los datos
            >
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="title"
                        name="title"
                        onChange={onChange} 
                       //aqui se llama al evento y se pone su controlador que se va a ejecutar una vez el evento lo detecte
                       //en este caso el evento detecta cambios en el componente
                        value={form.name}
                        // esto lo que permite es que almacene sus valores en una sola fuente de informacion
                        //ya que actualmente se estaba guardando la informacion del campo y en la informacion del estado
                        
                      
                       
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="description" 
                        name="description"
                        onChange={onChange} 
                        value={form.name}
                     
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="img"
                        name="img" 
                        onChange={onChange} 
                        value={form.name}

                      
                    />
                </div>
                <div className="form-row">
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="leftColor"
                            name="leftColor" 
                            onChange={onChange} 
                            value={form.name}
                          
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="rightColor"
                            name="rightColor" 
                            onChange={onChange}
                            value={form.name} 

                        />    
                    </div>
                </div>
                
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>
        )
        
    }
    
       



}

export default ExercisesForm

