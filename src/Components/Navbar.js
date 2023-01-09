import React from 'react';
import {
          Link
} from "react-router-dom";
import Routers from './Routers';
const Navbar = () => {
          return (
                    <div>
                              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                        <div className="container-fluid">
                                                  <a className="navbar-brand" href="/Mahajan-Number-Conveter">Mahajan coding wallah</a>
                                                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                            <span className="navbar-toggler-icon"></span>
                                                  </button>
                                                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                                      <li className="nav-item">
                                                                                <Link className="nav-link" to="/Mahajan-Number-Conveter">Home</Link>  
                                                                      </li>
                                                                      <li className="nav-item">
                                                                                <Link className="nav-link" to="/cal">Stack operation</Link>
                                                                      </li>
                                                                      <li className="nav-item">
                                                                                <Link className="nav-link" to="/oper">Bitwise operation</Link>
                                                                      </li>

                                                                     </ul>
                                                  </div>
                                        </div>
                              </nav>
                    <Routers/>
                    </div>
          );
}

export default Navbar;
