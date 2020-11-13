import React from 'react'
//import styled from 'styled-components'

const Streak = ({ curStreak }) => {
 
    
const totalSvg = Math.ceil(curStreak/5);

let menuItems = [];
let rectItems = [];
for (var i = 0; i < 3; i++) {
    menuItems.push(<svg key={i}>
        {rectItems.push(<rect></rect>)}
    </svg>);
}

    return (
      <div>
        {menuItems}
      </div>
    )
}

export default Streak
