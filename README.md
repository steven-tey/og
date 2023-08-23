## Introduction

**OG.cool** is a simple service that allows you to display headlines directly inside your news article's OG image. Powered by [`@vercel/og`](https://vercel.com/docs/functions/edge-functions/og-image-generation).

Read the guide: https://vercel.com/guides/displaying-article-headlines-in-social-previews

## How it works

To use **OG.cool**, all you need to do is replace the `https://` (or `https://www.`) portion of the news article's URL with `https://og.cool/`.

Example:

- Original URL: https://www.nytimes.com/2023/08/23/climate/ocean-warming-fish.html
- **OG.cool** URL: https://og.cool/nytimes.com/2023/08/23/climate/ocean-warming-fish.html

The **OG.cool** URL will still redirect to the destination URL when a user clicks on it, but for bots like `TwitterBot` or `SlackBot`, they'll be shown an OG image with a nice headline in it (refer [Examples](#examples) section).

**OG.cool** currently supports the following publications:

- New York Times
- Wired
- Techcrunch

To add your publication, refer to the [Contributing](#contributing) section.

## Examples

### New York Times

![image](https://github.com/steven-tey/og/assets/28986134/fd79bf14-cab1-4989-a5bb-74146fa43485)

Try it for yourself: https://og.cool/nytimes.com/2023/08/23/climate/ocean-warming-fish.html

### Wired

![image](https://github.com/steven-tey/og/assets/28986134/7de03193-05e0-4ee1-bb3a-45c12ed70cf7)

Try it for yourself: https://og.cool/wired.com/story/adhd-adderall-video-games-endeavorrx/

## Contributing

WIP
