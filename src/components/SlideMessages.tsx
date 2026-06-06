import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Message = {
  id: string;
  name: string;
  message: string;
  created_at: string;
};

export function SlideMessages() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    const { data } = await supabase
      .from("messages")
      .select("id,name,message,created_at")
      .order("created_at", { ascending: false })
      .limit(20);
    if (data) setMessages(data as Message[]);
  };

  useEffect(() => {
    load();
    const channel = supabase
      .channel("messages-changes")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        () => load(),
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const submit = async () => {
    setError(null);
    const n = name.trim();
    const m = message.trim();
    if (!n || !m) {
      setError("Please add your name and a short message.");
      return;
    }
    setSubmitting(true);
    const { error: insertError } = await supabase
      .from("messages")
      .insert({ name: n.slice(0, 100), message: m.slice(0, 500) });
    setSubmitting(false);
    if (insertError) {
      setError("Could not send. Please try again.");
      return;
    }
    setName("");
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center gap-4 max-w-sm w-full">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xs tracking-[0.3em] uppercase text-wedding-gold/80 font-serif"
      >
        Wishes For The Couple
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full flex flex-col gap-2"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={100}
          placeholder="Your name"
          className="gold-border rounded-lg px-4 py-2.5 bg-wedding-gold/5 backdrop-blur-sm font-serif text-sm text-wedding-cream placeholder:text-wedding-cream/40 focus:outline-none focus:bg-wedding-gold/10"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
          rows={3}
          placeholder="Send your wishes…"
          className="gold-border rounded-lg px-4 py-2.5 bg-wedding-gold/5 backdrop-blur-sm font-serif text-sm text-wedding-cream placeholder:text-wedding-cream/40 focus:outline-none focus:bg-wedding-gold/10 resize-none"
        />
        {error && (
          <p className="text-xs text-red-300/90 font-serif">{error}</p>
        )}
        <button
          onClick={submit}
          disabled={submitting}
          className="gold-border rounded-full px-6 py-2.5 bg-wedding-gold/20 backdrop-blur-sm text-wedding-cream font-serif text-xs tracking-[0.15em] uppercase hover:bg-wedding-gold/30 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {submitting ? (
            <Loader2 size={14} className="animate-spin" />
          ) : (
            <>
              <Heart size={12} className="text-wedding-gold" /> Send Wish
            </>
          )}
        </button>
      </motion.div>

      <div className="w-full max-h-[28vh] overflow-y-auto flex flex-col gap-2 pr-1">
        {messages.map((m) => (
          <div
            key={m.id}
            className="gold-border rounded-lg px-3 py-2 bg-wedding-gold/5 backdrop-blur-sm text-left"
          >
            <p className="font-serif text-xs text-wedding-cream/90 italic leading-snug">
              "{m.message}"
            </p>
            <p className="font-script text-base text-wedding-gold mt-1">
              — {m.name}
            </p>
          </div>
        ))}
        {messages.length === 0 && (
          <p className="text-xs text-wedding-cream/50 font-serif italic">
            Be the first to share a wish.
          </p>
        )}
      </div>
    </div>
  );
}
