export const filterData = (searchTxt, resList) => {
  return resList.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchTxt.toLowerCase())
  );
};
