<script lang="ts">
  import Spinner from './Spinner.svelte';
  import { onMount } from 'svelte';
  import { downvoteWord, loadWord, upvoteWord } from './api';

  let loading = true;
  let error = false;
  let word: string | null = null;

  const getNewWord = async (): Promise<void> => {
    word = null;
    loading = true;
    error = false;

    try {
      const fetchedWord = await loadWord();
      loading = false;
      word = fetchedWord.muselunden;
    } catch (e) {
      console.error(e);

      loading = false;
      error = true;
    }
  };

  const upvote = async () => {
    if (word == null) {
      throw new Error("Illegal state: Can't upvote missing word");
    }

    loading = true;

    await upvoteWord(word);
    await getNewWord();
  };

  const downvote = async () => {
    if (word == null) {
      throw new Error("Illegal state: Can't downvote missing word");
    }

    loading = true;
    await downvoteWord(word);
    await getNewWord();
  };

  onMount(async () => {
    await getNewWord();
  });
</script>

<style>
  #vote-box {
    position: relative;
    margin-top: 32px;
    height: 48px;
    padding: 16px;
  }
</style>

{#if error}
  <h2>Noe gikk galt... :( Prøv igjen senere</h2>
{:else}
  <h1>{word ?? '...'}</h1>
{/if}

<div id="vote-box">
  <button on:click={upvote} disabled={loading || error}>Nice</button>
  <button on:click={downvote} disabled={loading || error}>Meh</button>
</div>
{#if loading}
  <Spinner />
{/if}
