require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/applications', async (req, res) => {
    const { data, error } = await supabase.from('applications').select('*');
    if (error) {
        console.error('Error fetching applications:', error);
        res.status(500).json({ error: 'Failed to fetch applications' });
    } else {
        res.json(data);
    }
});