# Basic Todo API

This is a basic todos API that I built for the first challenge of the node.js trail from Rocketseat's Ignite course.
Base API url: `http://localhost:3333`

## Routes

| Method   | Route                         | Description         |
| -------- | ----------------------------- | ------------------- |
| `POST`   | [/users](#create-user)        | Creates a new user  |
| `GET`    | [/todos](#list-all-todos)     | List all todos      |
| `POST`   | [/todos](#create-todo)        | Create a new todo   |
| `PUT`    | [/todos/:id](#update-todo)    | Update a todo       |
| `PATCH`  | [/todos/:id/done](#done-todo) | Mark a todo as done |
| `DELETE` | [/todos/:id](#delete-todo)    | Delete a todo       |

### Create User

Creates a new user.

`POST` /users

#### Request

##### Headers

| Name         | Value            |
| :----------- | :--------------- |
| Content-Type | application/json |

##### Parameters

| Parameter | Type   | Required |
| :-------- | :----- | :------- |
| name      | string | yes      |
| username  | string | yes      |

```json
{
  "name": "Jane Doe",
  "username": "jane-doe"
}
```

#### Responses

##### Headers

| Name         | Value            |
| :----------- | :--------------- |
| Content-Type | application/json |

##### Status Codes

<details>
  <summary>
    201 Created.
  </summary>

```json
{ 
  "success": "User created successfully." 
}
```
</details>

<details>
  <summary>
    400 Bad Request.
  </summary>

```json
{ 
  "error": "User already exists!" 
}
```
</details>

### List All Todos

Lists all todos.

`GET` /todos

#### Request

##### Headers

| Name         | Value            |
| :----------- | :--------------- |
| username     | jane-doe         |

#### Responses

##### Headers

| Name         | Value            |
| :----------- | :--------------- |
| Content-Type | application/json |

##### Status Codes

<details>
  <summary>
    200 Ok.
  </summary>

```json
[
  {
    "id": "e4282874-1986-4783-b3e6-4d3bc9bd8201",
    "title": "First task",
    "done": false,
    "deadline": "2022-11-12T00:00:00.000Z",
    "created_at": "2022-09-07T00:56:30.155Z"
  },
  {
    "id": "e4282874-1986-4783-b3e6-4d3bc9bd8202",
    "title": "Second task",
    "done": false,
    "deadline": "2022-12-12T00:00:00.000Z",
    "created_at": "2022-09-07T00:56:30.155Z"
  }
]
```
</details>

### Create Todo

Creates a new todo.

`POST` /todos

#### Request

##### Headers

| Name         | Value            |
| :----------- | :--------------- |
| Content-Type | application/json |
| username     | jane-doe         |

##### Parameters

| Parameter | Type   | Required |
| :-------- | :----- | :------- |
| title     | string | yes      |
| deadline  | string | yes      |

```json
{
  "title": "First task",
  "deadline": "2022-11-12"
}
```

#### Responses

##### Headers

| Name         | Value            |
| :----------- | :--------------- |
| Content-Type | application/json |

##### Status Codes

<details>
  <summary>
    201 Created.
  </summary>

```json
{ 
  "success": "Todo created successfully." 
}
```
</details>

### Update Todo

Updates a todo.

`PUT` /todos/:id

#### Request

##### Headers

| Name         | Value            |
| :----------- | :--------------- |
| Content-Type | application/json |
| username     | jane-doe         |

##### Parameters

| Parameter | Type   | Required |
| :-------- | :----- | :------- |
| title     | string | yes      |
| deadline  | string | yes      |

```json
{
  "title": "New first task",
  "deadline": "2022-15-12"
}
```

#### Responses

##### Headers

| Name         | Value            |
| :----------- | :--------------- |
| Content-Type | application/json |

##### Status Codes

<details>
  <summary>
    200 Ok.
  </summary>

```json
{ 
  "success": "Todo updated successfully." 
}
```
</details>

<details>
  <summary>
    400 Bad Request.
  </summary>

```json
{ 
  "error": "Todo not found!" 
}
```
</details>

### Done Todo

Marks a todo as done.

`PATCH` /todos/:id/done

#### Request

##### Headers

| Name         | Value            |
| :----------- | :--------------- |
| Content-Type | application/json |
| username     | jane-doe         |

#### Responses

##### Headers

| Name         | Value            |
| :----------- | :--------------- |
| Content-Type | application/json |

##### Status Codes

<details>
  <summary>
    200 Ok.
  </summary>

```json
{ 
  "success": "Todo marked as done successfully." 
}
```
</details>

<details>
  <summary>
    400 Bad Request.
  </summary>

```json
{ 
  "error": "Todo not found!" 
}
```
</details>

### Delete Todo

Deletes a todo.

`DELETE` /todos/:id

#### Request

##### Headers

| Name         | Value            |
| :----------- | :--------------- |
| Content-Type | application/json |
| username     | jane-doe         |

#### Responses

##### Headers

| Name         | Value            |
| :----------- | :--------------- |
| Content-Type | application/json |

##### Status Codes

<details>
  <summary>
    200 Ok.
  </summary>

```json
{ 
  "success": "Todo deleted successfully." 
}
```
</details>

<details>
  <summary>
    400 Bad Request.
  </summary>

```json
{ 
  "error": "Todo not found!" 
}
```
</details>

