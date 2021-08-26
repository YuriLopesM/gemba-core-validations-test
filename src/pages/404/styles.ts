import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        max-width: 50%;

        h1 {
            font-size: 4rem;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1.25rem;
            line-height: 2rem;
            margin-bottom: 2rem;
        }

        button {
            color: var(--white);
            background-color: var(--accent);
            font-weight: 500;
            padding: 1rem 2rem;
            border: none;
            border-radius: 0.5rem;
        }
    }
`

