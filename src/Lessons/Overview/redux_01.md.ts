export default `
## For every property coming from Redux, we have to maintain a localized reference
\`\`\`js
interface IMyComponentProps {
  queryForData: {
    loading: boolean;
    error: string
    data: {
      foo: string
    }
  }
}
\`\`\`

This means that we need to mutate the props of the Component directly --
which causes a *NIGHTMARE* for typesafe systems (TypeScript, Flow, propTypes)
`;
