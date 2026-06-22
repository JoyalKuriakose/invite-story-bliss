CREATE TABLE public.rsvps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  attending BOOLEAN NOT NULL,
  guests INT NOT NULL DEFAULT 1,
  note TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.rsvps TO anon, authenticated;
GRANT ALL ON public.rsvps TO service_role;

ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert rsvps"
ON public.rsvps
FOR INSERT
TO anon
WITH CHECK (
  length(trim(name)) BETWEEN 1 AND 100
  AND guests BETWEEN 1 AND 10
  AND (note IS NULL OR length(trim(note)) <= 500)
);