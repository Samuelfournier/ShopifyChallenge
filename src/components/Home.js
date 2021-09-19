import { useEffect, useState, useRef } from 'react';
import { Row, Container, Button} from 'react-bootstrap';
import Header from './headerComponents/Header'
import axios from 'axios';
import Image from './Card/Image';

function Home() {

    const URL = 'https://api.nasa.gov/planetary/apod';
    let [images, setimages] = useState([]);
    let [likedImages, setLikeImages] = useState([]);
    const fetch_number = useRef(0);

    // Fetch 3 images to start the page
    useEffect(() => { 
        axios.get(`${URL}?count=3&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
        .then((response) => {
            setimages(response.data);
        })
    }, [])

    // set like picture on load
    useEffect(() => { 
        let storeLikedImages = JSON.parse(localStorage.getItem('images'));
        if(storeLikedImages.length)
            setLikeImages(storeLikedImages);
    }, [])

  
    // Change local storage when one is added of remove
    useEffect(() => { 
        localStorage.setItem('images', JSON.stringify(likedImages));
    }, [likedImages])


    // Handle new fetch for the user
    const handleFetch = () => {
        if (fetch_number.current.value !== 0){
            setimages([])
            axios.get(`${URL}?count=${fetch_number.current.value}&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then((response) => {
                setimages(response.data);
        })
        }
    }
    
return (
  <>
    <Container fluid>
      <Header images={likedImages} subtitle="Welcome to the best place around to look at some amazing picture !"/>
        <label>How much new pictures would you like to fetch ? </label>
        <br/>
        <input ref={fetch_number}/>
        <Button className="fetch_button" variant="success" onClick={handleFetch}>Fetch</Button>
        <Button className="fetch_button" variant="danger" onClick={() => setimages([])}>Clear</Button>

        <Row xs={1} md={2} className="g-1">
        {images.map((image,idx) => (
          <Image 
          idx={idx} 
          image={image} 
          likedImages={likedImages} 
          setLikeImages={setLikeImages}
          key={idx} />
        ))}
        
      </Row>
    </Container>
  </>
);
}

export default Home;