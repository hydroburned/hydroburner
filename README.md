<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/17_OYQ0THPMt7Lt4V_cIaiKpfphjhg_t2

## 🚀 Live Demo

The app is deployed on GitHub Pages: https://hydroburned.github.io/hydroburner/

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key

3. Run the app:
   ```bash
   npm run dev
   ```

## Deploy to GitHub Pages

The project is configured for automatic deployment to GitHub Pages:

1. Build and deploy:
   ```bash
   npm run deploy
   ```

This will build the project and push the `dist` folder to the `gh-pages` branch.
