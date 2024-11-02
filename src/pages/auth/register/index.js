import React, {useContext} from 'react'

import { createUserWithEmailAndPassword} from "firebase/auth";


import { Form, Input, Button, Flex } from "antd";

import { auth, db } from '../../../services/firebase';
import {doc, setDoc} from "firebase/firestore"

import { Link } from "react-router-dom";


import { useNavigate } from 'react-router-dom';

import "./index.css"
import {GameContext} from "../../../context/context";
import translations from "../../../internationization/translations";


const Register = () => {

  const [form] = Form.useForm();
  const navigate = useNavigate();
const {language} = useContext(GameContext);

    const handleRegister = async (values) => {
        // setLoading(true);
        const { password,  email, fullname } = values;
        try {
          // avelacnum enq datan db -um ->
          const response =await createUserWithEmailAndPassword(auth, email, password); // vercreci responsey

    const {uid} = response.user
    const createddoc = doc(db,  "regusers", uid) // (1-databasan, papkan vortex qcum enq, u et user i idn)
    await setDoc(createddoc, {
        uid,  fullname, email
       })


          navigate("/login");
        } catch (e) {
          console.log(e);
        } 
      };


  return (
    <div className='loginCont'>
    <Form layout="vertical" form={form} onFinish={handleRegister}>

    <Form.Item
          label="Full Name"
          name="fullname"
          tooltip="This field is for your Full Name"
          rules={[
            {
              required: true,
              message: "Pls enter your Full Name",
            },
          ]}
        >
          <Input type="text" placeholder="email" style={{ fontSize: '16px' }}/>
        </Form.Item>

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
    {translations[language].register}
        </Button>
   

          <Link to="/login">
          <Button
          style={{ width: "100%" }}
          type="Link"
        >
              {translations[language].login}
        </Button>
          </Link>
</Flex>

        

        
    </Form>
    </div>
  )
}

export default Register
