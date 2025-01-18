```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Fixed: Added a condition to prevent infinite loop
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```