import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const getAll = () => {
    axios // berfungsi untuk request data melalui http
    .get('http://localhost:3030/clothes') //mengambil data dari link tersebut
    .then((res) => {
        setPosts(res.data);
    })
    .catch((error) => {
     alert("Terjadi kesalahan" + error);
    });
};

 const getData = () => {
    var requestOptions ={
        method: "GET",
        redirect: "follow",   
    };

    fetch("http://localhost:3030/clothes", requestOptions)
    .then((response) => response.json())
    .then((result) => setPosts(result))
    .catch((error) => console.log("error", error));
   };

   useEffect(() => {
    getData();
   }, []);

  return (
    <div>
      <Image src="https://marketplace.canva.com/EAFGKRRskMs/1/0/1600w/canva-brown-and-beige-minimalist-fashion-banner-lYcbGpUSVGo.jpg" className="img-fluid w-100 mb-5" />
      <section className="py-5 text-center">
        <h1 className="display-4">Welcome To Casual Fashion</h1>
        <p className="lead">Temukan produk luar biasa dan dapatkan penawaran terbaik.</p>
      </section>

      <section className="py-1 d-flex">
        <Container>
          <Row className="mb-3">
            <Col>
              <h2 className="text-center">Baju Wanita</h2>
            </Col>
          </Row>
<div className=''>

          <Row>
            {posts.map((post) => (
            <Col md={4}>
            <Card key={post.id}>
              <Card.Img 
                variant="top" 
                src={post.img} 
              />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  Description of Product 2.
                </Card.Text>
                <Button variant="primary">{post.price}</Button>
              </Card.Body>
            </Card>
          </Col>
              ))}
          </Row>
</div>
        </Container>
      </section>
      <footer className="py-3 text-center">
        <p>&copy; 2024 Toko Grosir Gaya. Hak cipta dilindungi.</p>
      </footer>
    </div>
  );
};

export default Home;
