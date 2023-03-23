import React from 'react';
import AuthenticationLayout from '../../Layout/AuthenticationLayout';

// 임시
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <AuthenticationLayout>
      <Link to={'/home'}>home으로 이동</Link>
    </AuthenticationLayout>
  )
}

export default Register