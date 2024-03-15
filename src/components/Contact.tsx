"use client";

import React,{useState} from "react";

export default function Contact(){

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [content,setContent]=useState("");

    const handleSubmit=async (event:any)=>{
        event.preventDefault();
        
        console.log(name);
        console.log(email);
        console.log(content);
        
        const data={
            name:name,
            email:email,
            content:content
        }
        const apiEndpoint = '/api/email';
        fetch(apiEndpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((response) => {
            console.log(response);
            setName("");
            setEmail("");
            setContent("");
        })
        .catch((err) => {
            console.log(err);
        });
            
        

    }
    return(
        <div id="contact" className="flex flex-col mt-16 pb-6 items-center bg-gray-700 bg-opacity-70">
            <p className="text-4xl font-mono font-semibold text-white mt-4">Contact Me</p>
            <div className="flex justify-center w-full  items-center my-4">
                <div className="md:w-2/5 w-3/4">
                    <form onSubmit={handleSubmit} action="" className="">
                        <div className="flex flex-col">
                            <label htmlFor="fullName" className="text-white font-mono">Full Name</label>
                            <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}}  name="fullName" placeholder="John Doe" className=" placeholder-gray-300 rounded-sm bg-gray-500 p-1 text-white font-mono" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-white font-mono">Email address</label>
                            <input type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} name="email" placeholder="xyz@gmail.com" className="placeholder-gray-300 rounded-sm font-mono bg-gray-500 p-1 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="content" className="text-white font-mono">Content</label>
                            <textarea placeholder="your message" name="content" rows={7} value={content} onChange={(event)=>{setContent(event.target.value)}} className="placeholder-gray-300 rounded-sm font-mono bg-gray-500 p-1 text-white"/>
                        </div>
                        <button type="submit" className=" bg-purple-400 mt-2 hover:px-[0.40rem] hover:py-[0.20rem] rounded-md py-1 px-2 text-white text-lg font-mono shadow-md hover:shadow-none shadow-gray-700">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}