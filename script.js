const container = document.querySelector(".container"),
    btn = container.querySelector(".btn"),
    quotes = container.querySelector("p"),
    icon = container.querySelector(".icon");

let i = 0;

btn.addEventListener("click", () => {
    btn.textContent = "Loading Quote..."
    fetch("https://type.fit/api/quotes").then((res) => {
        return res.json();
    }).then((data) => {
        i = i == 100 ? 0 : i;
        quotes.textContent = data[i].text;
        i+=1;
        btn.textContent = "Next Quote";
    });
});

icon.addEventListener("click",()=>{
 let speakText = new SpeechSynthesisUtterance(quotes.textContent);
    speechSynthesis.speak(speakText); 
});