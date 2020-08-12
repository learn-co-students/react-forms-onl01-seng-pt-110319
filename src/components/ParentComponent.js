import React from 'react'; 
import DisplayData from './DisplayData'

class ParentComponent extends React.Component {
    state = {
        firstName: "", 
        lastName: ""
    }

    handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
        [name]: value
        });
    }
    
    render() {
        return (
            <div>
                <form
                    formData={this.state}
                    handleFirstNameChange={this.handleChange}
                    handleLastNameChange={this.handleChange}
                    />
                <DisplayData formData={this.state} />
            </div>
        )
    }
}

export default ParentComponent;