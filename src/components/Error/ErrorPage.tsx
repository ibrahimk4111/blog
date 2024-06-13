import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  let errorMessage = "";

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.data || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <div className=" p-5 ">
      <Link to="/" className=" hover:bg-black/80 hover:text-white flex items-center gap-2 p-2 rounded-full w-28 text-sm transition-all duration-300 ease-in-out">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg>
        <span>Go Back</span>
      </Link>
      <div className=" flex justify-center items-center h-[80vh]">
        <div className="space-y-5 text-center">
          <h1 className=" text-3xl font-bold">Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i className=" text-red-500">{errorMessage}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
