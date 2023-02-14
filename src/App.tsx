import { AppContextProvider } from "./context/AppContext";
import { UsersListPage } from "./pages/UsersListPage";

function App() {

  return (
    <AppContextProvider>
      <UsersListPage />
    </AppContextProvider>
  );
}

export default App;
