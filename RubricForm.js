import React from "react";
import './RubricForm.css';

const RubricForm = () =>{
    const description = `Describe the assessment / rubric details
    (e.g what are some criteria or ratings, what is the assessment topic or big idea)
    
    example: This rubric is designed to assess student's anaytical and critical thinking with 
    problem solving through solving a problem for different scenario`;
    return(
        <div className="rubric-form-container">
            <h2>Create a new Rubric</h2>
            <form>
                <div className="form-group">
                    <label>Title*<span className="alt-name">[Assessment component]</span>:</label>
                    <input type="text" placeholder="Enter title or component of assessment"/>
                </div>

                <div className="form-group">
                    <label>Description:</label>
                    <textarea placeholder={description}></textarea>
                </div>
                <div className="form-group">
                    <label>Grade*<span className="alt-name">[Weightage]</span>:</label>
                    <input type="text"  placeholder="Enter the weightage of the assessment"/>
                </div>
                <div className="form-group">
                    <label>Subject*:</label>
                    <input type="text"  placeholder="e.g. English, Math, Science etc..."/>
                </div>
                <div className="form-group">
                    <label>Class Level:</label>
                    <input type="text"  placeholder="Enter class level. Eg. Class III"/>
                </div>
                <div className="form-group">
                    <label>Number of Criteria:</label>
                    <input type="number" placeholder="How many criteria do you want for this assessment?"/>
                </div>
                <div className="form-group">
                    <label>Number of Proficiency:</label>
                    <input type="number" placeholder="How any level of Proficiency do you want?"/>
                </div>
                
                <button type="submit">Create Rubric</button>
            </form>
        </div>

    );
};

export default RubricForm;