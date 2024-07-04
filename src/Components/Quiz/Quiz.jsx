import { questions } from "../Quiz/QuizData";
import { React, useEffect, useState } from 'react';
import NavBar from '../Navbar/NavBar';
import quiet from '../panda/quiet.png';
import shocked from '../panda/shocked.png';
import sleepy from '../panda/sleepy.png';
import love from '../panda/love.png';
import perfect from '../panda/perfect.png';

import Signup from '../User/Signup';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const style = {
  fail: `text-red-400`,
  success: `text-blue-400`,
};

export const Quiz = () => {
  const navigate = useNavigate()
  const [score, setScore] = useState(0);
  const [showResult, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const nextpage=()=>{

    navigate('/feedback')
  }
  const handleReTake = () => {
    setScore(0);
    setCurrentQuestion(0);
    setIsLoading(true);
    setShowResults(false);
    setMinute(0);
    setSecond(0);
  };

  useEffect(() => {
    if (!isLoading) {
      const secondInterval = setInterval(() => {
        setSecond((prevSecond) => (prevSecond === 59 ? 0 : prevSecond + 1));
      }, 1000);

      const minuteInterval = setInterval(() => {
        setMinute((prevMinute) => prevMinute + 1);
      }, 60000);

      return () => {
        clearInterval(secondInterval);
        clearInterval(minuteInterval);
      };
    }
  }, [isLoading]);

  useEffect(() => {
    if (minute === 5) {
      setShowResults(true);
    }
  }, [minute]);

 

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getImageBasedOnScore = () => {
    if (score === 0) return shocked;
    if (score < 5) return sleepy;
    if(score<7)
    if (score < 10) return love;
    return perfect;
  };

  return (
    <section className='container mx-auto bg-[#39383a] text-[#39383a] h-[100vh] lg:bg-white overflow-hidden'>
      <div className='hidden lg:block mx-32 mt-10'>
        <NavBar />
        <div className=''>
          <div className='flex relative w-full my-24'>
            <div className='w-[50%]'>
              <img src={showResult ? getImageBasedOnScore() : quiet} className='h-[600px]' alt="Quiz result" />
              <div className='absolute -top-20 left-[380px]'>
              </div>
            </div>
            <div className='flex items-center w-[50%]'>
              <div className=' w-[100%]'>
                <div className="">
                  <h3 className="text-xl font-bold uppercase mb-2">The Quiz</h3>
                </div>
                {showResult ? (
                  <>
                    <div className="">
                      <div className="border-4 w-[60%] border-[#fbbb01] rounded-md">
                        <h1 className="p-2">
                          Total score:
                          <span className={`p-4 ${score < questions.length / 2 ? style.fail : style.success}`}>
                            {score}
                          </span>
                          /{questions.length}
                        </h1>
                      </div>
                      <div className="space-x-7">
                        <button
                          onClick={nextpage}
                          className="px-10 py-2  mt-5 bg-[#fbbb01]  rounded text-white"
                        >
                          Leave
                        </button>
                        <button
                          onClick={handleReTake}
                          className="px-10 py-2 mt-5 bg-[#fbbb01]  rounded text-white"
                        >
                          Retake
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="border-2 border-[#fbbb01] rounded-md p-8">
                      <div className="flex justify-between">
                        <h4 className="text-base font-semibold">
                          {currentQuestion + 1}. {questions[currentQuestion].question}
                        </h4>
                        <h3 className="text-base font-semibold tracking-wide">
                          {currentQuestion + 1} of {questions.length}
                        </h3>
                      </div>
                      <div className="flex flex-col">
                        {questions[currentQuestion].options.map((option, index) => (
                          <div
                            key={index}
                            onClick={() => handleAnswer(option.isCorrect)}
                            className="border-2 cursor-pointer rounded-lg border-[#fbbb01] p-4 mt-8 hover:bg-[#fbbb01] hover:text-white"
                          >
                            {option.answer}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:hidden relative flex items-center justify-center h-[94vh]'>
         
      <div className='flex flex-col justify-between h-full'>
        <div className='flex flex-col items-center justify-center flex-grow'>
          <div className='flex  justify-center'>
          <img src={showResult ? getImageBasedOnScore() : quiet} className='h-[250px]' alt="Quiz result" />

          </div>
          <div className="w-full flex flex-col sm:justify-center  sm:pt-0">
  <div className="w-full sm:max-w-md mx-auto">
  <div className='flex items-center  text-white'>
              <div className=' w-[100%]'>
                <div className="text-center">
                  <h3 className="text-xl font-bold uppercase mb-5 text-white">The Quiz</h3>
                </div>
                {showResult ? (
                  <>
                    <div className="  flex-col  w-80 justify-center mx-auto py-16 h-[480px] ">
                      <div className="border-4 py-2 p-5 border-[#fbbb01] rounded-md">
                        <h1 className="p-2 text-xl font-semibold text-white ">
                          Total score:
                          <span className={`p-4 ${score < questions.length / 2 ? style.fail : style.success}`}>
                            {score}
                          </span>
                          /{questions.length}
                        </h1>
                      </div>
                    </div>
                      <div className="  ">
                        <button
                          onClick={nextpage}
                          className="px-10 py-2 mt-5 bg-[#fbbb01] w-96 rounded text-white"
                        >
                          Leave
                        </button>
                        <button
                          onClick={handleReTake}
                          className="px-10 py-2 mt-5 bg-[#fbbb01] w-96 rounded text-white"
                        >
                          Retake
                        </button>
                      </div>
                  </>
                ) : (
                  <>
                    <div className="border-2 border-[#fbbb01] rounded-md w-96 p-5">
                      <div className="flex justify-between">
                        <h4 className="text-base font-semibold">
                          {currentQuestion + 1}. {questions[currentQuestion].question}
                        </h4>
                        <h3 className="text-base font-semibold tracking-wide">
                          {currentQuestion + 1} of {questions.length}
                        </h3>
                      </div>
                      <div className="flex flex-col">
                        {questions[currentQuestion].options.map((option, index) => (
                          <div
                            key={index}
                            onClick={() => handleAnswer(option.isCorrect)}
                            className="border-2 cursor-pointer rounded-lg border-[#fbbb01] p-4 mt-8 hover:bg-[#fbbb01] hover:text-white"
                          >
                            {option.answer}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
  
  </div>
</div>
          
         
        </div>
     
      </div>
    </div>
    </section>
  );
};
