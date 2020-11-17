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


export const colors = ['#e6e6e6','#61DAFB','#ECB613','#866CC7','#3C7EBB','orangered','hotpink','brown']