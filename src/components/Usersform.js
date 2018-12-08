import React from 'react'

const UsersForm = (props) => {
    return(
        <form 
        // onSubmit={this.handleSubmit}
        >
        <label>
            Name:
            <input type="text" 
            // value={this.state.value} onChange={this.handleChange} 
            />
        </label>
        <label> Email:
            <input type="text" 
            // value={this.state.value} onChange={this.handleChange} 
            />
        </label>
        <label> Password:
            <input type="text" 
            // value={this.state.value} onChange={this.handleChange} 
            />
        </label>
        <input type="submit" value="Submit" />
      </form>
        
    )
}
export default UsersForm