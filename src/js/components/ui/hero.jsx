import React from 'react';

const Hero = ({heroData, heroClicked}) =>{
    console.log(heroData);
    return <div onClick={()=>heroClicked(heroData.id)} style={{ margin:'20px', width:'220px', height:'220px', background: '#f1f1f1', display:'flex', flexDirection:'column' }} key={heroData.id} >
            <img 
                style={{ width:'200px', height:'200px', margin: '10px'}} 
                src={ `${heroData.thumbnail.path}.${heroData.thumbnail.extension}`} 
                alt=""
            />
            <div style={{ padding: '5px', fontSize:'18px'}}>
                {heroData.name}
            </div>
              
        </div>
    
}
export default Hero;
