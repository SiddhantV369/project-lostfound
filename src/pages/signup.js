import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "../components/header";




export default function SignupForm(){
    const [userEmail,setUserEmail]=useState("");
    const [userPassword,setUserPassword]=useState("");
    const [userpassConf,setUserPassConf]=useState("");
    
    const handleSubmit = (e) =>{
        //e.preventDefault();
        const userData = {        
            userEmail,
            userPassword,
            userpassConf
        }
       
    }

    return (
        <>
        <Navbar1/>  
            <div className=" min-h-screen flex items-center justify-center ">
            <div className="bg-gray-400 rounded-2xl shadow-lg w-full max-w-sm p-6">
                <form onSubmit={handleSubmit} className="flex flex-col w-full p-4">
                    <h1 className="text-3xl mb-3">Register</h1>
                    <input type="text" 
                        className="form-control mb-3" 
                        placeholder="email address"
                        onChange={(e)=>setUserEmail(e.target.value)}
                        value={userEmail}
                        required>                  
                    </input>

                    <input type="text" 
                        className="form-control mb-3" 
                        placeholder="create a password"
                        onChange={(e)=>setUserPassword(e.target.value)}
                        value={userPassword}
                        required>
                    </input>

                    <input type="text" 
                        className="form-control mb-3" 
                        placeholder=" confirm your password"
                        onChange={(e)=>setUserPassConf(e.target.value)}
                        value={userpassConf}
                        required>
                    </input>
                    
                    <button type="submit" 
                        className="btn btn-dark w-full py-2 mb-3">
                        Signup
                    </button>

                    <p className="text-m">Already have an account? <a href="/login">login</a></p>
                </form>
            </div>
            </div>
        </>
    )
}