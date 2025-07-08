const feedbackStore = new Map();
let currentId = 1;

const addFeedback = async (c) => {
  try {
    const { message, user } = await c.req.json();

    if (!message || !user) {
      return c.json({ error: 'Message and user are required' }, 400);
    }

    const id = currentId++;
    feedbackStore.set(id, { id, message, user });

    return c.json({ message: 'Feedback added', feedback: { id, message, user } }, 201);
  } catch {
    return c.json({ error: 'Invalid request body' }, 400);
  }
};

const updateFeedback = async (c) => {
  try {
    const id = Number(c.req.param('id'));
    if (!feedbackStore.has(id)) {
      return c.json({ error: 'Feedback not found' }, 404);
    }

    const { message, user } = await c.req.json();

    if (!message && !user) {
      return c.json({ error: 'Nothing to update' }, 400);
    }

    const existing = feedbackStore.get(id);
    const updated = {
      id,
      message: message ?? existing.message,
      user: user ?? existing.user,
    };

    feedbackStore.set(id, updated);

    return c.json({ message: 'Feedback updated', feedback: updated });
  } catch {
    return c.json({ error: 'Invalid request body' }, 400);
  }
};

const deleteFeedback = (c) => {
  const id = Number(c.req.param('id'));
  if (!feedbackStore.has(id)) {
    return c.json({ error: 'Feedback not found' }, 404);
  }

  feedbackStore.delete(id);
  return c.json({ message: 'Feedback deleted' });
};

export { addFeedback, updateFeedback, deleteFeedback };
