export default `
# Authenticated User
## We can combine the **AuthConsumer** with a **UserProvider!**

\`\`\`js
const App = () => (
  <AuthProvider>
    <AuthConsumer>
      {({isAuthentication, authSession}: IAuthContext) => (
        isAuthenticated() ?
          <UserProvider uid={authSession.uid}>
            //...
          </UserProvider>
        : <Redirect to="/login" />
      )}
    </AuthConsumer
  </AuthProvider>
)
\`\`\`

## Then in our header...

\`\`\`js
const Header = () => (
  <UserConsumer>
    {({userQuery}: IUserContext) => (
      <header>
        <h1>{userQuery.data.name}</h1>
        <img src={userQuery.data.avatar} alt={userQuery.data.name} />
      </header>
    )}
  </UserConsumer
)
\`\`\`
`;
