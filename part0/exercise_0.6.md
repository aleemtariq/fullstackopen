sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes something into text field and clicks 'save'
    Note right of browser: Callback on form re-renders upated notes, sends note to server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: { "message": "note created" } 
    deactivate server
