import React from 'react'
import './hny.css';

const Happynewyear = () => {
  
  //   const getCovidData = async () => {
  //      try{
  //          const res = await fetch('https://data.covid19india.org/data.json');   
  //          const actualData =  await res.json();
  //          console.log(actualData.statewise[0]);
  //       } catch (err)  {
  //           console.log(err);
  //       }
  //   }

  // useEffect(()=> {
  //   // getCovidData();
  // }, []);
  
  
    return (
    <>
  <div class="card" >
  
  <div class="front">
      <div id='t' class="text">Happy New year</div>
      <div class="year">
          <span>202</span>
          <span class="two">2</span>
          <span class="three">&nbsp; 3</span>
          <div class="bal"></div>
      </div>
      <div class="firework1">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
          <div class="circle5"></div>
      </div>
      <div class="firework2">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
          <div class="circle5"></div>
      </div>
      <div class="firework3">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
          <div class="circle5"></div>
      </div>
      <div class="firework4">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
          <div class="circle5"></div>
      </div>
     
  </div>
</div>
    </>
  )
}
export default Happynewyear
