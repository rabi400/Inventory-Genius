const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

recognition.onend = () => {
    recognition.start();
};

recognition.start();

function takeCommand(message) {
    if (message.includes('jarvis')) {
        speak("Yes boss, I'm here to help you.");
    } else if (message.includes('hey') || message.includes('hello')) {
        speak("Hello boss, How May I Help You?");
    } 
   
    else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } 
   
    else if (message.startsWith('jarvis search in google')) {
        const query = message.replace('jarvis search in google', '').trim();
        speak(`Searching for ${query} on Google`);
        // Open Google search page with the query
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(url, '_blank');
    }
}