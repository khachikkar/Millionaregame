import React, { useContext } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";

import { Form, Input, Button, Flex, notification } from "antd";

import { auth } from '../../../services/firebase';

import { Link } from "react-router-dom";

import "./index.css"
import { GameContext } from '../../../context/context';

const LogIn = () => {

const [form] = Form.useForm();

const {setIsAuth} = useContext(GameContext)


const handleLogin = async (values) => {
    // setLoading(true);
    try {
      const { email, password } = values;
      await signInWithEmailAndPassword(auth, email, password);
      console.log(values)
      form.resetFields();
      setIsAuth(true)
    } catch (error) {
        console.log(error)
      notification.error({
        message: "Invalid Login Credentials", // Fixed message typo
      });
    } 
  };





  return (
    <div className='loginCont'>
    <Form layout="vertical" form={form} onFinish={handleLogin}>
        <Form.Item
          label="Email"
          name="email"
          tooltip="This field is for your Email"
          rules={[
            {
              required: true,
              message: "Pls enter your Eamil",
            },
          ]}
        >
          <Input type="email" placeholder="email" style={{ fontSize: '16px' }}/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
         
          rules={[
            {
              required: true,
              message: "Pls enter your Password",
            },
          ]}
        >
          <Input.Password placeholder="Password" style={{ fontSize: '16px' }}/>
        </Form.Item>

<Flex wrap justify="center" align="center" gap="10px">
<Button
          style={{ width: "100%" }}
          type="primary"
          htmlType="submit"
          
        >
          Login
        </Button>
   

          <Link to="/register">
          <Button
          style={{ width: "100%" }}
          type="Link"
        >
          Create Acount
        </Button>
          </Link>
</Flex>

        

        
    </Form>
    </div>
  )
}

export default LogIn
