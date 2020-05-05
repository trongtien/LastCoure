import React from 'react'
import { connect } from 'react-redux'
const Login = ({ isCloseForm }) => {
  const isCloseLogin = (e) => {
    e.preventDefault()
    isCloseForm()
  }
  return (
    <div className='login'>
      <div className="col-sm-6 form-login">
        <div className='login-header'>
          <h1>ĐĂNG NHẬP</h1>
          <p
            onClick={isCloseLogin}
          ><i className="fas fa-times"></i></p>
        </div>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
        </form>

        <div style={{ display: 'flex', marginLeft: '150px' }}>
          <button type="submit" className="btn btn-primary">Đăng nhập</button>
          <button type="submit" className="btn btn-primary" style={{ marginLeft: '30px' }}>Đăng ký</button>
        </div>
      </div>
    </div>
  )
}

const isCloseForm = () => {
  return (dispatch) => {
    dispatch({ type: 'CLOSE_FORM' })
  }
}

const mapStateToProps = ({ helperReducer }) => ({
  isActive: helperReducer.isActive
})
const mapDispatchToProps = { isCloseForm }
export default connect(mapStateToProps, mapDispatchToProps)(Login);