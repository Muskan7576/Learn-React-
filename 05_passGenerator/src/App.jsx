
import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "@#$%&*!";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, charAllowed, numberAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-slate-900 to-gray-800 flex items-center justify-center px-4">

      <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-6 sm:p-8">

        {/* Heading */}
        <div className="text-center mb-7">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
            Password <span className="text-orange-400">Generator</span>
          </h1>

          <p className="text-gray-400 text-sm mt-2">
            Create a strong and secure password
          </p>
        </div>

        {/* Password Input */}
        <div className="flex bg-gray-900 rounded-xl overflow-hidden border border-gray-700 mb-6">

          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            placeholder="Your password"
            className="w-full bg-transparent text-white px-4 py-3 outline-none tracking-wider"
          />

          <button
            onClick={copyPasswordToClipboard}
            className="bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all text-white font-semibold px-5"
          >
            Copy
          </button>

        </div>

        {/* Password Length */}
        <div className="bg-gray-900/70 rounded-xl p-4 mb-5">

          <div className="flex justify-between items-center mb-3">
            <label className="text-gray-300 font-medium">
              Password Length
            </label>

            <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-lg font-bold">
              {length}
            </span>
          </div>

          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-orange-500 cursor-pointer"
          />

          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>6</span>
            <span>100</span>
          </div>

        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-3">

          <label
            htmlFor="numberInput"
            className="flex items-center gap-3 p-4 bg-gray-900/70 rounded-xl border border-gray-700 hover:border-orange-500/50 transition cursor-pointer"
          >
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              id="numberInput"
              className="w-4 h-4 accent-orange-500 cursor-pointer"
            />

            <span className="text-gray-300 text-sm">
              Numbers <span className="text-gray-500">0-9</span>
            </span>
          </label>

          <label
            htmlFor="charInput"
            className="flex items-center gap-3 p-4 bg-gray-900/70 rounded-xl border border-gray-700 hover:border-orange-500/50 transition cursor-pointer"
          >
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              id="charInput"
              className="w-4 h-4 accent-orange-500 cursor-pointer"
            />

            <span className="text-gray-300 text-sm">
              Symbols <span className="text-gray-500">@#$</span>
            </span>
          </label>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs mt-6">
          Customize your password according to your needs.
        </p>

      </div>
    </div>
  )
}

export default App
