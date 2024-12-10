
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const QuizPage = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [userId, setUserId] = useState('67571162354d8baf9cec174e'); // Example userId, should be fetched or passed from signup
//   const navigate = useNavigate();

//   // Fetch questions on component mount
//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:5000/api/quiz/questions');
//         setQuestions(response.data);
//       } catch (err) {
//         console.error('Error fetching questions', err);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };

//   const handleNextQuestion = async () => {
//     if (selectedOption === null) {
//       alert('Please select an option before moving to the next question');
//       return;
//     }

//     // Get the current question
//     const currentQuestion = questions[currentQuestionIndex];

//     // Prepare data to send to backend
//     const responseData = {
//       questionId: currentQuestion._id, // Use the questionId from the current question
//       selectedOption: selectedOption,
//       userId: userId, // The user's ID
//     };

//     // Send the response to the backend
//     try {
//       await axios.post('http://127.0.0.1:5000/api/quiz/responses', responseData);
//       console.log('Response submitted successfully');
//     } catch (err) {
//       console.error('Error submitting response', err);
//     }

//     // Proceed to the next question
//     setCurrentQuestionIndex((prev) => prev + 1);
//     setSelectedOption(null); // Reset selected option
//   };

//   const handleSubmitQuiz = async () => {
//     if (selectedOption === null) {
//       alert('Please select an option before submitting the quiz');
//       return;
//     }

//     // Submit the last question response
//     const currentQuestion = questions[currentQuestionIndex];
//     const responseData = {
//       questionId: currentQuestion._id,
//       selectedOption: selectedOption,
//       userId: userId,
//     };

//     try {
//       await axios.post('http://127.0.0.1:5000/api/quiz/responses', responseData);
//       console.log('Final response submitted successfully');
//     } catch (err) {
//       console.error('Error submitting final response', err);
//     }

//     // Redirect to the results page
//     navigate('/view-results');
//   };

//   if (questions.length === 0) return <p>Loading questions...</p>;

//   const currentQuestion = questions[currentQuestionIndex];
//   const isLastQuestion = currentQuestionIndex === questions.length - 1;

//   return (
//     <div>
//       <h2>Question {currentQuestion.number}</h2>
//       <p>{currentQuestion.text}</p>
//       <div>
//         {currentQuestion.options.map((option, index) => (
//           <button
//             key={index}
//             onClick={() => handleOptionSelect(option)}
//             style={{
//               backgroundColor: selectedOption === option ? 'green' : 'lightgray',
//             }}
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//       {!isLastQuestion ? (
//         <button onClick={handleNextQuestion}>Next</button>
//       ) : (
//         <button onClick={handleSubmitQuiz}>Submit Quiz</button>
//       )}
//     </div>
//   );
// };

// export default QuizPage;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './QuizPage.css'; // Import the CSS file for styling

// const QuizPage = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [userId, setUserId] = useState('67571162354d8baf9cec174e'); // Example userId
//   const navigate = useNavigate();

//   // Fetch questions on component mount
//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:5000/api/quiz/questions');
//         setQuestions(response.data);
//       } catch (err) {
//         console.error('Error fetching questions', err);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };

//   const handleNextQuestion = async () => {
//     if (selectedOption === null) {
//       alert('Please select an option before moving to the next question');
//       return;
//     }

//     const currentQuestion = questions[currentQuestionIndex];
//     const responseData = {
//       questionId: currentQuestion._id,
//       selectedOption: selectedOption,
//       userId: userId,
//     };

//     try {
//       await axios.post('http://127.0.0.1:5000/api/quiz/responses', responseData);
//       console.log('Response submitted successfully');
//     } catch (err) {
//       console.error('Error submitting response', err);
//     }

//     setCurrentQuestionIndex((prev) => prev + 1);
//     setSelectedOption(null);
//   };

//   const handleSubmitQuiz = async () => {
//     if (selectedOption === null) {
//       alert('Please select an option before submitting the quiz');
//       return;
//     }

//     const currentQuestion = questions[currentQuestionIndex];
//     const responseData = {
//       questionId: currentQuestion._id,
//       selectedOption: selectedOption,
//       userId: userId,
//     };

//     try {
//       await axios.post('http://127.0.0.1:5000/api/quiz/responses', responseData);
//       console.log('Final response submitted successfully');
//     } catch (err) {
//       console.error('Error submitting final response', err);
//     }

//     navigate('/view-results');
//   };

//   if (questions.length === 0) return <p>Loading questions...</p>;

//   const currentQuestion = questions[currentQuestionIndex];
//   const isLastQuestion = currentQuestionIndex === questions.length - 1;

//   return (
//     <div className="quiz-container">
//       <div className="progress-bar">
//         <div
//           className="progress"
//           style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
//         ></div>
//       </div>
//       <div className="question-card">
//         <h2 className="question-number">Question {currentQuestion.number}</h2>
//         <p className="question-text">{currentQuestion.text}</p>
//         <div className="options-container">
//           {currentQuestion.options.map((option, index) => (
//             <div
//               key={index}
//               className={`option-card ${selectedOption === option ? 'selected' : ''}`}
//               onClick={() => handleOptionSelect(option)}
//             >
//               <input
//                 type="radio"
//                 name="option"
//                 id={`option-${index}`}
//                 value={option}
//                 checked={selectedOption === option}
//                 onChange={() => handleOptionSelect(option)}
//                 className="radio-input"
//               />
//               <label htmlFor={`option-${index}`} className="option-label">
//                 {option}
//               </label>
//             </div>
//           ))}
//         </div>
//         <div className="quiz-buttons">
//           {!isLastQuestion ? (
//             <button className="next-button" onClick={handleNextQuestion}>
//               Next
//             </button>
//           ) : (
//             <button className="submit-button" onClick={handleSubmitQuiz}>
//               Submit Quiz
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuizPage;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast'; // Importing react-hot-toast
import { Toaster } from 'react-hot-toast'; // Import Toaster for displaying toasts
import './QuizPage.css'; // Import the CSS file for styling

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userId, setUserId] = useState('67571162354d8baf9cec174e'); // Example userId
  const navigate = useNavigate();

  // Fetch questions on component mount
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/quiz/questions');
        setQuestions(response.data);
      } catch (err) {
        console.error('Error fetching questions', err);
      }
    };

    fetchQuestions();
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = async () => {
    if (selectedOption === null) {
      alert('Please select an option before moving to the next question');
      return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const responseData = {
      questionId: currentQuestion._id,
      selectedOption: selectedOption,
      userId: userId,
    };

    try {
      await axios.post('http://127.0.0.1:5000/api/quiz/responses', responseData);
      console.log('Response submitted successfully');
    } catch (err) {
      console.error('Error submitting response', err);
    }

    setCurrentQuestionIndex((prev) => prev + 1);
    setSelectedOption(null);
  };

  const handleSubmitQuiz = async () => {
    if (selectedOption === null) {
      alert('Please select an option before submitting the quiz');
      return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const responseData = {
      questionId: currentQuestion._id,
      selectedOption: selectedOption,
      userId: userId,
    };

    try {
      await axios.post('http://127.0.0.1:5000/api/quiz/responses', responseData);
      console.log('Final response submitted successfully');
      
      // First toast message (success message)
      toast.success('Quiz Completed Successfully!', {
        position: 'top-center',
        duration: 3000, // 3 seconds duration
        onClose: () => {
          // Trigger second toast after first toast closes
          toast('Here are some other thoughts you may consider...', {
            position: 'top-center',
            duration: 4000, // 4 seconds duration
          });
        }
      });

      // Redirect to the results page after the success toast
      setTimeout(() => {
        navigate('/view-results');
      }, 3000); // Delay the redirect by the same 3 seconds

    } catch (err) {
      console.error('Error submitting final response', err);
      toast.error('Failed to submit the quiz. Please try again!', {
        position: 'top-center',
        duration: 3000, // 3 seconds duration
      });
    }
  };

  if (questions.length === 0) return <p>Loading questions...</p>;

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div className="quiz-container">
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>
      <div className="question-card">
        <h2 className="question-number">Question {currentQuestion.number}</h2>
        <p className="question-text">{currentQuestion.text}</p>
        <div className="options-container">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className={`option-card ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(option)}
            >
              <input
                type="radio"
                name="option"
                id={`option-${index}`}
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionSelect(option)}
                className="radio-input"
              />
              <label htmlFor={`option-${index}`} className="option-label">
                {option}
              </label>
            </div>
          ))}
        </div>
        <div className="quiz-buttons">
          {!isLastQuestion ? (
            <button className="next-button" onClick={handleNextQuestion}>
              Next
            </button>
          ) : (
            <button className="submit-button" onClick={handleSubmitQuiz}>
              Submit Quiz
            </button>
          )}
        </div>
      </div>

      {/* ToastContainer for react-hot-toast */}
      <Toaster />
    </div>
  );
};

export default QuizPage;
