const express = require("express");
const axios = require("axios");
const { OAuth2Client } = require("google-auth-library");
const app = express();
const PORT = 3001;

const CLIENT_ID = "process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID"; // Replace with your Google Client ID
const CLIENT_SECRET = "process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_SECRET"; // Replace with your Google Client Secret

app.use(express.json());

// Handle Google login callback
app.post("/google-login", async (req, res) => {
  const { token } = req.body;

  try {
    // Verify the token
    const client = new OAuth2Client(CLIENT_ID);
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID, // Specify the CLIENT_ID to ensure the token is meant for your app
    });

    const payload = ticket.getPayload();

    // Here you can create your own logic to save the user to a database
    // or generate a JWT token to manage sessions

    res.json({
      message: "Login successful",
      user: {
        id: payload.sub,
        name: payload.name,
        email: payload.email,
        token: token,
      },
    });
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
});

// Handle user login with email/password (example)
app.post("/signin", (req, res) => {
  const { email, password } = req.body;

  // You would typically check these credentials against a database
  if (email === "test@example.com" && password === "password") {
    res.json({
      message: "Login successful",
      user: { email, token: "user-token" },
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});