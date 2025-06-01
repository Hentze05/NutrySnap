import { useState } from "react";
import './App.css';

function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-100 to-white p-6 flex flex-col items-center justify-start">
      <h1 className="text-4xl font-bold text-green-700 mb-2">NutriSnap</h1>
      <p className="text-gray-700 mb-6 text-center max-w-md">
        Toma una foto de tu comida y obtén instantáneamente su información nutricional.
      </p>

      <label className="cursor-pointer bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
        📷 Subir Foto
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </label>

      {preview && (
        <div className="mt-6 w-full max-w-sm bg-white rounded-xl shadow p-4">
          <img src={preview} alt="Preview" className="rounded-xl w-full h-auto" />
          <div className="mt-4 text-center text-sm text-gray-600">
            *Aquí se mostrará la información nutricional*
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
