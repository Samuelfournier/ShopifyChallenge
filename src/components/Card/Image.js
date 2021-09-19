import {  React,useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const Image = ({image, likedImages, setLikeImages, isLike}) => {

    const not_like_style = 'far fa-heart fa-2x';
    const like_style = 'fas fa-heart fa-2x';
    let [style, setstyle] = useState(isLike ? like_style : not_like_style);
    const [isLiked, setIsLike] = useState(isLike);

    // Handle the like system, change the stle, and the array of like image
    const handleLike = () => {
      let likedImagesList = likedImages;
      if (!isLiked) {
        setIsLike(true);
        setLikeImages([...likedImagesList, image]);
        setstyle(like_style);
      } else {
        setIsLike(false);
        setLikeImages(likedImagesList.filter(likedImage => likedImage.title !== image.title));
        setstyle(not_like_style);
      }
    };


    return (
      <Col xs={12} lg={4}>
        <Card >
          <div>
            {
            // if image or video
            image.media_type === 'image' ?
              <Card.Img variant="top" src={image.hdurl}  onDoubleClick={handleLike}/>
            :
              <iframe src={image.url} title={image.title}></iframe>
            }
            <button className={"like_button " + style} onClick={handleLike}></button>
          </div>
        
          <Card.Body>
              <Card.Title>{image.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{image.date}</Card.Subtitle>
              <Card.Text>
                {image.explanation}
              </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
}

export default Image;