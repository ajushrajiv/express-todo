const request = require("supertest");
const app = require("../../../src/server");

describe("GET /v1/todo/todos", () => {
  test("responds with json", async () => {
    const response = await request(app)
      .get("/v1/todo/todos")
      .expect("Content-Type", /json/)
      .expect(200);
    
    //   console.log('Response Status:', response.status);
    //   console.log('Response Body:', response.body);
    //   console.log('Content-Type:', response.headers['content-type']);

    expect(response.body).toEqual([]);
  });
});

describe("GET /v1/todo/todoid", () => {
    test("responds with json", async () => {
      const response = await request(app)
        .get("/v1/todo/todoid")
        .query({ todoId: 'validTodoId' })
        .expect("Content-Type", /json/)
        .expect(200);
      
        // console.log('Response Status:', response.status);
        // console.log('Response Body:', response.body);
        // console.log('Content-Type:', response.headers['content-type']);
  
      expect(response.body).toEqual({ "todo": null });
    });
});

describe("GET /v1/todo/byuserid", () => {
    test("responds with json", async () => {
      const response = await request(app)
        .get("/v1/todo/byuserid")
        .query({ userId: 'validUserId' })
        .expect("Content-Type", /json/ ) 
        .expect(200);
      
        // console.log('Response Status:', response.status);
        // console.log('Response Body:', response.body);
        // console.log('Content-Type:', response.headers['content-type']);

      expect(response.body).toEqual({ todos: [] });
    });
});