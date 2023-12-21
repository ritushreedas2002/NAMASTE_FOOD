
import './App.css';
import Header from './Header.js';
import Body from './Body.js';
/*
-----COMPONENTS-----
Header
 -LOGO
 -Navigation items
Body
  -Search Bar
  -Restaurant Container
      -Restaurant Card
        -IMG
        -Name
        -Star rating
        -Cuisines

Footer
-Copyright
-links
-Address
-
 */

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
