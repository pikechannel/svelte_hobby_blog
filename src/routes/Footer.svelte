<script>
	const title = import.meta.env.VITE_TITLE;
</script>

<footer>
	<p>© Copyright 2023 <a href="/">{title}</a>.</p>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>