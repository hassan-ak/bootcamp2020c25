import { createServer } from "miragejs"

export default function () {
    let arr = [{id:"1", text:"Hello"}]
    let users = [{name:"Hassan Ali Khan", age:"28"}]
  createServer({
    routes() {
        this.namespace = "/fakeapi"
        this.get("/getTodos",{todos:arr})
        this.get("/users",{todos:users})
        this.post("/addTodo",(_,req)=>{
          console.log('req',req)
          arr.push(req.requestBody)
        })
    },
  })
}