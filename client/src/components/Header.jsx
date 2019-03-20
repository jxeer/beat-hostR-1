import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Header extends Component {
  constructor(){
    super();
  }

  handleClick(id) {
    this.props.history.push(`/artists/${id}`)
  }

  render() {
    const { isLogin, user, token, loginData, handleSubmit, handleChange, logOut } = this.props;
    return(
      <div className="login">
        <h2>Header</h2>
        { !isLogin &&
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              placeholder='Email'
              type="text"
              name="email"
              value={loginData.email} />
            <input
              onChange={handleChange}
              placeholder='Password'
              type="text"
              name="password"
              value={loginData.password} />
            <input
              onSubmit={handleSubmit}
              type="submit"
              name="submit"
              value="submit" />
          </form>
        }
        {
          isLogin &&
          <div>
            <div>{user.artist_name}</div>
            <div onClick={() => this.handleClick(user.id)}>My Profile</div>
            <div onClick={(ev) => logOut(ev)}>Sign out</div>
          </div>
        }
      </div>
    )
  }

}

export default withRouter(Header);
