<script>
   export let items;
   import Icon from '$lib/components/icons.svelte';
   // $: {
      
   // } 

</script>

<div id="projectDev" class="section-title-wrapper col-span-4 lg:col-span-6">
   <div class="eyebrown-title">
      <h3>{items.title}</h3>
   </div>
</div>

<div class="section-main col-span-4 grid grid-cols-4 gap-0 lg:gap-16 lg:col-span-12 lg:grid-cols-12">
   <div class="xl-col-left order-2 md:order-1 col-span-4 lg:col-span-6">
      <div class="tagline" style="--headline: '{items.headline}' ">
         <h2>{items.headline}</h2>
      </div>
      <ul class="details">
         {#each items.content as content}
            <li><i></i><p>{content}</p></li>
         {/each}
      </ul>
   </div>
   <div class="background-photo order-1 md:order-2 block col-span-4 lg:col-span-6">
      <img src={items.images.imagePath} alt={items.images.alt}>
   </div>
</div>

<style>
  .tagline:before {
    content: var(--headline);
  }
</style>