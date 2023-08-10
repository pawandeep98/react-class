import React from 'react'

function CardModel(props) {
 
    let {title , totaltest, value }= props;
  return (
    <>
     <div className='cardd'>
               <h3>
               {title}
               </h3>
               <p>
                {totaltest} Test Included
                </p>
                <hr/>
               <p>Mrp ${value }</p>

               <button>Add To Cart</button>
     </div>
    </>
  )
}

export default CardModel