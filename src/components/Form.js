import React from 'react'; 

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={event => this.props.handleFirstNameChange(event)}
            name="firstName"
            value={this.state.firstName}
          />
          <input 
            type="text"
            name="lastName"
            onChange={event => this.props.handleLastNameChange(event)}
            value={this.state.lastName}
          />
        </form>
      </div>
    )
  }
}

export default Form;