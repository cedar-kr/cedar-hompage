import { useEffect, useRef } from "react";

export const chunk = ( arr, size)=>{
  let i,j,data=[],chunk = size;
  for (i = 0, j = arr.length; i < j; i += chunk) {
    data.push(arr.slice(i, i + chunk));
  }
  return data;
} 

export const touchStart = (e) => {
  return { 
    x: e.changedTouches[0].pageX, 
    y: e.changedTouches[0].pageY
  }
}

export const touchEnd = (e, touch, prev, next) => {
  const distanceX = Math.abs(touch.x - e.changedTouches[0].pageX);
  const distanceY = Math.abs(touch.y - e.changedTouches[0].pageY);
  
  if((distanceY + distanceX > 30) && (distanceX > distanceY)) {
    if(touch.x - e.changedTouches[0].pageX < 0 ) {
      prev();
    }
    else if(touch.x - e.changedTouches[0].pageX > 0 ) {
      next();
    }
  }
}

export const useInterval = (callback, delay)=>{
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
