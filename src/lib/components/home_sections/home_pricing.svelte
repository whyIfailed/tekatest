<script>
   export let items;
   import Icon from '$lib/components/icons.svelte';
   import { onMount } from 'svelte';
   import { writable } from 'svelte/store';
   const isCopied = writable(false);
   export let contactNum;
   export let textToCopy = contactNum;
   
   async function copyText() {
      if (!navigator.clipboard) {
         console.log('failed to copy');
         return;
      }
      try {
         await navigator.clipboard.writeText(textToCopy);
         $isCopied = true;
         setTimeout(() => {
            $isCopied = false;
         }, 500);
      } catch (err) {
         console.log('failed to copy text: ', err);
      }
   }

</script>

<div id="bang-gia" class="section-title-wrapper col-span-4 md:col-span-8 lg:col-span-12 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10">
   <div class="eyebrown-title">
      <h3>{items.title}</h3>
   </div>
   <div class="sidebar xl-col-right">
      {#each items.cta as cta}
         <span class="btn-secondary col-span-3">
            <a href="tekadev.com">{cta}</a>
         </span>   
      {/each}
      <div class="pricing-cta">
         <button on:click={copyText} disabled={$isCopied} role="">
            
            <span>LH Zalo: <span id="phoneNum">{items.contact.content}</span></span>
            <span>
               {#if $isCopied}
                  Copied
               {:else}
                  <Icon name={items.contact.iconName}/> Copy
               {/if}
            </span>
         </button>
      </div>
   </div>
</div>

<div class="section-main col-span-4 md:col-span-8 lg:col-span-12 grid grid-cols-12 md:grid-cols-8 lg:grid-cols-12" >
   <div class="xl-col-left details flex col-span-4 md:col-span-8 lg:col-span-12 gap-4">
      {#each items.content as pack }
         <div class="pricing-col flex-1">
            <h3 class="text-4xl">{pack.title}</h3>
            <h2>{pack.price}</h2>
            <p>{pack.caption}</p>
            <div class="pricing-subitem">
               {#each pack.subitem as subitem}
                  <p><span>{subitem}</span></p>
               {/each}
            </div>
            
         </div>
      {/each}
   </div>
   
</div>