import React from 'react'
import ExercisesForm from '../components/ExercisesForm'
import Card from '../components/Card'
class ExercisesNew extends React.Component{
   
   constructor(props){
       super(props)
       
       this.state={
           form:{
               
               title:'',
               
               description:'',
               
               img:'',

               leftColor:'',

               rightColor:''


           }
       }

       this.handleChange=this.handleChange.bind(this)
   }
   
    handleChange(e){
        
      

        this.setState({
            form:{
                ...this.state.form,

               [e.target.name]:e.target.value
               
            }
        })

   }
    render(){
        return(
            <div className="row">
                <div className="col-sm">
                    <Card
                    {...this.state.form}                    
                    />

                </div>
                <div className="col-sm">

                        <ExercisesForm
                        
                        onChange={this.handleChange}
                        form={this.state.form}
                        />
                </div>
            </div>


        
            
            

        )

    }
    
       
}

export default ExercisesNew
