import React from 'react';
import Photos from './Photos';

const Favourite = ({favouritePhotos,handleRemoveFavourite})=> {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar_logo">Fotoflix</div>
        <div className="navbar_links">
          <a href='/'>Home</a>
        </div>
      </nav>
      <main>
        <section className="photos">
          <div className='photos-center'>
          { favouritePhotos.length > 0 ? (
          favouritePhotos.map((image,index)=>{
            return(          
              <Photos
              key={index}
              {...image}
              isFavourite={true}
              onFavouriteClick={()=>handleRemoveFavourite(image)}>
<span>
  Added to Favourties
</span>

              </Photos>)
})
          ): (
            <p>No Favourite Photos yet.</p>
          )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Favourite;
