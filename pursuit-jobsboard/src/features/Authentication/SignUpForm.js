import React from 'react'
import styled from 'styled-components'

import { useInput } from '../../utilitron/CustomHookery'
import { APIURL } from '../../utilitron/APIURL'
import { selectCurrentUserId } from './authenticationSlice'

import Input from '../BaseComponents/Image'

const SignUpForm = styled.form`

`
const SignUpFormTitle = styled.h1`
    font-size: 20rem;
`

const PJBSignUpForm = () => {
    
    const currentUser = useSelector(selectCurrentUserId)
    const url = APIURL()

    const email = useInput("")
    const password = useInput("")
    const name = useInput("")
    const [image, setImage] = useState(null)
    const github = useInput("")
    const linkedin = useInput("")


    const handleImageUpload = () => {
        setImage(event.target.files[0]);
    }

    const handleSubmit = async event => {
        event.preventDefault();
        event.target.image.value = null;
        const formData = new FormData();
        formData.append("image", image);
        const config = {
            headers: {"content-type": "multipart/form-data"}
        };
        try {
            let res = await axios.post(`${url}/upload`, formData, config);
            
            modalClose();
        } catch (error) {
        
        }
      };
    
    return (

        <SignUpForm>
            <SignUpFormTitle>BEGIN YOUR DREAM JOB JOURNEY</SignUpFormTitle>
            <Input placeholder={"Enter Your Email"} input={email} required/>
            <Input type={"password"} placeholder={"Enter Your Password"} input={password} autoComplete="on" required />
            <Input placeholder={"Enter Your Preferred Name"} input={name} required />
            <Input type={"file"} name={image} onChange={event => handleUpload(event)} />
            <Input placeholder={"Enter Your LinkedIn Profile Link"} input={github} />
            <Input placeholder={"Enter Your GitHub Profile Link"} input={linkedin} />
        </SignUpForm>
    )
}

export default PJBSignUpForm;
