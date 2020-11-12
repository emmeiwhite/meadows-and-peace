import './App.css'
import Navbar from './components/navbar/Navbar'
import Test from './components/test/Test'
import Ninjaz from './components/ninjaz/Ninjaz'
import { Component } from 'react'
import AddForm from './components/addform/AddForm'

class App extends Component {
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
  render(){
    const ninjaz = this.state.ninjaz && this.state.ninjaz.filter(ninja=>ninja.id>1).map(ninja=>{
      return <Ninjaz ninja={ninja} key={ninja.id} handleDelete={this.handleDelete}/>
    })
    console.log(ninjaz);
    return (
      <div className="App">
        <Navbar logo="Rediscover"/>
        {ninjaz}
        
        <h2>FORM </h2>
        <AddForm 
          addNinja={this.addNinja}
        />
      </div>
    );
  }
}

export default App;
