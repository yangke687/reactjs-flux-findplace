export const formatMonth = function(month){
  month = ''+month;
  return month.length === 1? '0'+month: month;
}