# Cosmic Dashboard - A NASA API Data Explorer

Welcome to the Cosmic Dashboard! This is a full-stack web application built for the Bounce Insights Software Engineer coding challenge. It utilizes several NASA Open APIs to present a real-time, multi-faceted view of space-related events and data in a visually engaging dashboard format.

**Live Demo:** [https://your-deployed-app.vercel.app]  
**GitHub Repo:** [https://github.com/your-username/cosmic-dashboard]

## Features

- **Astronomy Picture of the Day (APOD):** See the inspirational space picture or video of the day, complete with its title and description.
- **Near-Earth Object (NEO) Tracker:** Get a list of asteroids and comets making their closest approach to Earth today, including their estimated size and miss distance.
- **Live Earth View:** View the most recent full-disc image of Earth captured by the EPIC camera aboard the DSCOVR satellite.
- **Mars Rover Latest Photos:** Browse a gallery of the most recent images sent back from the Perseverance rover on Mars.
- **Robust Backend:** An Express.js server acts as a secure intermediary, handling API keys and fetching data from NASA's endpoints.
- **Responsive Design:** The dashboard layout is built with CSS Grid to adapt to various screen sizes.
- **Loading & Error States:** Each widget independently manages its loading and error states for a smooth user experience.

## Tech Stack

- **Frontend:**
  - React
  - Axios (for HTTP requests)
  - date-fns (for date formatting)
  - CSS3 (for styling and layout)
- **Backend:**
  - Node.js
  - Express.js
  - Axios
  - Dotenv (for environment variables)
  - CORS

## NASA APIs Used

- [Astronomy Picture of the Day (APOD)](https://api.nasa.gov/#apod)
- [Near Earth Object Web Service (NeoWs)](https://api.nasa.gov/#NEOs)
- [Earth Polychromatic Imaging Camera (EPIC)](https://epic.gsfc.nasa.gov/about/api)
- [Mars Rover Photos](https://api.nasa.gov/#MarsPhotos)

---

## Setup and Installation

### Prerequisites

- Node.js and npm (or yarn) installed.
- A NASA API Key, which you can get for free from [api.nasa.gov](https://api.nasa.gov/).

### 1. Clone the Repository

```bash
git clone https://github.com/[YourUsername]/cosmic-dashboard.git
cd cosmic-dashboard
Use code with caution.
Markdown
2. Backend Setup
Generated bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Create a .env file in the backend directory
# (You can copy the .env.example if one exists)
touch .env

# Add your NASA API key to the .env file
echo "NASA_API_KEY=YOUR_NASA_API_KEY_HERE" >> .env
echo "PORT=5000" >> .env
Use code with caution.
Bash
3. Frontend Setup
Generated bash
# Navigate to the frontend directory from the root
cd ../frontend

# Install dependencies
npm install
