const api_key = ""; // <- API KEY 입력

/** GPT로부터 답변을 가져오는 함수 (parm: str , return : str(답변)) */
async function Get_GPT(value) {
    const messages = [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: value + "\n 영어로만 대답해."},
    ];
    const data = {
        model: 'gpt-3.5-turbo',
        temperature: 0.5,
        n: 1,
        messages: messages,
    };

    try {
    
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': "Bearer " + api_key,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        const content = responseData.choices[0].message.content; //메인 데이터 파싱.
        return content;
    } catch (error) {
        console.error("failed", error);
        throw error;
    }   
}

export{ Get_GPT };