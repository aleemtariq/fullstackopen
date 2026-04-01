sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Note right of browser: browser sends request to fetch stylesheet in <head>
    activate server
    server-->>browser: the CSS file 
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    Note right of browser: browser sends request to fetch script in <head>
    activate server
    server-->>browser: the Javascript file
    Note left of server: Javascript file begins executing
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    Note left of server: browser executes redrawNotes() on response and render notes
    deactivate server