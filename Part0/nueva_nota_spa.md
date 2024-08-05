sequenceDiagram
    participant user as User
    participant browser as Browser
    participant server as Server

    user->>browser: Write note and click Save
    Note right of browser: Browser captures the input and triggers JavaScript function

    browser->>server: POST /exampleapp/new_note_spa
    activate server
    Note right of server: Server receives the new note data and stores it

    server-->>browser: JSON response with the new note
    deactivate server

    Note right of browser: Browser updates the UI with the new note without reloading the page
