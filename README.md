# E-Commerce React Project

## About This Project

This project was developed as part of my internship at **Web Masters**. It is a modern E-Commerce web application that allows users to browse products, view best sellers, manage their shopping cart, and handle user authentication. The project demonstrates my skills in building scalable, maintainable, and responsive web applications using the latest front-end technologies.

> **Note:** I will still work on this project to enhance it further, add new features, and improve the user experience.

---

## Live Demo

[Basket 🛒](https://basket-e-commerce-m7meda.netlify.app/)

---

## Technologies Used

- **React**: For building user interfaces and managing component state.
- **Redux Toolkit**: For efficient and scalable state management.
- **React Router**: For client-side routing and navigation.
- **Tailwind CSS**: For fast and responsive UI styling.
- **Font Awesome**: For modern and scalable icons.
- **JavaScript (ES6+)**: For application logic and interactivity.

---

## Redux State Management

Redux Toolkit is used to manage the global state of the application in a predictable and scalable way. The main slices and their responsibilities are:

- **Auth Slice (`loginSlice`)**:  
  Handles user authentication state, login/logout actions, and persists authentication status using `localStorage`.

- **Cart Slice**:  
  Manages the shopping cart, including adding, removing, and updating products in the cart, as well as calculating totals.

- **Products Slice**:  
  Fetches and stores product data, manages pagination, filtering, and best sellers.

Redux allows different parts of the app to access and update shared state easily, making the app more maintainable and testable.

---

## Features

- **Product Listing**: Browse all available products with updated stock.
- **Best Sellers**: Highlighted section for top-selling products.
- **Product Details**: View detailed information and images for each product.
- **User Authentication**: Login and logout functionality with persistent authentication state.
- **Shopping Cart**: Add, remove, and view products in the cart.
- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop.
- **Modern UI**: Clean and user-friendly interface using Tailwind CSS.

---

## Pages Overview

- **Home Page**  
  Displays banners, best sellers, and a preview of all products. Includes navigation to view more products.

- **All Products Page**  
  Shows a paginated list of all products, with options to filter and sort.

- **Product Details Page**  
  Shows detailed information about a selected product, including images, description, and add-to-cart functionality.

- **Login Page**  
  Allows users to log in. On successful login, updates the Redux state and persists authentication.

- **Cart Page**  
  Displays all products added to the cart, allows quantity updates and removal, and shows the total price.

- **Not Found Page**  
  Handles invalid routes with a user-friendly message.

---

## Project Structure

```
src/
  components/      # Reusable UI components (Header, Footer, ProductCard, etc.)
  featuers/        # Application features (auth, products, cart, etc.)
    auth/          # Authentication logic and Redux slice
    products/      # Product fetching, display, and Redux slice
    cart/          # Cart logic and Redux slice
  pages/           # Main pages (Home, Login, All Products, etc.)
  assets/          # Images and static assets
  utils/           # Utility functions and API calls
```

---

## What I Learned

- Building scalable React applications with Redux Toolkit.
- Managing authentication and persisting state with localStorage.
- Creating responsive layouts with Tailwind CSS.
- Handling routing and navigation with React Router.
- Collaborating in a real-world development environment.

---

## Author

- **M7MED AYMAN**
