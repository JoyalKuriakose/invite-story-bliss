-- 1. Tighten the constraint back to the correct logic
ALTER TABLE public.rsvps DROP CONSTRAINT IF EXISTS rsvps_guests_check;
ALTER TABLE public.rsvps ADD CONSTRAINT rsvps_guests_check CHECK (
  (attending = true AND guests BETWEEN 1 AND 10) OR 
  (attending = false AND guests = 0)
);

-- 2. Update the policy to match
DROP POLICY IF EXISTS "Anyone can insert rsvps" ON public.rsvps;
DROP POLICY IF EXISTS "Allow public RSVP insert" ON public.rsvps;

CREATE POLICY "Allow public RSVP insert"
ON public.rsvps
FOR INSERT
TO anon, authenticated
WITH CHECK (
    length(trim(name)) BETWEEN 1 AND 100
    AND (
        (attending = true AND guests BETWEEN 1 AND 10)
        OR
        (attending = false AND guests = 0)
    )
);