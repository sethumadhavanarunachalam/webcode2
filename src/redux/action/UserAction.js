import axios from "axios"
import { message } from "antd"

export const userLogin=(reqObj)=>async dispatch=>{
   
    dispatch({type:"LOADING",payload:true})
    try {
        const response=await axios.post('/api/user/login',reqObj)    
        localStorage.setItem('user', JSON.stringify(response.data))
        message.success("Login Success")
        // window.location.href="/"
        dispatch({type:"LOADING",payload:false})
    } catch (error) {
        message.error("Something went Wrong")
        dispatch({type:"LOADING",payload:false})
        
    }
}

export const userRegister=(reqObj)=>async dispatch=>{
    dispatch({type:"LOADING",payload:true})
    try {
        const response=await axios.post('/api/user/register',reqObj)
       
        dispatch({type:"LOADING",payload:false})
        message.success("Login Success")
    } catch (error) {
        dispatch({type:"LOADING",payload:false})
        message.error("Something went Wrong")

    }
}