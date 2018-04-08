<!-- - Implement notifications using new context api -->
- Implement drivers / customers sign up UI
  - Implement sync + async FIELD validation
- Implement drivers list page
- Implement restoring password flow
<!-- - Migrate react form library -->
- Take the advantage of the new React router in the multistep checkout. When every step should have it's own url probably but the page should remain the same
- Implement e2e tests

- Keep hocs in modules?
- Or for example keep "should authenticated" logic in modules, and use generic hocs for authentication, authorization, which will take that logic.

- Possible remove handlers callbacks from `withPromise` in favor of
  - handling them directly at the time of calling, like we're doing with form validations
  - handling them in providers by mapping promise request function and handling it there
    ```javascript
      withPromise(fetch, 'posts'),
      withHandlers({
        fetchPosts: ({ posts }) => async () => {
          try {
            await posts.fetch()
            console.log('success')
          } catch (err) {
            console.log('error')
          }
        }
      })
    ```
  - have conception of middleware in `withPromise`