import {Hono} from 'hono';
const app=new Hono();
import {userrouter} from './Routes/userroutes.js';
import {feedbackRouter} from './Routes/feedbackroute.js';
app.route("/api/feedback", feedbackRouter);
app.route("/api/auth", userrouter);
app.get("/", (c) => {
    return c.text("qelcome to the Hono app!");  
})
Bun.serve({
    port:3000,
    fetch: app.fetch,
})