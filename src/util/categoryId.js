//get post by category ID
const categoryID = (catArray, catIdVal) => {
  var filteredVal = catArray.filter((catId) => {
    if (catId.category_id == catIdVal) {
      return catId;
    }
  });
  return filteredVal;
};
export default categoryID
