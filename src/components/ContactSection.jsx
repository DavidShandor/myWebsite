import {
  Linkedin,
  Mail,
  MessageCircle,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

// אחרי אימות ראשון ב-FormSubmit אפשר להחליף ל-slug
const FORM_ENDPOINT = "https://formsubmit.co/ajax/davidshandor15@gmail.com";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      payload._subject = "New message from shandor.dev";
      payload._template = "table";
      payload._captcha = "false";

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to send");
      }

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",

      });
      form.reset();
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Send failed",
        description: err?.message || "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>

        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.

        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* עמודת מידע וקישורים */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 text-left">
              <div className="flex items-start space-x-4">
                <span className="p-3 rounded-full bg-primary/10 inline-flex">
                  <Mail className="h-6 w-6 text-primary" />
                </span>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:davidshandor15@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    davidshandor15@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="p-3 rounded-full bg-primary/10 inline-flex">
                  <Phone className="h-6 w-6 text-primary" />
                </span>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+972508333601"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    050 833 3601
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="p-3 rounded-full bg-primary/10 inline-flex">
                  <MapPin className="h-6 w-6 text-primary" />
                </span>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Rosh Zurim, Israel
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Let's Connect!</h4>

              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/davidshandor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-full bg-primary/10 inline-flex"
                >
                  <Linkedin className="h-6 w-6 text-primary" />
                </a>
                <a
                  href="https://wa.me/972508333601"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-3 rounded-full bg-primary/10 inline-flex"
                >
                  <MessageCircle className="h-6 w-6 text-primary" />
                </a>
                {/* === כאן הוספנו את כפתור ה-CV === */}
              
                <a
                  href="/David_Shandor_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Download CV
                </a> 
              </div>
            </div>
          </div>

          {/* עמודת הטופס */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John Doe..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
