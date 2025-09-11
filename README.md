# API Testing React App

A simple React application for testing GET API requests and viewing responses.

## Features

- Clean, modern UI for testing API endpoints
- Real-time API response display with JSON formatting
- Error handling for failed requests
- Example URLs to get started quickly
- Responsive design that works on desktop and mobile

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   
   Or use the dev script for auto-opening in browser:
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   The app will be available at `http://localhost:3000`

## Usage

1. Enter an API URL in the input field (or click one of the example buttons)
2. Click "Make GET Request" to test the API
3. View the formatted JSON response below
4. Use "Clear Results" to reset the response area

## Example APIs to Test

The app includes several example URLs you can try:

- **JSONPlaceholder** - Sample REST API for testing
- **GitHub API** - Public GitHub user data
- **HTTPBin** - HTTP testing service

## Project Structure

```
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js              # Main React component
│   ├── App.css             # Styling
│   └── index.js            # React entry point
├── package.json            # Dependencies and scripts
├── webpack.config.js       # Webpack configuration
└── README.md              # This file
```

## Available Scripts

- `npm start` - Start development server
- `npm run dev` - Start development server and open browser
- `npm run build` - Build for production

## Technologies Used

- React 18
- Webpack 5
- Babel
- CSS3 with modern features
- Fetch API for HTTP requests
