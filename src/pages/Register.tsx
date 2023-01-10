import { Form, Input, Button, Typography, Checkbox } from 'antd';

const { Title } = Typography;

export default function Register() {
  return (
    <div className="flex h-full w-full items-center justify-center ">
      <div className="flex  flex h-80 w-80 items-center rounded-2xl bg-slate-100 p-4  ">
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          name="login"
          onFinish={(values) => {
            console.log(values);
          }}
        >
          <Title className="text-center">Register</Title>
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
          <Form.Item
            name="isAdmin"
            valuePropName="checked"
            wrapperCol={{ offset: 8 }}
          >
            <Checkbox>is Admin</Checkbox>
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
