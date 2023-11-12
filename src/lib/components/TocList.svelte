<script>
    import TocNode from "$lib/components/TocNode.svelte";
    export let contents;
    let tocList = [];
    let tag_val = "h.";

    const pattern = new RegExp(
        "<" + tag_val + "(?: .+?)?>.*?</" + tag_val + ">",
        "g"
    );
    const blogContent = contents.match(pattern);

    if (!!blogContent) {
        let h2Flag = 0;
        let h3Flag = 0;
        let h4Flag = 0;

        blogContent.forEach(function (t) {
            let item = {
                id: "",
                name: "",
                children: [],
            };
            item.name = t.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");

            const id = t.match(/\"(.+)\"/);
            if (id) {
                item.id = id[1].replace('" class="wp-block-heading', "");
            } else {
                item.id = "";
            }

            if (t.includes("h2")) {
                h2Flag++;
                h3Flag = 0;
                h4Flag = 0;
                tocList.push(item);
            } else if (t.includes("h3")) {
                h4Flag = 0;
                tocList[h2Flag - 1].children.push(item);
                h3Flag += 1;
            } else if (t.includes("h4")) {
                tocList[h2Flag - 1].children[h3Flag - 1].children.push(item);
                h4Flag += 1;
            }
        });
    }
</script>

<TocNode tl={tocList} />
