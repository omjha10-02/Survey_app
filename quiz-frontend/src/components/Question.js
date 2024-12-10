// import React from 'react';

// const Question = ({ question, selectedOption, handleSelectOption }) => {
//   return (
//     <div className="question-container">
//       <h2>{`Q${question.number}: ${question.text}`}</h2>
//       <div className="options">
//         {question.options.map((option, index) => (
//           <div key={index}>
//             <input
//               type="radio"
//               name="option"
//               id={`option-${index}`}
//               value={option}
//               checked={selectedOption === option}
//               onChange={() => handleSelectOption(option)}
//             />
//             <label htmlFor={`option-${index}`}>{option}</label>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Question;
import React from 'react';
// import './Question.css'; // Import CSS file for styling

const Question = ({ question, selectedOption, handleSelectOption }) => {
  return (
    <div className="question-container">
      <div className="question-card">
        <h2 className="question-text">{`Q${question.number}: ${question.text}`}</h2>
        <div className="options">
          {question.options.map((option, index) => (
            <div key={index} className="option">
              <input
                type="radio"
                name="option"
                id={`option-${index}`}
                value={option}
                checked={selectedOption === option}
                onChange={() => handleSelectOption(option)}
                className="radio-input"
              />
              <label htmlFor={`option-${index}`} className="option-label">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
