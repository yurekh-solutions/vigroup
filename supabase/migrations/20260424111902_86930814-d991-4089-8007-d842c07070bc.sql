-- Leads from contact / quote form
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  freight_type TEXT,
  pickup_location TEXT,
  destination TEXT,
  weight_dimensions TEXT,
  message TEXT,
  source TEXT DEFAULT 'website_contact_form',
  user_agent TEXT,
  ip_address TEXT,
  email_sent BOOLEAN DEFAULT false,
  webhook_sent BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX idx_leads_email ON public.leads(email);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Anyone (including anon) can submit a lead
CREATE POLICY "Anyone can submit a lead"
  ON public.leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(name) > 0 AND length(name) <= 200
    AND length(email) > 0 AND length(email) <= 320
    AND (message IS NULL OR length(message) <= 5000)
  );

-- No one can read via the anon/auth API; admin/service-role bypasses RLS
-- (intentionally NO select policy)
