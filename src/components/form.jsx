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

function reducer(state, action) {
    switch(action.type) {
        case 'firstName':
            if (action.payload.length < 3){
                return { ...state, [action.type]:({error:"First Name must be at least 3 characters"})}
            }
            break;
        case 'lastName':
            if (action.payload.length < 3){
                return { ...state, [action.type]:({error:"Last Name must be at least 3 characters"})}
            }
            break;
        case 'email':
            if (action.payload.length < 5){
                return { ...state, [action.type]:({error:"Email must be at least 5 characters"})}
            }
            break;
    }
    return { ...state, [action.type]: ({error:null, value: action.payload})}
}

export default function Form() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleChange = (e) => {
        console.log(e.target.name)
        const {name, value} = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }
    return(
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" onChange={handleChange}/>
                </div>
                {state.firstName.error !== null?
                    <p>{state.firstName.error}</p>:''
                }
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" onChange={handleChange}/>
                </div>
                {state.lastName.error !== null?
                    <p>{state.lastName.error}</p>:''
                }
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" onChange={handleChange}/>
                </div>
                {state.email.error !== null?
                    <p>{state.email.error}</p>:''
                }
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}