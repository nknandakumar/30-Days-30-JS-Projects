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
    speech.text = "chhodhu chakka ninu, bolimaghane, Huch thulle, nayee thikka nekku ogu, athrunghuthi, lovde ke ball huch sulle maghane, Sorry for any bad words are hurted U.   and Wait wait waiit   ,  Thikka kondu Hogo  and One more innu keluthidiya chodu, hogo thulle bosudike";
	window.speechSynthesis.speak(speech);
}