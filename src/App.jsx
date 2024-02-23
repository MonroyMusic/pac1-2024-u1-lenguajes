import { useEffect, useState } from "react"
import Display from "./components/Display"
import Calculator from "./components/Calculator"
import Historial from "./components/Historial"
import React from 'react'

const App = () => {

    const [display, setDisplay] = useState("");
    const [operaciones, setOperaciones] = useState( JSON.parse(localStorage.getItem('operaciones')) ?? []);
    const [operacion, setOperacion] = useState({});
  
    useEffect( () => {

        localStorage.setItem('operaciones', JSON.stringify(operaciones));
    
      }, [operacion])
    
    return (
        <>

            <div className="container mx-auto py-8">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                    <div className="mb-4">
                        <input id="display" className="shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={display} placeholder="0" readOnly />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={ () => setDisplay(7) }>7</button>
                        <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={ () => setDisplay(8) }>8</button>
                        <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={ () => setDisplay(9) }>9</button>
                        <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={ () => setDisplay('/') }>/</button>
                        <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={ () => setDisplay(4) }>4</button>
                        <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={ () => setDisplay(5) }>5</button>
                        <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={ () => setDisplay(6) }>6</button>
                        <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={ () => setDisplay("*") }>*</button>
                        <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={ () => setDisplay(1) }>1</button>
                        <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={ () => setDisplay(2) }>2</button>
                        <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={ () => setDisplay(3) }>3</button>
                        <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={ () => setDisplay("-") }>-</button>
                        <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={ () => setDisplay(0) }>0</button>
                        <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={ () => setDisplay(".") }>.</button>
                        <button className="col-span-2 bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">=</button>
                        <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={ () => setDisplay("+") }>+</button>
                        <button className="col-span-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={ () => setDisplay('') }>C</button>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-lg font-semibold mb-2">Historial</h2>
                    <ul id="history" className="list-disc pl-5"></ul>
                </div>
            </div>

        </>
    )
}

export default App
