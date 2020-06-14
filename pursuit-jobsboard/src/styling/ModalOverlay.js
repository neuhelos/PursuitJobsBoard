import styled from 'styled-components'

export const ModalOverlay = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 30;
    align-items: center;
    justify-content: center;
    opacity: ${props => props.opacity};
    background-color: rgba(255, 255, 255, 0.75)
`