SebGlowDrive (the nearest street api)
====================

The project is as simple as in can be, thats why:

* no unit tests
* no logging
* no security
* no database
* no auto mappers etc.

## Limitations
No advanced algorithms, so the closest street is calculated as a closest straight line that contains a street segment.

## To run:
Restore npm packages (with npm install). Then run the project with npm run start (or npm run start:dev)
The API runs on the same port as .NET version. So the same test cases can be used.
When streets are initialized they can be displayed all with http://localhost:54444/api/street

## To test
The root folder of the solution contains Postman collection file (SebGlowDrive.postman_collection.json). It is exactly the same file as delivered with .NET version. So it also has two folders:

* InputStreets - used to initialize street data in the app (needs to be runned first)
* TestCases - a set of queries returning one or more results (or none if input streets are missing)

The collection file needs to be imported into Postman.