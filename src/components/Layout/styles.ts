import styled from "styled-components";

export const Container = styled.article`
    background: transparent;
    /* min-height: calc(100vh - 5rem); */
    max-width: 1150px;
    margin: 0 auto;
    padding: 0 2rem;

    header { 
        margin: 1.75rem 0rem;
        
        h1 {
            font-size: 2.5rem;
            line-height: 3.5rem;
            margin-bottom: 0.75rem;
        }        

        p {
            font-size: 1.2rem;
            line-height: 1.8rem;
            color: var(--neutral_600)
        }
    }

    section {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin: 3rem 0 8rem;

        
        h3 { 
            font-weight: 600;
            margin-bottom: 0.25rem;
            font-size: 1.75rem;
        }
        
        p { 
            font-size: 1.2rem;
            line-height: 2rem;
        }
        
        
        main {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 5rem;
        }

        table {
            border-collapse: collapse;

            td, th {
                border-bottom: 1px solid var(--neutral_300);
                padding: 1rem;
            }
            
            td {
                &:not(:first-child) {
                    font-weight: 600;
                    color: var(--accent);
                    text-align: center;
                    font-size: 1.25rem;
                }

            }

            th {
                &:first-child{ 
                    text-align: left;
                }
            }
            

            tr { 
                transition: all 0.2s;
                
                &:nth-child(even) {
                    background-color: var(--neutral_100);
                }

                &:hover {
                    background-color: var(--neutral_300); 
                }

            }
        }

        ul {
            font-size: 1.2rem;
            margin-left: 5rem;

            li {
                line-height: 2rem;
            }
        }

        & + section {
            &::before {
                content: '';
                height: 1px;
                width: 100%;

                position: absolute;
                top: -4rem;
                left: 0;

                background: var(--neutral_400);
            }
        }

        &:last-child {
            padding-bottom: 15rem;
        }
        
    }

`