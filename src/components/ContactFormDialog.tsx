import { useState, type FormEvent, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/site";
import { z } from "zod";

const contactMessageSchema = z.object({
  name: z.string().trim().min(1, "Enter your name.").max(100),
  email: z.string().trim().email("Enter a valid email address.").max(255),
  message: z.string().trim().min(1, "Enter a message.").max(1200),
});

export function ContactFormDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const parsed = contactMessageSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Check your details and try again.");
      return;
    }

    setError("");
    const { name, email, message } = parsed.data;
    const subject = `Portfolio message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[92vh] w-[calc(100%-2rem)] max-w-lg overflow-y-auto border-border bg-card">
        <DialogHeader>
          <DialogTitle className="font-display text-angular-soft text-xl">
            Send Kocknet a message
          </DialogTitle>
          <DialogDescription>
            Fill in your details, then your email app will open with the message ready to send.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="contact-name">Your name</Label>
            <Input id="contact-name" name="name" autoComplete="name" maxLength={100} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact-email">Your email</Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={255}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact-message">Message</Label>
            <Textarea id="contact-message" name="message" rows={5} maxLength={1200} required />
          </div>
          {error && (
            <p role="alert" className="text-sm text-destructive">
              {error}
            </p>
          )}
          <Button type="submit" className="justify-self-start">
            Open email draft
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}