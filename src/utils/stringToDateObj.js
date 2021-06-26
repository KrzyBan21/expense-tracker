const stringToDateObj = (dateString) => {
  //dateString format is 'YYYY-MM-DD'
  const splitDateStr = dateString.split("-");

  return {
    year: splitDateStr[0],
    month: splitDateStr[1],
    day: splitDateStr[2],
  };
};

export default stringToDateObj;
