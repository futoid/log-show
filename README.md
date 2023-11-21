# Log-Ingestor (Tested with 45,000 LOGS)
> Average API response time is 87ms for limit = 4 ~ demo attached

![image](https://github.com/dyte-submissions/november-2023-hiring-futoid/assets/65010518/18ae1f56-6894-4ed3-93e7-f4b2b4564f11)

#### Backend Repository : [here](https://github.com/futoid/logShow-server/)
## Built with
  - client side - NEXT JS
  - server - NODE JS
### API endpoints
1. **To add a log data**
   `http://localhost:3000/api/v1/log/add` \
   REQ BODY :

```json 
   {
	"level": "error",
	"message": "Failed to connect to DB",
	"resourceId": "server-1234",
	"timestamp": "2023-09-15T08:00:00Z",
	"traceId": "abc-xyz-123",
    	"spanId": "span-456",
    	"commit": "5e5342f",
    	"metadata": {
        	"parentResourceId": "server-0987"
    	}
}
```  

2. **To fetch data using request query params**

   `http://localhost:3000/api/v1/logs?skip=NUMBER&limit=NUMBER&search=STRING&level=STRING`
   
   To make queries faster I've considered the following methods:
   - Indexing of **MESSAGE** parameter of log data (This'll make writing slower but read faster)
   - Limit the amount of data fetched at time (only fetching limited documents)
     

3. **To get the total number of logs**
  `http://localhost:3000/api/v1/log/length`

# Demo 
### Timestamp
> 00:00 - 00:24 : Showing MONGODB Data with 45k logs

> 00:24 - 01:02 : Starting Client Application and Server

> 01:03 - 03:33 : API Testing

> 03:33 - 05:02 : Client Interface
   
[![video]()](https://github.com/dyte-submissions/november-2023-hiring-futoid/assets/65010518/90ece963-0748-44d1-a4f4-37a6f477e7fb)

# Local Development Setup
```
git clone git@github.com:dyte-submissions/november-2023-hiring-futoid.git
```
```
cd ./november-2023-hiring-futoid
```
```
git checkout main
```
## Client Interface
```
cd ./client
```
```
npm install
```
```
npm run dev
```
## Let's Start Server NOW
```
cd ..
```
```
cd ./server
```
```
npm install
```
```
touch .env
```
### Edit `.env` file
```
DATABASE_URL="mongodb+srv://<USERNAME>:<PASSWORD@<CLUSTER>.mongodb.net/<DATABASENAME>"
```
```
npm run dev
```
# Open any API testing app
# To see client
`http://localhost:2409` 
