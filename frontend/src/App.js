import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import appendScript from './helpers/appendScript';
import Cart from './components/cart/Cart';
import Home from './components/home/Home';
function App() {

  useEffect(() => {
    const arrayScript = [
      'assets/js/vendor.min.js',
      'assets/js/plugins.min.js',
      'assets/js/main.js'
    ]
    arrayScript.forEach(src => {
      appendScript(src);
    })
  }, [])

  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
