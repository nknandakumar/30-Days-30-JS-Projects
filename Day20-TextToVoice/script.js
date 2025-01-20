let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
	voice = window.speechSynthesis.getVoices();
	speech.voice = voice[0];

	voices.forEach(
		(voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
	);
};

voiceSelect.addEventListener("change",()=>{
    speech.voice = voice[voiceSelect.value]
})

const voice = () => {
	speech.text = document.querySelector("textarea").value;
	window.speechSynthesis.speak(speech);
};
