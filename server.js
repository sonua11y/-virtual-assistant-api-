// Boilerplate Code for Virtual Assistant API
const express = require('express');
const app = express();

// Helper function to get the cheerful message based on the current day
function getDayMessage(day) {
    switch (day) {
        case 1:
            return "Happy Monday! Start your week with energy!";
        case 5:
            return "It's Friday! The weekend is near!";
        default:
            return "Have a wonderful day!";
    }
}

// GET endpoint to greet the user
app.get('/assistant/greet', (req, res) => {
    const name = req.query.name;

    // Validate the name parameter
    if (!name) {
        return res.status(400).json({ error: "The 'name' query parameter is required." });
    }

    // Get the current day of the week (0 = Sunday, 6 = Saturday)
    const currentDay = new Date().getDay();

    // Construct the response
    const response = {
        welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
        dayMessage: getDayMessage(currentDay)
    };

    res.json(response);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
