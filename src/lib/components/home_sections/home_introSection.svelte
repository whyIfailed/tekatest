<script>
   export let items;
   import Icon from '$lib/components/icons.svelte';
   // $: {
      
   // } 

</script>

<div id="gioi-thieu-tinh-nang" class="section-title-wrapper col-span-4 col-span-6">
   <div class="eyebrown-title">
      <h3>{items.title}</h3>
   </div>
</div>

<div class="section-main col-span-4 grid grid-cols-4 gap-0 lg:col-span-12 lg:grid-cols-12 lg:gap-2">
   <div class="xl-col-left col-span-4 lg:col-span-6">
      <div class="tagline">
         <h3 style="--headline: '{items.headline}' ">{items.headline}</h3>
      </div>
      <ul class="details">
         {#each items.content as content}
            <li><i></i><p>{content}</p></li>
         {/each}
      </ul>
   </div>
   <div class="xl-col-right features-wrapper col-span-4 lg:col-span-6">
      {#each items.images as feature }   
         <div class="feature-col">
            <div class="text-main">
               <Icon name={feature.iconName} />
               <span>{feature.title}</span>
            </div>
            <div class="overlay-bottom">
               <img src={feature.imagePath} alt={feature.alt}>
            </div>
         </div>
      {/each}
   </div>
</div>