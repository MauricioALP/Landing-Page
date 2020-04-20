import React from 'react';

class Form extends React.Component{
    render() {
        handleChange = e => {
            console.log({
            name: e.target.name,
            value: e.target.value,
            });
        };
    }

    handleClick = e => {
        console.log('Button was clicked');
    };
    
    handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submitted');
    };

    render(){
        return(
            <div>
                <h1>titulo</h1>
                
                <form>
                    <div className="form-group">
                        <label >Primer Nombre</label>
                        <input onClick={this.handleClick} className="form-cotrol" type="text" name="Primer nombre"/>
                    </div>
                    
                    <button onClick={this.handleClick} className="btn btn-primary">
                    Save
                    </button>
                </form>
            </div>
        );
    }

}
export default Form;