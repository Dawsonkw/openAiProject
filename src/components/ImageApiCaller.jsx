import React, { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';

function ImageApiCaller() {
  const [prompt, setPrompt] = useState('');
  const [imageUrls, setImageUrls] = useState([]);

  const handleSubmit = async event => {
    event.preventDefault();
    const configuration = new Configuration({
      apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });
    setImageUrls(response.data.data.map(image => image.url));
  }

  return (
    <div className='p-5'>
        <form className='' onSubmit={handleSubmit}>
        <div className='flex'>
            <label htmlFor="prompt">Enter a Prompt for your image: </label>
            <input
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500"
                type="text"
                id="prompt"
                value={prompt}
                onChange={event => setPrompt(event.target.value)}
            />
            <button className="bg-teal-500 p-5 shadow-md text-white" type="submit">Generate images</button>
        </div>
        <div className='flex justify-around p-5'>
        {imageUrls.map(url => (
            <img src={url} alt="Generated image" key={url} />
        ))}
        </div>
        </form>
    </div>
  );
}

export default ImageApiCaller;
