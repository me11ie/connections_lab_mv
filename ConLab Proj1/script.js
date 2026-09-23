let sentences = [];
 
//wait for the page to load
//wait for the page to load
window.addEventListener("load", function () {
    console.log("page loaded");
    let emotionChoice = document.getElementById("feelings");
    let emotions_desc = document.getElementById("emotions_desc");

    //fetch json file
    fetch("alm_fairy_tales.json")
        .then(response => response.json())
        .then(data => {
            //event listener for change in feelings
            emotionChoice.addEventListener("change", () => {
                let emotionSet = emotionChoice.value;
                let valid_descs = data.filter(sentence => sentence.emotion === emotionSet);

                let emotion_key = Math.floor(Math.random() * valid_descs.length);
                emotions_desc.textContent = valid_descs[emotion_key].text;
            });   // closes the change listener
        })        // closes .then(data => {
        .catch(error => {
            console.log("Error!! " + error);
        });       // closes .catch
});           // closes window.addEventListener("load", function () {



    // let feelingsSelect = document.getElementById("feelings");
    // let pickedFeelingElement = document.getElementById("picked-name");

    // //load the JSON file
    // try {
    //     let response = await fetch("alm_fairy_tales.json");
    //     sentences = await response.json();
    //     console.log(`loaded ${sentences.length} sentences`);
    // } catch (error) {
    //     console.error("Could not load JSON:", error);
    //     pickedFeelingElement.textContent = "Sorry, the sentences couldn't be loaded.";
    //     return;
    // }

    // //add an event listener to the dropdown
    // feelingsSelect.addEventListener("change", () => {
    //     let pickedFeeling = feelingsSelect.value;
    //     console.log("selected:", pickedFeeling);

    //     //find every sentence labeled with that emotion
    //     let matches = sentences.filter((s) => s[pickedFeeling] === 1);

    //     if (matches.length === 0) {
    //         pickedFeelingElement.textContent = `No sentences found for "${pickedFeeling}".`;
    //         return;
    //     }

    //     //pick one at random and show it
    //     let randomSentence = matches[Math.floor(Math.random() * matches.length)];
    //     pickedFeelingElement.textContent = randomSentence.text;
    // });