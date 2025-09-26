
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8) ;
  const [includeNum, setIncludeNum] = useState(false);
  const [includeChar, setIncludeChar] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null)

  const passwordGen = useCallback(()=>{
    let pass = [];
    let string = 'abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNNOPQRSTWXYZ'
    const nums='1234567890'
    const charactors = '!@#$%^&*=/+'
    if(includeNum){
      string += nums
      pass.push(nums.charAt(Math.floor(Math.random()*nums.length)))
    }
    if(includeChar){
      string += charactors
      pass.push(charactors.charAt(Math.floor(Math.random()*charactors.length)))
    }
    for(let i = 0; pass.length<length; i++){
      const char = Math.floor((Math.random())*string.length)
      pass.push(string.charAt(char))
    }
    pass.sort(()=>Math.random() -0.5)
    setPassword(pass.join(''));
  },[includeChar, includeNum, length,setPassword])

  useEffect(()=>{passwordGen()},[length, includeChar, includeNum, passwordGen])

  const copyHandler = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black p-4">
  <div className="w-full max-w-md bg-gray-900 shadow-2xl rounded-2xl p-6 md:p-8 border border-gray-700 transition transform hover:scale-[1.01] hover:shadow-blue-900/50">
    
    {/* Title */}
    <h1 className="text-white text-center text-3xl font-bold mb-6 tracking-wide drop-shadow-md">
      🔐 Password Generator
    </h1>

    {/* Input + Copy button */}
    <div className="flex w-full mb-6">
      <input 
        value={password}
        readOnly
        ref={passwordRef}
        placeholder="Generated password"
        className="flex-1 px-4 py-3 rounded-l-xl bg-gray-100 text-orange-700 font-semibold text-sm outline-none  transition"
      />
      <button 
        onClick={copyHandler}
        className="px-4 py-3 bg-blue-700 hover:bg-blue-800 active:scale-95 rounded-r-xl text-white font-semibold transition duration-200"
      >
        Copy
      </button>
    </div>

    {/* Controls */}
    <div className="space-y-4">
      
      {/* Length slider */}
      <div className="flex  items-center gap-4">
        <input 
          type="range"
          value={length}
          onChange={(e) => setLength(e.target.value)} 
          max={20}
          min={6}
          className="w-full accent-blue-600 cursor-pointer"
        />
        <label className="text-white text-sm">Length: <span className="font-semibold flex justify-center">{length}</span></label>
      </div>

      {/* Checkboxes */}
      <div className="flex items-center justify-between text-white text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input 
            type="checkbox"
            checked={includeNum}
            onChange={() => setIncludeNum((prev) => !prev)}
            className="accent-blue-600 w-4 h-4"
          />
          Numbers
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input 
            type="checkbox"
            checked={includeChar}
            onChange={() => setIncludeChar((prev) => !prev)}
            className="accent-blue-600 w-4 h-4"
          />
          Characters
        </label>
      </div>

    </div>
  </div>
</div>

    </>
  )
}

export default App
