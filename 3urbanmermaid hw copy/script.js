let hover_morning; 
let hover_midday;
let hover_afternoon;
let hover_evening;
let backpack_button;

///Morning Effect///
//identify hover
hover_morning = document.getElementById('title_card_1');

//identify image to impact
placesImg1 = document.getElementById('image_1');

//listen for hover
hover_morning.addEventListener("mouseover", ()=>{
    placesImg1.style.opacity = 1;
}
);

hover_morning.addEventListener("mouseout", ()=>{
    placesImg1.style.opacity = 0;
});


/// Effect///
//identify hover
hover_midday = document.getElementById('title_card_2');

//identify image to impact
placesImg2 = document.getElementById('image_2');

//listen for hover
hover_midday.addEventListener("mouseover", () => {
    placesImg2.style.opacity = 1;
}
);

hover_midday.addEventListener("mouseout", () => {
    placesImg2.style.opacity = 0;
});


///Afternoon Effect///
//identify hover
hover_afternoon = document.getElementById('title_card_3');

//identify image to impact
placesImg3 = document.getElementById('image_3');

//listen for hover
hover_afternoon.addEventListener("mouseover", () => {
    placesImg3.style.opacity = 1;
}
);

hover_afternoon.addEventListener("mouseout", () => {
    placesImg3.style.opacity = 0;
});


///Afternoon Effect///
//identify hover
hover_evening = document.getElementById('title_card_4');

//identify image to impact
placesImg4 = document.getElementById('image_4');

//listen for hover
hover_evening.addEventListener("mouseover", () => {
    placesImg4.style.opacity = 1;
}
);

hover_evening.addEventListener("mouseout", () => {
    placesImg4.style.opacity = 0;
});



///Afternoon Effect///
//identify hover
hover_evening = document.getElementById('title_card_4');

//identify image to impact
placesImg4 = document.getElementById('image_4');

//listen for hover
hover_evening.addEventListener("mouseover", () => {
    placesImg4.style.opacity = 1;
}
);

hover_evening.addEventListener("mouseout", () => {
    placesImg4.style.opacity = 0;
});


///Backpack button
backpack_button = document.getElementById('button');
//listener
backpack_button.addEventListener('click', () => {
    console.log("button pressed");
    document.body.style.background = "#fe5671";
});