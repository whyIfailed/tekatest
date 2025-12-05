<script >
	import { icons } from "lucide-svelte";
   import Icon from '$lib/components/icons.svelte';
   export let items;
</script>

 <div id="cong-ty" class="section-title-wrapper">
   <div class="eyebrown-title">
      <h4>{items.title}</h4>
   </div>
</div>

<div class="section-main">
   <div class="tagline">
      <h3>{items.headline}</h3>
   </div>
   <div class="content-wrapper">
      <div class="xs-row-top xl-col-left">
         {#each items.content as item}
            <div class="whychoose-item">
               <h3 class="whychoose-title">{item.title}</h3>
               {#each item.subitem as subitem}
                  <p>{subitem}</p>
               {/each}
               </div>
            {/each}
      </div>
      <div class="xs-row-bot xl-col-right ">
         {#each items.content as item}
            <div class="decor-icon">
               <Icon name = {item.iconName} />
            </div>
         {/each}
      </div>
      <div class="photo-container">
         <img src={items.imagePath} alt="">
      </div>
   </div>
</div>

<style>
</style>
