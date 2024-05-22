import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  // console.log(isPageLoading); 
  // console.log(navigation);
  return (
    <>
      <Navbar />
      <section className="page">
        {isPageLoading ? 
        <div 
          className="loading"
          style={{margin: "0 auto"}}
        >
	</div>
        :
        <Outlet />
        }
      </section>
    </>
  )
}
export default HomeLayout