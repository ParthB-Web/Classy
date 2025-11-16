import { Link } from "wouter";
import { ArrowLeft, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import CosmicBackground from "@/components/CosmicBackground";
import Footer from "@/components/Footer";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return await res.json();
    },
    onSuccess: (data: any) => {
      toast({
        title: "Message sent",
        description: data.message || "I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <div className="relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          <Link href="/">
            <a 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary active:text-primary transition-colors duration-300 font-sans mb-8 md:mb-12 touch-manipulation"
              data-testid="link-back-home"
            >
              <ArrowLeft className="w-4 h-4" />
              Return
            </a>
          </Link>

          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 border border-primary/20 backdrop-blur-sm rounded-full mb-6 md:mb-8">
              <span className="text-[10px] md:text-xs font-sans text-primary tracking-widest uppercase">
                Contact
              </span>
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4 md:mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
              data-testid="heading-contact-title"
            >
              Write to Me
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Thoughts, questions, or quiet correspondence — all are welcome.
            </p>
          </div>

          <Card className="p-6 md:p-8 lg:p-12 border-card-border backdrop-blur-xl bg-card/80">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans text-sm">Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Your name"
                          className="font-sans"
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans text-sm">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="your@email.com"
                          className="font-sans"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans text-sm">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Your message..."
                          className="font-sans min-h-[200px] resize-none"
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full font-sans uppercase tracking-wider"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit"
                >
                  {contactMutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-8 font-sans">
            Your information is private and will only be used to respond to your message.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
