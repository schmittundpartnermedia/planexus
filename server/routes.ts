import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./resend";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "Alle Felder sind erforderlich" });
      }
      
      await sendContactEmail({ name, email, subject, message });
      
      res.json({ success: true, message: "Nachricht gesendet" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Fehler beim Senden der Nachricht" });
    }
  });

  return httpServer;
}
