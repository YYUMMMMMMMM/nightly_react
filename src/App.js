import {Provider} from "./components/ui/provider";
import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import Main from "./pages/main/Main";

function App() {
  return (
      <Provider>
          <Routes>
            <Route path="/*" element={<SignIn />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/main/*" element={<Main />} />
          </Routes>
      </Provider>

  );
}

export default App;
