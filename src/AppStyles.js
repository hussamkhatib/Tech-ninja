import styled from 'styled-components'

export const Main = styled.div`
max-width:75ch;
margin:0 auto;
display:grid;
padding: 0 1em;
@media screen and (min-width: 769px) {
    grid-auto-flow:column;
    grid-template-columns: 5fr 1fr;
    padding: 1em;
}
gap: 1em;   
`
export const StartMain = styled(Main)`
@media screen and (min-width: 769px) {
    grid-template-columns: unset;
}
`

export const colors = ['#e6e6e6','#ECB613','#3C7EBB','#866CC7']
