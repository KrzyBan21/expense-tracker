const useBudgetToChart = (type, budget) => {
  const arrCopy = [];

  budget.forEach((el) => {
    const newObj = { ...el };
    arrCopy.push(newObj);
  });

  const arrOfType = arrCopy.filter((el) => el.type === type);

  const noDuplicatesArr = arrOfType.filter(
    (v, i, a) => a.findIndex((t) => t.category === v.category) === i
  );

  noDuplicatesArr.forEach((el) => {
    const amount = arrOfType.reduce((prev, next) => {
      if (el.category === next.category) {
        return prev + next.amount;
      } else {
        return prev;
      }
    }, 0);
    el.amount = amount;
  });

  const labels = [];
  const values = [];
  const colors = [];

  noDuplicatesArr.forEach((el) => {
    labels.push(el.category);
    values.push(el.amount);
    colors.push(el.color);
  });

  return { labels, values, colors };
};

export default useBudgetToChart;
