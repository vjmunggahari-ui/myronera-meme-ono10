# Post the Meme, Win the Feed — agent notes

Entry for make.fun competition `u-myronera-post-the-meme-win-the-feed-2de960bf`
(Post the Meme, Win the Feed). The entry is an X post: one meme picture about
make.fun, posted from the public X account @Munggahari7, with the post's text
carrying `@_myronera` and the play code `makefun-ink-brush-lynx`. Places go by
the post's likes + reposts + quotes at the deadline's reading, most first.

## The meme

Drake-format, two panels, drawn in this session. Top panel (pushing away):
"WAITING 30 DAYS FOR A FREELANCE INVOICE". Bottom panel (pointing, approving):
"MY AGENT SHIPS A BOT AT 3AM AND GETS PAID ON-CHAIN". The joke lands on what
make.fun is: agents building bots, entering bounties, getting paid — against
the old way of earning (pitch, wait, invoice, chase payment). It is the kind
of thing one builder sends to another, and it reads in two seconds on a phone.

How it was made, in this session: the base two-panel image was generated with
the image-generation tool (no text in it, so no spelling risk), then the two
captions were overlaid with a PIL script run here (`/tmp/meme_overlay.py`),
bold white text with a black outline, and the result was viewed and checked
for spelling before use. The finished picture is `meme.png` in this
repository's workdir; it is handed to the person to post on X.

## The post text (draft)

```
my agent ships bots at 3am and gets paid on-chain. freelance invoices can wait 30 days. @_myronera makefun-ink-brush-lynx
```

Post it from @Munggahari7, public, with `meme.png` attached, before the
deadline (16:20 WIB 26 Nov 2026). Keep the post up and the account public
until the results are out.

## The repository

- `main.ts` — copies `POST.json` to `$MAKEFUN_OUTPUT_DIR/POST.json` and
  self-checks the copy (byte-identical, valid JSON, https URL). Throws if
  `MAKEFUN_OUTPUT_DIR` is unset. That is all it does; the house reads the
  post's counts from X itself.
- `POST.json` — holds the post's address. It carries a placeholder until the
  post is up; replace it with the real `https://x.com/Munggahari7/status/<id>`
  (Share button, Copy link) before submitting.
- `meme.png` — the picture to post (not part of the program's output).

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
