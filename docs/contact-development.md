# Contact form and Turnstile

No email is sent and no request is stored. Resend remains pending. Contact data is
provisional; recipients, sender, Maps and privacy notice still need confirmation.

## Local rehearsal (Node 22+)

1. Run `npm run dev:api` in one terminal.
2. In another, set `VITE_TURNSTILE_SITE_KEY` to the official always-pass public
   testing site key from Cloudflare's testing documentation, then `npm run dev`.
   PowerShell: `$env:VITE_TURNSTILE_SITE_KEY = '<public testing site key>'`.
   Restart Vite after changing this build-time variable.
3. Open `/contacto`, complete synthetic data and wait for widget verification.
4. Submit. Expect exactly: **Prueba local completada. No se enviaron correos ni se
   guardó la solicitud.** Values remain; the widget/token reset.

Vite proxies `/api/contact` to `127.0.0.1:8788`. Only the loopback adapter passes
`localPreview: true` directly to the handler. It skips Siteverify and needs no
secret. Payloads, query parameters, headers, Origin and Pages context cannot
activate it. Direct adapter tests may omit the token; the frontend requires a
widget token. Rehearsal is not proof of security verification or delivery.

Without a site key, the page displays configuration pending and blocks submission
after normal field validation. Remove the process variable if set
(`Remove-Item Env:VITE_TURNSTILE_SITE_KEY`) and restart Vite to test this state.
Without `dev:api`, submission with a token reports an availability error and
retains the draft. Never point the development proxy at production.

## Next Cloudflare Preview deployment

1. Confirm **Preview only** has matching official testing values for
   `VITE_TURNSTILE_SITE_KEY` (public, build-time) and `TURNSTILE_SECRET_KEY` (server
   binding). Testing keys must NOT be used in Production. No Resend variables
   are required for this phase. No keys are stored in this repository.
2. After publishing code through a separately authorized Git/deployment workflow,
   create a fresh Preview build. Changing the Vite site key requires rebuilding.
3. Open its `/contacto` at desktop/mobile widths. Wait for verification, fill
   synthetic data, then submit once.
4. Inspect `POST /api/contact` in browser Network: JSON includes `turnstileToken`.
   With Siteverify success, expect **503** and exactly: **El envío de solicitudes
   todavía no está habilitado. Utiliza teléfono, WhatsApp o correo para
   contactarnos.** This specific message proves the pending delivery step was
   reached; a generic 503 alone does not prove successful verification.
5. Confirm values remain and the widget resets. Each attempt needs a new token.
   Empty fields, invalid email, no solutions and empty details produce field
   errors without calling the API.
6. Let verification expire: expect expiry feedback, token invalidation and
   **Volver a verificar**. Retry before submitting. Rejected tokens produce a
   generic 403; HTTP/network/JSON failures produce a generic 503. Provider details,
   tokens and secrets are neither returned nor logged by this Function.

Cloudflare Preview uses the public handler and calls Siteverify, never the local
rehearsal. Missing server secret fails closed without a fetch; missing token
returns 403. Malformed requests still return 400/413/415/422; other methods 405.
Production without keys stays disabled. If Wrangler is already available,
`npm run build` then `wrangler pages dev dist` can run the public handler locally
with testing bindings outside source control. No Wrangler install is required.

## Implementation boundaries

- Turnstile loads the official script once, explicitly renders the widget,
  handles success/expiry/errors, removes it on unmount and resets after each API
  attempt. Script loading failures can be retried. No new package is used.
  It uses flexible size at 300px or wider and compact size in narrower containers.
- ContactForm holds the token separately from business values and adds it to JSON.
  Every API attempt resets it, including network failure or 503. Disabled fields
  and a synchronous guard prevent duplicate submissions. Only a future real
  success clears the draft; rehearsal preserves it.
- Shared business validation accepts a bounded optional token as a known key;
  the public handler independently requires it. Unknown keys remain rejected.
- The server reads only `env.TURNSTILE_SECRET_KEY` for verification. Siteverify
  receives URL-encoded `secret` and `response` with an eight-second timeout.
  HTTP, JSON and strict `success === true` are checked. Client timeout is fifteen
  seconds. No automatic replay of a potentially consumed token.
- `.env.example` lists names only. Only the public site key may use `VITE_`.
  Server secrets belong in Cloudflare bindings or an ignored local `.dev.vars`,
  never frontend code. No secret file is created by this change.

## Pending real delivery

Confirm production widget/allowed hostnames and consider server hostname/action
checks before enabling delivery. Testing success is not production anti-abuse
validation. Resend requires a confirmed sender/domain, recipients and templates,
plus server-only `RESEND_API_KEY`, `CONTACT_RECIPIENT`, optional `CONTACT_CC`,
`EMAIL_FROM`. Send the internal request first, then customer confirmation. Define
idempotency, retries/partial failure, HTML escaping and abuse controls. Never
accept sender/recipient addresses from the browser. Even with these bindings,
the current handler always stops before delivery.

## Checks

`npm run test:contact`, `npm run build`, `npm run lint`, `git diff --check`.
Tests mock fetch and never call Cloudflare or Resend. Fixtures are synthetic.

Official references:
- https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/
- https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
- https://developers.cloudflare.com/turnstile/troubleshooting/testing/
- https://developers.cloudflare.com/pages/functions/local-development/
