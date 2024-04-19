# old-reddit-styles-tweaks
A collection of style tweaks for old reddit directed to make it more readable on mobile devices.


How to use:
1. File stylus.json is designed to be imported to stylus extension of your mobile browser. So you need to use a browser with extensions support (for example Firefox), install Stylus extension to it and import stylus.json inside extension manager page.
2. Since old reddit have <meta name="viewport"> content set to "width=1024" you also need something to set it to width=device-width, initial-scale=1.0. One of the ways to do it is to use a tampermonkey extension and import there "Auto meta viewport.user.js" file (or since its basically a few lines of code you could do it yourself).
3. On a https://old.reddit.com/prefs/ disable checkbox for "allow subreddits to show me custom themes" (subreddits change styles in unexpected ways, breaking all custom styles)
Optionally for even better functionality also install a Reddit Enhancement Suite.
