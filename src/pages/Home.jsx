import React from 'react';

const Home = () => {
  return (
    <div>
      {/*bacground image */}
      <div
        className="home-container d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: "url('/image.jpeg')", backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div>
          <h1 className="fw-bold" style={{color: "brown",WebkitTextStroke: "2px white",padding: "10px"}} >
            FIND FOOD, ANYTIME, ANYWHERE
          </h1>
          <p className="fs-4" style={{color:"white",WebkitTextStroke:"2px black"}} >Order from your favorite restaurants & get food delivered to your doorstep.</p>
        </div>
      </div>

      {/* Food Items Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Popular Dishes</h2>
        <div className="row">
          {/* Card Burger */}
          <div className="col-md-4">
            <div className="card">
              <img src="/burger.jpeg" className="card-img-top" alt="Burger" />
              <div className="card-body">
                <h5 className="card-title">Delicious Burger</h5>
                <p className="card-text">A juicy, cheesy burger with fresh veggies and sauces.</p>
                <button className="btn btn-danger">Order Now</button>
              </div>
            </div>
          </div>

          {/* Card  Pizza */}
          <div className="col-md-4">
            <div className="card">
              <img src="/pizza.jpeg" className="card-img-top" alt="Pizza" />
              <div className="card-body">
                <h5 className="card-title">Cheesy Pizza</h5>
                <p className="card-text">A hot and crispy pizza loaded with cheese and toppings.</p>
                <button className="btn btn-danger">Order Now</button>
              </div>
            </div>
          </div>

          {/* Card  Biryani */}
          <div className="col-md-4">
            <div className="card">
              <img src="/biryani.webp" className="card-img-top" alt="Biryani" />
              <div className="card-body">
                <h5 className="card-title">Spicy Biryani</h5>
                <p className="card-text">Aromatic and flavorful biryani served with raita.</p>
                <button className="btn btn-danger">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
