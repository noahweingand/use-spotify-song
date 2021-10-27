# use-spotify-song

A React hook for to fetch the your currently playing Spotify song, or your most recently played. Polling support available!

## Features

- 🌳 **Universal**: provides esm and cjs modules.
- 💪 **Strongly typed**: Typescript support.

## Getting Started

You'll need to register an application with [Spotify for Developers](https://developer.spotify.com/) to use this hook. You'll also need an access token from Spotify's OAuth system. Instructions to get that are [here](https://developer.spotify.com/documentation/general/guides/authorization/).

`yarn add use-spotify-song`

## Example

Access the song, any errors, and a loading state from the hook.

```jsx
import { useSpotifySong } from 'use-spotify-song';

const Component = () => {
  const { song, error, loaded } = useSpotifySong('client-id', 'secret', 'access-token');

  return <p>{loaded ? song?.name : 'Loading...'}</p>;
};
```

To only get the most recently played song, provide it in the hook configuration.

```jsx
const Component = () => {
  const { song, error, loaded } = useSpotifySong('client-id', 'secret', 'access-token', {
    recentOnly: true,
  });

  return <p>{loaded ? song?.name : 'Loading...'}</p>;
};
```

`use-spotify-song` supports polling for song updates. Provide a number in seconds in the configuration!

```jsx
const Component = () => {
  const { song, error, loaded } = useSpotifySong('client-id', 'secret', 'access-token', {
    interval: 30,
  });

  return <p>{loaded ? song?.name : 'Loading...'}</p>;
};
```

One may also access a callback to re-fetch an updated song on your own prerogative.

```jsx
const Component = () => {
  const { song, error, loaded, getSong } = useSpotifySong('client-id', 'secret', 'access-token', {
    interval: 30,
  });

  return (
    <>
      <p>{loaded ? song?.name : 'Loading...'}</p>
      <button onClick={getSong}>Get new song!</button>
    </>
  );
};
```

## Contributions

Contributions are very much welcome! Please feel free to add features, fix any found bugs, or change anything that could be written better.

If contributing, please be sure to open an issue with a description of what is wanting to be done.

### Contribution Instructions

To contribute, clone this repo and create a new branch (preferably as descriptive as possible).

- Ex: Branch name: `feature/current-podcast` or `bug/polling`

After changes are finished, be sure to let ESLint and Prettier enforce the code style. Make sure unit tests are passing. If additional code was written, be sure to include unit tests to ensure code quality.
