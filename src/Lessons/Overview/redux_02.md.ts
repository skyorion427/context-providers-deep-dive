export default `
## Context Providers use the render prop technique
\`\`\`js
interface IMyComponentProps {
  // empty :O
}

const MyComponent : React.SFC<IMyComponentProps> = () => (
  <QueryForDataConsumer>
  {({queryForData}: IQueryForDataContext) => (
    <div>
      {queryforData.loading && <div>Loading</div>}
      {!queryforData.loading && queryforData.data && (
        <div>{data.foo}</div>
      )}
    </div>
  )}
  </QueryForDataConsumer>
)
\`\`\`
`;
