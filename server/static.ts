import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { injectSSRContent } from "./lib/ssr-content";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    let html = fs.readFileSync(indexPath, "utf-8");
    
    // Inject SSR content for SEO
    const urlPath = req.originalUrl.split("?")[0];
    html = injectSSRContent(html, urlPath);
    
    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  });
}
