export default function Offcanvas() {
  return (
    <>
      <div className="fix-area">
        <div className="offcanvas__info style-2">
          <div className="offcanvas__wrapper">
            <div className="effect-style" />
            <div className="offcanvas__content">
              <div className="offcanvas__top d-flex justify-content-between align-items-center">
                <div className="mycustom-marque style-3">
                  <div className="scrolling-wrap">
                    {[1, 2, 3].map((comm) => (
                      <div className="comm" key={comm}>
                        <div className="text-center">
                          Light mode coming soon on store
                        </div>
                        <div className="text-center">
                          Visit store to get more templates
                        </div>
                        <div className="text-center">
                          Light mode coming soon on store
                        </div>
                        <div className="text-center">
                          Visit store to get more templates
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="offcanvas__close">
                  <button className="close-btn">close</button>
                </div>
              </div>
              <div className="mobile-menus" />
              <ul className="social-text">
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Dribbble</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay" />
    </>
  );
}


