import React from 'react';
import {

          Routes,
          Route,

} from "react-router-dom";
import Index from './Index';
import Cal from './Cal';
const Routers = () => {
          return (
                    <>
                              <Routes>
                                        <Route path="/cal" element={<Cal />} />
                                        <Route path="/Mahajan-Number-Conveter" element={<Index />} />
                                        
                              </Routes>
                    </>
          );
}

export default Routers;
