import React,{ useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Card from "../Props/Card";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { PiListChecksFill } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Card2 from "../Props/Card2";
import foodcard from "../../assets/salad2.png";
import CardChef from "../Props/CardChef";
import { dataSlide } from "../Props/dataSlide";

const Menu = () => {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="Pmenu" id="menu">
      <div className="container">
        <h1 className="h1">
          Why <span>Foodie's</span>
        </h1>
        <div className="cards">
          <Card
            icon={<PiListChecksFill className="iconCard" />}
            description="Easy To Order"
          />
          <Card
            icon={<TbTruckDelivery className="iconCard" />}
            description="Fastes Delivery"
          />
          <Card
            icon={<BsFillCheckSquareFill className="iconCard" />}
            description="Best Quality"
          />
        </div>
        <div className="bigCard">
          <img
            className="bigImg"
            src="https://images.pexels.com/photos/14481599/pexels-photo-14481599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="bigDesc">
            <h3>OVERVIEW</h3>
            <h2>A Little Information For Our Guest</h2>
            <p className="firstLittleDesc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              dicta saepe itaque ea perspiciatis enim non porro, eos tenetur
              distinctio. Aliquam aperiam nobis dolorem earum illo ullam sint
              cumque ipsum.
            </p>
            <div>
              <div className="littleDesc">
                <div className="LittleNumber">
                  <p>15k+</p>
                  <p>Happy Customer</p>
                </div>
                <div className="LittleNumber">
                  <p>10+</p>
                  <p>Award Win</p>
                </div>
                <div className="LittleNumber">
                  <p>30+</p>
                  <p>Food Menu</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="littlMenu">
          <div className="littlMenuHead">
            <h1>
              <span>Trending</span> Recipes
            </h1>
            <a href="#">
              <button className="btnOrange btnSee">
                See All <BsArrowRight className="btnSeeIcon" />
              </button>
            </a>
          </div>
          <div className="littleMenuBody">
            <Card2
              img={foodcard}
              title="aaaa"
              price="$20"
              description="Vegan Sweet And Chickpea Curry"
              icon={<AiOutlineShoppingCart />}
            />
            <Card2
              img={foodcard}
              title="aaaa"
              price="$20"
              description="Vegan Sweet And Chickpea Curry"
              icon={<AiOutlineShoppingCart />}
            />
            <Card2
              img={foodcard}
              title="aaaa"
              price="$20"
              description="Vegan Sweet And Chickpea Curry"
              icon={<AiOutlineShoppingCart />}
            />
          </div>
        </div>
        <div className="collection">
          <div className="collectionHead">
            <h1>
              <span>Top </span>Collection
            </h1>
            <span className="headSpan">
              All our best meals in one delicious snap
            </span>
          </div>
          <div className="swiperr">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://img.freepik.com/free-photo/sweet-potato-falafel-recipe-idea-vegan_53876-126682.jpg?w=1060&t=st=1689806755~exp=1689807355~hmac=670c46460fd290c5db9fe1788a45cea7b3f12a2140d92acb18012ff92a7f4ecb" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://img.freepik.com/free-photo/grilled-chicken-rice-spicy-chickpeas-avocado-cabbage-pepper-buddha-bowl_127032-1996.jpg?w=740&t=st=1689806912~exp=1689807512~hmac=addc228a14d850daf7c185781e33eb658525436d263a98558ee182a31b6a1fe6" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://img.freepik.com/free-photo/thai-food-tom-yum-kung-river-prawn-spicy-soup_1150-35451.jpg?w=1060&t=st=1689807039~exp=1689807639~hmac=add5fef00d24e31aee0b6780ac89b138b04f772d546c42926c531a33aa35270c" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://img.freepik.com/free-photo/fried-squid-calamari-rings_1339-4721.jpg?w=1060&t=st=1689807073~exp=1689807673~hmac=bb27a3c92f9b2ecd33b3687eceb012f8b133e9f94c549ae85ead3637fc4c4658" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://img.freepik.com/free-photo/mexican-tacos-with-beef-tomato-sauce-salsa_2829-14159.jpg?w=1060&t=st=1689807137~exp=1689807737~hmac=7f90f0933089a33d6ec5513f60351130ca7dfd811e1c2bd446a086e52038e92e" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://img.freepik.com/free-photo/fresh-sandwich-cutting-board-with-healthy-tomatoes-generative-ai_188544-8108.jpg?w=1060&t=st=1689807168~exp=1689807768~hmac=29863bc61b7c4fb6d9f78a5abbf67c84f177ddabbdfbaebf900850ce29560ef5" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="meetChefs">
          <div className="meetChefsHead">
            <h1>Meet Our Chefs</h1>
            <button className="btnOrange btnSee">
              See All <BsArrowRight className="btnSeeIcon" />
            </button>
          </div>
          <div className="chefs">
            <CardChef
              img="https://img.freepik.com/free-photo/chef-making-ok-sign-white-background_1368-2804.jpg?w=740&t=st=1689807825~exp=1689808425~hmac=80f474d557071a851e72a7ffde690ebeb10ce6546fa135010f6dd378cd628380"
              name="Axsel James"
            />
            <CardChef
              img="https://img.freepik.com/free-photo/happy-young-cook-uniform-holding-salad_171337-5342.jpg?w=1060&t=st=1689807840~exp=1689808440~hmac=2233761b3c9cd4f53fb43d51f1485e731232398bffb7f2ac8a232d9b473957bf"
              name="Hudson Lee"
            />
            <CardChef
              img="https://img.freepik.com/free-photo/portrait-smiling-chef-uniform_329181-675.jpg?w=1060&t=st=1689807853~exp=1689808453~hmac=55a6e0ff27889df90839ad6941242f13d39910d557b8df29abaccfc118c383d4"
              name="Oliver James"
            />
            <CardChef
              img="https://img.freepik.com/free-photo/cook-preparing-salad-with-meat-kitchen_23-2148040159.jpg?w=1060&t=st=1689807867~exp=1689808467~hmac=521f531fabb5493aa34c459718288026f04effa6983c0352db65e21457902ff9"
              name="Beau Jack"
            />
          </div>
        </div>

        <div className="testimonials">
          <div className="Thead">
            <p>TESTIMONIALS</p>
            <h1>
              What's our <span>client say</span>
            </h1>
          </div>
         
           <div className="a">
            
           </div>
       <Carousel responsive={responsive}>
       {dataSlide.map((item)=>(
           <div className="sliderss">
                <div className="leftSide">
                  <img src={item.img} alt="" />
                </div>
                <div className="RighttSide">
                  <h1>{item.name}</h1>
                  <p>{item.say}</p>
                  <p>{item.Job}</p>
                </div>
            </div>
          ))}
</Carousel>
        </div>
      </div>
    </div>
  );
};

export default Menu;
