import React from 'react';
import Login from "../components/login/Login";
import {useParams, useNavigate} from 'react-router-dom';

const LoginPage = (props) => {
    const navigate = useNavigate();
    console.log('params id : ', useParams());

    return (
        <div>
            <button onClick={()=>{ navigate(-1) }}>뒤로가기</button>
            <Login />
        </div>
    );
};

export default LoginPage;