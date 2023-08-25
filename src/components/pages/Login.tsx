import styled from "styled-components";
import { useState, useEffect } from "react";
import { EncryptStorage } from 'encrypt-storage';
import bcrypt from 'bcryptjs';
import { postAuthLogin } from "../../redux/slicers/User";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from 'react-router-dom';

type InputProps = {
    type: string,
    required: boolean
}

const Form = styled.div`
    max-width: 440px;
    margin: 0 auto;
    font: bold 30px Candara, Arial;
    color: #403866;
`
const Title = styled.h2`
    text-transform: uppercase;
    text-align: center;
`
const FormRow = styled.div<{bottomSpace?: number}>`
    margin-bottom: ${props => props.bottomSpace || 20}px;
`
const Input = styled.input.attrs(props => ({
type: props.type || "text",
required: true,
}))<InputProps>`
    background: var(--light-bg-color);
    border: 0;
    font-size: 18px;
    font-weight: bold;
    display: block;
    width: 100%;
    height: 62px;
    padding: 0 20px;
    box-sizing: border-box;
`
const Button = styled.button`
    font-size: 18px;
    color: var(--main-bg-color);
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 62px;
    background-color: var(--light-bg-color);
    border-radius: 3px;
    border: 0;
    transition: all .4s;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      color: var(--light-bg-color);
      border: 3px solid var(--light-bg-color);
      background: var(--main-bg-color);
    }
`
interface Credentials {
    username: string,
    password: string
}

export function Login() { 
    const encryptStorage = new EncryptStorage("SECRET_KEY");
    const [formData, setFormData] = useState<Credentials>({
        username: '',
        password: ''
    });

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData, 
            [ev.target.name]:ev.target.value
        })
    }

    
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleSubmit = (ev: React.FormEvent<HTMLButtonElement>) => {
        const hashedPassword = bcrypt.hashSync(formData.password, '$2a$10$CwTycUXWue0Thq9StjUM0u')
        formData.password = hashedPassword
        dispatch(postAuthLogin(formData));
        navigate('http://localhost:3000/dashboard');            
    }

    useEffect(() => {
        const storedData = encryptStorage.getItem('loginCredentials');
        if(storedData) { 
            setFormData(storedData);
        }    
    }, [])

    return (
        <>
            <Title>Login</Title>
            <Form>
                <FormRow>
                    <Input placeholder="Username" onChange={handleChange} name="username" value={formData.username} />
                </FormRow>
                <FormRow>
                    <Input type="password" placeholder="Password" onChange={handleChange} name="password" value={formData.password} />
                </FormRow>
                <Button onClick={handleSubmit}>Login</Button>
            </Form>
        </>
    )
}
