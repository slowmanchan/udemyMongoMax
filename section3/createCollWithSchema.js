// create a new schema for the posts collection
db.createCollection("posts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "text", "creator", "comments"],
      properties: {
        title: {
          bsonType: "string",
          description: "must be a string",
        },
        text: {
          bsonType: "string",
          description: "must be a string",
        },
        creator: {
          bsonType: "objectId",
          description: "must be a object id",
        },
        comments: {
          bsonType: "array",
          description: "must be an array",
          items: {
            bsonType: "object",
            required: ["text", "author"],
            properties: {
              text: {
                bsonType: "string",
                description: "must be a string",
              },
              author: {
                bsonType: "objectId",
                description: "must be an object id",
              },
            },
          },
        },
      },
    },
  },
});
