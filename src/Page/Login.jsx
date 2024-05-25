import React from 'react';
import styled from 'styled-components';
import defaultBackGround from '../assets/photo/defaultBackGround.jpg'

const Login = () => {
  return (
    <LoginStyled>
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-4">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                  <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                  <label for="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input type="email" className="form-style" placeholder="Email" />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input type="password" className="form-style" placeholder="Password" />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a href="" className="btn mt-4">Login</a>
                          <p className="mb-0 mt-4 text-center"><a href="" className="link">Forgot your password?</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-3 pb-3">Sign Up</h4>
                          <div className="form-group">
                            <input type="text" className="form-style" placeholder="Full Name" />
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input type="tel" className="form-style" placeholder="Phone Number" />
                            <i className="input-icon uil uil-phone"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input type="password" className="form-style" placeholder="Password" />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a href="" className="btn mt-4">Register</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoginStyled>
  )
}

export default Login;

const LoginStyled = styled.div`
  font-family: 'Poppins', sans-serif;
  user-select: none;
  font-weight: 300;
  line-height: 3;
  background-color: #1F2029;
  background-image: url(${defaultBackGround});
  color: #a6ff7d;
  a:hover {
	  text-decoration: none;
  }
  .link {
    color: #a6ff7d;
  }
  .link:hover {
    color: #c4c3ca;
  }
  p {
    font-weight: 500;
    font-size: 14px;
  }
  h4 {
    font-weight: 600;
    font-size: 25px;
  }
  h6 span{
    font-size: 30px;
    padding: 0 20px;
    font-weight: 700;
  }
  .section{
    position: relative;
    width: 100%;
    display: block;
  }
  .full-height{
    min-height: 100vh;
  }
  [type="checkbox"]:checked,
  [type="checkbox"]:not(:checked){
  display: none;
  }
  .checkbox:checked + label,
  .checkbox:not(:checked) + label{
    position: relative;
    display: block;
    text-align: center;
    width: 60px;
    height: 16px;
    border-radius: 8px;
    padding: 0;
    margin: 10px auto;
    cursor: pointer;
    background-color: #a6ff7d;
  }
  .checkbox:checked + label:before,
  .checkbox:not(:checked) + label:before{
    position: absolute;
    display: block;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: #a6ff7d;
    background-color: #020305;
    font-family: 'unicons';
    content: '\\eb4f';
    z-index: 20;
    top: -10px;
    left: -10px;
    line-height: 36px;
    text-align: center;
    font-size: 24px;
    transition: all 0.5s ease;
  }
  .checkbox:checked + label:before {
    transform: translateX(44px) rotate(-270deg);
  }
  .card-3d-wrap {
    position: relative;
    width: 500px;
    max-width: 100%;
    height: 450px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    perspective: 800px;
    margin-top: 60px;
  }
  .card-3d-wrapper {
    width: 100%;
    height: 100%;
    position:absolute;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transition: all 600ms ease-out; 
  }
  .card-front, .card-back {
    width: 100%;
    height: 100%;
    background-color: #2b2e38;
    position: absolute;
    border-radius: 6px;
    -webkit-transform-style: preserve-3d;
  }
  .card-back {
    transform: rotateY(180deg);
  }
  .checkbox:checked ~ .card-3d-wrap .card-3d-wrapper {
    transform: rotateY(180deg);
  }
  .center-wrap{
    position: absolute;
    width: 100%;
    padding: 0 35px;
    top: 50%;
    left: 0;
    transform: translate3d(0, -50%, 35px) perspective(100px);
    z-index: 20;
    display: block;
  }
  .form-group{ 
    position: relative;
    display: block;
      margin: 0;
      padding: 0;
  }
  .form-style {
    padding: 13px 20px;
    padding-left: 55px;
    margin-bottom: 10px;
    height: 55px;
    width: 100%;
    font-weight: 500;
    border-radius: 4px;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.5px;
    outline: none;
    color: #c4c3ca;
    background-color: #1f2029;
    border: none;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);
  }
  .form-style:focus,
  .form-style:active {
    border: none;
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);
  }
  .input-icon {
    position: absolute;
    top: 0;
    left: 18px;
    height: 48px;
    font-size: 24px;
    line-height: 48px;
    text-align: left;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }
  .btn{  
    border-radius: 4px;
    height: 44px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    -webkit-transition : all 200ms linear;
    transition: all 200ms linear;
    padding: 0 30px;
    letter-spacing: 1px;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    align-items: center;
    background-color: #a6ff7d;
    color: #000000;
  }
  .btn:hover{  
    background-color: #000000;
    color: #a6ff7d;
    box-shadow: 0 8px 24px 0 rgba(16,39,112,.2);
  }
  `

   
