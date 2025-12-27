import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !EMAIL_REGEX.test(email)) {
    return res.status(400).json({ 
      error: 'Invalid email address',
      message: 'Please enter a valid email address' 
    });
  }

  try {
    const normalizedEmail = email.toLowerCase().trim();

    const { data, error } = await supabase
      .from('beta_signups')
      .insert([{ 
        email: normalizedEmail,
        source: 'website',
        status: 'pending'
      }])
      .select()

    if (error) {
      if (error.code === '23505') {
        return res.status(409).json({ 
          error: 'Already registered',
          message: "You're already on the list! We'll contact you when beta goes live." 
        });
      }
      throw error;
    }

    const { count } = await supabase
      .from('beta_signups')
      .select('*', { count: 'exact', head: true })

    return res.status(201).json({ 
      success: true,
      message: `You're #${count} on the waitlist! We'll contact you when Beta goes live!`
    });

  } catch (error) {
    console.error('Supabase error:', error);
    return res.status(500).json({ 
      error: 'Server error',
      message: 'Something went wrong. Please try again later.' 
    });
  }
}