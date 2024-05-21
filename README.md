# Overview

This is a starter project for a frontend app that uses the following packages:

-   React
-   Tailwind
-   Vite
-   ESLint
-   Prettier

# Visual Studio Code: Development Setup

### 1. Update VS Code's **settings.json**

#### Prettier as default formatter

```
"editor.defaultFormatter": "esbenp.prettier-vscode"
```

#### Tailwind Intellisense

-   Maintain CSS intellisense with Tailwind intellisense in .css files

    ```
     "files.associations": {
        "*.css": "tailwindcss"
     }
    ```

-   This allows Tailwind intellisense within variables named like 'myClassName'

    ```
    "tailwindCSS.classAttributes": [
        ".*ClassName"
    ]
    ```

### 2. Install VS Code extensions

-   ESLint
-   Prettier
-   Tailwind CSS IntelliSense

### 3. Update VS Code **launch.json**

Launch new browser window. Convenient, but then no browser Devtools

```
"configurations": [
    {
        "type": "chrome",
        "name": "Debug in new browser",
        "request": "launch",
        "url": "http://localhost:5173"
    }
]
```

Attach to existing browser window. Requires browser to be in debug mode, but then offers access to DevTools

```
"configurations": [
    {
        "type": "chrome",
        "name": "Attach to browser",
        "request": "attach",
        "port": 9222
    }
]
```

Command to start Chrome in debug mode

```
chrome.exe  --remote-debugging-port=9222
```

### 5. Start Development Server

```
npm run dev
```
