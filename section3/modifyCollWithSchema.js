// modify collection with new or modified schema,
// this one warns on insert instead of failing
db.runCommand({
  collMod: "posts",
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
  validationAction: "warn",
});
