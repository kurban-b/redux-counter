import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, reset} from "./actions";

function Counter() {
    const despather = useDispatch();
    const counter = useSelector(state => state);
    const [number, setNumber] = useState()


    function handlerIncrement () {
        despather(increment(number))
    }

    function handlerDecrement  () {
        despather(decrement(number))
    }

    function handlerReset () {
        despather(reset())
    }

    function handlerChangeOfInput(e) {
        setNumber(e.target.value.replace(/[A-z]/g, ''))
    }

    return (
        <div className='col-12'>
            <div className='output'>
                {counter}
            </div>
            <div className='buttons'>
                <button className='btn btn-success' onClick={handlerIncrement}>+</button>
                <button className='btn btn-warning' onClick={handlerDecrement}>-</button>
                <button className='btn btn-danger' onClick={handlerReset}>reset</button>
            </div>
            <div className="input_block">
                <div className="title">Введите значение</div>
                <input
                    type="text"
                    value={number}
                    onChange={handlerChangeOfInput}
                />
            </div>
        </div>
    );
}

export default Counter;