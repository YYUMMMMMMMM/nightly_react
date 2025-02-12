import SideBar from "./SideBar";
import Home from "./Home";
import {Route, Routes, useSearchParams} from "react-router-dom";
import Follow from "./Follow";
import Profile from "./Profile";

const Main = () => {

  return (
      <>
        <SideBar/>
          <Routes>
              <Route path="/*" element={<Home />}/>
              <Route path="/follow" element={<Follow />}/>
              <Route path={"/profile/:email"} element={<Profile/>}/>
              {/*<Route path="/profile/:email" element={<UserProfile/>}/>*/}
          </Routes>
        {/*<Follow />*/}
        {/*<MyProfile />*/}
      </>
  )
}

export default Main;