import React, { useRef, useState, useEffect } from 'react';

import chevronRight from './assets/svg/chevron-right2.svg';

import womanInYellow from './assets/png/womaninyellow.png';
import hoodie from './assets/png/hoodie.png';
import hoodie2 from './assets/png/hoodie2.png';
import jean from './assets/png/jean.png';
import ProductItem from './components/ProductItem';

function App() {
  const productsRef = useRef(null);
  const [showProductsNavigation, setShowProductsNavigation] = useState(true);

  const scrollHorizontally = (direction = 'right') => {
    const element = productsRef.current;
    let elementWidth = element.scrollWidth / (element.childElementCount - 1);

    if (direction === 'left') {
      elementWidth *= -1;
    }

    element.scroll({
      left: element.scrollLeft + elementWidth,
      behavior: 'smooth',
    });
  };

  const onResize = () => {
    if (productsRef && productsRef?.current) {
      const element = productsRef.current;
      setShowProductsNavigation(() => element.clientWidth < element.scrollWidth);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', onResize, true);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [productsRef]);

  return (
    <section className="section">
      <div className="section-left">
        <img src={womanInYellow} alt="woman in yellow" />
      </div>
      <div className="section-right">
        <h1 className="title">Everyday items, we have something to suit every occasion.</h1>
        <p className="subtitle">
          At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit
          tincidunt semper eu proin leo gravida cursus.
        </p>
        <div className="action-wrapper">
          <a href="/#" className="action">Shop All Everyday Items</a>
        </div>
        <div className="products-wrapper">
          {showProductsNavigation && (
            <button type="button" className="btn-previous" onClick={() => scrollHorizontally('left')}>
              <img src={chevronRight} alt="chevron-left" />
            </button>
          )}
          <div ref={productsRef} className="products">
            <ProductItem image={hoodie} name="365 Signature Hoodie" price={33.95} />
            <ProductItem image={jean} name="Organic Skinny High Waist Jeans" price={33.95} />
            <ProductItem image={hoodie2} name="Organic Skinny High Waist Jeans" price={33.95} />
            <div className="product-end">&nbsp;</div>
          </div>
          {showProductsNavigation && (
            <button type="button" className="btn-next" onClick={() => scrollHorizontally('right')}>
              <img src={chevronRight} alt="chevron-right" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default App;
