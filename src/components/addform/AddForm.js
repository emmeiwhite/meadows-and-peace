import React, { Component } from 'react'

export default class AddForm extends Component {
    state = {
        name:'',
        age:'',
        belt:''
    }

    handleChange = (e)=>{
     this.setState({
         [e.target.id]:e.target.value
     })

    }

    handleSubmit =(e)=>{
        e.preventDefault();
        // Using method Prop sent from parent to addNinja
        this.props.addNinja(this.state)
        e.target.reset();
    }

    render() {
        return (
            <div>
                <h2>Add the Ninja</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input 
                         type="text"
                         id="name"
                         onChange={this.handleChange}
                         required
                         />
                    </div>

                    <div>
                        <label htmlFor="age">Age:</label>
                        <input 
                         type="text"
                         id="age"
                         onChange={this.handleChange}
                         required
                         />
                    </div>

                    <div>
                        <label htmlFor="text">Belt:</label>
                        <input 
                         type="text"
                         id="text"
                         onChange={this.handleChange}
                         required
                         />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
