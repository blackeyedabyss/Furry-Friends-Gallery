import React, {useState, useEffect} from 'react';

// Components
import DogCardInfo from './DogCardInfo';

//Styles
import './App.css';

const loadDogPictures = async (dogsToLoad = 8) => {
  //Todo
  const apiBaseUrl = 'https://dog.ceo/api/breeds/image/random/';
  const response = await fetch(`${apiBaseUrl}${dogsToLoad}`);
  const data = await response?.json();
  const dogData = data.message.map(item => {
    // item is an image url in the format:
    // "https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_1727.jpg",
    let breed = item.replace('https://', '').split('/')[2];

    // bread clean up (i.e. starts in the format 'subtype-maintype')
    if (breed && breed !== '') {
      breed = breed.split('-').reverse().join(' ');
    }

    return {
      id: `dog_pic_${data.message.indexOf(item)}`,
      imgUrl: item,
      breed
    };
  });
};


function App() {
  const [dogPictures, setDogPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numOfDogs, setNumOfDogs] = useState('');
  const [totalDogsSearched, setTotalDogsSearched] = useState(0);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setDogPictures(await loadDogPictures(numOfDogs));
    setIsLoading(false);
  };


  return (
    <>
      <h1>Welcome to the Furry Friends Gallery!</h1>

    </>
  );
}

export default App;
