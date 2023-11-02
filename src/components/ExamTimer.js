"use client"
import { useState, useEffect} from "react";
  const ExamTimer = ({ duration }) => {
    const [timer, setTimer] = useState(duration);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (timer <= 0) {
          
            alert('Time is up! Your exam has ended.');
        }
    }, [timer]);

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};
return(
  <>
  <div>{formatTime(timer)}</div>
  </>
)
  }

  export default ExamTimer;