<script >
// @ts-nocheck
   import Icon from '$lib/components/icons.svelte';
	import { onMount } from 'svelte';
	import TabItem from '../ultilities/tabItem.svelte';
   import AccordionBody from '../ultilities/accordionBody.svelte';
   export let items;
   let activeTabData = null;
   let itemContent = items.content;
   let accordion_data = itemContent;
   let activeTabID = itemContent[1].tabID;

   function setActiveID(clickedTabId) {
      activeTabID = clickedTabId;
   }

   $ : {
      const tabs = itemContent.find(item => item.tabID === activeTabID);
      if (tabs) {
         activeTabData = tabs;
      }
      else {
         activeTabData = null;
      };  
   }
</script>

<div id="ban-do-quy-hoach" class="section-title-wrapper">
   <div class="eyebrown-title">
      <h4>{items.title}</h4>
   </div>
</div>

<div class="section-main">
   <div class="main-wrapper">
      <!-- tabs containers -->
      <div class="xs-row-top xl-col-left">
         <div class="tabs-feature">
            {#each itemContent as item (item.tabID)}
               <TabItem 
                  uniqueID = {item.tabID}
                  activeTabID = {activeTabID}
                  label = {item.tabTitle}
                  iconname = {item.iconName}
                  on:activate={(e) => setActiveID(item.tabID)}
               />
               <!-- {#if item.tabID === activeTabID}
                  <AccordionBody subitems = { item } />
               {/if} -->
            {/each}
         </div>
         {#if activeTabData}
            <AccordionBody subitems={activeTabData} /> 
         {/if}
         <a href="https://map.tekadev.vn" target="_blank" class="btn-secondary">Dùng thử Bản đồ TekaMap</a>
      </div>
      
      <!-- photo container -->
      {#if activeTabData}
         <div class="photo-container {activeTabData.imageClass}">
            <img src={activeTabData.imagePath} alt={activeTabData.alt}>
         </div>
      {/if}
   </div>
</div>