import React, { useState } from 'react';

const Operator = () => {
          const[a,seta]=useState('');
          const[b,setb]=useState('');
          const[c,setc]=useState('');
          const[d,setd]=useState('');
          const cop1=(e)=>{
                    seta(e.target.value);
          }
          const cop2=(e)=>{
                    setb(e.target.value);
          }
          const cop3=(e)=>{
                    setc(e.target.value);
                    
          }
          const click1=()=>{
                    var a1=parseInt(a)
                    var a2=parseInt(b);
                    var f;
                    if(c==='&'){
                           f=a1&a2;   
                    }
                    else if(c==='|'){
                              f=a1|a2;
                    }
                    else if(c==='^'){
                              f=a1^a2;
                    }
                    f=f.toString();
                    setd(f);
                    

          }
          return (
                    <div>
                              <h1>Perform bitwise operation</h1>                            
                              <input type="text"value={a} onChange={cop1}/>
                              <br/>
                              <span>operation:<select onClick={cop3}>
                                        <option value="&">And operation</option>
                                        <option value="|">Or operation</option>
                                        <option value="^">Xor</option>
                              </select> </span> 
                              <br/> 
                              <input type="text"  value={b} onChange={cop2} />
                               <br/> 
                              <button type="button" onClick={click1}>calculate</button>     
                              <br/>
                              <hr/>
                              <span>Answeer in deciaml:{d}</span> 
                              <hr/>
                    </div>
          );
}

export default Operator;
