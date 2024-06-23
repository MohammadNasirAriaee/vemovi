import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/images/pagenotfound.png";

export const PageNotFound = () => {
  return (
    <section className="flex flex-col justify-center px-2">
      <div className="flex flex-col items-center my-4">
        <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
          404, Oops!
        </p>
        <div className="max-w-lg">
          <img src={PageNotFoundImage} alt="404 Page Not Found" />
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Link to="/">
          <button className="border-1 border-gray-300 shadow-md font-medium hover:bg-gray-100 dark:text-white p-2 rounded-sm dark:bg-gray-600 dark:hover:bg-gray-500">
            Back to Cinemate
          </button>
        </Link>
      </div>
    </section>
  );
};
