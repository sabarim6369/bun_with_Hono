const users = new Map();

const login = async (c) => {
  try {
    const body = await c.req.json();
    const { username, password } = body;

    if (!username || !password) {
      return c.json({ error: 'Username and password are required' }, 400);
    }
    const storedUser = users.get(username);
    if (!storedUser || storedUser.password !== password) {
      return c.json({ error: 'Invalid username or password' }, 401);
    }

    return c.json({ message: 'Login Successful', user: username });
  } catch (e) {
    return c.json({ error: 'Invalid request body' }, 400);
  }
};

const signup = async (c) => {
  try {
    const body = await c.req.json();
    const { username, password } = body;

    if (!username || !password) {
      return c.json({ error: 'Username and password are required' }, 400);
    }

    if (users.has(username)) {
      return c.json({ error: 'Username already exists' }, 409);
    }

    users.set(username, { password });

    return c.json({ message: 'Signup Successful', user: username }, 201);
  } catch (e) {
    return c.json({ error: 'Invalid request body' }, 400);
  }
};
const getdata=(c)=>{
    return c.text("Json data");
}
export { login, signup,getdata };
