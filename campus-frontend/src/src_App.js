import React, { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 在此处可与后端联调，比如:
    // const res = await fetch('http://localhost:3001/api/post-recruitment', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ title, description })
    // });

    console.log('Submitted Title:', title);
    console.log('Submitted Description:', description);
    alert('招新信息已提交 (仅示例，实际需与后端联动)');
  };

  return (
    <div className="container">
      <h1>校园工作室招新</h1>
      <form onSubmit={handleSubmit} className="formContainer">
        <div className="formGroup">
          <label>标题:</label>
          <input
            type="text"
            placeholder="例如：程序设计社团招新"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label>描述:</label>
          <textarea
            rows="5"
            placeholder="填写工作室活动介绍及要求"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">提交</button>
      </form>
    </div>
  );
}

export default App;