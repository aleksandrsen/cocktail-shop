import React from "react";
import "./login-form.scss"
import {Form, Icon, Input, Checkbox} from 'antd';

export default function LoginForm(props) {

    return (
        <Form className="login-form">
            <Form.Item>
                <Input
                    prefix={<Icon type="user" style={{color: '#ffad04'}}/>}
                    placeholder="Username"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="lock" style={{color: '#ffad04'}}/>}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Checkbox>Remember me</Checkbox>
                <a href="#" className='register-now'>Register now!</a>
            </Form.Item>
            <Form.Item>
                <a className="login-form-forgot" href="#">Forgot password?</a>
            </Form.Item>
        </Form>
    );
}