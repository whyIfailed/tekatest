<script>
   import Icon from '$lib/components/icons.svelte';
   import AccordionBody from './accordionBody.svelte';

   import { createEventDispatcher } from 'svelte';
   // 1. Setup the dispatcher to communicate back to the parent
   const dispatch = createEventDispatcher();
   // 2. Define Props (Data from Parent)
   //@ts-ignore

   export let uniqueID;
   export let label;
   export let iconname;
   // The ID of the currently active tab in the *entire group* (from parent)
   // export let activeTabID;
   export let activeTabID;
   
   // 3. Reactive State Check
   // 🔑 $:isActive is TRUE only if this component's ID matches the active ID from the parent.
   // This is the core logic for toggling the classes.
   //@ts-ignore
   $: isActive = (uniqueID === activeTabID); 
   
   function handleClick() {
      //@ts-ignore
      dispatch('activate', { uniqueID });
   }
</script>

<button 
   on:click={handleClick}
   class:active={isActive}
   class:inactive={!isActive}
>
   <Icon name={iconname} /> {label}
</button>
