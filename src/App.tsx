import React, { useState, ChangeEvent, FormEvent } from 'react';
import './App.css';
 
const App: React.FC = () => {
  const [field1, setField1] = useState<string>('');
  const [field2, setField2] = useState<string>('');
 
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Field 1: ${field1}, Field 2: ${field2}`);
  };
 
  const handleField1Change = (event: ChangeEvent<HTMLInputElement>) => {
    setField1(event.target.value);
  };
 
  const handleField2Change = (event: ChangeEvent<HTMLInputElement>) => {
    setField2(event.target.value);
  };
 
  return (
<form onSubmit={handleSubmit}>
<label>
        Campo 1:
<input id='input1' type="text" value={field1} onChange={handleField1Change} />
</label>
<label>
        Campo 2:
<input id='input2' type="text" value={field2} onChange={handleField2Change} />
</label>
<button id='button1' type="submit">Enviar</button>
</form>
  );
};
 
export default App;
