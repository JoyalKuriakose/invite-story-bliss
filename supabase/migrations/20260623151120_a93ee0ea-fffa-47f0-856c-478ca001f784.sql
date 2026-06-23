DROP POLICY IF EXISTS "Anyone can insert rsvps" ON public.rsvps;

CREATE POLICY "Anyone can insert rsvps"
ON public.rsvps
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(name)) >= 1
  AND length(trim(name)) <= 100
  AND guests >= 0
  AND guests <= 10
);

ALTER TABLE public.rsvps DROP CONSTRAINT IF EXISTS rsvps_guests_check;
ALTER TABLE public.rsvps ADD CONSTRAINT rsvps_guests_check CHECK (guests >= 0 AND guests <= 10);
ALTER TABLE public.rsvps ALTER COLUMN guests SET DEFAULT 0;