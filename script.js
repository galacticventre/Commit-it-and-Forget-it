document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to the Galactic Travel Planner!');
    console.log('Prepare to embark on your next interstellar journey.');

    function displayInspiration() {
        const inspiration = "Exploration is the essence of the human spirit.";
        console.log(inspiration);
    }

    function computeTravelDuration(distance, speed) {
        // Calculate the travel time based on distance and speed
        const duration = distance / speed;
        console.log(`Estimated travel duration: ${duration} light years`);
        return duration;
    }

    function createTravelPlan(destination) {
        // Generate a simple travel plan for a given destination
        const plan = `Your journey to ${destination} is ready. Don't forget your towel and the Guide.`;
        console.log(plan);
        return plan;
    }

    function exchangeCurrency(amount, rate) {
        // Convert currency from one unit to another
        const total = amount * rate;
        console.log(`Converted amount: ${total} Galactic Credits`);
        return total;
    }

    function showRandomFact() {
        // Display a random space-related fact
        const facts = [
            "The Milky Way galaxy is about 100,000 light-years in diameter.",
            "There are more stars in the universe than grains of sand on Earth.",
            "A day on Venus is longer than a year on Venus.",
            "The largest known star is UY Scuti, a hypergiant with a radius around 1,700 times larger than the Sun."
        ];
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        console.log(`Random Space Fact: ${randomFact}`);
    }

    // Call the functions to demonstrate their functionality
    displayInspiration();
    computeTravelDuration(1000, 5);
    createTravelPlan("Betelgeuse");
    showCurrentStarDate();
    exchangeCurrency(100, 1.2);
    showRandomFact();
});
