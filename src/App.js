import Pages from "./pages/Pages";
import Category from "./components/Category/Category";
import {BrowserRouter} from 'react-router-dom';
import Search from "./components/Search/Search";
import {Logo,Nav} from './pages/Style';
import {GiKnifeFork} from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Delicious</Logo>
      </Nav>
        <Search/>
        <Category/>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
