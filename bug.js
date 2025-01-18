```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the state is updated in useEffect without a condition
    setCount(count + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```