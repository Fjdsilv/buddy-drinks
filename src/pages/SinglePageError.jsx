import { useRouteError } from "react-router-dom";

export const SinglePageError = () => {
    const error = useRouteError();
  return (
    <div>
      <h3>
        {error.message}
      </h3>
    </div>
    // <h3>there was an error...</h3>
  )
}
export default SinglePageError