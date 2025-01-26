import Articledisplay from "./components/Articlesorting/Articledisplay";
import { ARTICLES_DATA } from "./components/Articlesorting/data";
function App() {
  return (
    <>
      <h1>ArticleSorting</h1>

      <Articledisplay articles={ARTICLES_DATA} />
    </>
  );
}
export default App;
