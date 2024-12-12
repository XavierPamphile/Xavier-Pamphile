import React from 'react';

// Intentionally add some style issues that ESLint and Prettier should catch
const TestComponent = (props: any) => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: '20px', margin: '10px' }}>
      <h2>Test Component</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default TestComponent;
