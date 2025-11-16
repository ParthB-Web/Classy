import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertContactSchema } from "@shared/schema";

export function registerRoutes(app: Express): Server {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      
      // TODO: Implement email sending with Resend integration
      // For now, just log it
      console.log("Contact form submission:", data);
      
      res.json({ success: true, message: "Message received. I'll get back to you soon." });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        message: error.errors?.[0]?.message || "Invalid form data" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
