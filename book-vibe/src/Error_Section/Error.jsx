import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-500 text-white px-4">
      
      <h1 className="text-8xl font-extrabold mb-4">404</h1>
      <p className="text-2xl font-semibold mb-2">
        Oops! Page not found
      </p>

      <p className="text-gray-200 mb-6 text-center max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
      >
        Go Back Home
      </Link>

    </div>
  );
};

export default NotFound;