let counter = 0; //initial value
const counterDiplay = document.getElementById("counterDisplay");

document.getElementById("incrementButton").addEventListener("click", function() {
    counter++;
    counterDisplay.innerHTML = counter;
});

document.getElementById("decrementButton").addEventListener("click", function() {
    counter--;
    counterDisplay.innerHTML = counter;
});

document.getElementById("resetButton").addEventListener("click", function() {
    counter = 0;
    counterDisplay.innerHTML = counter;
});

// let counter = 0; // Initial counter value
//             const counterDisplay = document.getElementById("counterDisplay");

//             // Function to update the counter display
//             function updateCounter() {
//                 counterDisplay.textContent = counter;

//                 if (counter === 10) {
//                     counterDisplay.style.color = "green";
//                     window.alert("Goal reached!"); // Display a pop-up message
//                 } else {
//                     counterDisplay.style.color = "black"; // Reset text color to black
//                 }
//             }

//             // Event listener for the increment button
//             document.getElementById("incrementButton").addEventListener("click", function() {
//                 counter++;
//                 document.getElementById()
//                 // updateCounter();
//             });

//             // Event listener for the decrement button
//             document.getElementById("decrementButton").addEventListener("click", function() {
//                 counter--;
//                 updateCounter();
//             });

//             // Event listener for the reset button
//             document.getElementById("resetButton").addEventListener("click", function() {
//                 counter = 0;
//                 updateCounter();
//             });

//             // Initial update of the counter display
//             updateCounter();