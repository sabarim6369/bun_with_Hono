import { Hono } from 'hono';
import { addFeedback, updateFeedback, deleteFeedback } from '../Controllers/feedbackcontroller.js';

const feedbackRouter = new Hono();

feedbackRouter.post('/', addFeedback);
feedbackRouter.put('/:id', updateFeedback);
feedbackRouter.delete('/:id', deleteFeedback);

export  {feedbackRouter};
