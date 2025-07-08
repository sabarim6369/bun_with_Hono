// import { Hono } from 'hono';

// const app = new Hono();

// app.get('/', (c) => c.text('Hello from Hono + Bun!'));

// export default {
//   port: 3000,~
//   fetch: app.fetch,
// };

// import {Hono} from 'hono';
// const app=new Hono();
// app.get("/",(c)=>c.text("Hello from Hono + Bun!"));
// export default {
//     port:3000,
//     fetch:app.fetch,
// };  
import {Hono} from 'hono';
const app=new Hono();
export default{
    port:4000,
    fetch:app.fetch,
}