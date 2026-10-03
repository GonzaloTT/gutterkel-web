# Contact form: local preparation

No real mail is sent and no request is stored. No deployment or Cloudflare account
configuration is included. Public contact data in `src/config/contact.js` is
provisional, copied from the existing website. Recipient, CC, sender, Maps and
privacy notice still require approval. Never put secrets in frontend config.

## Run locally (Node 22+)

In one terminal run `npm run dev:api`; in another run `npm run dev`.
Vite proxies `/api/contact` to the loopback-only adapter at `127.0.0.1:8788`.
The adapter executes the same parsing/validation handler as the Pages Function,
with an explicit local rehearsal option. Its successful response states that no
emails were sent and nothing was stored. The form preserves values in this mode.
This is not a Cloudflare runtime test or proof of delivery.

Without the adapter, `npm run dev` remains usable. A submit reports a global
unavailability error and preserves all values. Never point the development proxy
at a production API. The proxy is not included in the static build.

## Pages local/preview

If Wrangler is already available, `npm run build` then `wrangler pages dev dist`
runs the actual Pages entry point at `/api/contact`. Wrangler is not installed by
this change. The Pages handler returns 503 for valid requests until integrations
are implemented; malformed input returns 400/413/415/422 and other methods 405.
It never accepts a client-controlled flag enabling rehearsal success.

## Integration boundaries

- Shared field validation and normalization: `src/utils/formValidation.js`.
- Client transport/timeout: `src/services/contact.js`.
- Form states: idle, submitting, success and error; a synchronous ref prevents
  duplicate submissions. Fields are disabled in flight. Errors retain values.
- `turnstileToken` is reserved in the payload. It is empty during local rehearsal;
  that does not constitute security validation. A configured
  `VITE_TURNSTILE_SITE_KEY` currently blocks submit until widget wiring is added.
- Next implement widget loading/rendering, expiry/error callbacks and reset after
  each attempt, passing its real token to the existing payload slot. Then implement
  server Siteverify using `TURNSTILE_SECRET_KEY`, verifying hostname/action as well
  as success. Do not enable delivery based on token presence alone.
- Implement Resend only after confirming sender/domain, recipients and templates.
  Use server-only `RESEND_API_KEY`, `CONTACT_RECIPIENT`, optional `CONTACT_CC`, and
  `EMAIL_FROM`. Never trust recipient/sender addresses from browser input.
- First accept the internal quotation email, then send the customer confirmation.
  Define persistence/queue or retry policy, idempotency and partial-failure handling
  so a lost response or failed confirmation does not duplicate the quotation.
  Escape submitted text before inserting it into HTML. Add abuse/rate controls.
- Set a real success response only after the defined delivery/acceptance contract
  succeeds. Environment variables alone do not enable the current stub.

`.env.example` lists names only. Server secrets belong in Cloudflare bindings or
an ignored local `.dev.vars`, never a `VITE_` variable. No secret file is created.
Google Maps and privacy remain pending; no placeholder URL is fabricated.

## Checks

`npm run test:contact`, `npm run build`, `npm run lint`, `git diff --check`.
Tests use synthetic input and no external API calls.

Official references:
- https://developers.cloudflare.com/pages/functions/local-development/
- https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
