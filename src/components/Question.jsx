import React, { useEffect } from "react";

export const Question = ({ question, options, onAnswer }) => {


    return (
        <div id="question-container">
            <h1>{question}</h1>
            {options.map((option) => (
                <button
                    key={option}
                    onClick={() => {
                        onAnswer(option);
                    }}
                >
                    { option }
                </button>
            ))}
        </div>
    );
};
