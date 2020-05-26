<template>
  <header>
    <div class="title">Content</div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/posts">Posts</nuxt-link>
        </li>
        <li>
          <a href="https://github.com/ninest">GitHub</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 0.8em var(--side-padding);
  border-bottom: 1px solid #ddd;

  .title {
    font-weight: 600;
    font-size: 1.2em;

    margin-bottom: 0.2em;
  }

  nav {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;

      display: flex;

      li {
        a {
          color: #333;

          &:hover {
            font-weight: bold;
          }
        }
      }
      li + li {
        margin-left: 1em;
      }
    }
  }
}
</style>