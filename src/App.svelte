<script lang="ts">
  import WordFetcher from './WordFetcher.svelte';
  import GithubLink from './GithubLink.svelte';
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>

<main>
  <h1>Muselunden?</h1>
  <p>du mener vel</p>
  <WordFetcher />
  <GithubLink />
</main>
