<script>
   export let items;
   import Icon from '$lib/components/icons.svelte';
   // $: {
      
   // } 

</script>

<div id="gioi-thieu-tinh-nang" class="section-title-wrapper">
   <div class="eyebrown-title">
      <h3>{items.title}</h3>
   </div>
</div>

<div class="section-main">
   <div class="xl-col-left">
      <div class="tagline">
         <h3>{items.headline}</h3>
      </div>
      <ul class="details">
         {#each items.content as content}
            <li><i></i><p>{content}</p></li>
         {/each}
      </ul>
   </div>
   <div class="xl-col-right features-wrapper">
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