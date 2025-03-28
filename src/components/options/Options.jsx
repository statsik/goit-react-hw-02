const Options = ({ count, setCount, totalFeedback }) => {
    const updateFeedback = feedbackType => {
        setCount({
        ...count,
        [feedbackType]: count[feedbackType] + 1,
        });
    }
    const resetFeedback = () => {
    setCount({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
    return (
        <div className="buttons">
            <button onClick={() => updateFeedback('good')}>Good</button>
            <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button onClick={() => updateFeedback('bad')}>Bad</button>
            <button onClick={() => setCount({ good: 0, neutral: 0, bad: 0 })}>Reset</button>
        </div>
    )
}
export default Options;