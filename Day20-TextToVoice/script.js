let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
	voices = window.speechSynthesis.getVoices();
	speech.voice = voice[0];

	voices.forEach(
		(voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
	);
};

voiceSelect.addEventListener("change",()=>{
    const selectedVoiceIndex = voiceSelect.value;
    speech.voice = voices[selectedVoiceIndex];
})

//

const voice = () => {
	speech.text = document.querySelector("textarea").value;
	window.speechSynthesis.speak(speech);
};

const defaultMsg =()=>{
    speech.text = "You are so Beautiful";
	window.speechSynthesis.speak(speech);
}