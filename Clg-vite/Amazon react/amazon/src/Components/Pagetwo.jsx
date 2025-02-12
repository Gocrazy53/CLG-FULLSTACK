import React from "react";
import "./Pagetwo.css";

const Pagetwo = () => {
  const cardData = [
    {
      id: 0,
      src: "https://m.media-amazon.com/images/I/71vU7+DzWBL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
      first: "Mirada Cute Pink Teddy Bear Soft Toy for Kids/Baby Girls/Boys | Ideal Birthday Gift - 30cm",
      second: "15% off",
      third: "₹450.00",
      fourth: "fourth-content",
    },
    {
        id: 1,
        src: "https://m.media-amazon.com/images/I/71lMu0+w+sL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
        first: "Soft Cuddly Teddy Bear with Bow - Stuffed Plush Toy for Kids, 40cm",
        second: "25% off",
        third: "₹599.00"
      },
      {
        id: 2,
        src: "https://m.media-amazon.com/images/I/81864pBEUZL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
        first: "Adorable Soft Bunny Plush Toy - White, 35cm",
        second: "10% off",
        third: "₹350.00"
      },
      {
        id: 3,
        src: "https://m.media-amazon.com/images/I/518gkHJaoxL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
        first: "Fluffy Elephant Plush Toy for Kids | Soft & Cuddly - 45cm",
        second: "20% off",
        third: "₹799.00"
      },
      {
        id: 4,
        src: "https://m.media-amazon.com/images/I/71pyClm64AL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
        first: "Cute Penguin Plush Toy - Stuffed Animal for Babies and Kids, 30cm",
        second: "18% off",
        third: "₹650.00"
      },
      {
        id: 5,
        src: "https://m.media-amazon.com/images/I/51p0cTk584L._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
        first: "Huggable Soft Panda Stuffed Toy - Black & White - 50cm",
        second: "22% off",
        third: "₹999.00"
      },
      {
        id: 6,
        src: "https://m.media-amazon.com/images/I/51Gd57D3L9L._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
        first: "Fluffy Brown Teddy Bear with Bow - Soft Toy - 40cm",
        second: "12% off",
        third: "₹699.00"
      },
      {
        id: 7,
        src: "https://m.media-amazon.com/images/I/7181bZAhVeL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
        first: "Kawaii Cute Plush Cat Soft Toy - Grey - 35cm",
        second: "15% off",
        third: "₹499.00"
      },
      {
        id: 8,
        src: "https://m.media-amazon.com/images/I/41N+7bc+YtL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
        first: "Adorable Plush Puppy Dog - Brown - 45cm",
        second: "30% off",
        third: "₹699.00"
      },
      {
        id: 9,
        src: "https://m.media-amazon.com/images/I/61mQ3p8vHzL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
        first: "Charming Baby Unicorn Plush Toy - White & Pink - 40cm",
        second: "20% off",
        third: "₹750.00"
      },
      {
        id: 10,
        src: "https://m.media-amazon.com/images/I/71gPM2PUP5L._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
        first: "Cuddly Monkey Soft Plush Toy - Brown - 35cm",
        second: "14% off",
        third: "₹525.00"
      },
      {
        id: 11,
        src: "https://m.media-amazon.com/images/I/61xM0YSVToL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
        first: "Soft and Cute Fox Plush Toy - Orange - 40cm",
        second: "18% off",
        third: "₹650.00"
      },
      {
        id: 12,
        src: "https://m.media-amazon.com/images/I/61l7pnsQ8CL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
        first: "Big Hug Teddy Bear Plush Toy - Soft Stuffed Animal - 50cm",
        second: "22% off",
        third: "₹1,299.00"
      },
      {
        id: 13,
        src: "https://m.media-amazon.com/images/I/71VgQQkOpPL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
        first: "Fluffy Owl Plush Toy - Soft Stuffed Animal for Kids - 30cm",
        second: "20% off",
        third: "₹499.00"
      },
      {
        id: 14,
        src: "https://m.media-amazon.com/images/I/71VpvONpjEL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
        first: "Cuddly Giraffe Plush Toy - Yellow - 45cm",
        second: "15% off",
        third: "₹899.00"
      }
      
      
  ];

  const cardTwoData = [
    {
      id: 1,
      first: "Starting $99 | Start your fitness journey",
      src: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/GW_Desktop/1199101_379x304_Compressed._SY304_CB448278349_.jpg",
      second: "See more",
    },

    {
      id: 2,
      first: "Up to 60% off | Car, bike parts ",
      src: "https://images-eu.ssl-images-amazon.com/images/G/31/2023/GateWay/December/CC/PC_379x304_1._SY304_CB572341311_.jpg",
      second: "See more",
    },

    {
      id: 3,
      first: "Up to 60% off | International brands",
      src: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/2025/JANBAU/PC_CC_379x304._SY304_CB552264787_.jpg",
      second: "See more",
    },

    {
      id: 4,
      first: "Up to 70% off | Other items",
      src: "https://images-eu.ssl-images-amazon.com/images/G/31/2023/GateWay/December/CC/PC_379x304_1._SY304_CB572341311_.jpg",
      second: "See more",
    },
  ];

  return (
    <div className="main">
      {/* First Section */}
      <div className="main-first-part">
        <div className="main-text-part">
          <h3>Amazon LIVE - Watch, Chat & Shop LIVE</h3>
          <a href="#">See more from Amazon Live</a>
        </div>

        <div className="im-card-part">
          <div className="video-div">
            <img
              src="https://www.betterworldproducts.org/wp-content/uploads/2023/11/Amazon-photography-images-you-need-before-creating-your-listing.jpg"
              alt="Amazon Live"
            />
          </div>

          <div className="card-div">
            <div className="card-scroller">
              {cardData.map((card) => (
                <div key={card.id} className="card-content">
                  <div className="img">
                    <img src={card.src} alt="Product" />
                  </div>
                  <p>{card.first}</p>
                  <h5>{card.second}</h5>
                  <h4>{card.third}</h4>
                  {/* <p>{card.fourth}</p> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="main-sec-part">
        {cardTwoData.map((card) => (
          <div key={card.id} className="sec-card-content">
            <h3 className="sec-head">{card.first}</h3>
            <div className="sec-img">
              <img src={card.src} alt="Trending Product" />
            </div>
            <h5 className="pd-10">{card.second}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagetwo;
