const express = require('express');
const app = express();

// Helper function to get a cheerful message based on the day of the week
const getDayMessage = (day) => {
    switch (day) {
        case 1: // Monday
            return "Happy Monday! Start your week with energy!";
        case 5: // Friday
            return "It's Friday! The weekend is near!";
        default:
            return "Have a wonderful day!";
    }
};

// GET endpoint at /assistant/greet
app.get('/assistant/greet', (req, res) => {
    const name = req.query.name;

    if (!name) {
        return res.status(400).json({ error: "Name query parameter is required." });
    }

    const currentDay = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    const response = {
        welcomeMessage: Hello, ${name}! Welcome to our assistant app!,
        dayMessage: getDayMessage(currentDay)
    };

    res.json(response);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(Virtual Assistant API is running on http://localhost:${PORT});
});
