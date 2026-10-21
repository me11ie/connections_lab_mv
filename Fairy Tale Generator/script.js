
//wait for the page to load
window.addEventListener("load", function () {
    console.log("page loaded");

    //VARIABLE & ELEMENT SETUP///
    //variables to read (event listeners)
    const emotionChoice = document.getElementById("emotion");
    const styleChoice = document.getElementById("style");
    const lineChoice = document.getElementById("line");

    //variables to change (based on read variables)
    const excerpt1 = document.getElementById('excerpt_1');
    const excerpt2 = document.getElementById('excerpt_2');
    const excerpt3 = document.getElementById('excerpt_3');

    // use button to determine what line you are on 
    const set_button = document.getElementById('set-button');


    // //MOVE FROM LINE TO LINE & UPDATE TEXT (use callback functions)///
    // listener if someone clicks button, update line of choice with emotion & style matches 
        set_button.addEventListener('click', excerptMatch);


    //function for updating possible story values
    function excerptMatch() {
        fetch("alm_fairy_tales.json")
            .then(response => response.json())
            .then(sourceData => {
                ///READ DROPDOWN VALUES
                const emotionSelect = emotionChoice.value;
                const styleSelect = styleChoice.value;

                const lineSelect = lineChoice.value
                console.log(lineSelect);

                ///CHECK source data against DROPDOWN values & push valid matches from json file into array
                let excerptMatches = [];
                for (let i = 0; i < sourceData.length; i++) {
                    if (sourceData[i].emotion === emotionSelect && sourceData[i].author === styleSelect) {
                        excerptMatches.push(sourceData[i].text);
                        console.log(sourceData[i].text);
                    }
                };

                // create a length bound randomizer to keep generating lines
                let excerpt_key;
                excerpt_key = Math.floor(Math.random() * excerptMatches.length);

                ///choose a specific excerpt to add to webpage
                let excerpt_choice = excerptMatches[excerpt_key];

                ///determine which line on the webpage the excerpt should be added to
                //IN IDEAL EXECUTION, the a new line would generate based on a change in one of these values (rather than a central button), but I couldn't get it to work
                ///NEXT STEP check if not defining lineSelect and using lineChoice.value here would work
                if (excerptMatches.length > 0) {
                    if (lineSelect === "0") {
                        excerpt1.textContent = excerpt_choice;
                        console.log("first");
                    }
                    else if (lineSelect === "1") {
                        excerpt2.textContent = excerpt_choice;
                        console.log("second");
                    }
                    else if (lineSelect === "2") {
                        excerpt3.textContent = excerpt_choice;
                        console.log("third");
                    }
                } 
                else {
                    set_button.textContent = "Choose alternative options";
                    }
        })                                  // closes .then(sourceData => ...)


        .catch(error => {
            console.log("Error!! " + error);
        });
    }                                       // closes excerptMatch
});                                         // closes window load 
