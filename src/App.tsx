import { Instagram } from "lucide-react";
import logo from "./assets/logo.png";
import Footer from "./components/Footer";

import Main from "./components/Main";
import Memory from "./components/Memory";
import Lineup from "./components/Lineup";
import NewEdition from "./components/NewEdition";

export default function App() {
  const ticketURL = "https://www.partiurole.app/party/66c10a47-4201-48b5-a729-9c4c71a937db?fbclid=PAZXh0bgNhZW0CMTEAAacGtIlZTiwNNy7FHSAtrMup9UrmHS-p9g5ALpG-YZ776cF2IIBpA773P2k2_A_aem_tQw0MWVY2KMKd277dLd3Sg"
  return (
    <div>
      <nav className="bg-[#000] w-[100vw] p-2 fixed flex flex-col md:flex-row md:justify-around items-center">
        <div>
          <img src={logo} alt="Logo capivari festival" width="100px" />
        </div>
        <div>
          <ul className="flex gap-8 text-gray-300 text-xl mx-4">
            <li>
              <a target="_blank" href={ticketURL}>Ingressos</a>
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
      <Main ticket={ticketURL} />
      <Lineup />
      <NewEdition ticket={ticketURL} />
      <Memory />
      <Footer />
    </div>
  );
}
