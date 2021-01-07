//function to return current date in a formated way
//e.g 2020-11-12
const todaysDate = () => {
  var date = new Date().toISOString().slice(0, 10);
  return date;
};

//function to convert ISODate  value e.g 2020-11-11T16:26:13.000000Z
//to date e.g 2020-11-11
const convertISODate = (dateString) => {
  var dd = new Date(dateString).toISOString().substring(0, 10);
  //date2
  //.split("T")[0];
  return dd; // "2020-11-12"
};

//COMPARING TWO DATES
const compareDate = (dateVal1, dateVal2) => {
  if (dateVal1.valueOf() === dateVal2.valueOf()) {
    return true;
  } else {
    return false;
  }
};

const getNewwsBydate = (catArray, catIdVal) => {
  var filteredVal = catArray.filter((catId) => {
    if (
      catId.category_id == catIdVal &&
      compareDate(todaysDate(), convertISODate(catId.created_at) == true)
    ) {
      return catId;
    }
  });
  return filteredVal;
};
export default getNewwsBydate
