import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const STORAGE_KEY = "THM_NOTEPAD"

const NotePad = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(localStorage.getItem(STORAGE_KEY) || '')
  }, [])

  const update = (newValue) => {
    localStorage.setItem(STORAGE_KEY, newValue)
    setValue(newValue)
  }

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={update}
      className="h-full text-white"
    />
  );
};

export default NotePad;
