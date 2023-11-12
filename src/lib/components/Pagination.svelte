<!-- 参考 -->
<!-- https://codepen.io/angeal185/pen/rMbMPQ -->

<script>
	export let pages;
	export let nowPagesNum;
	export let pagePath;
	export let queries;
	
	const pageList = [...Array(Number(pages))].map((_, i) => i + 1);

	const pageCount = pageList.length;
</script>

<section>
	<section>
		<nav role="navigation">
			<ul class="pagination">
				{#if Number(nowPagesNum) - 1 > 0}
					<li class="button">
						<a data-sveltekit-reload  href="{pagePath}{Number(nowPagesNum) - 1}{queries}">Prev</a>
					</li>
				{/if}
				{#each pageList as num, i}
					{#if Number(nowPagesNum) == num}
						<li>
							<a class="current" href="{pagePath}{num}{queries}">{num}</a
							>
						</li>
					{/if}
					{#if Number(nowPagesNum) != num}
						<li>
							<a
								data-sveltekit-reload
								class=""
								href="{pagePath}{num}{queries}">{num}</a
							>
						</li>
					{/if}
				{/each}
				{#if Number(nowPagesNum) + 1 < pageCount}
					<li class="button"><a data-sveltekit-reload href="{pagePath}{Number(nowPagesNum) + 1}{queries}">Next</a></li>
				{/if}
			</ul>
		</nav>
	</section>
</section>

<style>
	a {
		color: #121212;
		text-decoration: none;
	}
	section {
		border-bottom: 1px solid #e6e6e6;
	}
	section h2 {
		width: 90%;
		margin: 2em auto 0;
		color: #7d98ba;
		font-weight: 700;
		text-align: center;
	}
	@media only screen and (min-width: 1170px) {
		section h2 {
			margin: 4em auto 0;
		}
	}
	nav[role="navigation"] {
		text-align: center;
	}
	.pagination {
		width: 90%;
		max-width: 768px;
		margin: 2em auto 4em;
		text-align: center;
	}
	.pagination li {
		display: none;
		margin: 0 0.2em;
	}
	.pagination li.button {
		display: inline-block;
	}
	.pagination a {
		border: 1px solid #e6e6e6;
		border-radius: 0.25em;
	}
	.pagination a:active {
		-webkit-transform: scale(0.9);
		-moz-transform: scale(0.9);
		-ms-transform: scale(0.9);
		-o-transform: scale(0.9);
		transform: scale(0.9);
	}
	.pagination a.disabled {
		color: rgba(46, 64, 87, 0.4);
		pointer-events: none;
	}
	.pagination .button:first-of-type a::before {
		content: "\00ab  ";
	}
	.pagination .button:last-of-type a::after {
		content: " \00bb";
	}
	.pagination .current {
		background-color: #f00;
		border-color: #64a281;
		color: #fff;
		pointer-events: none;
	}
	.pagination.no-space {
		width: auto;
		max-width: none;
		display: inline-block;
		border-radius: 0.25em;
		border: 1px solid #e6e6e6;
	}
	.pagination.no-space:after {
		content: "";
		display: table;
		clear: both;
	}
	.pagination.no-space li {
		margin: 0;
		float: left;
		border-right: 1px solid #e6e6e6;
	}
	.pagination.no-space li:last-of-type {
		border-right: none;
	}
	.pagination.no-space li:last-of-type a {
		border-radius: 0 0.25em 0.25em 0;
	}
	.pagination.no-space li:first-of-type a {
		border-radius: 0.25em 0 0 0.25em;
	}
	.pagination.no-space.move-buttons {
		width: 90%;
		max-width: 768px;
		display: block;
		overflow: hidden;
	}
	.pagination.no-space.move-buttons li {
		float: none;
		border: none;
	}
	.pagination.no-space.custom-buttons .button:last-of-type a {
		border-radius: 0.25em 0 0 0.25em;
	}
	.pagination.move-buttons:after {
		content: "";
		display: table;
		clear: both;
	}
	.pagination.move-buttons .button:first-of-type {
		float: left;
	}
	.pagination.move-buttons .button:last-of-type {
		float: right;
	}
	.pagination.custom-icons .button a {
		position: relative;
	}
	.pagination.custom-icons .button:first-of-type a {
		padding-left: 2.4em;
	}
	.pagination.custom-icons .button:first-of-type a::before {
		left: 0.8em;
	}
	.pagination.custom-icons .button:last-of-type a {
		padding-right: 2.4em;
	}
	.pagination.custom-icons .button:last-of-type a::after {
		right: 0.8em;
		-webkit-transform: rotate(180deg);
		-moz-transform: rotate(180deg);
		-ms-transform: rotate(180deg);
		-o-transform: rotate(180deg);
		transform: rotate(180deg);
	}
	.pagination.custom-buttons .button a {
		width: 40px;
		overflow: hidden;
		white-space: nowrap;
		text-indent: 100%;
		color: transparent;
		background-image: url("../img/icon-arrow-2.svg");
		background-repeat: no-repeat;
		background-position: center center;
	}
	.pagination.custom-buttons .button:last-of-type a {
		-webkit-transform: rotate(180deg);
		-moz-transform: rotate(180deg);
		-ms-transform: rotate(180deg);
		-o-transform: rotate(180deg);
		transform: rotate(180deg);
	}
	.pagination.animated-buttons .button a {
		position: relative;
		padding: 0 2em;
	}
	.pagination.animated-buttons .button:last-of-type a::after {
		-webkit-transform: translateX(-50%) rotate(180deg);
		-moz-transform: translateX(-50%) rotate(180deg);
		-ms-transform: translateX(-50%) rotate(180deg);
		-o-transform: translateX(-50%) rotate(180deg);
		transform: translateX(-50%) rotate(180deg);
	}
	.pagination.animated-buttons i {
		display: block;
		height: 100%;
		-webkit-transform: translateY(100%);
		-moz-transform: translateY(100%);
		-ms-transform: translateY(100%);
		-o-transform: translateY(100%);
		transform: translateY(100%);
		-webkit-transition: -webkit-transform 0.3s;
		-moz-transition: -moz-transform 0.3s;
		transition: transform 0.3s;
	}
	.pagination a,
	.pagination span {
		display: inline-block;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		padding: 0.6em 0.8em;
		font-size: 1.6rem;
	}
	.no-touch .pagination a:hover {
		background-color: #f2f2f2;
	}
	.no-touch .pagination.custom-buttons .button:last-of-type a:active {
		-webkit-transform: scale(0.9) rotate(180deg);
		-moz-transform: scale(0.9) rotate(180deg);
		-ms-transform: scale(0.9) rotate(180deg);
		-o-transform: scale(0.9) rotate(180deg);
		transform: scale(0.9) rotate(180deg);
	}
	.no-touch .pagination.animated-buttons .button a:hover i {
		-webkit-transform: translateY(0);
		-moz-transform: translateY(0);
		-ms-transform: translateY(0);
		-o-transform: translateY(0);
		transform: translateY(0);
	}
	.no-touch
		.pagination.animated-buttons
		.button:first-of-type
		a:hover::before {
		-webkit-transform: translateX(-50%) translateY(-50px);
		-moz-transform: translateX(-50%) translateY(-50px);
		-ms-transform: translateX(-50%) translateY(-50px);
		-o-transform: translateX(-50%) translateY(-50px);
		transform: translateX(-50%) translateY(-50px);
	}
	.no-touch .pagination.animated-buttons .button:last-of-type a:hover::after {
		-webkit-transform: translateX(-50%) rotate(180deg) translateY(50px);
		-moz-transform: translateX(-50%) rotate(180deg) translateY(50px);
		-ms-transform: translateX(-50%) rotate(180deg) translateY(50px);
		-o-transform: translateX(-50%) rotate(180deg) translateY(50px);
		transform: translateX(-50%) rotate(180deg) translateY(50px);
	}
	.pagination a.disabled::before,
	.pagination a.disabled::after {
		opacity: 0.4;
	}
	@media only screen and (min-width: 768px) {
		.pagination li {
			display: inline-block;
		}
	}
	@media only screen and (min-width: 1170px) {
		.pagination {
			margin: 4em auto 8em;
		}
	}
	.pagination.no-space a,
	.pagination.no-space span {
		float: left;
		border-radius: 0;
		padding: 0.8em 1em;
		border: none;
	}
	.pagination.no-space.move-buttons a,
	.pagination.no-space.move-buttons span {
		float: none;
	}
	.pagination.custom-icons .button:first-of-type a::before,
	.pagination.custom-icons .button:last-of-type a::after {
		content: "";
		position: absolute;
		display: inline-block;
		width: 16px;
		height: 16px;
		top: 50%;
		margin-top: -8px;
		background: transparent url("../img/icon-arrow-1.svg") no-repeat center
			center;
	}
	.pagination.custom-buttons a,
	.pagination.custom-buttons span {
		vertical-align: middle;
	}
	.pagination.animated-buttons a,
	.pagination.animated-buttons span {
		padding: 0 1.4em;
		height: 50px;
		line-height: 50px;
		overflow: hidden;
	}
	.pagination.animated-buttons .button:first-of-type a::before,
	.pagination.animated-buttons .button:last-of-type a::after {
		left: 50%;
		-webkit-transform: translateX(-50%);
		-moz-transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		-o-transform: translateX(-50%);
		transform: translateX(-50%);
		right: auto;
		-webkit-transition: -webkit-transform 0.3s;
		-moz-transition: -moz-transform 0.3s;
		transition: transform 0.3s;
	}
	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		background-color: #181818;
	}
	::-webkit-scrollbar {
		width: 6px;
		background-color: #181818;
	}
	::-webkit-scrollbar-thumb {
		background-color: #454545;
	}
</style>
