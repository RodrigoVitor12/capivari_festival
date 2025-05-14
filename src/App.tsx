import { Instagram } from "lucide-react";
import logo from "./assets/logo.png";
import Footer from "./components/Footer";

import Main from "./components/Main";
import Memory from "./components/Memory";

export default function App() {
  return (
    <div>
      <nav className="bg-[#03511d] p-2 flex flex-col md:flex-row md:justify-between items-center">
        <div>
          <img src={logo} alt="Logo capivari festival" width="100px" />
        </div>
        <div>
          <ul className="flex gap-8 text-gray-300 text-xl mx-4">
            <li>
              <a href="#">Ingressos</a>
            </li>
            <li>
              <a href="#">Line up</a>
            </li>
            <li>
              <a href="#">Info</a>
            </li>
            <li>
              <a href="https://www.instagram.com/capivarifestival/" target="_blank"><Instagram /></a>
            </li>
          </ul>
        </div>
      </nav>
      <Main />
      <Memory />
      {/* <Lineup /> */}
      <Footer />
    </div>
  );
}
