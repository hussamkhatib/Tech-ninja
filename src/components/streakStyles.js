import styled from 'styled-components'

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
@media screen and (max-width: 769px) {
grid-column:2;
grid-row:1;
}`
export const StreakHeading = styled.p`
text-align:center;
font-size: .75em;
padding: 0.4em 0 0.2em 0;
`

//rank

export const RankHeading = styled(StreakHeading)``;

//lives
export const SvgHeading = styled(StreakHeading)``;

//powerups

export const PowerupsHeading = styled(StreakHeading)``;