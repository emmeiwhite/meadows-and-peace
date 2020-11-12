import React, { Component } from 'react'

export default class Test extends Component {
    state={
        name:"",
        age:28,
        updatedName:"",
        // para:"",
        // updatedPara:"",
        // isclicked:false
    }

    handleBtnClick = (e)=>{
        this.setState({
            name:"Imran Rafiq Rather" 
        })
    }

    handleBtnHover = (e)=>{
        console.log(e.target, e.pageX)
        console.log()
        this.setState((prevState)=>{
            const age = prevState.age + 1
            return{
                age
            }
        })
    }

    handleCopy = (e)=>{
        console.log(e);
        console.log("Please don't copy from my page !!!")
    }
    
    // Form
    handleFormSubmit = (e)=>{
        e.preventDefault()
        this.setState({
            updatedName:this.state.updatedName+this.state.name,
            name:''
        });

    }

    handleTextChange = (e)=>{
        this.setState({
            name:e.target.value
        },)
    }

    // Interview Question
    handleParaChange = (e)=>{
        this.setState({
            para:e.target.value,
        });
    }

    showPara = (e)=>{
        this.setState({
            isCliked:true,
            updatedPara:this.state.para,
            para:''
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleBtnClick}>Click Me</button>
                <button onMouseOver={this.handleBtnHover}>Hover Me </button>
                <div>
                    <p>Name :{this.state.updatedName}</p> 
                    <p>Age :{this.state.age}</p>
                    <p onCopy={this.handleCopy}>This is an era of fast paced developed nation</p>
                </div>

                <form onSubmit={this.handleFormSubmit}>
                    <input 
                        type="text"
                        placeholder="Dummy Text"
                        onChange={this.handleTextChange}
                        value={this.state.name}
                    />
                    <button>Submit Form</button>
                </form>

                {/* --- ASKED IN AN INTERVIEW, I want the old state value added to <p> --- */}
                {/* 
                <main>
                    <button onClick={this.showPara}>Get Value</button>
                    <input type="text" name="para" onChange={this.handleParaChange}/>
                    <p>{this.state.isCliked && this.state.updatedPara}</p>
                </main>
                */}
               
            </div>
        )
    }
}
