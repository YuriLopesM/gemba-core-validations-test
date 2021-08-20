import styled from "styled-components";

export const Container = styled.header`
    display: flex;

    justify-content: space-between;
    align-items: center;

    max-width: 1120px;
    height: 5rem;

    margin: 0 auto;
    padding: 0 1rem;
    border-bottom: 1px solid var(--neutral_300);

    h1 { 
        font-size: 1.75rem;
    }

    nav {
        height: 5rem;

        a {
            display: inline-block;
            position: relative;

            padding: 0 0.5rem;
            height: 5rem;
            line-height: 5rem;

            color: var(--neutral_800);

            transition: color 0.2s;

            & + a {
                margin-left: 2rem;
            }

            &:hover {
                color: var(--subtext);
            }

            &.anchorActive {
                color: var(--text);
                font-weight: 500;
            }

            &.anchorActive::after {
                content: '';
                height: 3px;
                border-radius: 3px 3px 0 0;
                width: 100%;

                position: absolute;
                bottom: 1px;
                left: 0;

                background: var(--accent);
            }
        }
    }

    div {
        display: flex;
        gap: 2rem;

        ul {
            height: 5rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            font-weight: 400;
            list-style-type: none;

            li {
                text-transform: uppercase;
                color: var(--text);

                &.localeActive { 
                    font-weight: 600;
                    color: var(--accent)
                }
            }
            
        }
        button { 
            font-size: 0;
            background: none;
            border: 0;
    
        }
    }

`