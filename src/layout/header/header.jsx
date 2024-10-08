import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import Search from "./components/search";
import Btn from "../../ui/btn/btn";
import SearchIcon from "../../assets/icons/search-icon";
import EyeIcon from "../../assets/icons/eye-icon";
import CatalogBtnIcon from "../../assets/icons/catalog-btn-icon";
import category from "../../data/category";
import CatalogIcon from "../../assets/icons/catalog-icon";

const Header = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  const toggleCatalog = () => {
    setIsCatalogOpen(!isCatalogOpen);
  };

  return (
    <div className="bg-white">
      <div className="container">
        <div className="py-[10px] flex items-center justify-between">
          <a className="block" href="#">
            <img src={Logo} alt="img" />
          </a>
          <div className="flex items-center content-between gap-[58px]">
            <div className="flex items-center gap-[20px]">
              <p className="font-medium text-[16px] text-[var(--text---main)]">
                +7 (812) 660-50-54
              </p>
              <p className="font-medium text-[16px] text-[var(--text---main)]">
                +7 (812) 660-50-54
              </p>
              <p className="font-medium text-[16px] text-[var(--text---grey)]">
                Пн-вс: с 10:00 до 21:00
              </p>
            </div>
            <div className="flex items-center gap-[20px]">
              <div className="flex items-center gap-[8px]">
                <form className="relative">
                  <Search />
                  <Btn
                    type="submit"
                    classN="absolute top-[50%] left-[5%] translate-y-[-50%]"
                  >
                    <SearchIcon />
                  </Btn>
                </form>
                <div className="flex items-center">
                  <EyeIcon />
                  <EyeIcon />
                  <EyeIcon />
                </div>
              </div>
              <Btn classN="w-[99px] rounded-[4px] bg-[var(--dark-blue)] font-medium text-[16px] text-white py-[16px] px-[26px]">
                Войти
              </Btn>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--menu-blue)]">
        <div className="container">
          <div className="flex items-center gap-[24px] relative">
            <Btn
              startIcon={<CatalogBtnIcon />}
              classN="w-[310px] py-[20px] px-[20px] bg-[var(--dark-blue)] font-medium text-[16px] text-white flex items-center gap-[10px]"
              onClick={toggleCatalog}
            >
              Каталог товаров
            </Btn>
            {isCatalogOpen && (
              <ul className="transition-all rounded-b-[4px] bg-[var(--light-blue)] w-[310px] py-[8px] absolute translate-y-[56.7%]">
                {category.map((item) => (
                  <li
                    className="flex items-center gap-[10px] py-[8px] px-[18px] cursor-pointer hover:bg-[#dae4ed]"
                    key={item.id}
                  >
                    <div>
                      <CatalogIcon />
                    </div>
                    <p>{item.title}</p>
                  </li>
                ))}
              </ul>
            )}
            <ul className="flex items-center gap-[40px] py-[22px]">
              <li>
                <p className="text-[16px] font-medium text-white">О компании</p>
              </li>
              <li>
                <p className="text-[16px] font-medium text-white">Акции</p>
              </li>
              <li>
                <p className="text-[16px] font-medium text-white">
                  Рассрочка 0|0|18
                </p>
              </li>
              <li>
                <p className="text-[16px] font-medium text-white">
                  Сервис и гарантия
                </p>
              </li>
              <li>
                <p className="text-[16px] font-medium text-white">
                  Опт/дропшиппинг
                </p>
              </li>
              <li>
                <p className="text-[16px] font-medium text-white">Контакты</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
