import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsLetterURL = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  console.log(request)
  // console.log(formData);
  // console.log(data);
  // console.log(response);
  const formData = await request.formData();
  try {
  const data = Object.fromEntries(formData);
  const response = await axios.post(newsLetterURL, data)

  toast.success(response.data.msg);
  return redirect("/");

  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
}

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  // console.log(isSubmitting)

  return (
    <Form className="form" method="post">
      <h4 style={{textAlign: "center", marginBottom: "2rem"}}>
        our newsletter
      </h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input 
          className="form-input" 
          type="text" 
          name="name"
          id="name"
          required
        />
      </div>
      {/* lastName */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input 
          className="form-input" 
          type="text" 
          name="lastName"
          id="lastName"
          required
        />
      </div>
      {/* email */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input 
          className="form-input" 
          type="text" 
          name="email"
          id="email"
          required
          defaultValue="test@test.com"
        />
      </div>
      <button
        className="btn btn-block"
        style={{marginTop: "0.5rem"}}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "submitting" : "submit"}
      </button>
    </Form>
  )
}
export default Newsletter