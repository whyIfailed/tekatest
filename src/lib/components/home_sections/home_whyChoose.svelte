<script >
	import { icons } from "lucide-svelte";
   import Icon from '$lib/components/icons.svelte';
   export let items;
</script>

 <div id="cong-ty" class="section-title-wrapper col-span-4 lg:col-span-6">
   <div class="eyebrown-title">
      <h4>{items.title}</h4>
   </div>
</div>

<div class="section-main grid grid-cols-4 col-span-4 lg:grid-cols-12">
   <div class="tagline col-span-4 lg:col-span-10">
      <h3>{items.headline}</h3>
   </div>
   <div class="content-wrapper col-span-4 grid-cols-4 grid gap-0 lg:col-span-12 lg:grid-cols-12 lg:gap-2">
      <div class="xs-row-top xl-col-left col-span-4 lg:col-span-6">
         {#each items.content as item}
            <div class="whychoose-item">
               <h3 class="whychoose-title">{item.title}</h3>
               {#each item.subitem as subitem}
                  <p>{subitem}</p>
               {/each}
               </div>
            {/each}
      </div>
      <div class="xs-row-bot xl-col-right col-span-4 lg:col-span-6">
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
