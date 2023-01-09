import React from 'react';
import {
          Link
} from "react-router-dom";
import Routers from './Routers';
const Navbar = () => {
          return (
                    <div>
                              <nav>
                                        <ul>
                                                  <li><Link to="/Mahajan-Number-Conveter">Home</Link></li>
                                                  <li><Link to="/cal">Stack operation</Link></li>
                                        </ul>
                              </nav>
                    <Routers/>
                    </div>
          );
}

export default Navbar;
