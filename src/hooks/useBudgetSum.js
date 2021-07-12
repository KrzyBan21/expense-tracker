import { useState, useEffect } from "react";

const useBudgetSum = (type, budget) => {
  const arrOfType = budget.filter((el) => el.type === type);

  const [sum, setSum] = useState(0);

  //   const sum = arrOfType.reduce((prev, next) => prev + next.amount, 0);

  useEffect(() => {
    if (budget.length > 0) {
      const s = arrOfType.reduce((prev, next) => prev + next.amount, 0);
      console.log(s);
      setSum(s);
    }

    return () => {
        setSum(0)
    }

  }, [arrOfType, budget.length]);

  return sum;
};

export default useBudgetSum;
