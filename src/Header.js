import React, { useState } from "react";
import './style.css';
import img1 from './img/Rectangle 30.png';
import img2 from './img/Star 3.png';
import man from './img/man.png';  
import img3 from './img/Star 4.png';  
import arrow from './img/Vector.png';
import lnkd from './img/lnkd.png';
import insta from './img/insta.png';
import twttr from './img/twttr.png';
function Header(){
    const[state,setState]=useState({
        navcursor:""    
    });
    function navhover(e){
        const obj=e.target.getAttribute("name");
        setState(p=>{
            console.log(obj);
            return({
                ...p,
                navcursor:obj
            });
        })
    }
    // function starOn(e){
    //     const obj=e.target.getAttribute("name");
    //     const res= state.navcursor.equals(obj)?"block":"none";
    //     console.log(res);
    //     return res;
    // }
    return(
        
        <>
        {console.log(state.navcursor)}
        <div style={{}}>
            <div style={{
                width:"100%",
                height:"fit-content",
                background: "#1A1A1A",
                whiteSpace:"nowrap",
                display:"inline-block",
                padding:"0 90px 0",
                boxSizing:"border-box"  
            }}>
                <div className="header1" onClick={()=>{location.replace("./index.html")}} style={{paddingLeft:"14px"}}> Free Delivery</div>
                <hr className="verticalhr"/>
                <div className="header1" onClick={()=>{location.replace("./index.html")}} style={{paddingLeft:"14px"}}> Return Policy</div>
                <section style={{display:"inline-block", verticalAlign:"top", float:"right"}}>
                <div className="header1" onClick={()=>{location.replace("./index.html")}} style={{paddingLeft:"14px",marginRight:"35px"}}> Login</div>
                <div className="header1" onClick={()=>{location.replace("./index.html")}} style={{paddingLeft:"14px"}}> Follow US</div>
                <img src={lnkd} width="10px" height="10px" style={{margin:"15px 0px 15px 15px"}}/>
                <img src={twttr} width="10px" height="10px" style={{margin:"15px 0px 15px 15px"}}/>
                <img src={insta} width="10px" height="10px" style={{margin:"15px 0px 15px 15px"}}/>
                </section>
            </div>
            <div style={{
                background:"black",
                width:"100%",
            }}>
                <div style={{
                    display:"inline-block",
                    padding:"0 90px",
                    width:"100%",
                    boxSizing:"border-box",
                    
                }}>
                    <div className="text2">ShopKart</div>
                    <div className="text3">WISHLIST(0) BAG(0)</div>
                </div>
                <hr className="hr2"></hr>
                
                <div style={{
                    display:"inline-block",
                    padding:"0 90px",
                    width:"100%",
                    boxSizing:"border-box",
                    
                }}>
                    <div className="text4" onClick={()=>{location.replace("./index.html")}} >HOME<img src={img3} className="navstar1"/></div>
                    <div className="text4"onClick={()=>{location.replace("./index.html")}}>ABOUT <img src={img3} className="navstar1"/></div>
                    <div className="text4"onClick={()=>{location.replace("./index.html")}}>OUR PRODUCTS <img src={img3} className="navstar1"/>
                    <div className="productList">
                        PRODUCT1<br/>
                        PRODUCT2<br/>
                        PRODUCT3<br/>
                        PRODUCT4
                    </div></div>
                    <div className="text4" onClick={()=>{location.replace("./index.html")}}>CONTACT US <img src={img3} className="navstar1"/></div>
                    
                </div>
            </div>
            <div style={{
                background:"black",
                width:"100%",
                boxSizing:"border-box",
                padding:"0 90px",
                zIndex:"-1",
                // height:"1000px"
            }}>
                <div style={{position:"relative",height:"655px"}}>
                    <div className="text5">Fresh</div>
                    <div className="text6" style={{top:"250px",left:"334px"}}>2022</div>
                    <div className="text5" style={{top:"220px",left:"57px"}}>Look</div>
                    <img src={img2} width="367px" height="372px" style={{position:"absolute", right:"30px", top:"0",zIndex:"1"}}/> 
                    <img src={man} width="432px" height="655px" style={{ position:"absolute", top:"0px",right:"170px",zIndex:"1"}}/>
                    <img src={img1} width="993px" height="355px" style={{ opacity:"50%",position:"absolute", top:"200px",right:"-90px",zIndex:"2"}}/> 
                    <img src={img1} width="993px" height="355px" style={{ opacity:"100%",position:"absolute", top:"200px",right:"-90px",zIndex:"0"}}/>   
                    <div className="text7">OREGON JACKET<br></br>$134</div>
                    <hr className="hr3"></hr>
                    <img src={img3} width="64px" height="90px" style={{position:"absolute", left:"850px", top:"476px",zIndex:"2",padding:0}}></img>
                    <div className="div3" onClick={()=>{location.replace("./index.html")}}>See more <img src={arrow} width="10px" height="10px"/></div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Header;