import React, { useReducer } from "react";

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

function reducer() {}

export default function Form() {
    return(
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName"/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName"/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}