<script>
   export let items;
</script>

<!-- <svg width="300" height="150" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"> 
   <defs> 
      <linearGradient id="gradient-border" x1="0%" y1="0%" x2="100%" y2="0%"> 
         <stop offset="0%" style="stop-color:#7b4397;stop-opacity:1" /> 
         <stop offset="100%" style="stop-color:#dc2430;stop-opacity:1" /> 
      </linearGradient> </defs> <rect x="20" y="20" width="300" height="150" rx="12" ry="12" fill="#FFFFFF" stroke="url(#gradient-border)" stroke-width="1" /> 
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill="#333">{items} </text> 
</svg> -->

<svg width="120" height="40" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg">
    
    <defs>
        <linearGradient id="gradient-border" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#7b4397;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#dc2430;stop-opacity:1" />
        </linearGradient>
    </defs>

    <rect 
        x="20" y="20"       width="260"  height="110" rx="12"      ry="12"      fill="#FFFFFF" stroke="url(#gradient-border)" stroke-width="4" />
    
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill="#333">
        SVG Gradient Box
    </text>
    
</svg>