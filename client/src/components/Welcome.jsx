import React, { Component } from 'react';


class Welcome extends Component {
  constructor(){
    super();

      this.state = {
        registerData: {
          userName: '',
          email: '',
          password: ''
        }
      }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.makeUser = this.makeUser.bind(this)
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target
    this.setState(prevState => ({
      registerData: {
        ...prevState.registerData,
        [name]: value
      }
    }))
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { registerData } = this.state
    await this.makeUser(registerData);
  }

  makeUser(registerData) {
    {/*This will eventually post a user*/}
    console.log(registerData);
  }

  render() {
    return(
      <div className="welcome">
        <h2>Welcome Component</h2>
        <button type="button">Enter as Guest</button>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} placeholder='Username' type="text" name="userName" value={this.userName} />
          <input onChange={this.handleChange} placeholder='Email' type="text" name="email" value={this.email} />
          <input onChange={this.handleChange} placeholder='Password' type="text" name="password" value={this.password} />
          <input onSubmit={this.handleSubmit} type="submit" name="submit" value="submit" />
        </form>
      </div>
    )
  }

}

export default Welcome;
