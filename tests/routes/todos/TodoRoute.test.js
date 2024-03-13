const request = require("supertest");
const app = require("../../../src/server");

describe("GET /v1/todo/todos", () => {
  test("responds with json", async () => {
    const response = await request(app)
      .get("/v1/todo/todos")
      .expect("Content-Type", /json/)
      .expect(200);

      const myTodos = response.body;
      const myFirstTodo = myTodos[0];

    expect(myTodos.length).toBeGreaterThan(0);
    // expect(response.body).toEqual([]);
    expect(myFirstTodo.id).toBeDefined();
    expect(myFirstTodo.task).toBeDefined();
    expect(myFirstTodo.userId).toBeDefined();
  });
});

describe("GET /v1/todo/todoid", () => {
    test("responds with json", async () => {
      const todoId = 1
      
      const response = await request(app)
        .get(`/v1/todo/todoid?todoId=${todoId}`)
        .expect("Content-Type", /json/)
        .expect(200);
  
      const myTodo= response.body.todo;
      expect(myTodo.id).toEqual(todoId);
    });
});

describe("GET /v1/todo/byuserid", () => {
    test("responds with json", async () => {
      const userId = 1

      const response = await request(app)
        .get(`/v1/todo/byuserid?userId=${userId}`)
        .expect("Content-Type", /json/ ) 
        .expect(200);
      
        // console.log('Response Status:', response.status);
        // console.log('Response Body:', response.body);
        // console.log('Content-Type:', response.headers['content-type']);
        const myTodo= response.body.todos;

      expect(myTodo[0].userId).toEqual(userId);
    });
});


describe("Test Mutations (PUT,POST, DELETE)", () => {
  test("Test Create Object", async () => {
    const response = await request(app)
      .post(`/v1/todo/addtodo`)
      .send({
        newTask: "Tennis spielen",
        newCompleted: false,
        newDoBefore: "2026-10-10",
        newUserId: 2,
      })
      .expect("Content-Type", /json/)
      .expect(200);

      
    const myTodos = response.body;

    expect( myTodos.todo.userId).toEqual(2);
    expect( myTodos.todo.task).toEqual("Tennis spielen");
    expect( myTodos.todo.completed).toEqual(false);
    expect( myTodos.todo.doBefore).toEqual("2026-10-10T00:00:00.000Z");
  });

  test("Test update Object", async () => {
    const response = await request(app)
      .put(`/v1/todo/updatetodo`)
      .send({
        todoId: 1,
        newTask: "cooking",
        newCompleted: true,
        newDoBefore: "2023-11-11",
        newUserId: 1,
      })
      .expect("Content-Type", /json/)
      .expect(200);

      
    const myTodos = response.body;
      console.log("MY TODOS",myTodos)
      console.log("MY TODOS USER ID ",myTodos.updatedTodo)

    expect( myTodos.updatedTodo.userId ).toEqual(1);
    expect( myTodos.updatedTodo.task).toEqual("cooking");
    expect( myTodos.updatedTodo.completed).toEqual(true);
    expect( myTodos.updatedTodo.doBefore).toEqual("2023-11-11T00:00:00.000Z");
  });

  test("Test mark Object", async () => {
    const response = await request(app)
      .put(`/v1/todo/marktodo`)
      .send({
        id: 1,
        newCompleted: false
      })
      .expect("Content-Type", /json/)
      .expect(200);

      
    const myTodos = response.body;
    console.log("MY TODOS MARK TODO ",myTodos.updatedTodo)

    expect( myTodos.updatedTodo.completed).toEqual(false);
  });

  
});