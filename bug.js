```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render, including initial render.
    console.log('Effect running:', count);
    return () => {
      // Cleanup function (optional)
      console.log('Cleanup function running');
    };
  }, [count]); // The dependency array is crucial here.  Missing it is a common error.

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```