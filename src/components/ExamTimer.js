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
    
    useEffect(() => {
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible') {
          console.log('Tab is active');
          // Add actions to be performed when the tab is active
        } else {
          console.log('Tab is inactive');
          // Add actions to be performed when the tab is inactive
        }
      };
  
      document.addEventListener('visibilitychange', handleVisibilityChange);
  
      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }, []);

    useEffect(() => {
      const handleFullScreenChange = () => {
        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement) {
          console.log('Full screen mode is active');
         
        } else {
          console.log('Not in full screen mode');

        }
      };
  
      document.addEventListener('fullscreenchange', handleFullScreenChange);
      document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
      document.addEventListener('mozfullscreenchange', handleFullScreenChange);
  
      return () => {
        document.removeEventListener('fullscreenchange', handleFullScreenChange);
        document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
        document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
      };
    }, []);

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