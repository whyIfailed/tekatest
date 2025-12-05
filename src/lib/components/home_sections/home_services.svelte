<script>
   export let items;
   import Icon from '$lib/components/icons.svelte';
</script>

<div id="tiem-nang" class="section-title-wrapper">
   <div class="eyebrown-title">
      <h3>{items.title}</h3>
   </div>
</div>
<div id="doi-tac" class="section-main">
   <div class="tagline">
      <h3>{items.headline}</h3>
   </div>
   <div class="details">
      <div class="cards service-cards">
         {#each items.portion.benefits.images as item}
            <div class="card">
               <Icon name={item.iconName} size={item.size} />
               <p>{item.title}</p>
            </div>
         {/each}
      </div>
      <div class="cards customer-cards">
         <h4>Đối tác chiến lược</h4>
         <div class="cards-container">
            {#each items.portion.customers.images as customer}
            <div class="card">
               <img src={customer.imagePath} alt={customer.alt} class="customer-item" width={customer.size} height={customer.size} >
            </div>
            {/each}
         </div>
      </div>
   </div>
</div>