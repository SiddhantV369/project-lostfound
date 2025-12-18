import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "../components/header";




export default function LoginForm(){
    const [userEmail,setUserEmail]=useState("");
    const [userPassword,setUserPassword]=useState("");

    
    const handleSubmit = (e) =>{
        const userData = {        
            userEmail,
            userPassword
        }
    }

    return (
        <>
        <Navbar1/>  
            <div className=" min-h-screen flex items-center justify-center ">
            <div className="bg-gray-400 rounded-2xl shadow-lg w-full max-w-sm p-6">
                <form onSubmit={handleSubmit} className="flex flex-col w-full p-4">
                    <h1 className="text-3xl mb-3">Login</h1>
                    <input type="text" 
                        className="form-control mb-3" 
                        placeholder="email address"
                        onChange={(e)=>setUserEmail(e.target.value)}
                        value={userEmail}
                        required>                  
                    </input>

                    <input type="text" 
                        className="form-control mb-3" 
                        placeholder=" password"
                        onChange={(e)=>setUserPassword(e.target.value)}
                        value={userPassword}
                        required>
                    </input>
                    
                    <button type="submit" 
                        className="btn btn-dark w-full py-2 mb-3">
                        Login
                    </button>

                    <p className="text-m">Don't have an account? <a href="/signup">signup</a></p>
                </form>
            </div>
            </div>
        </>
    )
}