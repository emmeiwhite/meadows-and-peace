import React, { Component } from 'react'
import AddForm from './../addform/AddForm'
import Ninjaz from './../ninjaz/Ninjaz'

export default class NinjazList extends Component {
    state={
        ninjaz :[
        { name: 'Ryu', age: 30, belt: 'black', id: 1 },
        { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
        { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
      ]
     };
    
      addNinja = (ninja)=>{
        const newNinja = {...ninja, id:4}
       this.setState({
         ninjaz:[...this.state.ninjaz,newNinja]
       })
      }
      
      // handle Delete
      handleDelete = (id)=>{
        const updatedNinjaz = this.state.ninjaz.filter(ninja=>ninja.id!==id);
    
        this.setState({
          ninjaz:updatedNinjaz
        });
      }

    render() {
        const ninjaz = this.state.ninjaz && this.state.ninjaz.filter(ninja=>ninja.id>1).map(ninja=>{
            return <Ninjaz ninja={ninja} key={ninja.id} handleDelete={this.handleDelete}/>
        })
        return (
            <div className="ninjaz-list">
                {ninjaz}
                <AddForm 
                    addNinja={this.addNinja}
                />
            </div>
        )
    }
}
