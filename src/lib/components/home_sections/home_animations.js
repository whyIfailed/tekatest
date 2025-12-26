// src/lib/animations.js
import { browser } from '$app/environment';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

let animationsInitialized = false;
export function initAnimations() {
  if (!browser || animationsInitialized) return;
  
  // Register plugins
  gsap.registerPlugin(ScrollTrigger, matchMedia);
  
  // Global configuration
  ScrollTrigger.config({
    limitCallbacks: true,
    syncInterval: 15
  });

  // All your complex animations here
  home_topSection_animation();
  home_introSection_animation();
  home_projectDev_animation();
  home_agencyBroker_animation();
  home_individualBroker_animation();
  home_comparePainGain_animation();

  home_introEachSection_animation();
  home_whychoose_animation();
  home_service_animation();
  home_pricingSection_animation();

  animationsInitialized = true;
}

// @ts-ignore
let waveTimeline = null;
// @ts-ignore
let raisingTimeline = null;
// @ts-ignore
// let featureCol1, featureCol2, featureCol3;
// @ts-ignore
let tagline, details;
// @ts-ignore
let topAnchorBox, prodLogo;

let card;

let mm;

function home_topSection_animation() {
   mm = gsap.matchMedia();
   mm.add("(min-width:320px) and (max-width:768px)", ()=> {
      
      ScrollTrigger.refresh();
      const collectorA = [];
      
      topAnchorBox = document.querySelector('.top-section');
      prodLogo = document.querySelector('.top-section .product-logo');
      const prodTags = document.querySelectorAll('.top-section .product-tag');
      const headlinePhoto = document.querySelector('.top-section .headline-photo');
      const mainHeadlineBorder = document.querySelector('.top-section .headline-text-wrapper #headlineBorder');
      const mainHeadline = document.querySelector('.top-section .headline-text-wrapper h1');
      
      const mainCaption = document.querySelector('.top-section .headline-text-wrapper .headline-caption');
      const mainCTA = document.querySelector('.top-section .headline-text-wrapper .call-to-action');

      // collectorA.push(headlinePhoto);
      collectorA.push(mainHeadline);
      collectorA.push(mainCaption);
      collectorA.push(mainCTA);

      const eyebrowSecond = document.querySelector('.second-section .eyebrown-title');

      const animationDuration = 0.282;
      const staggerDelay = 0.01;
      raisingTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: topAnchorBox ,
            start: "top 100%",
            //@ts-ignore
            limitCallbacks: true,
            invalidateOnRefresh: false,
            force3D:true,
         },
         ease: "sine.out"
      });
      raisingTimeline.from(headlinePhoto,{
         top: 30,
         opacity: 0,
         duration: animationDuration,
         stagger: staggerDelay,
         ease: "sine.out"
      });
      raisingTimeline.to(headlinePhoto,{
         top: 0,
         opacity: 1,
         duration: animationDuration,
         stagger: staggerDelay,
         delay: .3,
         ease: "sine.out"
      });

      raisingTimeline.from(prodLogo,{
         top: 30,
         opacity: 0,
         duration: animationDuration,
         stagger: staggerDelay +0.3
      });
      raisingTimeline.to(prodLogo,{
         top: 0,
         opacity: 1,
         duration: animationDuration,
         stagger: staggerDelay +0.3,
         delay: 0.3
      });

      collectorA.forEach((item,index)=>{
         //@ts-ignore
         raisingTimeline.from(item, {
            top: 40,
            opacity: 0,
            duration: animationDuration*0.5,
            stagger: staggerDelay*0.04,
            ease: "sine.out"      
         });
         //@ts-ignore
         raisingTimeline.to(item, {
            top: 0,
            opacity: 1,
            duration: animationDuration*0.05,
            stagger: staggerDelay,
            ease: "sine.out"      ,
         });
      });

      prodTags.forEach((prodTag,index) => {
         //@ts-ignore
         raisingTimeline.from(prodTag,{
            top: 30,
            opacity: 0,
            duration: animationDuration*0.08,
            stagger: staggerDelay +0.3
         }, index *0.123 );
         //@ts-ignore
         raisingTimeline.to(prodTag,{
            top: 0,
            opacity: 1,
            duration: animationDuration,
            stagger: staggerDelay +0.3
         }, index *0.123 );
      });

      raisingTimeline.to(eyebrowSecond,{
         top: 0,
         opacity: 1,
         duration: animationDuration,
         stagger: staggerDelay,
         delay: 1.3,
         ease: "sine.out"
      });
      ScrollTrigger.refresh();
   });

   mm.add("(min-width:1100px)", ()=> {
      console.log('found topSection....');
      ScrollTrigger.refresh();   
      const collectorA = [];
      
      topAnchorBox = document.querySelector('.top-section');
      prodLogo = document.querySelector('.top-section .product-logo');
      const prodTags = document.querySelectorAll('.top-section .product-tag');
      const headlinePhoto = document.querySelector('.top-section .headline-photo');
      // const mainHeadlineBorder = document.querySelector('.top-section .headline-text-wrapper #headlineBorder');
      const mainHeadline = document.querySelector('.top-section .headline-text-wrapper h1');
      
      const mainCaption = document.querySelector('.top-section .headline-text-wrapper .headline-caption');
      const mainCTA = document.querySelector('.top-section .headline-text-wrapper .call-to-action');

      const eyebrowSecond = document.querySelector('.second-section .eyebrown-title');

      const animationDuration = 0.282;
      const staggerDelay = 0.01;
      raisingTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: topAnchorBox ,
            start: "top 100%",
            // end: "bottom 20%",
            // scrub: 0.5,
            // @ts-ignore
            limitCallbacks: true,
            invalidateOnRefresh: false,
            force3D:true,
         },
         ease: "circ.out"
      });
      
      raisingTimeline.from(prodLogo,{
         top: 20,
         opacity: 0,
         duration: animationDuration + .06,
         delay:0.1,
         stagger: staggerDelay + 0.1
      });
      raisingTimeline.to(prodLogo,{
         top: 0,
         opacity: 1,
         duration: animationDuration,
         stagger: staggerDelay
      });

      raisingTimeline.from(mainHeadline, {
         top: 30,
         opacity: 0,
         duration: animationDuration + 0.5,
         stagger: staggerDelay*0.04,
         // delay:0.1,
         ease: "sine.out"  
      });
      raisingTimeline.to(mainHeadline, {
         top: 0,
         opacity: 1,
         duration: animationDuration*0.05,
         stagger: staggerDelay*0.04,
         ease: "sine.out"  
      });

      prodTags.forEach((prodTag,index) => {
         //@ts-ignore
         raisingTimeline.from(prodTag,{
            top: 20,
            opacity: 0,
            duration: animationDuration,
            delay:1.7,
            stagger: staggerDelay +0.09
         }, index *0.123 );
         //@ts-ignore
         raisingTimeline.to(prodTag,{
            top: 0,
            opacity: 1,
            duration: animationDuration,
            delay:1.7,
            stagger: staggerDelay +0.09
         }, index *0.123 );
      });

      raisingTimeline.from(mainCaption, {
         top: 30,
         opacity: 0,
         duration: animationDuration+0.3,
         stagger: staggerDelay*0.04,
         delay:0.1,
         ease: "sine.out"  
      });
      raisingTimeline.to(mainCaption, {
         top: 0,
         opacity: 1,
         duration: animationDuration*0.05,
         stagger: staggerDelay*0.04,
         ease: "sine.out"  
      });
      raisingTimeline.from(mainCTA, {
         top: 40,
         left:40,
         opacity: 0,
         duration: animationDuration * 0.45,
         // stagger: staggerDelay * 0.4,
         // delay:0.05,
         ease: "sine.out"  
      });
      raisingTimeline.to(mainCTA, {
         top: 0,
         left:0,
         opacity: 1,
         duration: animationDuration * 0.45,
         ease: "sine.out"  
      });

      
      raisingTimeline.to(eyebrowSecond,{
         top: 0,
         opacity: 1,
         duration: animationDuration,
         stagger: staggerDelay,
         delay: 1.3,
         ease: "power2.out"
      });
      ScrollTrigger.refresh();
   });
}

function home_introSection_animation() {
   mm = gsap.matchMedia();
   
   mm.add("(min-width:1100px)", ()=> {
      console.log('found desktop....');
      ScrollTrigger.refresh();   
      const anchorBox = document.querySelector('.second-section');
      const featureCol1 = document.querySelector('.feature-col:first-child');
      const featureCol2 = document.querySelector('.feature-col:nth-child(2)');
      const featureCol3 = document.querySelector('.feature-col:last-child');

      tagline = document.querySelector('.second-section .tagline');
      details = document.querySelector('.second-section .details');
   
      waveTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: anchorBox ,
            start: "top 65%",
            // scrub: true,
            // @ts-ignore
            limitCallbacks: true,
            invalidateOnRefresh: false,
            force3D:true,
         },
         ease: "sine.out"
      });
   
      const animationDuration = 0.32;
      const staggerDelay = 0.005;
      
      // @ts-ignore
      function wt(target, from_x, to_x, delay_time) {
         // @ts-ignore
         waveTimeline.from(target,{
            top: from_x,
            opacity: 0,
            duration: animationDuration,
            delay: delay_time,
            stagger: staggerDelay
         });
         // @ts-ignore
         waveTimeline.to(target,{
            top: to_x,
            opacity: 1,
            duration: animationDuration,
            stagger: staggerDelay + 0.5
          });
      }
      wt(tagline, 20, 0, 0)
      wt(details, 30, 0, .3)

      waveTimeline.from(featureCol1,{
         top: 120,
         opacity: 0,
         duration: animationDuration,
         stagger: staggerDelay
      });
      waveTimeline.to(featureCol1,{
         top: 0,
         opacity: 1,
         duration: animationDuration,
         stagger: staggerDelay
      });

      waveTimeline.from(featureCol2,{
         top: 80,
         opacity: 0,
         duration: animationDuration,
         stagger: staggerDelay
      });
      waveTimeline.to(featureCol2,{
         top: 0,
         opacity: 1,
         duration: animationDuration,
         // stagger: staggerDelay
      });

      waveTimeline.from(featureCol3,{
         top: 60,
         opacity: 0,
         duration: animationDuration,
         // stagger: staggerDelay
      });
      waveTimeline.to(featureCol3,{
         top: 0,
         opacity: 1,
         duration: animationDuration,
         stagger: staggerDelay
      });

      ScrollTrigger.refresh();
      const eyebrowThird = document.querySelector('.projectDev-section .eyebrown-title');
      raisingTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: featureCol3,
            start: "top 95%",
            // scrub: 0.5,
            // @ts-ignore
            limitCallbacks: true,
            invalidateOnRefresh: false,
            force3D:true,
         },
         ease: "sine.out"
      });
      raisingTimeline.from(eyebrowThird,{
         top: 30,
         opacity: 0,
         duration: animationDuration,
         // stagger: staggerDelay,
         delay: 2.5
      });
      raisingTimeline.to(eyebrowThird,{
         top: 0,
         opacity: 1,
         duration: animationDuration,
         // stagger: staggerDelay
      });
      ScrollTrigger.refresh();
   
   });
}

function home_projectDev_animation() {
   mm = gsap.matchMedia();
   
   mm.add("(min-width:1100px)", ()=> {
      console.log('found desktop....');
      ScrollTrigger.refresh();   
      const anchorBox = document.querySelector('.projectDev-section .eyebrown-title');

      tagline = document.querySelector('.projectDev-section .tagline');
      details = document.querySelector('.projectDev-section .details');
   
      waveTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: anchorBox ,
            start: "top 85%",
            // @ts-ignore
            limitCallbacks: true,
            invalidateOnRefresh: false,
            force3D:true,
         },
         ease: "sine.out"
      });
      const animationDuration = 0.32;
      const staggerDelay = 0.005;
      
      // @ts-ignore
      function wt(target, from_x, to_x, delay_time) {
         // @ts-ignore
         waveTimeline.from(target,{
            top: from_x,
            opacity: 0,
            duration: animationDuration,
            delay: delay_time
            // stagger: staggerDelay + 0.02
         });
         // @ts-ignore
         waveTimeline.to(target,{
            top: to_x,
            opacity: 1,
            duration: animationDuration,
            // stagger: staggerDelay + 0.02
          });
      }
      
      wt(tagline,30,0,0)
      wt(details,30,0,1)

      ScrollTrigger.refresh();

      const anchorBox_end = document.querySelector('.agencyBroker-section');
      const raisingTimeline_end = gsap.timeline({
         scrollTrigger: {
            trigger: anchorBox_end,
            start: "top 90%",
            // scrub: 0.5,
            // @ts-ignore
            limitCallbacks: true,
            invalidateOnRefresh: false,
            force3D:true,
         },
         ease: "sine.out"
      });

      const nextEyebrow = document.querySelector('.agencyBroker-section .eyebrown-title');
      raisingTimeline_end.from(nextEyebrow, {
         top:50,
         opacity:0,
         delay: .5
      });
      raisingTimeline_end.to(nextEyebrow, {
         top:0,
         opacity:1,
      });

      ScrollTrigger.refresh();
   
   });
}

function home_agencyBroker_animation() {
   mm = gsap.matchMedia();
   
   mm.add("(min-width:1100px)", ()=> {
      console.log('found desktop....');
      ScrollTrigger.refresh();   
      const anchorBox = document.querySelector('.agencyBroker-section');

      tagline = document.querySelector('.agencyBroker-section .tagline');
      details = document.querySelector('.agencyBroker-section .details');
   
      waveTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: anchorBox ,
            start: "top 65%",
            // scrub: 0.5,
            // @ts-ignore
            limitCallbacks: true,
            invalidateOnRefresh: false,
            force3D:true,
         },
         ease: "sine.out"
      });
   
      const animationDuration = 0.32;
      const staggerDelay = 0.005;
   
      waveTimeline.to(tagline,{
         top: 0,
         opacity: 1,
         duration: animationDuration,
         stagger: staggerDelay +0.5
      });
      waveTimeline.to(details,{
         top: 0,
         opacity: 1,
         duration: animationDuration*0.05,
         stagger: staggerDelay+0.1
      });

      ScrollTrigger.refresh();

      const anchorBox_end = document.querySelector('.individualBroker-section');
      const raisingTimeline_end = gsap.timeline({
         scrollTrigger: {
            trigger: anchorBox_end,
            start: "top 90%",
            // scrub: 0.5,
            // @ts-ignore
            limitCallbacks: true,
            invalidateOnRefresh: false,
            force3D:true,
         },
         ease: "sine.out"
      });

      const eyebrowFourth = document.querySelector('.individualBroker-section .eyebrown-title');
      raisingTimeline_end.from(eyebrowFourth, {
         top:50,
         opacity:0,
         delay: 1
      });
      raisingTimeline_end.to(eyebrowFourth, {
         top:0,
         opacity:1,
      });

      ScrollTrigger.refresh();
   
   });
}

function home_individualBroker_animation() {
   mm = gsap.matchMedia();
   
   mm.add("(min-width:1100px)", ()=> {
      console.log('found desktop....');
      ScrollTrigger.refresh();   
      const anchorBox = document.querySelector('.individualBroker-section');

      tagline = document.querySelector('.individualBroker-section .tagline');
      details = document.querySelector('.individualBroker-section .details');
   
      waveTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: anchorBox ,
            start: "top 65%",
            // scrub: 0.5,
            // @ts-ignore
            limitCallbacks: true,
            invalidateOnRefresh: false,
            force3D:true,
         },
         ease: "sine.out"
      });
   
      const animationDuration = 0.32;
      const staggerDelay = 0.005;
   
      waveTimeline.to(tagline,{
         top: 0,
         opacity: 1,
         duration: animationDuration,
         stagger: staggerDelay +0.5
      });
      waveTimeline.to(details,{
         top: 0,
         opacity: 1,
         duration: animationDuration*0.05,
         stagger: staggerDelay+0.1
      });

      ScrollTrigger.refresh();

      const anchorBox_end = document.querySelector('.comparePainGain-section');
      const raisingTimeline_end = gsap.timeline({
         scrollTrigger: {
            trigger: anchorBox_end,
            start: "top 90%",
            // scrub: 0.5,
            // @ts-ignore
            limitCallbacks: true,
            invalidateOnRefresh: false,
            force3D:true,
         },
         ease: "sine.out"
      });

      const eyebrowFourth = document.querySelector('.comparePainGain-section .eyebrown-title');
      raisingTimeline_end.from(eyebrowFourth, {
         top:50,
         opacity:0,
         delay: 1
      });
      raisingTimeline_end.to(eyebrowFourth, {
         top:0,
         opacity:1,
      });

      ScrollTrigger.refresh();
   
   });
}

function home_comparePainGain_animation() {
   mm = gsap.matchMedia();
   
   mm.add("(min-width:1100px)", ()=> {
      console.log('found desktop....');
      ScrollTrigger.refresh();   
      const anchorBox = document.querySelector('.comparePainGain-section');

      tagline = document.querySelector('.comparePainGain-section .tagline');
      details = document.querySelector('.comparePainGain-section .details');

      const cards = document.querySelectorAll('.comparePainGain-section .compare-card')
   
      waveTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: anchorBox ,
            start: "top 65%",
            // scrub: 0.5,
            // @ts-ignore
            limitCallbacks: true,
            invalidateOnRefresh: false,
            force3D:true,
         },
         ease: "sine.out"
      });
   
      const animationDuration = 0.32;
      const staggerDelay = 0.005;
   
      waveTimeline.to(tagline,{
         top: 0,
         opacity: 1,
         duration: animationDuration,
         stagger: staggerDelay +0.5
      });
      waveTimeline.to(details,{
         top: 0,
         opacity: 1,
         duration: animationDuration*0.05,
         stagger: staggerDelay+0.1
      });

      cards.forEach((card,index) => {
         // @ts-ignore
         waveTimeline.from(card, {
            top: 30,
            opacity: 0,
            duration: animationDuration,
            stagger: staggerDelay +0.5
         });
         // @ts-ignore
         waveTimeline.to(card, {
            top: 0,
            opacity: 1,
            duration: animationDuration,
            stagger: staggerDelay +0.5
         });
      });

      ScrollTrigger.refresh();

      const anchorBox_end = document.querySelector('.third-section');
      const raisingTimeline_end = gsap.timeline({
         scrollTrigger: {
            trigger: anchorBox_end,
            start: "top 30%",
            // scrub: 0.5,
            // @ts-ignore
            limitCallbacks: true,
            invalidateOnRefresh: false,
            force3D:true,
         },
         ease: "sine.out"
      });

      const eyebrowFourth = document.querySelector('.third-section .eyebrown-title');
      raisingTimeline_end.from(eyebrowFourth, {
         top:50,
         opacity:0,
         delay: 1
      });
      raisingTimeline_end.to(eyebrowFourth, {
         top:0,
         opacity:1,
      });

      ScrollTrigger.refresh();
   
   });
}

function home_introEachSection_animation(){
   mm = gsap.matchMedia();
   mm.add("(min-width:1100px)", ()=> {
      console.log('found topSection....');
      ScrollTrigger.refresh();   
      
      const anchorBox = document.querySelector('.third-section');
      const mainBox = document.querySelectorAll('.third-section .section-main');
      raisingTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: anchorBox,
            start: "top 90%",
            scrub: 0.5,
            // @ts-ignore
            limitCallbacks: true,
            invalidateOnRefresh: false,
            force3D:true,
         },
         ease: "sine.out"
      });

      raisingTimeline.from(mainBox, {
         top:60,
         opacity:0
      });
      raisingTimeline.to(mainBox, {
         top:0,
         opacity:1
      });
      ScrollTrigger.refresh();

      const anchorBox_end = document.querySelector('.third-section .accordion-body');
      const raisingTimeline_end = gsap.timeline({
         scrollTrigger: {
            trigger: anchorBox_end,
            start: "top 50%",
            // scrub: 0.5,
            // @ts-ignore
            limitCallbacks: true,
            invalidateOnRefresh: false,
            force3D:true,
         },
         ease: "sine.out"
      });

      const eyebrowFourth = document.querySelector('.fourth-section .eyebrown-title');
      raisingTimeline_end.from(eyebrowFourth, {
         top:50,
         opacity:0,
         delay: 1
      });
      raisingTimeline_end.to(eyebrowFourth, {
         top:0,
         opacity:1,
      });

      ScrollTrigger.refresh();
   });
}

function home_whychoose_animation(){
   mm = gsap.matchMedia();
   mm.add("(min-width:1100px)", ()=> {
      // console.log('found topSection....');
      ScrollTrigger.refresh();   
      const animationDuration = 0.282;
      const staggerDelay = 0.01;
      const anchorBox = document.querySelector('.fourth-section');
      const mainBox = document.querySelectorAll('.fourth-section .section-main');
      raisingTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: anchorBox,
            start: "top 50%",
            // scrub: 0.5,
            // @ts-ignore
            limitCallbacks: true,
            invalidateOnRefresh: false,
            force3D:true,
         },
         ease: "sine.out"
      });

      raisingTimeline.from(mainBox, {
         top: 90,
         opacity:0,
         duration: animationDuration,
         stagger: staggerDelay,
      });
      raisingTimeline.to(mainBox, {
         top:0,
         opacity:1,
         duration: animationDuration,
         stagger: staggerDelay,
      });
      
      ScrollTrigger.refresh();
      const anchorBox_end = document.querySelector('.fourth-section .decor-icon:last-child');
      const eyebrowFifth = document.querySelector('.fifth-section .eyebrown-title');
      const raisingTimeline_end = gsap.timeline({
         scrollTrigger: {
            trigger: anchorBox_end,
            start: "top 30%",
            // scrub: 0.5,
            // @ts-ignore
            limitCallbacks: true,
            invalidateOnRefresh: false,
            force3D:true,
         },
         ease: "sine.out"
      });
      raisingTimeline_end.from(eyebrowFifth, {
         top:50,
         opacity:0,
         duration: animationDuration,
         stagger: staggerDelay,
         delay: 1.5
      });
      raisingTimeline_end.to(eyebrowFifth, {
         top:0,
         opacity:1,
         duration: animationDuration,
         stagger: staggerDelay,
      });

      ScrollTrigger.refresh();
   });
}

function home_service_animation(){
   mm = gsap.matchMedia();
   mm.add("(min-width:1100px)", ()=> {
      console.log('found topSection....');
      ScrollTrigger.refresh();   
      
      const animationDuration = 0.282; 
      const staggerDelay = 0.01;

      const anchorBox = document.querySelector('.fifth-section');
      const tagline = document.querySelector('.fifth-section .tagline');

      const serviceCards = document.querySelectorAll('.fifth-section #doi-tac .details .service-cards .card ')
      const customerCards = document.querySelectorAll('.fifth-section #doi-tac .details .customer-cards .card ')
      // const mainBox = document.querySelectorAll('.fifth-section .section-main');

      raisingTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: anchorBox,
            start: "top 95%",
            scrub: 0.5,
            // @ts-ignore
            limitCallbacks: true,
            invalidateOnRefresh: false,
            force3D:true,
         },
         ease: "sine.out"
      });

      // raisingTimeline.from(tagline, {
      //    top:30,
      //    opacity:0,
      //    duration: animationDuration, 
      //    stagger: staggerDelay,
      // });
      raisingTimeline.to(tagline, {
         top:0,
         opacity:1,
         duration: animationDuration, 
         stagger: staggerDelay,
      });

      serviceCards.forEach((card) => {
         //@ts-ignore
         raisingTimeline.from(card, {
            top:20,
            opacity:0,
            stagger: 0.0002,
            duration: animationDuration*0.1,
            ease: "sine.out"
         });
         //@ts-ignore
         raisingTimeline.to(card, {
            top:0,
            opacity:1,
            stagger: 0.0002,
            duration: animationDuration*0.1,
            ease: "sine.out"
         });
      });

      raisingTimeline.from(customerCards, {
         top:20,
         opacity:0,
         duration: animationDuration, 
         stagger: staggerDelay,
         delay: 0.5
      });

      raisingTimeline.to(customerCards, {
         top:0,
         opacity:1,
         duration: animationDuration, 
         stagger: staggerDelay,
         delay: 0.5
      });


      ScrollTrigger.refresh();
      const anchorBox_end = document.querySelector('.fifth-section .details');
      const eyebrowSixth = document.querySelector('.sixth-section .eyebrown-title');
      const raisingTimeline_end = gsap.timeline({
         scrollTrigger: {
            trigger: anchorBox_end,
            start: "top 30%",
            // scrub: 0.5,
            // @ts-ignore
            limitCallbacks: true,
            invalidateOnRefresh: false,
            force3D:true,
         },
         ease: "sine.out"
      });
      raisingTimeline_end.from(eyebrowSixth, {
         top:50,
         opacity:0,
         duration: animationDuration,
         stagger: staggerDelay,
         delay: 1.5
      });
      raisingTimeline_end.to(eyebrowSixth, {
         top:0,
         opacity:1,
         duration: animationDuration,
         stagger: staggerDelay,
      });

      ScrollTrigger.refresh();

   });
}

function home_pricingSection_animation(){
   mm = gsap.matchMedia();
   mm.add("(min-width:1100px)", ()=> {
      console.log('found topSection....');
      ScrollTrigger.refresh();   
      
      const animationDuration = 0.282; 
      const staggerDelay = 0.01;

      const anchorBox = document.querySelector('.sixth-section');
      const mainBox = document.querySelectorAll('.sixth-section .section-main');

      const pricingCol1 = document.querySelector('.sixth-section .pricing-col:first-child');
      const pricingCol2 = document.querySelector('.sixth-section .pricing-col:nth-child(2)');
      const pricingCol3 = document.querySelector('.sixth-section .pricing-col:last-child');

      raisingTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: anchorBox,
            start: "top 95%"
         },
         ease: "sine.out"
      });

      raisingTimeline.from(mainBox, {
         top:60,
         opacity:0,
         duration: animationDuration, 
         stagger: staggerDelay,
      });
      raisingTimeline.to(mainBox, {
         top:0,
         opacity:1,
         duration: animationDuration, 
         stagger: staggerDelay,
      });

      raisingTimeline.from(pricingCol1,{
         top:30,
         opacity: 0,
         duration: animationDuration,
         stagger: staggerDelay
      });
      raisingTimeline.to(pricingCol1,{
         top:0,
         opacity: 1,
         duration: animationDuration,
         stagger: staggerDelay
      });

      raisingTimeline.from(pricingCol2,{
         top:30,
         opacity: 0,
         duration: animationDuration,
         stagger: staggerDelay
      });
      raisingTimeline.to(pricingCol2,{
         top:0,
         opacity: 1,
         duration: animationDuration,
         stagger: staggerDelay
      });

      raisingTimeline.from(pricingCol3,{
         top:30,
         opacity: 0,
         duration: animationDuration,
         stagger: staggerDelay
      });
      raisingTimeline.to(pricingCol3,{
         top:0,
         opacity: 1,
         duration: animationDuration,
         stagger: staggerDelay
      });

      ScrollTrigger.refresh();

   });
}

// Export cleanup function
export function cleanupAnimations() {
  if (!browser) return;
  
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  gsap.globalTimeline.clear();
}

// Export individual animation functions for specific use cases
export { home_introSection_animation, 
   home_topSection_animation, 
   home_projectDev_animation,
   home_agencyBroker_animation,
   home_individualBroker_animation,
   home_comparePainGain_animation,

   home_introEachSection_animation,
   home_whychoose_animation,
   home_service_animation,
   home_pricingSection_animation
};

// Add this debug code to check for leaks
export function debugTimelineLeaks() {
  // Check number of active ScrollTriggers
  const triggers = ScrollTrigger.getAll();
  console.log(`📊 Active ScrollTriggers: ${triggers.length}`);
  
  // Check GSAP global timeline
  console.log(`📊 GSAP Global Timeline children: ${gsap.globalTimeline.getChildren().length}`);
  
  // Check for duplicate triggers
  const triggerIds = triggers.map(t => t.vars.id).filter(Boolean);
  const duplicates = triggerIds.filter((id, index) => triggerIds.indexOf(id) !== index);
  if (duplicates.length > 0) {
    console.warn('⚠️ Duplicate ScrollTrigger IDs found:', duplicates);
  }
}