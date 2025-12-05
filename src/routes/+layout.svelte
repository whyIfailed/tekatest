<script lang="ts">
	import '../app.scss';
	import Navbar from '$lib/components/topNav.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/footer.svelte';
	import SvelteSeo from 'svelte-seo';
	import globalContent from '../../src/data/global_content.json';
	import MouseCursor from '$lib/components/ultilities/mouseCursor.svelte';
	import gsap from 'gsap'; 
	import { onMount, onDestroy } from 'svelte'; 
	import { browser } from '$app/environment'; 
	import { initAnimations,cleanupAnimations } from '$lib/components/home_sections/home_animations'; 
	
	$: isDesktop = windowWidth >= TabletBreakpoint;
	let windowWidth = 0;
	const TabletBreakpoint = 768;
	let mm;
	// @ts-ignore
	onMount(async () => {
		if (!browser) return; 
		// mm = gsap.matchMedia();
   	// mm.add("(min-width:1100px)", ()=> {
		initAnimations(); 
		// });
		
		windowWidth = window.innerWidth;
		const handleResize = () => {
			windowWidth = window.innerWidth;
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize',handleResize);
		}
	}); 
	onDestroy(()=>{ 
		cleanupAnimations();
	 });

	const brandingContent = globalContent.branding
   const tekadev_item = brandingContent.find(item => item.title=="tekadev")
	const tekadev_logo_path = tekadev_item?.imagePath

	/** @type {{ navLinks: 
	 * 				top: { href: string, label:string }[], 
	 
	 * }} */
	export let data;
	const { topLinks, footer } = data;
	const siteTitle = "TekaDev Home"
	const siteDescription = "TekaReal - Phần Mềm Giải Pháp Bất Động Sản"
	const siteUrl = "/"
	export const prerender = true;
</script>

<svelte:head>
	<SvelteSeo 
    title={siteTitle}
    description={siteDescription}
    openGraph={{
      title: siteTitle,
      url: siteUrl,
      type: 'website',
      images: [{ url: `${siteUrl}/{tekadev_logo_path}` }]
    }}
    twitter={{
      card: 'summary_large_image',
      site: '@YourHandle',
      title: siteTitle,
    }}
  />
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Saira+Condensed:wght@100;200;300;400;500;600;700;800;900&family=Saira+Semi+Condensed:wght@100;200;300;400;500;600;700;800;900&family=Saira:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</svelte:head>

{#if isDesktop}
	<MouseCursor />
{/if}

<Navbar items={ topLinks } />
<div class="main">
<slot />
</div>
<Footer 
items={ footer.content } 
links={ footer.links } />
