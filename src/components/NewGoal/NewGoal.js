import React from "react"
import './NewGoal.css';


const NewGoal = () => {
    const addGoalHandler = (e) => {
        console.log('hello');
        e.preventDefault();

        // Adding a new goal
        const newGoal = {
            id: Math.random().toString(),
            text: 'My new goal boss',

        };
        console.log(newGoal);
    }
    
    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text" />
        <button type="submit"> Add Goal </button>
    </form>
    ) 
}


export default NewGoal