import React from 'react';
import { Button } from 'antd';

import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  const getAuthStatusLink = () => {
    if (auth.user) {
      return (
        <Button
          type="primary"
          className="bg-red-500 font-bold"
          onClick={() => {
            auth
              .logout()
              .then(() => {
                navigate('/');
              })
              .catch(() => {
                alert('注销失败');
              });
          }}
        >
          Logout
        </Button>
      );
    } else {
      return (
        <>
          <Link
            className="m-2 rounded-full bg-slate-100 p-4 text-center  font-bold hover:bg-purple-700 group-hover:text-white"
            to="/login"
          >
            Login
          </Link>
          {/* 注册 */}
          <Link
            className="m-2 rounded-full bg-slate-100 p-4 text-center  font-bold hover:bg-purple-700 group-hover:text-white"
            to="/register"
          >
            Register
          </Link>
        </>
      );
    }
  };

  return (
    <section className=" mt-4 flex w-full flex-col ">
      {getAuthStatusLink()}
    </section>
  );
}

export default AuthStatus;
