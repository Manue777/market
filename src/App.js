import { AuthProvider } from "./context/AuthContext";
import Router from "./routes";


const App = () => {
  return (
    <div className="App">
      <AuthProvider>
         <Router />
      </AuthProvider>
    </div>
  );
};

export default App;
