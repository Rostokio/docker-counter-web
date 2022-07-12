import {React, useEffect, useState} from 'react'
import "./App.css"

export default function App() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        fetch('http://localhost:8080/', {
            method: 'GET',
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then(response => setCounter(response.value))
            .catch(e => console.log(e));
    })

    //increase counter
    const increase = () => {
        fetch('http://localhost:8080/', {
            method: 'PUT',
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then(response => setCounter(response.value))
            .catch(e => console.log(e));
    };

    //decrease counter
    const decrease = () => {
            fetch('http://localhost:8080/', {
                method: 'DELETE',
            })
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                })
                .then(response => setCounter(response.value))
                .catch(e => console.log(e));
    };


    return (
        <div className="counter">
            <h1>Пример простого счетчика</h1>
            <span className="counter__output">{counter}</span>
            <div className="btn__container">
                <button className="control__btn" onClick={increase}>+</button>
                <button className="control__btn" onClick={decrease}>-</button>
            </div>
        </div>
    );
}
