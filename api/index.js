import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the public folder
app.use(express.static(join(__dirname, "../public")));

// Default Route: Redirect to /name
app.get("/", (req, res) => {
	res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Simple Web Server</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <div class="container">
                <h1>Welcome to My Simple Web Server</h1>
                <p><a href="/name">Go to Name</a></p>
                <p><a href="/hobby">Go to Hobby</a></p>
                <p><a href="/dream">Go to Dream</a></p>
            </div>
        </body>
        </html>
    `);
});

// Route: /name
app.get("/name", (req, res) => {
	res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Name</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <div class="container">
                <h1>Misgana Tegegn</h1>
                <p><a href="/">Back to Home</a></p>
            </div>
        </body>
        </html>
    `);
});

// Route: /hobby
app.get("/hobby", (req, res) => {
	res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hobby</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <div class="container">
                <h1>Favorite Hobby</h1>
                <p>My favorite hobby is coding, musical instruments, and solving problems.</p>
                <p><a href="/">Back to Home</a></p>
            </div>
        </body>
        </html>
    `);
});

// Route: /dream
app.get("/dream", (req, res) => {
	res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Dream</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <div class="container">
                <h1>Motivational Dream</h1>
                <p>My dream is to make a positive impact through technology, helping others, and creating a better world.</p>
                <p><a href="/">Back to Home</a></p>
            </div>
        </body>
        </html>
    `);
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
