@page guides/data-extreme Data
@parent guides/essentials 10
@outline 3

@description learn to do stuff good

@body

## Basics




## Use Cases

### Building your own connection  

- diagram of behavior tree

- copy something like super model
- remove behaviors or replace with your own behavior


### Session


### Make requests with something other than XHR

 - fetch
   - ndjson
 - $.ajax
 - popular AJAX util


ANSWER:

- build a `data-url`- like thing yourself ... WINNER
- `ajax` - comply with `can.ajax` / $.ajax
- url: {getData: function(){ .... }}

### Service formats

Service layer doesn't match JSONAPI we expect

#### URL structures

- get|PUT|POST|DELETE todos/{id}

- `POST /todos/update/{id}` simple url changes
	{url: {updateData: "POST /todos/update/{id}"}}

- `GET /alltodos`, `GET / todos/incomplete`
  - weird one-off urls
  - getListData(query) { translate to right url }
  - can-crud ... caching can work


#### Query Structure | Query Logic   

{filter: {complete: false}} , `{complete: false, $sort, $select}`

-> can-query-logic

#### Response data formats

`{todos: []}` instead of `{data: [...]}`

parseListData
parseInstanceData


### Real Time

- Nested structures ... need listQuery symbol
- ordering issues



### Caching

- different options 

### How to work services for document-based services

### How to handle relational data

### Error handling

### Auto save

### cloneable / backup / restore

If you need to blah blah blah ... check out xyz


### Using can-connect w/o canjs

Todo extends observe.Array {

}

realTimeRestModel(Todo)


todos.on("can.patch", function(){})


store.get(todoConnection, {}) //-> []

- addInstanceReference
- updatedList ...
- save -> when data goes out
- destroy ->
- createdInstance / destroyedInstance /
