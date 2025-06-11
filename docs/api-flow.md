# API Auth & Contacts Flow

```mermaid
flowchart TD
    subgraph Frontend / Client
        A1(Login Request) -->|POST /auth/login| B1
        A2(Contacts Request) -->|GET/POST /contacts + Authorization: Bearer <JWT>| B2
    end

    subgraph Backend
        B1[/Auth Controller/] --> C1[/Auth Service/]
        C1 --> D1{User Exists?}
        D1 -->|Yes| E1[Generate JWT]
        D1 -->|No| F1[Return Error: User not found]

        B2[/Contacts Controller/] --> G1[Middleware: Authenticate JWT]
        G1 --> H1{JWT valid?}
        H1 -->|No| F2[Return Error: Invalid token]
        H1 -->|Yes| I1[Middleware: Authorize Role]

        I1 --> J1{Role Allowed?}
        J1 -->|No| F3[Return Error: Forbidden]
        J1 -->|Yes| K1[Service: Contacts Service]
        K1 --> L1[Repository: Prisma Contact findMany/create]
        L1 --> M1[Return Contacts or Contact Created]
    end

    E1 --> A1
    M1 --> A2