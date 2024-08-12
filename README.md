# Airbnb Clone

## Project Overview

This project is a simplified clone of the Airbnb platform, designed to showcase key features like user authentication, listing management, and map integration. The application is built using JavaScript, Node.js, Express.js, MongoDB, EJS, CSS, and Bootstrap. It includes functionality for user signup with email verification, login/logout, creating, editing, and deleting listings, review and rating systems, and location display using Mapbox. The project follows a Model-View-Controller (MVC) architecture and is deployed on Render.

## Features

- **User Authentication:**
  - Signup with email verification.
  - Login/logout functionality with session management using Passport.
  
- **Listing Management:**
  - Create, edit, and delete property listings.
  - Image upload functionality using Cloudinary.
  
- **Reviews and Ratings:**
  - Users can review and rate listings.
  
- **Map Integration:**
  - Location display using Mapbox.
  
- **Search Functionality:**
  - Search for listings based on location and other criteria.

## Tech Stack

- **Frontend:**
  - HTML, CSS, Bootstrap, EJS
- **Backend:**
  - Node.js, Express.js
- **Database:**
  - MongoDB
- **Other Tools and Libraries:**
  - Cloudinary for image management
  - Mapbox for location display
  - Passport for user authentication
  - Connect-Flash for flash messages
  - Joi for input validation
  - Nodemailer for email notifications

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AbhishekIITK-Y22/Airbnb.git
   cd Airbnb

2. **Set Up Environment Variables**
Create a .env file in the root directory of the project and add the following environment variables:
   ```bash
   MONGODB_URI=your_mongodb_uri
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   MAPBOX_TOKEN=your_mapbox_token
 
3. **Run the Application **
To start the application, use the following command:
   ```bash
   npm start

4. **Access the Application **
   Once the application is running, you can access it in your web browser at:
   ```bash
   http://localhost:3000

## Deployment
The project is deployed on Render. 
You can access the live application at [Airbnb Clone](https://airbnb2-4i92.onrender.com/listings).

### Contribution

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any bugs or have suggestions for improvements.

### Author

Abhishek Kumar
3rd Year Undergraduate Student,
Department of Computer Science and Engineering,
IIT Kanpur

