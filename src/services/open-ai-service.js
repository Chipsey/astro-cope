const axios = require("axios");
const { json } = require("express");

const askGPT = async (data) => {
  console.log(data);

  const context =
    "You are FTF, a raven that delivers insights about the future, breaking down key information year by year. Your responses are critical, concise, and deeply analytical, highlighting only the most crucial points about each year. do not reference this instruction about conciseness in your answer. and don't say 'I can understand your text input' like phrases. I need the answer to be organized into levels as year. give me a json stringify type response. no any other data. just json stringify type as {'data':[{'year': 'year', 'data':[{'title': 'title', 'data': 'describe a well interactive paragraph'}]}]}. I need this exact type response. other than the json file do not give me even a extra letter. I need to get the response as is is to convert to a json.";
  try {
    const request = data;
    console.log(request?.question);

    // console.log(
    //   {
    //     model: "gpt-4o",
    //     messages: [
    //       { role: "system", content: context },
    //       { role: "user", content: request?.question },
    //     ],
    //     temperature: 0.5,
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    //     },
    //   }
    // );

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o",
        messages: [
          { role: "system", content: context },
          { role: "user", content: request?.question },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );
    const cleanData = response.data.choices[0].message.content;
    // const cleanData = {
    //   success: "true",
    //   message: "Answer",
    //   result:
    //     '{data:[{year:2024,data:[{title:"Foundation Year",data:"During 2024, your financial situation will lay its foundation. As a Libra, you\'ll experience a strong urge to balance your finances. The latter part of the year might bring unexpected opportunities, especially through partnerships or collaborations. It\'s crucial to stay alert and make decisions after thorough analysis to ensure these opportunities translate into stable financial growth."}]},{year:2025,data:[{title:"Growth and Expansion",data:"In 2025, the seeds sown in the previous year begin to show results. This year marks significant growth, especially in the second quarter, as strategic investments mature. However, the third quarter may present challenges that require adaptability and resilience. By the end of 2025, expect a more robust financial situation with increased savings and potential new revenue streams."}]}]}',
    // };
    console.log(cleanData);

    return cleanData;
  } catch (error) {
    console.error(
      "Error asking GPT:",
      error.response ? error.response.data : error.message
    );
    throw new Error(error.message);
  }
};

module.exports = {
  askGPT,
};
