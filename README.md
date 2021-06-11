# Description
Backend mini project photo app with GraphQL

# Package install:
- express: Server NodeJS
  > https://www.npmjs.com/package/express
  > https://expressjs.com/
- apollo-server-express: Middleware express and graphQL
  > https://www.npmjs.com/package/apollo-server-express
  > https://www.apollographql.com/docs/apollo-server/v1/servers/express/
- graphql: Language GraphQL
  > https://www.npmjs.com/package/graphql
- nodemon: Auto restart server
  > https://www.npmjs.com/package/nodemon
- mongoose: Connect database mongodb
  > https://www.npmjs.com/package/mongoose
- argon2: Hash password
  > https://www.npmjs.com/package/argon2
- config: Handle config
  > https://www.npmjs.com/package/config
- cors: Enable CORS
  > https://www.npmjs.com/package/cors
- dotenv: Loads environment variables from a .env
  > https://www.npmjs.com/package/dotenv
- jsonwebtoken: JSON Web Tokens -> Authentication
  > https://www.npmjs.com/package/jsonwebtoken

# Example query:
## Category
```
query MyQueryCategories {
  categories {
    id
    name
    registered_date
  }
}
```
```
query MyQueryCategory {
  category(id: "60a78b8c125814328850bf5a") {
    id
    name
    registered_date
  }
}
```
```
mutation MyMutationCreateCategory{
  createCategory(name: "Car"){
    id
    name
    registered_date
  }
}
```
```
mutation MyMutationUpdateCategory{
  updateCategory(id:"60c2e7208e68db3b9ccdf6ff", name: "Car"){
    success
    errors
    data
  }
}
```
```
mutation MyMutationDeleteCategory{
  deleteCategory(id:"60c3227f049bf131d80e9563"){
    success
    errors
    data
  }
}
```
## Photo
```
query MyQueryPhotos {
  photos {
    id
    path
    title
    desc
    is_public
    registered_date
    category {
      id
      name
      registered_date
    }
  }
}
```
```
query MyQueryPhoto {
  photo(id: "60ae03e75c8c8714bcf84942") {
    id
    path
    title
    desc
    is_public
    registered_date
    category {
      id
      name
      registered_date
    }
  }
}
```