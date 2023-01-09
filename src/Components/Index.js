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
          });
          let[v,setv]=useState({
               n:'',
               ans:''
          });
          let[b,setb]=useState({
               n:'',
               v:''
          });
          let[k,setek]=useState({
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
          const mahajan4=(e)=>{
               setv({n:e.target.value})
          }
          const mahajan5=(e)=>{
               setb({n:e.target.value});
          }
          const mahajan6=(e)=>{
               setek({n:e.target.value})
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
          const aman4=()=>{
               let number =Number(v.n);
               let hexStr = number.toString(16);
               setv({ans:hexStr})
          }
          const aman5=()=>{
               let number=(b.n);
               let oct=parseInt(number,8);
               setb({v:oct})
          }
          const aman6=()=>{
               let number=k.n;
               let hex=parseInt(number,16);
               setek({v:hex});
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
          const clear4=()=>{
               setv({n:''})
          }
          const clear5=()=>{
               setb({n:''})
          }
          const clear6=()=>{
               setek({n:''})
          }
          return (
                    <>
                                        <h1>welcome to code world </h1>
                              <div>
                              <h3>Decimal to binary converter</h3>
                              <small>please enter the number in the decimal that is in 0-9 else you get erroronous value</small>
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
                              <small>please enter the value in the binary that is iin 1 or 0 else you get an erronous value</small>
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
                              <small>please enter the value in the decimal that is in 0-9 else you get an erronous value</small>
                                        <input type="text" name="val" value={f.n} onChange={mahajan3}/>
                                        <input type="button"  value="calculate octal" onClick={aman3} />
                                        <button type="button" onClick={clear3}>clear</button>
                                        <br/>
                                        <hr/>
                                        <span>Octal:{f.v}</span>
                                        <hr/>
                              </div>              
                            <div>
                              <h3>Decimal to Hexadecimal</h3>
                              <small>please enter the value in the decimal else may be you get an erronous value 0-9</small>
                              <input type="text"  value={v.n} onChange={mahajan4}/>
                              <input type="button"  value="calculate heaxdecimal" onClick={aman4}/>
                              <button type="button" onClick={clear4}>clear</button>
                              <br/>
                              <hr/>
                              <span>Hexal:{v.ans}</span>
                              <hr/>
                            </div>
                            <div>
                              <h3>Octal to dexicmal</h3>
                              <small>please enter the input in octal that is in between 0-7</small>
                              <input type="text" value={b.n} onChange={mahajan5}/>
                              <input type="button" onClick={aman5} value="calculate decimal"/>
                              <button type="button" onClick={clear5}>clear</button>
                              <br/>
                              <hr/>
                              <span>Decimal:{b.v}</span>
                              <hr/>
                            </div>
                            <div>
                              <h3>Hexadecimal to Decimal</h3>
                              <small>please enter the number in hexdecimal that is 0-9 a-f else may be you get error</small>
                              <input type="text"  value={k.n} onChange={mahajan6}/>
                              <input type="button" onClick={aman6} value="calculate decimal"/>
                              <button type="button" onClick={clear6}>clear</button>
                              <br/>
                              <hr/>
                              <span>Decimal:{k.v}</span>
                              <hr/>
                            </div>
                    </>
                    
          
          );
}

export default Index;
