<script>
   import globalContent from '../../../../src/data/global_content.json';
   const brandingContent = globalContent.branding
   const tekareal_item = brandingContent.find(item => item.title=="tekareal")
   const tekareal_logo = tekareal_item?.imagePath
   const tekareal_size = tekareal_item?.topSize
   export let items;
   import Icon from '$lib/components/icons.svelte';
   import { MouseIcon } from 'lucide-svelte';
   import GradientTekabox from '../gradient_tekabox.svelte';
   import BorderTeka from '../border_teka.svelte';

</script>

<!-- <div class="headline-wrapper flex flex-col justify-center sm:text-center align-middle grid grid-cols-12 gap-4 w-full"> -->
<div class= "headline-wrapper gap-0 grid col-span-4 grid-cols-4 sm:grid-cols-4 sm:col-span-4 md:grid-cols-8 md:col-span-8 lg:grid-cols-12 lg:col-span-12 lg:gap-8">
  
   <div class="x-row xs-portion-top grid col-span-4 grid-cols-4 sm:col-span-4 sm:grid-cols-4 md:col-span-8 md:grid-cols-8 lg:grid-cols-6 lg:col-span-6">
      <div class="col-span-4 sm:col-span-4 md:col-span-8 lg:col-span-6 headline-photo xl-col-right">
         <img class="w-full" src={items.imagePath} alt={items.alt}>
      </div>
   </div>

   <div class="grid grid-cols-4 col-span-4 pl-6 sm:grid-cols-4 sm:col-span-4 md:grid-cols-8 md:col-span-8 lg:col-span-6 lg:grid-cols-6 headline-text-wrapper xs-portion-bottom">
      <div class="product-logo col-span-4 sm:col-span-4 md:col-span-8">
         <img src={tekareal_logo} alt="" class="prod-tekareal-logo" width={tekareal_size}>
         <p>{items.prod_title}</p>
      </div>
      <h1 style="--headline: '{items.headline}' " class="col-span-4 sm:col-span-4 md:col-span-8 lg:col-span-12 headline-bold antialiased font-extrabold sm:text-center">{items.headline}</h1>
      <div class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-8 product-tags flex justify-start sm:justify-start md:justify-start lg:justify-start md:col-span-4">
         {#each items.tags as tag}
         <div class="product-tag">
            <span>
               <a href={tag.href}>#{tag.title}</a>
            </span>
            <div class="overlay-bottom"></div>
            <!-- <GradientTekabox items={tag}/> -->
         </div>
         {/each}
      </div>
      <!-- <div class="flex flex-col gap-4 under-headline"> -->
      <div class="col-span-4 gap-0 md:col-span-4 md:gap-0 lg:col-span-6 lg:gap-12 flex flex-row gap-4 under-headline">
         <p class="headline-caption">{items.caption}</p>
         <a href={items.cta.href} data-role="calltoaction" class="mt-0 sm:mt-0 md:mt-0 call-to-action primary"><MouseIcon width={48} height={48} class="w-8 h-8 text-black-900" />{items.cta.title}</a>
      </div>
   </div>
</div>

<BorderTeka dim={"100vw"} id={"headlineBorder"}/>
<div class="background-photo">
   <img src={items.otherImages.verticalLines} alt="x">
</div>

<style> 
h1:before {
   content: var(--headline); } 
</style>