import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../Context/Context";
import "./Homepage.css";
import masterClass1 from "../../assets/images/8.jpg";
import masterClass2 from "../../assets/images/9.jpg";
import DivaTvpowerwomen from "../../assets/images/Diva TV.jpg";
import businesswomen2 from "../../assets/images/businesswomen2.jpg";
import businesswomen3 from "../../assets/images/businesswomen3.jpg";

const Homepage = () => {
  const { categories, dispatch } = useData();

  return (
    <>
      <div className="hero-section">
        <div className="hero-text">
          <p className="hero-text-primary">
            Diva TV is a leading online community for all makeup , fashion and beauty enthusiasts !
          </p>
          <p className="hero-text-secondary">
          Get amazing beauty,styling  and fashion tips from your favourite celebs!
          </p>
          <Link
            className="btn btn-outline-primary hero-cta-btn links"
            to="/videos"
          >
            Explore
          </Link>
        </div>
      </div>
      <div className="categories-section flex-vt">
        {categories.map((category) => {
          if (category.categoryName === "Makeup") {
            return (
              <div className="category flex-hz jc-sa">
                <img
                  className="category-img"
                  src={category.img}
                  alt="category-img"
                />
                <div>
                  <p className="category-text text-md w-30">
                    {category.description}
                  </p>
                  <Link to="/videos">
                    <button
                      class="btn btn-secondary-info category-btn"
                      onClick={() =>
                        dispatch({
                          type: "SET_SELECTED_CATEGORY",
                          payload: "Makeup",
                        })
                      }
                    >
                      Explore more
                    </button>
                  </Link>
                </div>
              </div>
            );
          } else if (category.categoryName === "Fashion") {
            return (
              <div className="category flex-hz jc-sa">
                <div>
                  <p className="category-text text-md w-30">
                    {category.description}
                  </p>
                  <Link to="/videos">
                    <button
                      class="btn btn-secondary-info category-btn"
                      onClick={() =>
                        dispatch({
                          type: "SET_SELECTED_CATEGORY",
                          payload: "Fashion",
                        })
                      }
                    >
                      Explore more
                    </button>
                  </Link>
                </div>
                <img
                  className="category-img"
                  src={category.img}
                  alt="category-img"
                />
              </div>
            );
          }
        })}
      </div>
      <img src={DivaTvpowerwomen} className="power-women"/>
      <div className="special-category-container flex-vt">
        <p className="category-title">
          Trending makeup masterclasses right now!
        </p>
        <div className="flex-hz">
        <Link to='/videos'> <img className="masterclass-img" src={masterClass1} onClick={()=>dispatch({type:'SET_SELECTED_CATEGORY',payload:'Makeup MasterClass'})}/></Link> 
        <Link to='/videos'>   <img className="masterclass-img" src={masterClass2} onClick={()=>dispatch({type:'SET_SELECTED_CATEGORY',payload:'Makeup MasterClass'})}/></Link>
        </div>
      </div>
      <div className="categories-section flex-vt">
        {categories.map((category) => {
          if (category.categoryName === "Haircare") {
            return (
              <div className="category flex-hz jc-sa">
                <img
                  className="category-img"
                  src={category.img}
                  alt="category-img"
                />
                <div>
                  <p className="category-text text-md w-30">
                    {category.description}
                  </p>
                  <Link to="/videos">
                    <button
                      class="btn btn-secondary-info category-btn"
                      onClick={() =>
                        dispatch({
                          type: "SET_SELECTED_CATEGORY",
                          payload: "Haircare",
                        })
                      }
                    >
                      Explore more
                    </button>
                  </Link>
                </div>
              </div>
            );
          } else if (category.categoryName === "Skincare") {
            return (
              <div className="category flex-hz jc-sa">
                <div>
                  <p className="category-text text-md w-30">
                    {category.description}
                  </p>
                  <Link to="/videos">
                    <button
                      class="btn btn-secondary-info category-btn"
                      onClick={() =>
                        dispatch({
                          type: "SET_SELECTED_CATEGORY",
                          payload: "Skincare",
                        })
                      }
                    >
                      Explore more
                    </button>
                  </Link>
                </div>
                <img
                  className="category-img"
                  src={category.img}
                  alt="category-img"
                />
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
export { Homepage };
