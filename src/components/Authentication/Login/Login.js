import React from 'react';
import AuthenticationLayout from '../../Layout/AuthenticationLayout';
import LoginImg from './LoginImg.png';
// 임시
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <AuthenticationLayout>
      
      <div style={{ display: 'flex', width: '100%', height: '100%'}}>

        <div style={{ width: '60vw', height: '100%',}}>
          

          <div style={{ marginTop: '20%', marginLeft: '16%', fontFamily: 'Poppins',fontStyle: 'normal',
          fontWeight: 550, fontSize: '32px',lineHeight: '48px',color: '#000000',flex: 'none', order: 0, flexGrow: 0}}>
            Log In</div>

          <div style={{ width: '80%', height: '7%', marginLeft: '10%', marginTop: '8%',
          border: '1px solid #AEAEAE', borderRadius: '20px',padding: '10px' ,color: '#9A9797'}}>e-mail</div>

          <div style={{ width: '80%',height: '7%', marginLeft: '10%', marginTop: '5%',
          border: '1px solid #AEAEAE', borderRadius: '20px', padding: '10px',color: '#9A9797'}}>password</div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              marginLeft: '11%', marginTop: '1%', boxSizing: 'border-box', border: '1px solid #9A9797',
              borderRadius: '5px', width: '20px', height: '20px'
            }}></div>
            <div style={{
              marginLeft: '1%', marginTop: '1%', fontFamily: 'Poppins', fontStyle: 'normal',
              fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: '#9A9797'
            }}>
              Remember me
            </div>
            <div style={{
              marginLeft: '40%', marginTop: '1%', fontFamily: 'Poppins', fontStyle: 'normal',
              fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: '#9A9797'
            }}>
              Forgot password
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', 
            alignItems: 'center', height : '8%', width: '80%', color: '#FFFFFF', fontWeight: 550,
            background: '#F88C70', borderRadius: '30px',marginLeft: '10%',marginTop: '2%'}}>Log In</div>
          
          <div style={{ display: 'flex', alignItems: 'center' , marginTop: '1%',fontWeight: 550, color: '#9A9797'}}>
            <div style={{ width: '45%', border: '1.4px dashed #9A9797', marginRight: '2%' }}></div>
            or
            <div style={{ width: '50%', border: '1.4px dashed #9A9797', marginLeft: '2%'}}></div>
          </div>

          <div style={{boxSizing: 'border-box', width: '86.13px', height: '91.09px', left: '163.55px', top: '817.8px', border: '1px solid #FFCCBF'}}></div>
          <div style={{boxSizing: 'border-box', position: 'absolute', width: '86.13px', height: '91.09px', left: '163.55px', top: '817.8px', border: '1px solid #FFCCBF'}}></div>




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