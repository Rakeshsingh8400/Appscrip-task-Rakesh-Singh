export const Card=({amount,img,checkoutHandler})=>{
return(
    <div>
        <img src={img} alt=""/>
        <h1>{amount}</h1> 
        <button onClick={()=>checkoutHandler(amount)}>Buy Now</button>
    </div>
)
}