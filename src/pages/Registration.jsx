import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoEye } from "react-icons/io5";
import { RiEyeCloseLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

export const Registration = () => {

    const [email, setEmail]=useState('')
    const [fullname, setFullname]=useState('')
    const [password, setPassword]=useState('')

    const [emailError, setEmailError]=useState('')
    const [fullnameError, setFullnameError]=useState('')
    const [passwordError, setPasswordError]=useState('')

    const [showPassword, setShowPassword]=useState(false)
    
    const handleEmail=(e)=>{
        setEmail(e.target.value);
        if(setEmail){
            setEmailError('');
        }
    }
    const handleFullname = (e)=>{
        setFullname(e.target.value);
        if(setFullname){
            setFullnameError('');
        }
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value);
        if(setPassword){
            setPasswordError('');
        }
    }

    const navigate=useNavigate();
    
    const handleSign = () =>{
        console.log('okkkk');
        if (!email){
            setEmailError('*Email is required');
        }
        if (!fullname){
            setFullnameError('*Full name is required');
        }
        if (!password){
            setPasswordError('*Password is required');
        }
        if(email&&password&&fullname){
            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                setEmailError('Email is Invalid');
            }else if(!/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/.test(password)){
                setPasswordError('A minimum 8 characters password contains a combination of uppercase and lowercase letter, number and special character are required.');
            }
            else{
                navigate('/')
            }
    }
}

    
  return (
    <div className='flex'>
        <div className='w-1/2 flex justify-end'>
            <div className='xl:mt-[30px] 2xl:mt-[90px] xl:mr-[50px] 2xl:mr-[150px]'>
                <img className='xl:w-[200px] 2xl:w-[250px] object-cover xl:pb-5 2xl:pb-12' src="../assets/convo logo.png" alt="" />
                <h1 className='font-nun font-bold text-4xl text-[#11175D] pb-[13px]'>Get started with easily register</h1>
                <p className='font-nun font-normal text-xl'>Free register <span className='text-[#808080]'>and</span> you can enjoy it</p>
                <div className='relative mt-10'>
                    <p className='absolute top-[-12px] left-[50px] bg-white px-[18px] font-nun font-bold text-sm text-[#11175D]'>Email Address</p>
                    <input onChange={handleEmail} className='border border-[2px] border-[#11175D] xl:py-3 2xl:py-[27px] px-[52px] outline-none rounded-xl w-[368px]' type="email"/>
                    {
                       emailError &&
                       <p className='font-nun text-[14px] text-red-500 font-bold'>{emailError}</p> 
                    }
                </div>
                <div className='relative mt-10'>
                    <p className='absolute top-[-12px] left-[50px] bg-white px-[18px] font-nun font-bold text-sm text-[#11175D]'>Full name</p>
                    <input onChange={handleFullname} className='border border-[2px] border-[#11175D] xl:py-3 2xl:py-[27px] px-[52px] outline-none rounded-xl w-[368px]' type="text"/>
                    <p className='font-nun text-[14px] text-red-500 font-bold'>{fullnameError}</p>
                </div>
                <div className='relative mt-10'>
                    <p className='absolute top-[-12px] left-[50px] bg-white px-[18px] font-nun font-bold text-sm text-[#11175D]'>Password</p>
                    <input onChange={handlePassword} className='border border-[2px] border-[#11175D] xl:py-3 2xl:py-[27px] px-[52px] outline-none rounded-xl w-[368px]' type={showPassword?'text':'Password'}/>
                    {
                showPassword ?
                  <IoEye onClick={() => setShowPassword(!showPassword)} className='absolute top-[33px] right-[33%] text-xl' />
                  :
                  <RiEyeCloseLine onClick={() => setShowPassword(!showPassword)} className=' absolute top-[33px] right-[33%] text-xl' />
                    }
                <p className='font-nun text-[14px] text-red-500 font-bold w-[360px]'>{passwordError}</p>
                </div>
                <div onClick={handleSign} className='text center xl:mt-8 2xl:mt-[51px] w-[368px]'>
                    <button className='bg-primary rounded-full font-nun text-xl font-semibold text-white w-full py-4'>Sign up</button>
                    <div className='flex xl:pt-3 2xl:pt-[50px] justify-center items-center gap-x-2'>
                        <p className='font-sans text-sm font-normal text-[#03014C]'>Already  have an account?</p>
                        <Link to='/' className='font-bold text-[#EA6C00]' href="">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-1/2'>
            <img className='w-full h-screen object-cover' src="../assets/registration.png" alt="registration"/>
        </div>
    </div>
  )
}
