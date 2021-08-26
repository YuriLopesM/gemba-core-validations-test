import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    margin: 0 auto;

    h1 {
        font-size: 2rem;
        margin-bottom: 1.5rem;

    }

    input {
        background: var(--neutral_200);
        border: 1px solid var(--neutral_400);
        border-radius: 0.5rem;
        padding: 0.75rem 0.5rem;
        width: 24rem;
        margin-bottom: 1rem;

        ::placeholder {
            color: var(-neutral_400)
        }
    }
    
    button {
        padding: 0.75rem 1rem;
        width: 24rem;
        
        font-size: 1rem;
        font-weight: 500;
        
        color: var(--white);
        background: var(--accent);
        border: none;
        border-radius: 0.5rem;
        
        transition: 0.2s filter ease-in;

        &:hover {
            filter: brightness(0.8);
        }
    }

`