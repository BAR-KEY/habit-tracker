import React from 'react';
import Habit from './habit'

const Habits = ({habit,Increase,decrease})=> {
    const habitList=habit.map((habit)=>(<Habit key={habit.id}text={habit.text} count={habit.count}></Habit>));
    return (
        <>
        <div className="form" >

        <input type="text" value="hi"/><button className="add_btn">Add</button>
        </div>
        <div className="habitList">
        {habitList}
        </div>
            <div className="reset">
                <button className="reset_btn">Reset All</button>
            </div>
        </>
    );
}

export default Habits;