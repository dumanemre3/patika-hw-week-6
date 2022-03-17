import CookieDeleter from "./components/cookieDeleter";
import CookieGetter from "./components/cookieGetter";
import CookieSetter from "./components/cookieSetter";
function App() {
  return (
    <div className="container mt-5 mb-5">
      <CookieSetter/>
      <CookieGetter/>
      <CookieDeleter/>
    </div>
  );
}

export default App;
