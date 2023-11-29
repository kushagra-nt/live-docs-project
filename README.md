## about

its an text editor but not an normal one, very similar to google docs, where you can write in different fonts, size, color etc, code, quotes. the content is autosaved and changes are live for all who are accessing the particular document at the same time.

## setup

- go to client directory
- run `npm install`
- go to server directory
- run `npm install`
- setup and `.env` file in server directory and put your mongodb url in it in a variable named `mongodb_url`
- now run both client(`npm run dev`) and server(`node index.js`).
- enjoy

## features

- multiple people can write at same time and see the changes being done by someone else live.
- data is autosaved.
- efficient

## tech stack

**mongodb, nodejs, express, React (vite), socket.io**
