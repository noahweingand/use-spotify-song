export const fetchMock = (data: Record<string, string> | Record<string, never>) => {
  const mock = data;
  const resPromise = Promise.resolve(mock);
  const mockFetchPromise = Promise.resolve({
    json: () => resPromise,
  });

  const globalRef = global;

  globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
};
