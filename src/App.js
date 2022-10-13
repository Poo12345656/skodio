import "./App.css";
import Home from "./Component/Pages/Home";
import { Routes, Route } from "react-router-dom";
import All from "./Component/Pages/All/All";
import MyVideo from "./Component/Pages/MyVideo";
import MyCollection from "./Component/Pages/MyCollection/MyCollection";
import SharedWithMe from "./Component/Pages/SharedWithMe/SharedWithMe";
import CreateByMe from "./Component/Pages/CreateByMe/CreateByMe";
import SaveByMe from "./Component/Pages/SaveByMe/SaveByMe";
import Admin from "./Component/Pages/Admin/Admin";
import MyProfile from "./Component/Pages/MyProfile/MyProfile";
import MyAccount from "./Component/Pages/MyAccount/MyAccount";
import AccountDetails from "./Component/Pages/AccountDetails/AccountDetails";
import Setting from "./Component/Pages/Setting/Setting";




function App() {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="my-video" element={<MyVideo />} />
        <Route path="my-collection" element={<MyCollection />} />
        <Route path="shared-with-me" element={<SharedWithMe />} />
        <Route path="created-by-me" element={<CreateByMe />} />
        <Route path="saved-by-me" element={<SaveByMe />} />
        <Route path="admin" element={<Admin />} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="my-account" element={<MyAccount />} />
        <Route path="update-account-details" element={<AccountDetails />} />
        <Route path="setting" element={<Setting/>} />
    
    

       
      </Routes>
    </div>
  );
}

export default App;
