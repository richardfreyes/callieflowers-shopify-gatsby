import React from "react"
import Layout from "../components/layout"
import { Link, graphql  } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import PreviewCompatibleImage from "../components/preview-compatible-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext;
  console.log('product', product);
  const settings = {
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    // nextArrow: `<FontAwesomeIcon className="fr-slick-next fas fa-chevron-right" icon={faChevronRight}/>`,
    // prevArrow: `<FontAwesomeIcon className="fr-slick-prev fas fa-chevron-left" icon={faChevronRight}/>`,
  };
  return (
    <Layout>
      <div className="product-page-detail">
        <div class="section product-view-content">
          <div class="container">
            <div class="row row-holder">
              <div class="col-lg-5 col-md-5 col-holder">
                <div class="product-view">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: product.images[0]?.originalSrc,
                      alt: `${product.title}`,
                    }}
                  />
                </div>
                <div class="image-view-option">
                  <Slider {...settings}>
                    {product.images && product.images.map((image) => (
                      <div class="image-holder">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: image.originalSrc,
                            alt: `${product.title}`,
                          }}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              <div class="col-lg-7 col-md-7 col-holder">
                <div class="product-desc-holder">
                  <p class="product-title">{product.title}</p>
                  <p class="product-desc">{product.description}</p>
                  <div class="product-add-minus-holder">
                    {product.variants[0].compareAtPrice ? 
                      <div class="f-price">
                        <p>Original Price: <span class="old-price">₱{product.variants[0].compareAtPrice}</span></p>
                        <p class="current-price">Now: ₱{product.variants[0].price}</p>
                      </div>
                      :
                      <div class="f-price">
                        <p class="current-price-not-sale">Price: ₱{product.variants[0].price}</p>
                      </div>
                    }
                    <div class="add-minus">
                      <a href="#"><span class="icon ei-minus-circle-fill"></span></a>
                      <span class="value">0</span>
                      <a href="#"><span class="icon ei-plus-circle-fill"></span></a>
                    </div>
                  </div>
                  <p class="addons-title">Make it Extra Special with our add ons!</p>
                  <div class="addons-carousel">
                    <div class="addons-item item-1">
                      <label for="ProductSelect">
                        <div class="img-holder">
                          <StaticImage src="assets/images/product-detail/addons-1.png" alt="addons" />
                        </div>
                        <p class="addons-name">Happy Birthday Baloon</p>
                        <p class="addons-price">P99.00</p>
                        <input type="checkbox" id="ProductSelect" name="id[]" name="addons"/>
                      </label>
                    </div>
                    <div class="addons-item item-2">
                      <label for="ProductSelect1">
                        <div class="img-holder">
                          <StaticImage src="assets/images/product-detail/addons-2.jpg" alt="addons" />
                        </div>
                        <p class="addons-name">Happy Birthday Baloon</p>
                        <p class="addons-price">P99.00</p>
                        <input type="checkbox" id="ProductSelect1" name="id[]" name="addons"/>
                      </label>
                    </div>
                    <div class="addons-item item-3">
                      <label for="ProductSelect2">
                        <div class="img-holder">
                          <StaticImage src="assets/images/product-detail/addons-3.png" alt="addons" />
                        </div>
                        <p class="addons-name">Happy Birthday Baloon</p>
                        <p class="addons-price">P99.00</p>
                        <input type="checkbox" id="ProductSelect2" name="id[]" name="addons"/>
                      </label>
                    </div>
                    <div class="addons-item item-2">
                      <label for="ProductSelect3">
                        <div class="img-holder">
                          <StaticImage src="assets/images/product-detail/addons-2.jpg" alt="addons" />
                        </div>
                        <p class="addons-name">Happy Birthday Baloon</p>
                        <p class="addons-price">P99.00</p>
                        <input type="checkbox" id="ProductSelect3" name="id[]" name="addons"/>
                      </label>
                    </div>
                    <div class="addons-item item-3">
                      <label for="ProductSelect4">
                        <div class="img-holder">
                          <StaticImage src="assets/images/product-detail/addons-3.png" alt="addons" />
                        </div>
                        <p class="addons-name">Happy Birthday Baloon</p>
                        <p class="addons-price">P99.00</p>
                        <input type="checkbox" id="ProductSelect4" name="id[]" name="addons"/>
                      </label>
                    </div>
                  </div>

                  <a class="btn-add-cart" href="#">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <h1>{product.title}</h1>
      <div>{product.description}</div> */}
    </Layout>
  )
}

export default ProductTemplate