<script>
	export let post;
    export let title;
    export let imgUrl;
    export let description;
    export let link;
</script>

<section>
    <div class="l-wrapper_01">
        <article class="card_01">
            <div class="card__header_01">
                <p class="card__title_01">{@html title}</p>
                <figure class="card__thumbnail_01">
                    <img
                        src={imgUrl}
                        alt="サムネイル"
                        class="card__image_01"
                        height="320px"
                        style="object-fit: cover;height:300px"
                    />
                </figure>
            </div>
            <div class="card__body_01">
                <p class="card__text2_01">
                    {@html description} 
                </p>
            </div>
            <div class="card__footer_01">
                <p class="card__text_01">
                    <a
                        href="{link}"
                        class="button_01 -compact"
                        >この記事を詳しく見る</a
                    >
                </p>
            </div>
        </article>
    </div>
</section>

<style>
	/*--------------------------------------
  カード型_01
--------------------------------------*/
	.l-wrapper_01 {
		margin: 1rem auto;
		max-width: 465px;
	}

	.l-wrapper_01:hover {
		transform: translateY(-3px);
		box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
			0 3px 6px rgba(0, 0, 0, 0.08);
		transition: all 0.5s;
	}

	.card_01 {
		background-color: #fff;
		box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
		color: #212121;
		text-decoration: none;
	}

	.card__header_01 {
		display: flex;
		flex-wrap: wrap;
	}

	.card__title_01 {
		padding: 1rem 1.5rem 0;
		font-size: 1.0rem;
		order: 1;
		margin-bottom: 0.6rem;
		font-weight: bold;
		text-decoration: none;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		height: 100px;
	}

	.card__thumbnail_01 {
		margin: 0;
		order: 0;
		width: 100%;
	}

	.card__image_01 {
		width: 100%;
	}

	.card__body_01 {
		padding: 0 1.5rem;
		height: 100px;
	}

	.card__text_01 {
		font-size: 0.8rem;
		text-align: center;
		text-decoration: none;
		padding-bottom: 0;
	}

	.card__text2_01 {
		font-size: 0.8rem;
		margin-top: 0;
		margin-bottom: 2rem;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 4;
		overflow: hidden;
		height: 65px;
	}

	.card__text_01 + .card__text_01 {
		margin-top: 0.5rem;
	}

	.card__footer_01 {
		padding: 1rem;
		border-top: 1px solid #ddd;
	}

	.button_01 {
		display: inline-block;
		text-decoration: none;
		transition: background-color 0.3s ease-in-out;
		text-align: center;
	}

	.button_01 a {
		text-decoration: none;
	}

	.button_01.-compact {
		padding: 0.5rem 1rem;
		border-radius: 0.25rem;
		background-color: #4f96f6;
		color: #fff;
		font-weight: bold;
		text-decoration: none;
	}

	.button_01.-compact:hover,
	.button_01.-compact:focus {
		background-color: #6bb6ff;
	}

	#pagination {
		text-align: center;
		display: flex;
  		justify-content: space-evenly;
	}

	.pagination_num {
	}
</style>
