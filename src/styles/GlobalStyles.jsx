import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`

*, *::before, *::after{ 
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{ 
    font-family: 'Roboto', sans-serif;
    background-color: #222;
    color: #666;
    line-height: 1.6;
    min-height: 100vh;
}


a{ 
    text-decoration: none;
    color: #0062ff;
    
    &:hover{ 
        text-decoration: underline;
    }
}

button{ 
    outline: none;
    cursor: pointer;
    font-family: inherit;
}

ul{ 
    list-style: none;
}

li{ 
    text-align: left;
}

.hSpacer {
  flex-grow: 1; /* Takes up all the remaining space */
}

`;

export default GlobalStyles