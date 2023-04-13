import React from "react";
import css from "../styles/Services.module.css";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";

const Services = () => {
  return (
    <>
      <div className={css.heading}>
        <span>What we serve</span>
        <span>Your favorite</span>
        <span>Delivery Partner</span>
      </div>

      {/* features */}

      <div className={css.services}>
        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s1} alt="" objectFit="cover" layout="intrinsic" />
          </div>

          <span>Easy to order</span>
          <span>With our easy online ordering and quick delivery, enjoying delicious pizza has never been easier.</span>
        </div>

        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s2} alt="" objectFit="cover" layout="intrinsic" />
          </div>

          <span>Easy to order</span>
          <span>Made to order and cooked to perfection, our pizzas are sure to leave you coming back for more.</span>
        </div>

        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s3} alt="" objectFit="cover" layout="intrinsic" />
          </div>

          <span>Easy to order</span>
          <span>We believe in quality over quantity, which is why each pizza is carefully handcrafted with attention to detail.</span>
        </div>
      </div>
    </>
  );
};

export default Services;
