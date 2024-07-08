
import './App.css';
import React from 'react';
import {FaSearch} from 'react-icons/fa';
import Photos from './Components/Photos'
import Favourite from './Components/Favourite';
import { BrowserRouter as Router,Routes,Route,Link } from  'react-router-dom';
import { useState} from 'react';
function App() {
  const [searchQuery,setSearchQuery]=useState("");
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  
  const handleSearch=(e) => {
    e.preventDefault();
    setSearchQuery(e.target[0].value)
  };
  const handleAddFavourite = (photo)=>{
    setFavouritePhotos((prevFavourites)=>[...prevFavourites,photo]);
  };
  const handleRemoveFavourite = (photoID)=>
  {
    setFavouritePhotos((prevFavourites)=>
      prevFavourites.filter((favPhoto)=> favPhoto.id !== photoID)
);
  };

  return (
<Router>
  <div>
    <nav className='navbar'>
      <div className="navbar_logo">
        Fotoflix

      </div>
      <form action=""  className='navbar_search-form' onSubmit={handleSearch}>
        <input type='text' className='form-input' placeholder='search'/>
<button type='submit' className='submit-btn'>
  <FaSearch/>

  
</button>
      </form>
      <div className='navbar_links'>
        {/* <Link to="/">Home</Link> */}
        <Link to='/favourite'>Favourites</Link>
      </div>

    </nav>
    <Routes>
    <Route path='/' element={<Photos
    searchQuery={searchQuery}
    onFavouriteClick={handleAddFavourite} />}/>
    <Route path='/favourite' element={<Favourite
    favouritePhotos={favouritePhotos}
    handleRemoveFavourite={handleRemoveFavourite}/>}/>

    </Routes> 

  </div>
</Router>
   );
}

export default App;
