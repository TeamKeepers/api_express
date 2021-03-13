# Simple **Express** API test
Simple API done with Express JS & Node.

All CRUD operations are available.

**Tech: Node, Express**

> Open a terminal and run: _npm install_ and then _npm run dev_

We use the _nodemon_ package to reload dynamically our app. 

> Open the API on port 3001: _http://localhost:3001/_ 

To us the *notes.rest* instead of Postman: *download REST CLIENT extension for VS Code*
________________
## Documentation

### Endpoints

**post**
> api/notes/ 
- POST: create a new note
- *Paramaters accepted: <str:content> mandatory; <bool:important>*

**get**
> api/notes/
- GET: return all the notes
> api/notes/<int:id>
- GET: return a specific note based on id

**delete**
> api/notes/<int:id>
- DELETE: destroy one specific note

**update**
> api/notes/<int:id>
- PATCH: Update a specific note
- *Paramaters accepted: <str:content> mandatory; <bool:important>*
____________
### Source
- https://fullstackopen.com