
-- Create a table for early access email signups
CREATE TABLE public.early_access_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  company TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - making it restrictive since this is sensitive data
ALTER TABLE public.early_access_signups ENABLE ROW LEVEL SECURITY;

-- Create policy for public insert (so anyone can sign up)
CREATE POLICY "Anyone can sign up for early access" 
  ON public.early_access_signups 
  FOR INSERT 
  WITH CHECK (true);

-- Create index on email for better performance
CREATE INDEX idx_early_access_signups_email ON public.early_access_signups(email);
