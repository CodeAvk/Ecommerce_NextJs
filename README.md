# 🛒 E-commerce Web Application

This project is a comprehensive e-commerce web application built with **Next.js** that supports both **client-side rendering (CSR)** and **server-side rendering (SSR)**. It utilizes **MongoDB** as the database, **React Toast** for popup notifications, the **FakeStore API** for dummy data, and incorporates **middleware** for enhanced functionality.

## 🚀 Features

- **Next.js Framework**: Combines the best of both CSR and SSR to ensure optimal performance and SEO.
- **MongoDB Integration**: Utilizes MongoDB for a robust and scalable database solution.
- **React Toast Notifications**: Provides user-friendly popup notifications for various actions (e.g., add to cart, login).
- **FakeStore API**: Integrates with the FakeStore API to display realistic product data.
- **Middleware**: Implements middleware for handling authentication, logging, and more.

## 🛠️ Installation

To get started with this project, clone the repository and install the necessary dependencies:

```bash
(https://github.com/CodeAvk/Ecommerce_NextJs.git)
cd Ecommerce_NextJs
npm install
```

## 🏃‍♂️ Running the Application

### Development

To run the application in development mode:

```bash
npm run dev
```

### Production

To build and run the application in production mode:

```bash
npm run build
npm start
```

## 🗄️ Database Setup

Ensure you have MongoDB installed and running on your machine. Create a `.env` file in the root directory of the project and add your MongoDB connection string:

```bash
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
```

## 🌐 API Integration

This application uses the **FakeStore API** to fetch dummy product data. You can find more information about the API [here](https://fakestoreapi.com/).

## 🎨 UI Components

- **Home Page**: Displays a list of products fetched from the FakeStore API.
- **Product Page**: Detailed view of a single product.
- **Cart**: Users can add and remove items from their shopping cart.
- **Checkout**: Simple checkout process with form validation.

## 🛡️ Middleware

- **Authentication Middleware**: Protects routes that require user authentication.
- **Logging Middleware**: Logs requests and responses for debugging purposes.

## 📦 Dependencies

- **Next.js**: For SSR and CSR
- **React.js**: Frontend library
- **MongoDB**: Database
- **Mongoose**: MongoDB object modeling
- **React Toastify**: Popup notifications
- **Axios**: For API requests
- **SWR**: React hooks library for data fetching

## 📚 Learn More

To learn more about Next.js, MongoDB, or the other technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [FakeStore API Documentation](https://fakestoreapi.com/docs)

## 🧑‍💻 Author

- **Your Name** - [CodeAvk](https://github.com/CodeAvk)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
