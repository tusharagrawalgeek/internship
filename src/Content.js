import React, { useEffect, useState } from "react";
import arrow1 from './img/Arrow 1.png';
import arrow2 from './img/Arrow 2.png';
import star4 from './img/Star 4.png';
import {products1,products2,products3} from "./products";
import arrow from "./img/Vector.png";
function Content(){
    const [state,setState]=useState({
        category:"accessories",
        data:products1,
        num:0

    });
    function handleClick(e){
        const obj=e.target;
        setState({...state,category:obj.name,data:null});
    }
    function randomapi(){
        var num=Math.floor(3*Math.random());
        console.log(num);
       return num
    }
    useEffect(()=>{
        // const res=[];
        console.log(state.data);
        if(state.data===null){
            var num=randomapi();
            while(num===state.num){
                num=randomapi();
            }
            if(num===0)
            setState({...state,data:products1,num:0})
            if(num===1)
            setState({...state,data:products2,num:1})
            if(num===2)
            setState({...state,data:products3,num:2})
        }
        // if(randomapi())
    },[state])
    return(
        <>
            <div style={{padding:"70px 0 70px 80px",}}>
                <div className="div4">
                    New products
                    <button style={{float:"right", outline:"none", border:"none", background:"none", top:"50%",position:"absolute",right:"100px"}}><img src={arrow1}/></button>
                    <button style={{float:"right", outline:"none", border:"none", background:"none", top:"50%",position:"absolute",right:"300px"}}><img src={arrow2}/></button>
                    <img src={star4} width="22px" height="22px" style={{position:"absolute",left:0}}/>
                </div>
                <hr className="hr4"></hr>
                <div style={{padding:"0 50px 0 10px", display:"inline-block",width:"220px", boxSizing:"border-box"}}>
                <button className={state.category==="apparel"?"btn2":"btn1"} name="apparel" onClick={handleClick}>
                    Apparel
                </button><br/>
                <button className={state.category==="accessories"?"btn2":"btn1"} name="accessories" onClick={handleClick}>
                    Accessories
                </button><br/>
                <button className={state.category==="bestseller"?"btn2":"btn1"} name="bestseller" onClick={handleClick}>
                    Best Sellers
                </button><br/>
                <button className={state.category==="sale"?"btn2":"btn1"} name="sale" onClick={handleClick}>
                    50% off
                </button><br/>
                </div>
                <div className="items">
                {state.data&&state.data.map(i=>{
                    return(
                        <div className="card">
                            <div style={{position:"relative"}}>
                        <img src={i.img} height="322px" width="305px" ></img>
                            <div style={{position:"absolute",width:"45px",textAlign:"center",height:"45px", bottom:0, right:0, background:"black"}}>
                                <img src={arrow} style={{marginTop:"30%"}}/>
                                </div>
                        </div>
                        <div className="title">
                            {i.title}
                        </div>
                        <div className="desc">
                            {i.descrption}
                        </div>
                        <div className="price">
                            ${i.price}
                        </div>
                    </div>
                    );
                })}
                    
                    
                </div>
            </div>
        </>
    );
}
export default Content;