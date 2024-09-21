import React, { useCallback, useEffect, useRef, useState } from 'react'

function PasswordGen() {
    const [length,setLength] = useState(8);
    const [ numberAllowed,setNumberAllowed] = useState(false);
    const [charAllowed,setCharAllowed] = useState(false);
    const [password,setPassword] = useState("");
    const passRef = useRef(null);
    const passGen = useCallback(()=>{
        let pass="";
        let str="qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";
        if(numberAllowed) str +="1234567890";
        if(charAllowed) str +="@#$%^&*()_-+=";
        for(let i=1;i<=length;i++){
            let char = Math.floor(Math.random()*str.length+1);
            pass += str.charAt(char);
        }
        setPassword(pass);
    },[length,charAllowed,setPassword]);

const copyPassword = useCallback(()=>{
    passRef.current?.select();
   // passRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password);
},[password])
    useEffect(()=>{
        passGen();
    },[length,numberAllowed,charAllowed,passGen])
    return (
        // flex flex-col items-center py-5 bg-gray-700
    <div className="py-8 ">
        <div className='max-w-md mx-auto shadow-md rounded-lg px-4 py-3  bg-gray-700'>
        <h1 className='text-center text-white'> Passsword</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input 
                type='text'
                value={password}
                className='outline-none w-full py-1 px-3'
                placeholder='Password'
                readOnly
                ref={passRef}
            />
            <button
            onClick={copyPassword}
                className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            > Copy Password</button>
        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                <input type='range' min={8} max={100} value={length} className='cursor-pointer'
                    id="len"
                    onChange={(e)=>{
                        setLength(e.target.value)}}
                />
                <label htmlFor='len'>length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input type='checkbox' defaultChecked={numberAllowed} 
                    id="numberInput" 
                    onChange={(e)=>{setNumberAllowed((prev)=> !prev);}}
                />
                <label htmlFor='numberInput'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input type='checkbox' defaultChecked={charAllowed} 
                    id="charInput" 
                    onChange={(e)=>{setCharAllowed((prev)=> !prev);}}
                />
                <label htmlFor='charInput'>Special Char</label>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PasswordGen