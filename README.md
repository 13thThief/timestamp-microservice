## Timestamp Microservice

1.  The API endpoint is `GET /api/timestamp/:date_string?`
2.  If the date string is empty, the service will use the current timestamp
3.  If the date string is valid compliant with ISO-8601 (e.g. "2016-11-20"), the API returns a JSON having the structure:  
    e.g. `{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 00:00:00 GMT"}`
4.  If the date string is invalid, the API returns a JSON having the structure:  
    `{"error" : "Invalid Date" }`

### Example Usage:

-   [/api/timestamp/2019-08-13](https://boom-astronaut.glitch.me/api/timestamp/2019-08-13)
-   [/api/timestamp/1450137600000](https://boom-astronaut.glitch.me/api/timestamp/1450137600000)

### Example Output:

`{"unix":1451001600000, "utc":"Fri, 11 Oct 2019 00:00:00 GMT"}`

