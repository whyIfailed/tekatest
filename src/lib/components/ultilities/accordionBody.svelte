<script>
   export let subitems;
</script>

<div class="accordion-body {subitems.class} ">
    {#each subitems.subitem as subitem}
        <div class="list-subitem {subitem.class}">
            <h4 class="subitem-title">{subitem.title}</h4>
            <p class="subitem-caption">{subitem.caption}</p>
        </div>
    {/each}
</div>