document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Welcome to the Galactic Travel Planner!');
    console.log('Ready to plan your next interstellar journey.');

    function displayMessage() {
        const message = "Exploration is the essence of the human spirit.";
        console.log(message);
    }

    function calculateTravelTime(distance, speed) {
        // Calculate the travel time based on distance and speed
        const time = distance / speed;
        console.log(`Estimated travel time: ${time} light years`);
        return time;
    }

    function generateTravelPlan(destination) {
        // Generate a simple travel plan for a given destination
        const travelPlan = `Your journey to ${destination} is set. Remember to pack your towel and bring a Guide.`;
        console.log(travelPlan);
        return travelPlan;
    }

    function displayStarDate() {
        // Display the current star date
        const starDate = new Date().toISOString();
        console.log(`Current star date: ${starDate}`);
    }

    function convertCurrency(amount, rate) {
        // Convert currency from one unit to another
        const convertedAmount = amount * rate;
        console.log(`Converted amount: ${convertedAmount} Galactic Credits`);
        return convertedAmount;
    }

    function displayRandomFact() {
        // Display a random space-related fact
        const facts = [
            "The Milky Way galaxy is about 100,000 light-years in diameter.",
            "There are more stars in the universe than grains of sand on Earth.",
            "A day on Venus is longer than a year on Venus."
        ];
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        console.log(`Random Space Fact: ${randomFact}`);
    }

    // Call the functions to demonstrate their functionality
    displayMessage();
    calculateTravelTime(1000, 5);
    generateTravelPlan("Betelgeuse");
    displayStarDate();
    convertCurrency(100, 1.2);
    displayRandomFact();
});
