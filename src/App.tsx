import { Provider } from "react-redux";
import { store } from './reduxStore';
import RepositoriesList from "./components/RepositoriesList";

const App = () => {
  return (
    <Provider store={store}>
      <h1>Search for a package</h1>
      <RepositoriesList />
    </Provider>
  )
};

export default App;
