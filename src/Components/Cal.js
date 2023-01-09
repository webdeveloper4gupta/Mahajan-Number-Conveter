import React, { useState } from 'react';

const Cal = () => {
          const[a,seta]=useState({
                    n:'',
                    v:''
          })
          const set1=(e)=>{
                    seta({n:e.target.value})
          }
          const cal=(expr)=>{
                    let stack=[];
                   
                    var i;
                    for(i=0;i<expr.length;i++){
                              if(expr[i]==='(' ||expr[i]==='[' || expr[i]==='{'){
                                        stack.push(expr[i]);
                                        continue;
                              }
                              if(stack.length===0){
                                        return false;
                              }
                              var c;
                              switch(expr[i]){
                                        case ')': c=stack.pop();
                                        if(c==='{' || c==='['){
                                                  return false;
                                        }
                                        break;
                                        case ']':c=stack.pop();
                                        if(c==='{' || c==='('){
                                                  return false;
                                        }
                                        break;
                                        case '}':c=stack.pop()
                                        if(c==='[' || c==='('){
                                                  return false;
                                        }
                                        break;
                              }
                              if(stack.length===0){
                                        return true;
                              }
                    }
          }
          const cal1=()=>{
                    var b=cal(a.n);
                    if(b===true){
                              seta({v:'true'});
                    }
                    else{
                              seta({v:'false'})
                    }
                  
                    
          }
          const clear1=()=>{
                    seta({n:''})
          }
          return (
                    <>
                              <h1>welcome to stack operations</h1>
                    <div>
                              <h3>Enter the expression for check wheather it is balanced or not</h3>
                              <input type="text" value={a.n} onChange={set1}/>
                              <input type="button"  value="check" onClick={cal1}/>
                              <button type="button" onClick={clear1}>clear</button>
                              <br/>
                              <hr/>
                              <span>Answer:{a.v}</span>
                              <hr/>
                    </div>
                    {/* <div>
                              <h3>convert infix to postfix:</h3>

                    </div> */}
                    </>
          );
}

export default Cal;
