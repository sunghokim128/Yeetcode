// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the loser's name from localStorage
    const loserName = localStorage.getItem("loserName");
    console.log("Retrieved loser name:", loserName);
    
    // Update the text element with the loser's name
    const loserTextElement = document.getElementById("loser-text");
    if (loserName) {
        loserTextElement.textContent = loserName;
    } else {
        console.error("No loser name found in localStorage");
        loserTextElement.textContent = "Loser";
    }
}); 