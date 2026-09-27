window.addEventListener("load", function () {
    console.log("1. page loaded");
    let emotionChoice = document.getElementById("feelings");
    let moodChoice = document.getElementById("mood");
    let display_text = document.getElementById("fill_area");
    console.log("2. elements found:", emotionChoice, moodChoice, display_text);

    fetch("alm_fairy_tales.json")
        .then(response => {
            console.log("3. fetch status:", response.status);
            return response.json();
        })
        .then(data => {
            console.log("4. data loaded:", data);

            function updateText() {
                let emotionSet = emotionChoice.value;
                let moodSet = moodChoice.value;
                console.log("5. selected:", emotionSet, moodSet);

                // wait until both dropdowns have a choice
                if (emotionSet === "" || moodSet === "") {
                    display_text.textContent = "Choose a feeling and a mood";
                    return;
                }

                let valid_descs = data.filter(sentence =>
                    sentence.emotion === emotionSet && sentence.author === moodSet
                );
                console.log("6. matches:", valid_descs.length);

                if (valid_descs.length === 0) {
                    display_text.textContent = "No excerpts found for that combination.";
                    return;
                }

                let emotion_key = Math.floor(Math.random() * valid_descs.length);
                display_text.textContent = valid_descs[emotion_key].text;
            }

            emotionChoice.addEventListener("change", updateText);
            moodChoice.addEventListener("change", updateText);
            display_text.addEventListener("click", updateText);   // new excerpt on each click
        })
        .catch(error => {
            console.log("Error!! " + error);
        });
});