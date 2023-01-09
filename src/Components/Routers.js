import React from 'react';
import {

          Routes,
          Route,

} from "react-router-dom";
import Index from './Index';
import Cal from './Cal';
import Operator from './Operator';
const Routers = () => {
          return (
                    <>
                              <Routes>
                                        <Route path="/cal" element={<Cal />} />
                                        <Route path="/Mahajan-Number-Conveter" element={<Index />} />
                                        <Route path="/oper" element={<Operator />} />
                              </Routes>
                    </>
          );
}

export default Routers;
