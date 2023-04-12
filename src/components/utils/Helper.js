export function filteredData(searchText, restaurants) {
  const filteredData = restaurants.filter((res) =>
    res?.data?.name
      ?.toLowerCase()
      ?.trim()
      ?.includes(searchText?.toLowerCase()?.trim())
  );
  return filteredData;
}
