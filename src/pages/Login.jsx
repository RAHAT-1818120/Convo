import React, { useState } from 'react'
import { Registration } from './Registration'
import { Link, useNavigate } from 'react-router-dom'
import { IoEye } from "react-icons/io5";
import { RiEyeCloseLine } from "react-icons/ri";

export const Login = () => {
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')

    const [emailError, setEmailError]=useState('')
    const [passwordError, setPasswordError]=useState('')
    const [showPassword, setShowPassword]=useState(false)


    const handleEmail=(e)=>{
        setEmail(e.target.value);
        setEmailError('')
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value);
        setPasswordError('')
    }

    const navigate=useNavigate();
    const handleLogin=()=>{
        if(!email){
            setEmailError('*Email is requiered')
        }
        if(!password){
            setPasswordError('*Password is requiered')
        }
        if(email&&password){
            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                setEmailError('Email is Invalid');
            }else if(!/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/.test(password)){
                setPasswordError('A minimum 8 characters password contains a combination of uppercase and lowercase letter, number and special character are required.');
            }
            else{
                navigate('/registration')
            }
    }
}
  return (
    <div>
        <div className='flex'>
        <div className='w-1/2 flex justify-center'>
            <div className='mt-[130px] mr-[50px]'>
                <img className='w-[250px] object-cover pb-12' src="../assets/convo logo.png" alt="" />
                <h1 className='font-nun font-bold text-4xl text-[#11175D] pb-[23px]'>Login to your account!</h1>
                <button className='flex items-center px-[30px] py-[22px] border border-2px rounded-xl border-[#03014C] gap-x-2'>
                    <img src="../assets/g.png" alt="g" />
                    <p className='font-sans font-semibold text-sm text-[#03014C]'>Login with Google</p>
                </button>
                <div className='mt-10'>
                    <p className='font-nun font-bold text-sm text-[#11175D]'>Email Address</p>
                    <input onChange={handleEmail} className='border-b-2 border-[#11175D] py-4 pr-[60px] outline-none w-[368px]' type="email" />
                    <p className='font-nun text-[14px] text-red-500 font-bold'>{emailError}</p>
                </div>
                <div className='relative mt-10'>
                    <p className='font-nun font-bold text-sm text-[#11175D]'>Password</p>
                    <input onChange={handlePassword} className='border-b-2 border-[#11175D] py-4 pr-[60px] outline-none w-[368px]' type={showPassword?'text':'Password'} />
                    {
                showPassword ?
                  <IoEye onClick={() => setShowPassword(!showPassword)} className='absolute top-[37px] right-[5%] text-xl' />
                  :
                  <RiEyeCloseLine onClick={() => setShowPassword(!showPassword)} className=' absolute top-[37px] right-[5%] text-xl' />
                    }
                    <p className='font-nun text-[14px] text-red-500 font-bold w-[360px]'>{passwordError}</p>
                </div>
                <div className='text center mt-[51px] w-[368px]'>
                    <button onClick={handleLogin} className='bg-primary rounded-full font-nun text-xl font-semibold text-white w-full py-5'>Login to Continue</button>
                    <div className='flex pt-[50px] justify-center items-center gap-x-2'>
                        <p className='font-sans text-sm font-normal text-[#03014C]'>Don’t have an account?</p>
                        <Link to='/registration' className='font-bold text-[#EA6C00]' href="" >Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-1/2'>
            <img className='w-full h-screen object-cover' src="../assets/login.png" alt="login" />
        </div>
    </div>
    </div>
  )
}
