let speech=new SpeechSynthesisUtterance()
let voices=[];
let voiceSelect=document.querySelector("select")
window.speechSynthesis.onvoiceschanged=()=>{
    // provide all voices avaliable
    voices=window.speechSynthesis.getVoices()
    // speak by default on first voice
    speech.voice=voices[0]
    // add voices to dropdown

    voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.name,i)))

}
voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];
})
document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value
    window.speechSynthesis.speak(speech)
})