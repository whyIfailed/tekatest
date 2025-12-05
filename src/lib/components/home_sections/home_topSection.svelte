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

<div class="headline-wrapper flex flex-col justify-center sm:text-center align-middle">
   <div class="xl-col-left xs-portion-top">
      <div class="product-logo">
         <img src={tekareal_logo} alt="" class="prod-tekareal-logo" width={tekareal_size}>
         <p>{items.prod_title}</p>
      </div>
      <div class="product-tags">
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
   </div>

   <div class="headline-photo xl-col-right">
      <img src={items.imagePath} alt={items.alt}>
   </div>

   <div class="background-photo">
      <img src={items.otherImages.verticalLines} alt="x">
   </div>

   <div class="headline-text-wrapper xs-portion-bottom">
      <h1 class="headline-bold antialiased font-extrabold sm:text-3xl sm:text-center">{items.headline}</h1>
      <div class="under-headline">
         <p class="headline-caption">{items.caption}</p>
         <a href={items.cta.href} data-role="calltoaction" class="call-to-action primary"><MouseIcon width={48} height={48} class="w-8 h-8 text-black-900" />{items.cta.title}</a>
      </div>
      <BorderTeka dim={"100vw"} id={"headlineBorder"}/>
   </div>
   
</div>
