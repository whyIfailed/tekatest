<script>
   export let items;
   import Icon from '$lib/components/icons.svelte';
</script>

<div id="tiem-nang" class="section-title-wrapper col-span-4 md:col-span-8 lg:col-span-12">
   <div class="eyebrown-title">
      <h3>{items.title}</h3>
   </div>
</div>

<div id="doi-tac" class="section-main grid grid-cols-4 gap-0 col-span-4 md:col-span-8 md:grid-cols-8 lg:grid-cols-12 lg:col-span-12 lg:gap-2">
   <div class="tagline col-span-3 md:col-span-6 lg:col-span-8">
      <h3>{items.headline}</h3>
   </div>
   <div class="details col-span-4 grid grid-cols-4 md:grid-cols-8 md:col-span-8 gap-0 lg:col-span-12 lg:grid-cols-12 lg:gap-2">
      <div class="cards service-cards sm:gap-0 md:gap-0 md:col-span-8 gap-0 col-span-4 lg:gap-0 lg:col-span-12">
         {#each items.portion.benefits.images as item}
            <div class="card ">
               <Icon name={item.iconName} size={item.size} />
               <p>{item.title}</p>
            </div>
         {/each}
      </div>
      <div class="cards customer-cards grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 col-span-4 md:col-span-8 lg:col-span-12">
         <h4 class="col-span-4 md:col-span-8 lg:col-span-12">Đối tác chiến lược</h4>
         <div class="cards-container col-span-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-12 md:col-span-8 lg:col-span-12 gap-0 flex">
            {#each items.portion.customers.images as customer}
            <div class="card">
               <img src={customer.imagePath} alt={customer.alt} class="customer-item" width={customer.size} height={customer.size} >
            </div>
            {/each}
         </div>
      </div>
   </div>
</div>