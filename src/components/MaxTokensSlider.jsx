const MaxTokensSlider = ({ maxTokens, onMaxTokensChange, maxValue }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="max-tokens" className="mb-2 text-white font-semibold">
        Max Tokens: {maxTokens}
      </label>
      <input
        type="range"
        id="max-tokens"
        min="512"
        max={maxValue}
        step="512"
        value={maxTokens}
        onChange={(e) => onMaxTokensChange(Number(e.target.value))}
        className="w-full h-2 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

export default MaxTokensSlider;
