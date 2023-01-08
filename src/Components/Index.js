import React, { useState } from 'react';

const Index = () => {
          
          const[c,setc]=useState('');
          const[d,setd]=useState('');
          let[e,sete]=useState({
                    n:'',
                    v:''
          });
          let[f,setf]=useState({
                    n:'',
                    v:''
          })
               const mahajan1=(e)=>{
                    setc(e.target.value)
          }
          const mahajan2=(e)=>{
                    
                    sete({n:e.target.value})
          }
          const mahajan3=(e)=>{
                    setf({n:e.target.value})
          }
          const aman1=()=>{
                              var a=[];
                              var a1=c;
                              while(parseInt(a1)){
                                        var b=parseInt(a1%2);
                                        a.push(b)
                                        a1=parseInt(a1/2);
                              }
                              a.reverse();
                              a=a.join();
                              while(a.includes(',')){
                              a=a.replace(',','');
                              }
                    setd(a)
          }
          const aman2=()=>{

                    var a=e.n;
          
                    var l=e.n.length;
          
                    var i;
                    var d=0;
                     for(i=l-1;i>=0;i--){
                              if(a[i]==='1'){

                              d+=Math.pow(2,l-1-i);
                              }
                     }
                     
                     sete({v:d});
                  
          }
          const aman3=()=>{
                    var a = [];
                    var a1 = f.n;
                    while (parseInt(a1)) {
                              var b = parseInt(a1 % 8);
                              a.push(b)
                              a1 = parseInt(a1 / 8);
                    }
                    a.reverse();
                    a = a.join();
                    while (a.includes(',')) {
                              a = a.replace(',', '');
                    }
                    setf({v:a})
                 
          }
          const clear1=()=>{
                    setc('');
                    setd('')
          }
          const clear2=()=>{
                    sete({n:''})
          }
          const clear3=()=>{
                    setf({n:''})
          }
          return (
                    <>
                                        <h1>welcome to code world of sukritan gupta</h1>
                              <div>
                              <h3>Decimal to binary converter</h3>
                              <small>please enter the number in the decimal else you get erroronous value</small>
                                        <input type="text" name="val" value={c} onChange={mahajan1} />
                                        <input type="button" onClick={aman1} value="calculate binary"/>
                                        <button type="button" onClick={clear1}>Clear</button>
                                        <br />
                                        <hr />
                                        <span>Binary:{d}</span>
                                        <hr />
                              </div>
                              <div>
                              <h3>Binary to decimal converter</h3>
                              <small>please enter the value in the binary else you get an erronous value</small>
                                        <input type="text" name="val" value={e.n} onChange={mahajan2} />
                                        <input type="button" onClick={aman2} value="calculate decimal" />
                                        <button type="button" onClick={clear2}>clear</button>
                                        <br />
                                        <hr />
                                        <span>Decimal:{e.v}</span>
                                        <hr />
                              </div>
                              <div>
                              <h3>Decimal to octal</h3>
                              <small>please enter the value in the decimal else you get an erronous value</small>
                                        <input type="text" name="val" value={f.n} onChange={mahajan3}/>
                                        <input type="button"  value="calculate octal" onClick={aman3} />
                                        <button type="button" onClick={clear3}>clear</button>
                                        <br/>
                                        <hr/>
                                        <span>Octal:{f.v}</span>
                                        <hr/>
                              </div>              
                    
                    </>
                    
          
          );
}

export default Index;
