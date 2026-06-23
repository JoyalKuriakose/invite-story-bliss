DROP TABLE IF EXISTS public.rsvps CASCADE;

CREATE TABLE public.rsvps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  attending BOOLEAN NOT NULL,
  guests INTEGER NOT NULL DEFAULT 1,
  note TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.rsvps TO anon, authenticated;
GRANT ALL ON public.rsvps TO service_role;

ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public RSVP insert"
ON public.rsvps
FOR INSERT
TO anon
WITH CHECK (
    length(trim(name)) BETWEEN 1 AND 100
    AND (
        (attending = true AND guests BETWEEN 1 AND 10)
        OR
        (attending = false AND guests = 0)
    )
    AND (
        note IS NULL
        OR length(trim(note)) <= 500
    )
);