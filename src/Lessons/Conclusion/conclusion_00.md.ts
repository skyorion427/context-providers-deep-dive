export default `
  # Conclusion
  ## When to use:
  **Context Providers** should be used for reusable bits of **logic**, **state**, and **data**.

  If the logic is not intended for reuse, the extra boilerplate may feel cumbersome. There is something to
  be said about consistency within a workspace, however, and this should be considered when choosing to pivot.

  The offical [React Stance](https://reactjs.org/docs/context.html#when-to-use-context) is:
  \`\`\`
  Context is designed to share data that can be considered “global” for a tree of React components,
  such as the current authenticateduser, theme, or preferred language.

  Note:
  Don't use context just to avoid passing props a few levels down.
  Stick to cases where the same data needs to be accessed in many components at multiple levels.
  \`\`\`
`;
