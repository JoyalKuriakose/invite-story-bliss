
CREATE TABLE public.rsvps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  attending BOOLEAN NOT NULL,
  guests INT NOT NULL DEFAULT 1,
  note TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.rsvps TO anon, authenticated;
GRANT ALL ON public.rsvps TO service_role;
ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read rsvps" ON public.rsvps FOR SELECT USING (true);
CREATE POLICY "Anyone can insert rsvps" ON public.rsvps FOR INSERT WITH CHECK (
  length(trim(name)) BETWEEN 1 AND 100 AND guests BETWEEN 1 AND 10
);

CREATE TABLE public.messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.messages TO anon, authenticated;
GRANT ALL ON public.messages TO service_role;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read messages" ON public.messages FOR SELECT USING (true);
CREATE POLICY "Anyone can post messages" ON public.messages FOR INSERT WITH CHECK (
  length(trim(name)) BETWEEN 1 AND 100 AND length(trim(message)) BETWEEN 1 AND 500
);
