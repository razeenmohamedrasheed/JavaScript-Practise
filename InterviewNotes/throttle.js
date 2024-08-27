
function throttle(func, delay) {
    let lastCall = 0;
    
    return function(...args) {
      const now = new Date().getTime();
      
      if (now - lastCall < delay) {
        return;
      }
      
      lastCall = now;
      return func(...args);
    };
  }
  
  // Example usage
  function onResize() {
    console.log('Window resized:', new Date().toLocaleTimeString());
  }
  
  // Throttled resize event listener
  window.addEventListener('resize', throttle(onResize, 2000));
  