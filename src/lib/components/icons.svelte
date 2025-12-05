<script>
   import { icons } from 'lucide-svelte';
   import { onDestroy, onMount } from 'svelte';
   import globalContent from '../../data/global_content.json';

   export let name;
   export let size = 24;
   export let className = '';

   let IconComponent;
   // @ts-ignore
   IconComponent = icons[name]; 

   if (!IconComponent) {
      console.warn(`Lucide icon not found for name: ${name}`);
   }
</script>

{#if IconComponent}
  <svelte:component 
    this={IconComponent} 
    class={className}
    stroke-width={2}
  />
{:else}
  <span style="display: inline-block; width: {size}px; height: {size}px; background-color: #ccc;"></span>
{/if}