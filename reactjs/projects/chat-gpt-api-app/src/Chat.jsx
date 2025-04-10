import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const apiUrl = 'https://api.openai.com/v1/chat/completions'; // Update with the correct API endpoint
      const apiKey = ''; // Replace with your actual API key
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      };

      const requestBody = {
        messages: [{ role: 'user', content: input }],
      };

      const { data } = await axios.post(apiUrl, requestBody, { headers });

      setResponse(data.choices[0].message.content);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className='w-1/2 bg-amber-200 p-16 mt-10'>
    <h1>ChatGPT React App</h1>
    <hr />
      <div className='p-5'>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className='p-3 bg-amber-50 w-full' />
        <button onClick={sendMessage} className='w-35 p-3 mt-5 bg-black text-white'>Send</button>
      </div>
      <div>
        <p className='text-black text-2xl'>{response}</p>
      </div>
    </div>
  );
};

export default Chat;