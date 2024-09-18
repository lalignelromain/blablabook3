
// import { useState } from 'react';
// import HomePage from '../pages/HomePage';
// import Navbar from './components/Navbar';
// import NosLivres from '../pages/NosLivres';
// import BandeDessinee from '../pages/BandeDessinee';
// import Litterature from '../pages/Litterature';
// import Mangas from '../pages/Mangas';
// import MentionsLegales from '../pages/MentionsLegales';
// import Inscription from '../pages/Inscription';
// import Connexion from '../pages/Connexion';
// import Contact from '../pages/Contact';
// import Footer from './components/Footer';
// import { Routes, Route, useLocation } from 'react-router-dom';

// // import AppContext from './components/context/AppContext';

// function App() {
//   const location = useLocation();
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   const shouldHideTextAndSlider = location.pathname !== '/';

//   return (
//     <div className="App">
//       <Navbar />
//       {/* {!shouldHideTextAndSlider && (
//         <div className="text-under-navbar">
//           <h1>Bienvenue sur notre site de livres</h1>
//           <p>Découvrez notre sélection de livres pour tous les goûts et toutes les occasions.</p>
//           <p>Découvrez notre sélection de livres pour tous les goûts et toutes les occasions.</p>
//           <p>Découvrez notre sélection de livres pour tous les goûts et toutes les occasions.</p>
//           <p>Découvrez notre sélection de livres pour tous les goûts et toutes les occasions.</p>
//         </div>
//       )} */}
//       {/* ... */}
//       <Routes>
//        {/* <Route path="/" element={<BookList />}/> */}
//           {/* <Route path="/book/:id" element={<BookDetails />}/> */}
//           <Route path="/" element={<HomePage />} />
//           <Route path="/noslivres" element={<NosLivres />}/>
//           <Route path="/litterature" element={<Litterature />}/>
//           <Route path="/mangas" element={<Mangas />}/>
//           <Route path="/bande-dessinee" element={<BandeDessinee />}/>
//           <Route path="/inscription" element={<Inscription />}/>
//           <Route path="/connexion" element={<Connexion />}/>
//           <Route path="/contact" element={<Contact />}/>
//           <Route path="/mentions-legales" element={<MentionsLegales />}/>
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;