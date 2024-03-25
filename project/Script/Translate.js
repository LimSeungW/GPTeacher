const api_key = ""; // <- API KEY 입력
/** 메시지를 받아 한국어로 번역해주는 함수 (parm: str , return : 번역된 str(한국어 배열)) */
async function translateMessage(message) {
    const url = 'https://api-free.deepl.com/v2/translate';
    const params = {
        auth_key: api_key,
        text: message,
        source_lang: 'EN',
        target_lang: 'KO'
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: new URLSearchParams(params),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data.translations[0].text);
        return data.translations[0].text;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export { translateMessage };
