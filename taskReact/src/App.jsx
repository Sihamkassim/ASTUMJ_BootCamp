import { useState } from "react";
import ColorButton from "./components/ColorButton.jsx";
import ColorPreview from "./components/ColorPreview.jsx";

const COLORS = ["red", "blue", "green", "orange", "purple", "teal"];

function App() {
  const [selectedColor, setSelectedColor] = useState("");
  function resetSelection() {
    setSelectedColor("");
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">
        {" "}
        Color Palette Picker
      </h1>
      <div className="flex justify-center gap-4 mb-6">
        {COLORS.map((ColorMap) => (
          <ColorButton
            key={ColorMap}
            colorName={ColorMap}
            onClick={setSelectedColor}
          />
        ))}
      </div>
      <div className="flex justify-center mb-6">
        <ColorPreview colorName={selectedColor} />
      </div>
      <div className="flex justify-center">
        <button
          onClick={resetSelection}
          disabled={!selectedColor}
          className="bg-yellow-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
