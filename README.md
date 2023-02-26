# use-spotify-song

A React hook to fetch your currently playing or your most recently played Spotify song.

## Features

- 🌎 **Universal**: provides esm and cjs modules.
- 🌳 **Tree shaking**: grab only what you need.
- 💪 **Strongly typed**: Typescript support.

## Getting Started

> `yarn add use-spotify-song`

You'll need to register an application with [Spotify for Developers](https://developer.spotify.com/) to use this hook. You'll also need an access token from Spotify's OAuth. Instructions to get that are [here](https://developer.spotify.com/documentation/general/guides/authorization/).

`use-spotify-song` uses [SWR](https://swr.vercel.app/), a react hook for data fetching, under the hood. Most of SWR's data-fetching capabilitities available through the package are exposed through this hook as well.

## Examples

Provide the context to your application and specify your access token.

```jsx
import { SpotifySongConfig } from 'use-spotify-song';

<SpotifySongConfig.Provider value={{ accessToken }}>{children}</SpotifySongConfig.Provider>;
```

Access the song and a loading state from the hook.

```jsx
import { useSpotifySong } from 'use-spotify-song';

const Component = () => {
  const { song, isLoading } = useSpotifySong();

  return <p>{isLoading ? 'Loading...' : song?.name}</p>;
};
```

`use-spotify-song` supports refreshing on an interval (polling). Provide a number in milliseconds in the configuration!

```jsx
<SpotifySongConfig.Provider value={{ accessToken, config: { refreshInterval: 5000 } }}>
  ...
</SpotifySongConfig.Provider>
```

Support for Suspense, offered by React 18, is available. Turn it on in the configuration to allow for data loading that "just works".

```jsx
<SpotifySongConfig.Provider value={{ accessToken, config: { suspense: true } }}>
  ...
</SpotifySongConfig.Provider>
```

```jsx
const Parent = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Component />
    </Suspense>
  );
};

const Component = () => {
  const { song } = useSpotifySong();

  return <p>{song?.name}</p>;
};
```

One may also access a callback to revalidate the song. as well as a state for if the song is validating.

```jsx
const Component = () => {
  const { song, isLoading, update, isUpdating } = useSpotifySong();

  return (
    <>
      <p>{song?.name}</p>
      <button onClick={() => update()}>Get new song!</button>
      {isUpdating && <span>Updating...</span>}
    </>
  );
};
```

## Contributions

Contributions are very much welcome! Please feel free to add features, fix any found bugs, or change anything that could be written better.

If contributing, please be sure to open an issue with a description.

### Contribution Instructions

To contribute, clone this repo and, preferably as descriptive as possible, create a new branch.

- Ex: Branch name: `feature/current-podcast` or `bug/polling`

After changes are finished, be sure to let ESLint and Prettier enforce and codify. Make sure unit tests are passing. If additional code was written, be sure to include unit tests to ensure code quality.
