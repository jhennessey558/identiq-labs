// server/signup.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Supabase configuration
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Signup endpoint
app.post('/api/signup', async (req, res) => {
  const { email } = req.body;

  // Validate email format
  if (!email || !EMAIL_REGEX.test(email)) {
    return res.status(400).json({ 
      error: 'Invalid email address',
      message: 'Please enter a valid email address' 
    });
  }

  try {
    // Normalize email to lowercase for consistency
    const normalizedEmail = email.toLowerCase().trim();

    // Insert into Supabase (duplicate check handled by UNIQUE constraint)
    const { data, error } = await supabase
      .from('beta_signups')
      .insert([{ 
        email: normalizedEmail,
        source: 'website',
        status: 'pending'
      }])
      .select();

    if (error) {
      // Handle duplicate email
      if (error.code === '23505') {
        return res.status(409).json({ 
          error: 'Already registered',
          message: "You're already on the list! We'll contact you when beta goes live." 
        });
      }
      throw error;
    }

    // Get waitlist position
    const { count } = await supabase
      .from('beta_signups')
      .select('*', { count: 'exact', head: true });

    return res.status(201).json({ 
      success: true,
      message: `You're #${count} on the waitlist! We'll be in contact when Beta goes live!`
    });

  } catch (error) {
    console.error('Supabase error:', error);
    return res.status(500).json({ 
      error: 'Server error',
      message: 'Something went wrong. Please try again later.' 
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', database: 'supabase' });
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
  console.log(`Using Supabase at ${process.env.SUPABASE_URL}`);
});