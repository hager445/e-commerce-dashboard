export const extractTableHeader = (tableData, displayedColumns) => {
  const obj = tableData?.[0];
  if (!obj || !displayedColumns) return [];
  return displayedColumns.filter((col) => col.toLowerCase() in obj);
};
