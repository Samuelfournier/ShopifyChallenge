import {React, useState, useEffect} from 'react'
import { Row, Container} from 'react-bootstrap';
import Image from './Card/Image';
import Header from './headerComponents/Header'


export default function MyLikeImages() {

    let [likedImages, setLikeImages] = useState([]);

    // Get like picture from local storage
    useEffect(() => { 
        let storeLikedImages = JSON.parse(localStorage.getItem('images'));
        if(storeLikedImages.length){
            setLikeImages(storeLikedImages.map((item,idx) => {
                item.id = idx;
                return item;
            }));
        }
    }, [])

    // Change local storage when one is added of remove
    useEffect(() => { 
        localStorage.setItem('images', JSON.stringify(likedImages));
        console.log(likedImages);     
    }, [likedImages])

    
    return (
        <>
            <Container fluid>
                <Header subtitle="Your likes pictures"/>
                <Row xs={1} md={2} className="g-1">
                    {likedImages.map((image,idx) => (
                    <Image 
                    image={image} 
                    likedImages={likedImages} 
                    setLikeImages={setLikeImages}
                    key={image.id} 
                    isLike={true}/>
                    ))}
                </Row>
            </Container>
        </>
    )
}
