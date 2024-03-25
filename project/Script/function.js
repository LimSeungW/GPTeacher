import { Get_GPT } from "./chatbot.js";
import { translateMessage }from "./Translate.js";

const main_container = document.getElementById('ID_chat_C'); //메인 컨테이너 
var number = 1; //생성된 채팅들의 ID값 부여 넘버 
var lauguage = new Array(); //채팅넘버들의 현재 언어에 대한 정보저장 
lauguage.push(0); //첫번째 채팅의 기본값은 영어이므로 0.
//input event listener
document.getElementById('ID_myInput').addEventListener('keyup',  function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        console.log("enter눌림");
        create_myChat(document.getElementById('ID_myInput').value);
    }
});
//speak버튼 이벤트리스너 
document.getElementById('ID_Speak').addEventListener('click', function() {
    Speak_Sentence("What Can I help you?");
});
//translate 버튼 이벤트리스너 
document.getElementById('ID_Translate_0').addEventListener('click', async function(event) {
    var index = event.target.id;
    index = index[index.length - 1];
    index = parseInt(index);
    if(!lauguage[index])  //영어 ->한국
    {
        var korean_answer = await translateMessage("What Can I help you?")
        console.log("translate : " + korean_answer);
        document.getElementById('ID_Chat_0').innerText = korean_answer;
        lauguage[index] = 1;
    }
    else{ //한국 -> 영어
        document.getElementById('ID_Chat_0').innerText = "What Can I help you?";
        lauguage[index] = 0;
    }
   
});
/**입력값을 내 채팅내역으로 만드는 함수 (parm: value->str) */
async function create_myChat(value){
    console.log("create_my_Chat : 가져온값 -> " + value);
    lauguage.push(0);
    const new_row_container = document.createElement('div');
    new_row_container.setAttribute("class","chat_row_end");

    //채팅내역
    const new_chat = document.createElement('div');
    new_chat.setAttribute("class","chat_form my_chat");
    new_chat.setAttribute("id" , `ID_Chat_${number}`);
    new_chat.innerText = value;
    
    //스피커 번역 버튼

    const new_speak = document.createElement('img');
    new_speak.setAttribute("id",'ID_Speak');
    new_speak.setAttribute("width","20");
    new_speak.setAttribute("height","20");
    new_speak.setAttribute("src","../Icons/megaphone.svg")
    new_speak.addEventListener('click',function(){
        Speak_Sentence(value);
    });
    //번역버튼
    const new_trans = document.createElement('img');
    new_trans.setAttribute("id",`ID_Translate_${number}`);
    new_trans.setAttribute("width","20");
    new_trans.setAttribute("height","20");
    new_trans.setAttribute("src","../Icons/translate.svg")
    //
    new_trans.addEventListener('click', async function(event){
        var index = event.target.id;
        index = index[index.length - 1];
        index = parseInt(index);
        if(!lauguage[index])  //영어 ->한국
        {
            var answer = await translateMessage(value);
            console.log("translate : " + answer);
            new_chat.innerText = answer;
            lauguage[index] = 1;
        }
        else{ //한국 -> 영어
            new_chat.innerText = value;
            lauguage[index] = 0;
        }
    })
    new_row_container.appendChild(new_chat);
    new_row_container.appendChild(new_speak);
    new_row_container.appendChild(new_trans);
    main_container.appendChild(new_row_container);
    number += 1;

    document.getElementById('ID_myInput').remove(); //input 요소 삭제 후 재생성 (입력창을 맨아래로 )

    //챗봇호출 필요
    var answer = await Call_GPT(value);
    console.log("answer: " + answer);
    create_chatbotInput(answer);

    //input 새로생성
    create_myInput(); 
}

/** input요소를 재생성하는 함수 */
function create_myInput(){
    const new_input = document.createElement('input');
    new_input.setAttribute("class","chat_form my_input");
    new_input.setAttribute("type","text");
    new_input.setAttribute("id","ID_myInput");
    new_input.setAttribute("placeholder","Type your message")
    
    main_container.appendChild(new_input); 

    //이벤트리스너를 새로등록.
    new_input.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            console.log("enter눌림");
            create_myChat(document.getElementById('ID_myInput').value);
        }
    });
    new_input.focus(); //마우스 커서를 옮김.
}

/**챗봇을 호출하는 함수. (parm: str , return : str (chatbot response)) */
async function Call_GPT(value){
    try {
        const content = await Get_GPT(value);
        console.log("GPT response:", content);
        return content;
    } catch (error) {
        console.error("Error in GPT response:", error);
    }
    
}
/**챗봇의 답변을 메시지로 만들어 화면에 나타내는 함수 (parm: str) */
function create_chatbotInput(answer){
    lauguage.push(0);
    //컨테이너
    const new_response = document.createElement('div');
    new_response.setAttribute("class","chat_row");
    //이미지
    const new_img = document.createElement('img');
    new_img.setAttribute("src","../Icons/Logo.png");
    new_img.setAttribute("width","30");
    new_img.setAttribute("height","30");
    //채팅
    const new_text = document.createElement('div');
    new_text.setAttribute("class","chat_form your_chat");
    new_text.setAttribute("id", `ID_Chat_${number}`);
    new_text.innerText= answer;

    //스피커   
    const new_speak = document.createElement('img');
    new_speak.setAttribute("id","ID_Speak");
    new_speak.setAttribute("width","20");
    new_speak.setAttribute("height","20");
    new_speak.setAttribute("src","../Icons/megaphone.svg")
    new_speak.addEventListener('click',function(){
        Speak_Sentence(answer);
    });
    //번역
    const new_trans = document.createElement('img');
    new_trans.setAttribute("id",`ID_Translate_${number}`);
    new_trans.setAttribute("width","20");
    new_trans.setAttribute("height","20");
    new_trans.setAttribute("src","../Icons/translate.svg")
    new_trans.addEventListener('click', async function(event){
        // var result = await translateMessage(answer);
        // console.log("translate : " + result);
        // new_text.innerText = result;

        var index = event.target.id;
        index = index[index.length - 1];
        index = parseInt(index);
        if(!lauguage[index])  //영어 ->한국
        {
            var result = await translateMessage(answer);
            console.log("translate : " + result);
            new_text.innerText = result;
            lauguage[index] = 1;
        }
        else{ //한국 -> 영어
            new_text.innerText = answer;
            lauguage[index] = 0;
        }
    })
    //화면에 등록
    new_response.appendChild(new_img);
    new_response.appendChild(new_text);
    new_response.appendChild(new_speak);
    new_response.appendChild(new_trans);

    main_container.appendChild(new_response);
    number+=1;
}

/** str을 매개변수로 받아 음성으로 출력해주는 함수 (parm: str) */
function Speak_Sentence(value){
    const sentence = new SpeechSynthesisUtterance(value);
    sentence.lang = 'en-US'; 
    sentence.volume = 1; // 음성 볼륨 (0.0 ~ 1.0)
    sentence.rate = 1; // 음성 재생 속도 (0.1 ~ 10.0)
    sentence.pitch = 1; // 음성 피치 (0.0 ~ 2.0)

    window.speechSynthesis.speak(sentence);
}
