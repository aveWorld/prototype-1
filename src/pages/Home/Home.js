import React, { useState } from 'react';
import { nanoid } from 'nanoid';

export default function Home() {
  const initialState = { name: '', description: '', fileName: '', fileBuffer: '' };
  const [blockData, setBlockData] = useState(initialState);
  const [fieldError, setFieldError] = useState(false);
  const [formData, setFormData] = useState([]);

  const handleText = (e, value) => {
    const currentValue = e.currentTarget.value;
    setBlockData((prev) => {
      prev[value] = currentValue;
      return { ...prev };
    });
  };

  const handleFileChange = async (e) => {
    try {
      const currentFile = e.currentTarget.files[0];
      const currentFileName = currentFile.name;
      const currentFileBuffer = await toBase64(currentFile);
      setBlockData((prev) => {
        prev.fileName = currentFileName;
        prev.fileBuffer = currentFileBuffer;
        return { ...prev };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addRow = () => {
    if (Object.values(blockData).indexOf('') === -1) {
      setFieldError(false);
      setBlockData(initialState);
      setFormData((prev) => [...prev, blockData]);
    } else {
      setFieldError(true);
    }
  };

  const removeRow = (index) => {
    setFormData((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const submitData = () => {
    if (formData.length > 0) {
      alert('submitted');
      console.log(formData);
    } else {
      alert('empty form');
    }
  };

  return (
    <main className="container main-page">
      <div className="form">
        {formData.map((item, index) => (
          <div className="form__item" key={nanoid()}>
            <span>name : {item.name}</span>
            <span>description : {item.description}</span>
            <span>file : {item.fileName}</span>
            <button type="button" onClick={() => removeRow(index)} className="form__submit-btn">
              delete
            </button>
          </div>
        ))}
        <div className="form__block">
          <label htmlFor="name" className="form__label">
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={(e) => handleText(e, 'name')}
            value={blockData.name}
            className="form__input"
          />
          {fieldError && !blockData.name.length && <span className="error-span">Required</span>}
          <label htmlFor="description" className="form__label">
            Description
          </label>
          <textarea
            name="description"
            rows="8"
            onChange={(e) => handleText(e, 'description')}
            value={blockData.description}
            className="form__input"
          />
          {fieldError && !blockData.description.length && (
            <span className="error-span">Required</span>
          )}
          <label htmlFor="file" className="form__label">
            File
          </label>
          <input type="file" name="file" onChange={handleFileChange} className="form__input" />
          {fieldError && !blockData.fileName.length && <span className="error-span">Required</span>}
          <button onClick={addRow} type="button" className="form__submit-btn">
            add row
          </button>
        </div>
        <button onClick={submitData} type="button" className="form__submit-btn submit__btn">
          Submit Data
        </button>
      </div>
    </main>
  );
}
