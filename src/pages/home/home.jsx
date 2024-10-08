import React from "react";
import Slider from "../../assets/slider.png";
import product from "../../data/product";
import Rating from "../../assets/icons/rating";
import Discount from "../../assets/discount";
import Btn from "../../ui/btn/btn";
import ShopIcon from "../../assets/icons/shop-icon";

const Home = () => {
  return (
    <div>
      <section className="pt-[20px] pb-[80px]">
        <div className="container">
          <div className="w-[970px] ml-auto">
            <img src={Slider} alt="slider" />
          </div>
        </div>
      </section>
      <section className="pb-[80px]">
        <div className="container">
          <div>
            <h2 className="font-bold text-[36px] text-[var(--text---main)] mb-[40px]">
              Хиты продаж
            </h2>
            <ul className="grid grid-cols-4">
              {product.map((item) => (
                <li
                  key={item.id}
                  className="w-[326px] border-solid border-[1px] border-[var(--card-border)] rounded-bl-[4px] rounded-tl-[4px] p-[20px]"
                >
                  <div>
                    <img src={item.img} alt="img" />
                  </div>
                  <div>
                    <div>
                      <p className="text-[var(--text---grey)] text-[16px] font-medium mb-[10px]">
                        {item.type}
                      </p>
                      <p className="text-[var(--text---main)] text-[20px] font-normal mb-[20px]">
                        {item.text}
                      </p>
                      <div className="mb-[20px]">
                        <Rating />
                      </div>
                    </div>
                    <div className="mb-[20px]">
                      <p className="line-through text-[var(--text---grey)] text-[16px] font-bold">
                        {item.oldPrice}
                      </p>
                      <p className="text-[var(--text---main)] text-[26px] font-bold mb-[5px]">
                        {item.price}
                      </p>
                      <Discount />
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <Btn classN="font-bold text-[16px] text-[var(--blue)] p-[13.5px] w-[228px] rounded-[4px] border-solid border-[1px] border-[var(--blue)]">
                        Купить в 1 клик
                      </Btn>
                      <Btn classN="rounded-[4px] bg-[var(--blue)] p-[17px]">
                        <ShopIcon />
                      </Btn>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
