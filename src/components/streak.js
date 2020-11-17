import React from 'react'
import { StreakHeading,Wrapper } from './streakStyles'
import styled from 'styled-components'

const Streak = ({ rect,Active }) => {
  const SvgContainer = styled.svg`
  padding:  0.2em;
  align-items: center;`
  
  const SvgDiv = styled.div`
  border: 1px solid ${Active};
    min-width: 120px;
    height: 40px;
    border-radius: 4px;
    display: flex;`

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

return (
  <Wrapper>
  <StreakHeading>streak</StreakHeading>
  <SvgDiv>
  {svgs.map((svgItem, index) => (
  <SvgContainer key={index} {...svgItem} xmlns="http://www.w3.org/2000/svg" width="26" height="30" >
    {rectChunks[index].map((rectItem,index) => (
      <rect key={index} {...rectItem} 
       width="5" height="30" 
       fill={Active} rx='2.5'
        x={x[index]}
        transform={index === 4 ? 'matrix(0.707107 0.707107 -0.622796 0.782384 20.2665 1.83136)' : undefined}
        />
    ))}
  </SvgContainer>
  ))}
  </SvgDiv>
</Wrapper>
 )
}
export default Streak
