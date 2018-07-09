export default `
# Authentication
## Use Case:
We can share **login()**, **logout()**, **authSession**, **authToken** data + logic

This becomes a very powerful abstraction. Suddenly, anytime we need access something to do with Auth,
we have an immediate access point:

\`\`\`js
<AuthConsumer>
  {({login, logout, isAuthentication, authSession, authToken}: IAuthContext) => (
    //... do really cool things
  )}
</AuthConsumer
\`\`\`
`;
