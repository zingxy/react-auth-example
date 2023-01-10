import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';
export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname ?? '/';

  if (auth.user)
    return (
      <Navigate
        to="/"
        replace
      />
    );

  return (
    <div className="flex h-full w-full items-center justify-center ">
      <div className="flex  flex h-80 w-80 items-center rounded-2xl bg-slate-100 p-4  ">
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          name="login"
          onFinish={({ username, password }) => {
            auth
              .login(username, password)
              .then((value) => {
                navigate(from, { replace: true });
              })
              .catch((err) => {});
          }}
        >
          <Title className="text-center">Login</Title>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-300"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
