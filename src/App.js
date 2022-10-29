import {BrowserRouter, Route,Routes} from "react-router-dom"
import Login from './pages/login';
import ProfileCom from './ProfileCom';
import { AuthProvider } from './components/auth';
import RequiredAuth from './components/requiredAuth';
function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={ <RequiredAuth> <ProfileCom /></RequiredAuth> } />
            {/* <Route index element={<Home />} /> */}
            {/* <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
        </Routes>
      </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
