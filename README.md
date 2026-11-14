
# Flight Booking Tracker

1) **Project Overview:**

Many travellers book flights through different airlines, portals or travel agencies. Once flights are booked, managing the booking information becomes very tedious. Travellers often manage booking information across multiple airlines, emails and booking platforms. This increases the risk of missing flight details, creates duplication of information and makes travel planning inefficient.
The problem in managing bookings is due to the lack of a centralised system that allows travellers to monitor and manage all their flight bookings at one place.
The ‘Flight Booking Tracker’ aims to provide a centralised platform where users can add upcoming flights, track flights, manage bookings and also see travel history.

 Key Features:
 - User Registration
 - Login
 - Flight Add/edit/Delete functionality
 - Travel Histroy
 - Admin features to manage users and flights

2) **Technology Stack**

 - Frontend - react
 - Backend - Node.js
 - Database - MongoDB
 - HTTP client - Axiso
 - Version control - Git and gitHub
 - Hosting - AWS EC2


3) **Architecture flow**

    User(Browser) -> react Frontend -> Node.js Backebd -> MongoDB database

4) **Deployment architecture**
 - The application is hosted on an AWS EC2 instance.
 - PM2 manages the frontend and backend application processes.
 - GitHub Actions uses a self-hosted runner on EC2 to execute the configured workflow.
 - Changes manually merged into the main branch to trigger the CI/CD workflow.

5) **Prerequisites:**
 - Node.js V22
 - npm
 - MongoDB
 - Git

 6) **Deployment**
 - The application is dployed on AWS EC2
 - Application URL - http://13.54.215.73/   Note - This is still configured on EC2 Public IP and needs to be changed when instance is restarted
 - The deployment process uses GitHub Actions with a self-hosted runner.
 - The configured workflow is triggered when changes are pushed to the main branch. It executes the defined  installation, testing, build and PM2 deployment steps.

 7) **Known limitations:**
    Infrastructure limitations:
    - Our application is currently deployed on EC2 instance which will change the public IP when restarted, so everytime we will have to update frontend/src/axiosConfig.js with new IP and push the changes to main branch
    - Also, application URL will change with the new Public IP for EC2

    Application limitations:
    - Application does not have search feature to find the flight on dashboard
    - There is no alert system to give push notification, email or SMS alert

 8) **Git Repo**   **GitHub link of the Flight Tracker Project: **[https://github.com/jenil-zz/Flight-Booking-Tracker] (https://github.com/jenil-zz/Flight-Booking-Tracker)


