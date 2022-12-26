// import React from "react";
// import { Configuration, OpenAIApi } from "openai";
// import { useEffect, useState } from "react";

// const configuration = new Configuration({
//     organization: "org-idL50UqM4ERYZcMMCUKvyvye",
//     apiKey: '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',
// });
// const openai = new OpenAIApi(configuration);



/////////////// FIRST ITERATION //

// const ApiComponent = () => {
//   const [completion,  setCompletion] = useState(null)

//   useEffect(() => {
//     async function callApi(){
//       const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: "what is the atomic weight of hydrogen?",
//         max_tokens: 150,
//         temperature: 0,
//       });
//       setCompletion(response.data.choices[0].text)
//   }
//   callApi()
//   }, []);



//   return (    
//     <div>
//       <h1>The AI is asked a question and logs a response here.</h1>
//       <p>{completion}</p>
  
//     </div>
//   );
// };

// export default ApiComponent;

//////////////// SECOND ITERATION //

// //  API KEY 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

// import React from "react";
// import { Configuration, OpenAIApi } from "openai";
// import { useEffect, useState } from "react";

// const configuration = new Configuration({
//     organization: "org-idL50UqM4ERYZcMMCUKvyvye",
//     apiKey: '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',
// });
// const openai = new OpenAIApi(configuration);

// const ApiComponent = ({ prompt, maxTokens, temperature }) => {
//   const [completion, setCompletion] = useState(null)

//   useEffect(() => {
//     async function callApi() {
//       const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: "How is openAi so good?",
//         max_tokens: 150,  
//         temperature: 0,
//       });
//       setCompletion(response.data.choices[0].text);
//     }
//     callApi();
//   }, [prompt, maxTokens, temperature]);

//   return (    
//     <div>
//       <span>
//       <h1 className="text-teal-800 text-2xl">The AI is asked a question and logs a response here.</h1>
//       <p className="p-5 flex justify-center">{completion}</p>
//       </span>
//     </div>
//   );
// };

// export default ApiComponent;


/////////////////// Third Iteration //
import React from "react";
import { Configuration, OpenAIApi } from "openai";
import { useEffect, useState } from "react";

const configuration = new Configuration({
    organization: "org-idL50UqM4ERYZcMMCUKvyvye",
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const ApiComponent = () => {
  const [completion, setCompletion] = useState(null)
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    async function callApi() {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: inputValue,
        max_tokens: 1000,  
        temperature: 0,
      });
      setCompletion(response.data.choices[0].text);
    }
    callApi();
  }

  return (    
    <div className="p-7">
      <form className="flex justify-center"  onSubmit={handleSubmit}>
        <input className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        <button className="bg-teal-500 p-5 shadow-md text-white" type="submit">Submit</button>
      </form>
      <span>
      <h1 className="text-teal-800 text-2xl">The AI is asked a question and logs a response here.</h1>
      <p className="p-10 flex justify-center">{completion}</p>
      </span>
    </div>
  );
};

export default ApiComponent;