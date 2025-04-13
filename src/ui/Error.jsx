import { useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error?.data || error?.message || "Unknown error occurred."}</p>
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default NotFound;
