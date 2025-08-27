import { Home } from "./Home/Home";
import { Analytics } from "@vercel/analytics/react";


function App() {
  return (
    <div className="bg-gradient-to-r from-transparent via-sky-200 to-transparent">
      <Home />
      <Analytics />
    </div>
  );
}

export default App;
