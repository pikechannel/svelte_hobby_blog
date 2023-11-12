<script>
	import logo from "$lib/images/header_logo.png";
	import NewArticle from "$lib/components/NewArticle.svelte";
	import Sidebar from "$lib/components/Sidebar.svelte";
	import CategoryList from "$lib/components/CategoryList.svelte";

	export let data;
	const categoryMap = data.categories;
	function compare(a, b) {
		var r = 0;
		if (a.id < b.id) {
			r = -1;
		} else if (a.id > b.id) {
			r = 1;
		}

		return r;
	}

	categoryMap.sort(compare);
	const title = import.meta.env.VITE_TITLE;

	const posts = data.post;

	console.log(posts);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="header_logo_box">
	<img src={logo} alt="" />
</div>

<h1>新着記事</h1>
<NewArticle {data} />

<div class="flexbox">
	<div id="main_area">
		<div id="">
			{#each posts as post}
				<div class="article">
					<a href="/blog/posts/{post.id}">
						<div class="flexbox">
							<picture>
								<source
									class="article_img"
									src={post.yoast_head_json.og_image[0].url}
								/>
								<img
									class="article_img"
									src={post.yoast_head_json.og_image[0].url}
									alt=""
								/>
							</picture>
							<div class="article_content">
								<div class="post_title">
									{post.title.rendered}
								</div>
								<div class="">
									{post.yoast_head_json.og_description.substring(
										0,
										50
									).replace(/\s+/g, "")}
								</div>
							</div>
						</div>
					</a>
				</div>
			{/each}
		</div>
		<div class="article_all_button">
			<a href="/blog/pages/">記事一覧</a>
		</div>
		<CategoryList {categoryMap} />
	</div>

	<!-- サイドバー -->
	<aside id="side_area">
		<Sidebar />
	</aside>
</div>

<style>
	h1 {
		font-size: 2em;
		padding: 0.25em 0;
		text-shadow: 0 1px 0 #ccc, 0 3px 0 #ccc, 0 4px 10px rgba(0, 0, 0, 0.2);
	}
	h1:after {
		content: "";
		display: block;
		height: 4px;
		background: -webkit-linear-gradient(to right, #2196f3, transparent);
		background: linear-gradient(to right, #2196f3, transparent);
	}
	.header_logo_box {
		text-align: center;
		padding: 50px 0;
	}
	.header_logo_box img {
		max-width: 100%;
	}
	.article_img {
		width: 250px;
		height: 150px;
		object-fit: cover;
	}
	.article {
		padding: 10px;
		margin: 20px 0px;
	}
	.article:hover {
		background-color: #d9e5ff;
	}
	.post_title {
		margin-bottom: 15px;
		font-weight: bold;
	}
	.article_content {
		margin-left: 10px;
	}
	.article_all_button {
		text-align: center;
		width: 100%;
		display: flex;
	}
	.article_all_button a {
		background-color: #61d800;
		color: white;
		border-radius: 100px;
		display: inline;
		margin: auto;
		padding: 20px 40px;
		font-size: 20px;
	}

	@media screen and (max-width: 640px) {
		#side_area, .article_img {
			display: none;
		}
		#main_area {
			width: 100%;
		}
	}
</style>
