import React from 'react'
//import styled from 'styled-components'

const Streak = ( {rect,Active} ) => {
const svgs = []; 

const chunkSize = 5;
const rectLength = rect.length ;
const svgLength = Math.ceil(rectLength / chunkSize);

for(let i=0;i<svgLength;i++){
svgs.push(i)
}
const x = [0,6.5,13,19.5,0]

const rectChunks = [];

for (let i = 0; i < rectLength; i += chunkSize) {
  const chunk = rect.slice(i, i + chunkSize);
  rectChunks.push(chunk);
}
//console.log('rectLength : '+rectLength,'sLength : '+svgLength,'reackchunk : '+ rectChunks)

return svgs.map((svgItem, index) => (
  <svg key={index} {...svgItem} xmlns="http://www.w3.org/2000/svg" width="26" height="30" >
    {rectChunks[index].map((rectItem,index) => (
      <rect {...rectItem} 
       width="5" height="30" 
       fill='#61DAFB' rx='2.5'
        x={x[index]}
        transform={index === 4 ? 'matrix(0.707107 0.707107 -0.622796 0.782384 20.2665 1.83136)' : undefined}
        />
    ))}
  </svg>
));
}
export default Streak
