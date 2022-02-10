export const chunk = ( arr, size)=>{
  let i,j,data=[],chunk = size;
  for (i = 0, j = arr.length; i < j; i += chunk) {
    data.push(arr.slice(i, i + chunk));
  }
  return data;
} 