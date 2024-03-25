# GPTeacher
이 프로그램은 Chat GPT을 기반으로 한 영어 회화 웹사이트 프로젝트입니다. 
채팅형식으로 GPT와 대화를 주고받는 방법으로 프로젝트를 구상하였습니다.

This program is an English learning website project based on Chat GPT.
The project was conceived as a way to communicate with GPT in a chat format.

[![Video Label](http://img.youtube.com/vi/7AQS-S-H2bM/0.jpg)](https://youtu.be/7AQS-S-H2bM)
*** 
### * 프로젝트 계획 동기(Motivation for project planning)
나날이 발전하는 AI기술을 섞어서 어떤프로젝트를 진행할수있을까 고민하던 도중, 영어자격증 시험준비에 어려움을 겪는 친구에게서 이 둘을 조합해서 프로젝트를 진행하면 
어떨까? 라는 아이디어가 떠올라 프로젝트를 진행하게 되었습니다.

While I was wondering what kind of project I could do by combining the ever-advancing AI technology, I was asked by a friend who was having difficulty preparing for the English certification test, why not combine the two and proceed with a project? The idea came to mind and we proceeded with the project.

*** 
### * 프로젝트의 목적(Purpose of the project)
이 프로젝트는 영어능력 향상을 위한 학습목표로 제작된 웹사이트입니다.
사용자의 입력에 따라 GPT의 답변을 채팅형식으로 받게되며, 내가 보낸 대화 및 GPT가 답변한 내용 모두 스피커, 번역기능이 제공됩니다.
스피커는 대화내용을 말해줌으로써 영문의 발음을 알수있으며, 번역기능을 통해 문맥의 이해 및 단어 해석 능력 향상을 기대할 수 있습니다. 

This project is a website created with the learning goal of improving English skills.
Depending on the user's input, you will receive GPT's response in chat format, and speaker and translation functions are provided for both the conversation you sent and the content answered by GPT.
Speakers can learn the pronunciation of English text by speaking the content of the conversation, and the translation function can be expected to improve understanding of context and ability to interpret words.
***
### * 프로젝트로 인한 학습효과(Learning effect from the project)
이 프로그램은 외부 API 의존성 수준이 높습니다. 외부API를 사용하는 능력 및 웹사이트 제작 학습에 아주 큰 효과가 있었습니다. 
기본적인 JavaScript, Css, Html을 다루는것에서 기초적인 부분 및 레이아웃 배치는 비교적 쉽게 학습하였지만 다른 어려운부분이 있었습니다.
문제해결에 많은 시간을 투자하였는데, 그 중 하나가 채팅 하나하나마다 어떻게 번역기능을 제공할까 였습니다. 
또한 외부API를 프로젝트에 사용하는것에서도 문제가있었는데, NodeJS환경으로 구축된 LocalServer에서 모듈에 관련된 부분이었습니다. 

해당부분에 대한 해결과정은 Issue탭에 상세히 기록하겠습니다. 


This program has a high level of external API dependency. It was very effective in learning the ability to use external APIs and create websites.
In dealing with basic JavaScript, CSS, and HTML, the basic parts and layout placement were relatively easy to learn, but there were other difficult parts.
We invested a lot of time into solving problems, and one of them was how to provide a translation function for each chat.
There was also a problem with using an external API in the project, and it was related to modules in LocalServer built in the NodeJS environment.

The resolution process for this issue will be recorded in detail in the Issue tab.
***
### * 프로젝트 사용법(Project usage)
1. 본 프로젝트는 두가지 API KEY 발급을 필요로합니다.
- DeepL API Key  -> Translation.js
- Open AI API Key  ->chatbot.js 
두가지 API 키 모두  "abcdefc123456" 과 같은 String 배열형식으로 되어있습니다.  각 API키를 두 파일 최상단 API KEY부분에 입력합니다. 
2. NodeJS를 통해 로컬서버 환경구축을 위한 'express'를설치합니다. 
- 터미널 명령어(Terminal command) =>  `npm install express`
3. 로컬서버 환경을 실행한 후 , 포트로 접속합니다. 
- 터미널명령어 (Termainal command) => `node server.js`
- localhost:3000 접속 
***
1. This project requires the issuance of two API KEY.
- DeepL API Key -> Translation.js
- Open AI API Key ->chatbot.js
Both API keys are in String array format, such as "abcdefc123456". Enter each API key in the API KEY section at the top of both files.
2. Install ‘express’ to build a local server environment through NodeJS.
- Terminal command => npm install express
3. After running the local server environment, connect to the port.
- Terminal command => node server.js
- Connect to localhost:3000

***
### * 프로젝트 세부 사항(project details)
![FlowChart](https://github.com/LimSeungW/GPTeacher/assets/112800645/405b82a0-8e42-4c6a-8b5d-7aded6bcc158)

프로그램의 FlowChart 는 위 그림과 같습니다.

The flowchart of the program is shown in the figure above.

![main](https://github.com/LimSeungW/GPTeacher/assets/112800645/27f61930-ec8b-47cb-a118-10de81a8fb4d)

메인화면입니다. Get Start 버튼 클릭시 Slide 애니메이션이 적용되며 Chat.html 파일로 전환됩니다. 

This is the main screen. When you click the Get Start button, Slide animation is applied and converted to Chat.html file.

![conversation](https://github.com/LimSeungW/GPTeacher/assets/112800645/6e4892c5-7ec8-4600-bf9d-42a679be14cc)

Input에 사용자가 원하는 텍스트를 입력합니다. 
사용자에 입력에 따른 GPT의 답변을 통해 대화를 이어나갑니다. 
- 스피커 버튼 클릭시 영문의 텍스트가 스피커를 통해 발음됩니다.
- 번역 버튼 클릭시 영문인 텍스트가 한글로, 한글인 텍스트는 다시 영어로 텍스트가 대치됩니다. 

Enter the text you want in Input.
The conversation continues through GPT's response based on the user's input.
- When you click the speaker button, the English text is pronounced through the speaker.
- When you click the translate button, the English text is replaced with Korean, and the Korean text is replaced with English.

***
### * 사용 라이브러리 및 기타자료 (Libraries and other materials used)
- IDE : VSCODE

- Laugauge : JavaScript (Html, CSS)

- API : DeepL(Translation), OpenAI(Chat GPT API), SpeechSynthesisUtterance(Speak, Browser built-in API)

- Data : json (after fetch the json, Parse the main text)

- Other Library : NodeJS

- Framework : express

- Icons : BootStrap, OpenAI
