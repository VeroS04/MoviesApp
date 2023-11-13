import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMe } from "./hooks";
import { Details, Home, Login, NewReleases, Popular, SearchP, SignUp } from "./pages";

function App() {

  const { loginWithToken } = useMe();

  useEffect(() => {
    loginWithToken();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="new-releases" element={<NewReleases />} />
          <Route path="search" element={<SearchP />} />
          <Route path="popular" element={<Popular />} />
          <Route path="movies/:id"  element={<Details/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
