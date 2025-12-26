<script>
   export let items;
   import Icon from '$lib/components/icons.svelte';
   // $: {
      
   // } 

</script>

<div id="gioi-thieu-tinh-nang" class="section-title-wrapper col-span-4 lg:col-span-6">
   <div class="eyebrown-title">
      <h3>{items.title}</h3>
   </div>
</div>

<div class="section-main col-span-4 grid grid-cols-4 gap-0 lg:gap-16 lg:col-span-12 lg:grid-cols-12">
   <div class="xl-col-left col-span-4 lg:col-span-4">
      <div class="tagline">
         <h2>{items.headline}</h2>
      </div>
      <div class="details">
         <!-- {#each items.content as content}
            <li><i></i><p>{content}</p></li>
         {/each} -->
         {items.caption}
      </div>
   </div>
   <div class="xl-col-right cards col-span-4 lg:col-span-8 grid grid-cols-4 lg:grid-cols-8 gap-2">
      {#each items.content as item }   
         <div class="compare-card col-span-4 lg:col-span-8 flex flex-row justify-start gap-8 p-8">
            <div class="image" ><img width="400" src="{item.images.imagePath}" alt={item.images.alt}></div>
            <div class="texts">
               <div class="main ">
                  <div class="content gap-2">
                     <div class="title flex flex-row gap-1">
                        <Icon name={item.main.iconName} />
                        <h4>Vấn Đề</h4>
                     </div>
                     <div class="text flex flex-col gap-2">
                        <h4>{item.main.title}</h4>
                        <p>{item.main.caption}</p>
                        <p>{item.main.caption_2}</p>
                     </div>
                  </div>
               </div>
               <div class="sub">
                  <div class="content">
                     <div class="title flex flex-row gap-1">
                        <Icon name={item.sub.iconName} />
                        <h4>Giải Pháp</h4>
                     </div>
                     <div class="text flex flex-col gap-2">
                        <h4>{item.sub.title}</h4>
                        <p>{item.sub.caption}</p>
                        <p>{item.sub.caption_2}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      {/each}
   </div>
</div>