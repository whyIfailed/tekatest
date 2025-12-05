<script>
   import TabItem from "./tabItem.svelte";
    // 🔑 The single source of truth: holds the ID of the currently active tab
    let activeTabId = 'tab-1'; 

    // 🔑 The Handler: This function is called by the child component when clicked
    function setActive(ID) {
        // This single line ensures only ONE item can be active at any time
        activeTabId = ID; 
    }
</script>

<div class="tab-group">
   <TabItem 
      id="tab-pricing" 
      label="Pricing" 
      activeTabID={activeTab} 
      on:activate={(e) => activeTab = e.detail.ID} 
   />
   <TabItem 
      ID="tab-pricing" 
      label="Pricing" 
      activeTabID={activeTab} 
      on:activate={(e) => activeTab = e.detail.ID} 
   />

</div>