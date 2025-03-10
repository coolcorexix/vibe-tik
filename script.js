document.addEventListener('DOMContentLoaded', function() {
    // List of iframe sources
    const iframeSources = [
        ['https://swim.endacott.me/','https://x.com/RyanEndacott'] ,
        ['https://fly.pieter.com/','https://x.com/levelsio'] ,
        ['https://land-the-booster.s13k.dev/', 'https://x.com/s13k_'],
        ['https://vibesail.com/', 'https://x.com/nicolamanzini'],
        ['https://raceviberz.com/', 'https://x.com/LoukilAymen']
    ];

    const randomButton = document.getElementById('randomButton');
    const iframeContainer = document.getElementById('iframeContainer');
    const currentMaker = document.getElementById('currentMaker');

    randomButton.addEventListener('click', function() {
        // Get a random source from the list
        const randomIndex = Math.floor(Math.random() * iframeSources.length);
        const randomItem = iframeSources[randomIndex];
        const iframeSource = randomItem[0];
        const xHandler = randomItem[1];
        
        // Extract the X username from the URL
        const xUsername = xHandler.split('/').pop();
        
        // Update the maker display in the header
        currentMaker.textContent = 'Maker: @' + xUsername;
        
        // Create a new iframe element
        const iframe = document.createElement('iframe');
        iframe.src = iframeSource;
        iframe.setAttribute('allowfullscreen', '');
        
        // Clear the container
        iframeContainer.innerHTML = '';
        
        // Create a container for the iframe and attribution
        const contentContainer = document.createElement('div');
        contentContainer.style.display = 'flex';
        contentContainer.style.flexDirection = 'column';
        contentContainer.style.width = '100%';
        contentContainer.style.height = '100%';
        
        // Add the iframe to the container
        contentContainer.appendChild(iframe);
        
        // Create attribution link
        const attribution = document.createElement('div');
        attribution.style.textAlign = 'center';
        attribution.style.padding = '10px';
        attribution.style.backgroundColor = '#f8f9fa';
        
        const link = document.createElement('a');
        link.href = xHandler;
        link.target = '_blank';
        link.textContent = 'Follow creator on X';
        link.style.color = '#4CAF50';
        link.style.textDecoration = 'none';
        
        attribution.appendChild(link);
        contentContainer.appendChild(attribution);
        
        // Add the content container to the iframe container
        iframeContainer.appendChild(contentContainer);
    });
}); 