import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {
  Row, Col, Container,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import useViewportSize from 'hooks/ViewportSize';
import sidemenus from 'constants/Sidemenu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const routerStore = useSelector((store) => store.router);
  const viewportSize = useViewportSize();
  const location = useLocation();

  const toggleMenu = () => setShowMenu((show) => !show);

  return (
    <>
      <Container className="navigation py-4">
        <Row className="content">
          <Col xs={5} xl={3}>
            <div className="logo-wrapper d-flex align-items-center">
              <Link to="/">
                <h4 className="me-3 fira-mono">
                  &lt;
                  <span className="text-primary">Samuel</span>
                  /&gt;
                </h4>
              </Link>
            </div>
          </Col>
          <Col xs={7} xl={{ span: 6, offset: 3 }}>
            {
              viewportSize.isDesktop && (
                <div className="menu-wrapper fira-mono d-flex justify-content-around">
                  {
                    sidemenus.map((menu) => (
                      <div className={`menu text-center ${routerStore.location.pathname === menu.url || location.pathname === menu.url ? 'active' : null}`} key={menu.title}>
                        <Link to={menu.url}>
                          <p className="text-capitalize">
                            &lt;
                            {menu.title}
                            /&gt;
                          </p>
                        </Link>
                      </div>
                    ))
                  }
                </div>
              )
            }
            {
              viewportSize.isMobile && (
                <div className="menu-wrapper px-3">
                  <div className="menu text-end" onClick={toggleMenu} role="presentation">
                    {
                      showMenu
                        ? <FontAwesomeIcon icon="times" size="lg" />
                        : <FontAwesomeIcon icon="bars" size="lg" />
                    }
                  </div>
                </div>
              )
            }
          </Col>
        </Row>
      </Container>
      {
        viewportSize.isMobile && (
          <div className={`sidemenu ${showMenu ? 'show' : ''}`}>
            {
              sidemenus.map((menu) => (
                <Link to={menu.url} onClick={toggleMenu} key={menu.title}>
                  <Row key={menu} className="menu py-3 border-bottom">
                    <Col className="text-center">
                      <p className="text-capitalize">
                        <b>{menu.title}</b>
                      </p>
                    </Col>
                  </Row>
                </Link>
              ))
            }
          </div>
        )
      }
    </>
  );
};

export default Navbar;
