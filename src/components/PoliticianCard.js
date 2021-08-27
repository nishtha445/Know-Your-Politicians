import React from 'react'

const PoliticianCard=({menuData})=> {
    return (
        <>
        <section className="main-card--cointainer"> 
        {menuData.map((curElem)=>{
            const {id,name,party,image,age,constituency,description}=curElem
            return(
                <>

            <div className="card-container" key={id}>
            <div className="card">
            <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
              
                <h2 className="card-title">{name}</h2>
                <span className="card-author subtle" style={{fontWeight:'bold'}}>Party: {party}</span>
                <span className="card-author subtle" style={{fontWeight:'bold'}}>Age: {age}</span>
                <span className="card-author subtle" style={{fontWeight:'bold'}}>Constituency: {constituency}</span>
                <br/>
                <span className="card-description subtle">
                    {description}
                </span>
            <div className="card-read">Read</div>
            </div>
            <img src={image} alt="images" className="card-media"></img>
            
        </div>
        </div>     
            </>
            );
        })}
        </section>
        </>
    );
};


export default PoliticianCard
