To use this project you need to do the following...

1. Make sure you have PHP(v7.2.12) and MYSQL(v8.0.13) installed on your machine
2. Open the integrated terminal in VSCode (CTRL + `)
3. Start two instances of bash by clicking the "+" icon next to the dropdown

I. In the first instance of bash: 

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


II. Open up MySQL Workbench 8.0 CE

    1. Click the "+" button 
    2. Connection Name: RebelMedia
    3. HostName: 127.0.0.1
    4. Port: 3306
    5. Username: root
    6. Click Test Connection
    7. Enter "root" as password
    8. You should now have a successful connection
    9. Click "Ok"
    10. In the toolbar click "Server < Data Import"
    11. Select "Import from Self-Contained File"
    12. Navigate to your rebel-media-react-project directory < rebelmedia-mysql < dbRebelMedia-backup.sql
    13. Click Open
    14. Click "Start Import"
    15. You should now have the latest data from the database
