export default `
# Redux
**Context Providers** share a similar space as **Redux**. In **Redux**, we would use **selectors** to access data from a centralized store.

## However, there is a problem with this solution.
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

const MyComponent : React.SFC<IMyComponentProps> = ({queryForData}) => (
  <div {...props}>
    {queryforData.loading && <div>Loading</div>}
    {!queryforData.loading && queryforData.data && (
      <div>{data.foo}</div>
    )}
  </div>
)

export default connect(
  state => ({
    queryForData: state.queryForData
  }),
  dipatch => ({})
)(MyComponent)
\`\`\`
`;
