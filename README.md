Portfolio Microservices Application

This project is a personal portfolio website built using a microservices architecture.
Instead of building everything in one large application, the portfolio is divided into multiple small services, where each service is responsible for a specific section of the website.

For example, the About section, Skills section, Education section, and Contact section are handled by separate services. These services run independently and communicate through APIs.

The main purpose of this project is to understand how microservices work and how Docker can be used to run multiple services together.

Technologies Used

The following technologies were used to build this project:

Node.js – for building backend services

Express.js – to create REST APIs

Docker – to containerize each service

Docker Compose – to run and manage multiple containers

HTML, CSS, JavaScript – for the frontend portfolio page

Project Structure

The project is organized into different folders where each folder represents a separate service.

portfolio-microservices
│
├── about-service        # Handles About information
├── skills-service       # Provides skills data
├── education-service    # Shows education details
├── contact-service      # Provides contact information
│
├── index.html           # Main portfolio page
├── style.css            # Styling for the portfolio
├── script.js            # Fetches data from services
└── docker-compose.yml   # Runs all services together

Each service contains its own server file, dependencies, and API endpoint.

How the Application Works

The frontend portfolio page loads in the browser.

JavaScript in the page makes API requests to different services.

Each microservice returns its own data.

The data is displayed on the portfolio page.

This approach makes the application modular and easier to manage, because each service can be updated independently.

Running the Project
Step 1: Clone the repository
git clone https://github.com/your-username/portfolio-microservices.git
Step 2: Go to the project folder
cd portfolio-microservices
Step 3: Run Docker Compose
docker-compose up --build

Docker will:

Build containers for all services

Start all services

Connect them together

Access the Application

After running Docker, open the browser and visit:

http://localhost

The portfolio page will load and fetch information from the different microservices.

API Endpoints

Each service exposes a simple API endpoint.

About Service

GET /about

Skills Service

GET /skills

Education Service

GET /education

Contact Service

GET /contact

These endpoints return data that is displayed on the portfolio website.

What I Learned from This Project

Through this project, I learned:

How microservices architecture works

How to create simple APIs using Node.js and Express

How to run multiple services using Docker containers

How Docker Compose helps manage multiple containers

How frontend applications can communicate with backend APIs

Author

Arpit Sharma
