import React from 'react'

const Calculator = () => {
    return (
        <div>

            <div className="grid grid-cols-4 gap-2">
                <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value onClick={appendToDisplay(7)}>7</button>
                <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={appendToDisplay(8)}>8</button>
                <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={appendToDisplay(8)}>9</button>
                <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={appendToDisplay(8)}>/</button>
                <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={appendToDisplay(8)}>4</button>
                <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={appendToDisplay(8)}>5</button>
                <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={appendToDisplay(8)}>6</button>
                <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={appendToDisplay(8)}>*</button>
                <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={appendToDisplay(8)}>1</button>
                <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={appendToDisplay(8)}>2</button>
                <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={appendToDisplay(8)}>3</button>
                <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={appendToDisplay(8)}>-</button>
                <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={appendToDisplay(8)}>0</button>
                <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={appendToDisplay(8)}>.</button>
                <button className="col-span-2 bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick="calculate()">=</button>
                <button className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={appendToDisplay(8)}>+</button>
                <button className="col-span-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick="clearDisplay()">C</button>
            </div>

        </div>
    )
}

export default Calculator
