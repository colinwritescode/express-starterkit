import express from 'express';
import cors from 'cors';

// SETTINGS START
const app = express();
const port = 8000;
app.use(express.json());
app.use(cors());
// SETTINGS END

// API ROUTES START
//## API 1 ##//
app.get('/querydata', async (req: any, res: any) => {
  try {
    // Simulate an asynchronous operation with await
    res.status(200).json({ message: 'message', data: 'data' });
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }
});

//## API 2 ##//
app.post('/pushdata', async (req: any, res: any) => {
  try {
    // Simulate an asynchronous operation with await
    res.status(200).json({ message: 'message', data: 'data' });
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }
});
// API ROUTES END

// PORT LISTENER START
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// PORT LISTENER END
