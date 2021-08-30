import styled from "styled-components";

export const Container = styled.header`
    display: flex;

    position: sticky;
    top: 0;
    z-index: 10;

    
    background: var(--background);
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 5rem;

    margin: 0 auto;
    padding: 0 4rem;
    border-bottom: 1px solid var(--neutral_300);

    h1 { 
        font-size: 1.75rem;
        cursor: pointer;

        transition: 0.2s color ease-in;

        &:hover{
            color: var(--accent);
        }
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
                background: var(--accent) 0.7;
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
        align-items: center;
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
                
                transition: 0.2s all;

                &:hover {
                    color: var(--subtext);
                }

                &.localeActive { 
                    font-weight: 600;
                    color: var(--accent);

                    &:hover {
                        filter: brightness(0.8)
                    }
                }


            }
            
        }
        button { 
            font-size: 0;
            background: none;
            border: 0;
    
            &.signOut {
                font-size: 1rem;
                font-weight: 600;

                height: 50%;

                padding: 0.5rem 1rem;
                border: 2px solid var(--danger);
                border-radius: 0.25rem;
                color: var(--danger);

                transition: 0.2s all ease-in;

                &:hover {
                    background: var(--danger);
                    color: var(--white)
                }
            }
        }
    }

`