To use this project you need to do the following...

1. Make sure you have PHP(v7.2.12) and MYSQL(v8.0.13) installed on your machine
2. Open the integrated terminal in VSCode (CTRL + `)
3. Start two instances of bash by clicking the "+" icon next to the dropdown

In the first instance of bash: 

A. Start the development server for the client side:

    1. cd rebelmedia-client
    2. npm i
    3. npm start

In the second instance of bash:

B. Start the backend server:

    1. cd rebelmedia-server
    2. composer install
    3. php bin/console server:start
    4. yes