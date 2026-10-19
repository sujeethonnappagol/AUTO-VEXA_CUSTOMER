# Auto-Vexa Customer Portal

Role-specific Auto-Vexa customer frontend deployment.

## Build and deploy

1. Copy `.env.example` to `.env` and set `VITE_API_URL` to the deployed Auto-Vexa API URL.
2. Run `npm install` and `npm run build`.
3. Deploy the generated `dist/customer` directory as the static site output.

This frontend only permits customer accounts. It shares the API and MongoDB database with the admin and vendor portals; the API enforces permissions.

