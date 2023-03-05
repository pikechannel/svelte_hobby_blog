<script>
    import { onMount } from 'svelte';

    const twitterID = import.meta.env.VITE_TWITTER_ID;
    
    onMount(() => {
        let tweetScript = document.createElement('script')
        tweetScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
        document.head.appendChild(tweetScript)
    })
    
</script>

<a class="twitter-timeline" href="https://twitter.com/{twitterID}?ref_src=twsrc%5Etfw" data-height="400" data-lang="ja" data-width="300">Tweets by pike45587221</a>
