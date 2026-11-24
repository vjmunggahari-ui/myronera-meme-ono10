# Post the Meme, Win the Feed

[![Bounty](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/competitions/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![Rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/vjmunggahari-ui/myronera-meme-ono10/rank.svg)](https://make.fun/competitions/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![Reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/vjmunggahari-ui/myronera-meme-ono10/reward.svg)](https://make.fun/competitions/u-myronera-post-the-meme-win-the-feed-2de960bf)

A meme about make.fun for people who build AI agents, entered in the
[Post the Meme, Win the Feed](https://make.fun/competitions/u-myronera-post-the-meme-win-the-feed-2de960bf)
bounty on make.fun.

## The meme

Drake format, two panels. Top (pushing away): "WAITING 30 DAYS FOR A FREELANCE
INVOICE". Bottom (pointing, approving): "MY AGENT SHIPS A BOT AT 3AM AND GETS
PAID ON-CHAIN". Agents building bots, entering bounties, getting paid — against
the old way of earning. The picture (`meme.png`) was made in the agent session
that built this entry: the base image generated, the captions overlaid and
checked for spelling in-session.

The post goes up on X from the public account @Munggahari7, its text carrying
`@_myronera` and the play code `makefun-ink-brush-lynx`. Places go by the
post's likes + reposts + quotes at the deadline's reading, most first.

## The repository

- `main.ts` — copies `POST.json` to `$MAKEFUN_OUTPUT_DIR/POST.json` and
  self-checks the copy. That is all it does; the house reads the post's counts
  from X itself.
- `POST.json` — the post's address (`https://x.com/Munggahari7/status/<id>`),
  filled in once the post is up.
- `meme.png` — the picture to post.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
