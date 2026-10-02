const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const path = require("path");
require("dotenv").config();

const User = require("./models/user");

const app = express();


// ================= MIDDLEWARE =================

app.use(cors());

app.use(express.json());


// ================= FRONTEND =================

const frontendPath = path.join(__dirname, "..");

app.use(express.static(frontendPath));


// ================= HOME =================

app.get("/", (req, res) => {

    res.sendFile(
        path.join(frontendPath, "index.html")
    );

});


// ================= SIGNUP =================

app.post("/api/signup", async (req, res) => {

    try {

        const {
            name,
            email,
            phone,
            password
        } = req.body;


        if (
            !name ||
            !email ||
            !phone ||
            !password
        ) {

            return res.status(400).json({
                message: "All fields are required."
            });

        }


        const existingUser =
            await User.findOne({ email });


        if (existingUser) {

            return res.status(400).json({
                message:
                    "An account with this email already exists."
            });

        }


        const hashedPassword =
            await bcrypt.hash(password, 12);


        const newUser =
            new User({

                name: name,
                email: email,
                phone: phone,
                password: hashedPassword

            });


        await newUser.save();


        res.status(201).json({

            message:
                "Account created successfully."

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            message:
                "Server error. Please try again."

        });

    }

});


// ================= LOGIN =================

app.post("/api/login", async (req, res) => {

    try {

        const {
            email,
            password
        } = req.body;


        if (!email || !password) {

            return res.status(400).json({

                message:
                    "Email and password are required."

            });

        }


        const user =
            await User.findOne({ email });


        if (!user) {

            return res.status(401).json({

                message:
                    "Invalid email or password."

            });

        }


        const passwordMatch =
            await bcrypt.compare(
                password,
                user.password
            );


        if (!passwordMatch) {

            return res.status(401).json({

                message:
                    "Invalid email or password."

            });

        }


        res.status(200).json({

            message:
                "Login successful.",

            user: {

                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone

            }

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            message:
                "Server error. Please try again."

        });

    }

});

// ================= AI ASSISTANT =================

app.post("/api/ai", async (req, res) => {

    try {

        const {
            message,
            documents
        } = req.body;


        if (!message || !message.trim()) {

            return res.status(400).json({
                message: "Please enter a message."
            });

        }


        const documentText =
            Array.isArray(documents) && documents.length > 0
                ? JSON.stringify(documents)
                : "No saved documents are available.";


        const response =
            await openai.responses.create({

                model: "gpt-5-mini",

                instructions:
                    "You are the TrustVault AI Assistant. " +
                    "Help users understand their documents. " +
                    "Be clear, simple and helpful. " +
                    "Do not claim to perform actions that you cannot perform. " +
                    "Do not store or save the user's conversation.",

                input:
                    "User message:\n" +
                    message +
                    "\n\n" +
                    "Available TrustVault documents:\n" +
                    documentText

            });


        res.status(200).json({

            reply: response.output_text

        });

    }

    catch (error) {

        console.error(
            "AI error:",
            error
        );


        res.status(500).json({

            message:
                "Unable to process your request right now."

        });

    }

});


// ================= MONGODB =================

mongoose.connect(process.env.MONGO_URI)

    .then(() => {

        console.log(
            "MongoDB connected successfully"
        );


        app.listen(
            5000,
            () => {

                console.log(
                    "TrustVault backend running on port 5000"
                );

                console.log(
                    "Open http://localhost:5000"
                );

            }
        );

    })

    .catch((error) => {

        console.log(
            "MongoDB connection failed"
        );

        console.log(
            error.message
        );

    });