<script lang="ts">
   import HomeTopSection from '$lib/components/home_sections/home_topSection.svelte';
   import HomeIntroSection from '$lib/components/home_sections/home_introSection.svelte';
	import ProductFeaturesList from '$lib/components/home_sections/home_productFeaturesList.svelte';
	import HomeComparePainGain from '$lib/components/home_sections/home_comparePainGain.svelte';
	import HomeProjectDev from '$lib/components/home_sections/home_projectDev.svelte';
	import HomeAgencyBroker from '$lib/components/home_sections/home_agencyBroker.svelte';
	import HomeIndividualBroker from '$lib/components/home_sections/home_individualBroker.svelte';

   import WhyChoose from '$lib/components/home_sections/home_whyChoose.svelte';
   import HomeServices from '$lib/components/home_sections/home_services.svelte';
   import HomePricing from '$lib/components/home_sections/home_pricing.svelte';
   import SvelteSeo from 'svelte-seo';
   import globalContent from '$data/global_content.json';
   const contactNum = '0389683939';
   const pageUrl = "/";
	const pageTitle = "TekaReal - Phần Mềm Giải Pháp Bất Động Sản";
	const pageDescription = "TekaReal - Phần Mềm Giải Pháp Bất Động Sản"
   /** @type {import('./$types').PageData} */
   export let data;
   const { top_section, intro_section,
      intro_features, why_choose, 
      home_services, home_pricing, 
      comparePainGain, projectDev, agencyBroker,
      indiviualBroker 
      } = data;

</script>

<svelte:head>
  <SvelteSeo 
    title={pageTitle}
    description={pageDescription}
    openGraph={{
      title: pageTitle,
      url: pageUrl,
      type: 'webpage',
      images: [{ url: `${pageUrl}/default-share-image.jpg` }]
    }}
    twitter={{
      card: 'summary_large_image',
      site: '@YourHandle',
      title: pageTitle,
    }}
  />
</svelte:head>

<!-- Top section (1) -->
<!-- <section id="topSection" class="top-section flex flex-col justify-between grid grid-cols-12 gap-12 pt-8"> -->
<section id="topSection" class="top-section grid grid-cols-4 mb-4 md:grid-cols-8 gap-0 md:gap-2 lg:gap-4 lg:grid-cols-12 mt-16 mb-8 md:mt-24 md:mb-12 lg:mt-32 lg:mb-24">
   <HomeTopSection items={ top_section } />
</section>

<!-- section 2 -->
<!-- <section class="second-section flex flex-col justify-between"> -->
<section class="second-section grid grid-cols-1 gap-0 pt-0 lg:grid-cols-12 lg:pt-8 mb-8 lg:mb-32">
   <HomeIntroSection items={ intro_section } />
</section>

<section class="x-section projectDev-section grid grid-cols-1 gap-0 pt-0 lg:grid-cols-12 lg:pt-8 mb-8 lg:mb-16">
   <HomeProjectDev items={ projectDev } />
</section>

<section class="x-section agencyBroker-section grid grid-cols-1 gap-0 pt-0 lg:grid-cols-12 lg:pt-8 mb-8 lg:mb-16">
   <HomeAgencyBroker items={ agencyBroker } />
</section>

<section class="x-section individualBroker-section grid grid-cols-1 gap-0 pt-0 lg:grid-cols-12 lg:pt-8 mb-8 lg:mb-16">
   <HomeIndividualBroker items={ indiviualBroker } />
</section>

<section class="x-section comparePainGain-section grid grid-cols-1 gap-0 pt-0 lg:grid-cols-12 lg:pt-8">
   <HomeComparePainGain items={ comparePainGain } />
</section>

<!-- section 3 -->
<section class="third-section grid grid-cols-1 gap-0 lg:grid-cols-12 lg:pt-8">
   <ProductFeaturesList items = { intro_features } />
</section>

<!-- section 4 -->
<section class="fourth-section grid grid-cols-1 gap-0 pt-8 lg:flex flex-col justify-between"> 
   <WhyChoose items = { why_choose } />
</section>

<!-- section 5 -->
<!-- <section class="fifth-section flex flex-col justify-between">  -->
<section class="fifth-section grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12"> 
   <HomeServices items={ home_services } />
</section>

<!-- section 6 -->
<section class="sixth-section flex-col justify-between grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12"> 
   <HomePricing items = { home_pricing } contactNum = {contactNum}/>
</section>
