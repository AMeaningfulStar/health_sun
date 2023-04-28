import React from 'react';
import AuthenticationLayout from '../../Layout/AuthenticationLayout';
import LoginImg from './LoginImg.png';

import Search from './search.png';
import Twitter from './twitter.png';

import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <AuthenticationLayout>
      <div style={{ display: 'flex', width: '100%', height: '100%'}}>

        <div style={{ width: '60vw', height: '100%',}}>
          <Link to={'/'}> <div style={{ width: '30%', height: '30%', backgroundImage: `url(${LoginImg})`, marginLeft: '35%', marginTop: '5%',
          backgroundSize: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div></Link>

          <div style={{ marginLeft: '14%', fontFamily: 'Poppins',fontStyle: 'normal',
          fontWeight: 550, fontSize: '32px',lineHeight: '48px',color: '#000000',flex: 'none', order: 0, flexGrow: 0}}>
            Log In</div>

          <div style={{ width: '80%', height: '7%', marginLeft: '10%', marginTop: '4%', paddingLeft: '1.5%',
          border: '1px solid #AEAEAE', borderRadius: '20px',paddingTop: '1.5%' ,color: '#9A9797'}}>e-mail</div>

          <div style={{ width: '80%',height: '7%', marginLeft: '10%', marginTop: '3%', paddingLeft: '1.5%',
          border: '1px solid #AEAEAE', borderRadius: '20px',paddingTop: '1.5%' ,color: '#9A9797'}}>password</div>

          <div style={{ display: 'flex', alignItems: 'center',marginTop: '1%', fontFamily: 'Poppins', 
            fontStyle: 'normal', fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: '#9A9797' }}>
            <input type="checkbox" style={{marginLeft: '11%',  boxSizing: 'border-box', border: '1px solid #9A9797',
            borderRadius: '5px', width: '20px', height: '20px'
            }}/>
            <div style={{marginLeft: '1%'}}> Remember me </div>
            <Link style={{marginLeft: '50%'}} to={'/forgot'}><div> Forgot password </div></Link>
          </div>

          <Link to={'/home'}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', 
              alignItems: 'center', height : '8%', width: '80%', color: '#FFFFFF', fontWeight: 550,
              background: '#F88C70', borderRadius: '30px',marginLeft: '10%',marginTop: '2%'}}>Log In</div>
          </Link>
          
          <div style={{ display: 'flex', alignItems: 'center' , marginTop: '1%',fontWeight: 550, color: '#9A9797'}}>
            <div style={{ width: '37%', border: '1.4px dashed #9A9797', marginRight: '2%' ,marginLeft: '10%'}}></div>
            or
            <div style={{ width: '38%', border: '1.4px dashed #9A9797', marginLeft: '2%'}}></div>
          </div>
          
          <div style={{ display: 'flex', width: '100%', height: '100%', marginTop:'1%', position:'fixed'}}>
            <Link to={'/signup'} style={{ boxSizing: 'border-box',width: '80px', height: '80px', backgroundImage: `url(${Search})`,backgroundPosition: 'center',
              border: '2px solid #FFCCBF',borderRadius:'100%', backgroundRepeat: 'no-repeat' , marginLeft:'15%'}}></Link>

            <Link to={'/signup'} style={{ boxSizing: 'border-box',width: '80px', height: '80px', backgroundImage: `url(${Twitter})`,backgroundPosition: 'center',
              border: '2px solid #FFCCBF',borderRadius:'100%', backgroundRepeat: 'no-repeat' , marginLeft:'13%'}}></Link>
          </div>
        </div>

        <div style={{ width: '40vw', height: '100%', backgroundImage: `url(${LoginImg})`,
        backgroundSize: '100% 70%', backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', backgroundColor: '#FED7E2'}}>
          
        </div>
        
      </div>
    </AuthenticationLayout>
    
    
  )
}

export default Login