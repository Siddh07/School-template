import { useEffect } from 'react';
import { CountUp } from 'countup.js';

const useCountUp = (startValues, endValues, duration) => {
  useEffect(() => {
    const countUpInstances = startValues.map((startVal, index) => {
      const countUp = new CountUp(index.toString(), endValues[index], {
        startVal: startVal,
        duration: duration,
      });

      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
      }

      return countUp;
    });

    return () => {
      countUpInstances.forEach((countUp) => countUp.reset());
    };
  }, [startValues, endValues, duration]);
};

export default useCountUp;
