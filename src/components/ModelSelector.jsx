

const ModelSelector = ({ models, selectedModel, onModelChange }) => {
    return (
      <select
        className="bg-input text-text rounded p-2"
        value={selectedModel}
        onChange={(e) => onModelChange(e.target.value)}
      >
        {Object.entries(models).map(([key, model]) => (
          <option key={key} value={key}>
            {model.name} ({model.developer})
          </option>
        ))}
      </select>
    );
  };
  
  export default ModelSelector;