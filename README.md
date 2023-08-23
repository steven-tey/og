## Introduction

**OG.cool** is a simple service that allows you to display headlines directly inside your news article's OG image. Powered by [`@vercel/og`](https://vercel.com/docs/functions/edge-functions/og-image-generation).

Read the guide:

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

![image](https://github.com/steven-tey/og.cool/assets/28986134/e25c36b0-c4ca-4502-b5e5-5968bb860644)

Try it for yourself: https://og.cool/nytimes.com/2023/08/23/climate/ocean-warming-fish.html

### Wired

![image](https://github.com/steven-tey/og.cool/assets/28986134/04cac805-0050-4b88-9e23-dcccfc0bf769)

Try it for yourself: https://og.cool/wired.com/story/adhd-adderall-video-games-endeavorrx/

## Contributing

WIP
