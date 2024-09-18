// import { useState } from 'react';
// import HomePage from './components/HomePage.jsx';
// import Navbar from './components/Navbar';
// import NosLivres from './components/NosLivres';
// import BandeDessinee from './components/BandeDessinee';
// import Litterature from './components/Litterature';
// import Selection from './components/Selection';
// import Mangas from './components/Mangas';
// import MentionsLegales from './components/MentionsLegales.jsx'; // Correction du chemin
// import Inscription from './components/Inscription';
// import Connexion from './components/Connexion';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import ConfirmationInscription from './components/ConfirmationInscription.jsx';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import EspacePrive from './components/EspacePrive';
// import { AuthProvider } from './components/context/AuthContext'; // Importation du fournisseur d'authentification
// import RequireAuth from './components/RequireAuth'; // Importation de la protection de route

// function App() {
//   const location = useLocation();
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   const shouldHideTextAndSlider = location.pathname !== '/';

//   return (
//     <AuthProvider>
//       <div className="App">
//         <Navbar />

//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/nos-livres" element={<NosLivres />} />
//           <Route path="/litterature" element={<Litterature />} />
//           <Route path="/mangas" element={<Mangas />} />
//           <Route path="/bande-dessinee" element={<BandeDessinee />} />
//           <Route path="/inscription" element={<Inscription />} />
//           <Route path="/connexion" element={<Connexion />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/selection" element={<Selection />} />
//           <Route path="/mentions-legales" element={<MentionsLegales />} />
//           <Route
//             path="/espace-prive"
//             element={
//               <RequireAuth>
//                 <EspacePrive />
//               </RequireAuth>
//             }
//           />
//           <Route path="/confirmation-inscription" element={<ConfirmationInscription />} />
//         </Routes>

//         <Footer /> 
//       </div>
//     </AuthProvider>
//   );
// }

// export default App;
