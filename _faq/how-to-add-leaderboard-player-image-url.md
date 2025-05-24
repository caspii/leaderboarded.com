---
layout: faq
title: How to Add Player Images to Your Leaderboard - Leaderboarded FAQ
description: Step-by-step guide on how to add player images and profile pictures to your leaderboard. Learn about image URLs, hosting options, and best practices.
permalink: /faq/how-to-add-leaderboard-player-image-url
---

<div class="container">
    <div class="breadcrumb">
        <a href="{{ '/' | relative_url }}">Home</a>
        <span>›</span>
        <a href="{{ '/faq/' | relative_url }}">FAQ</a>
        <span>›</span>
        <span>How to Add Player Images</span>
    </div>
</div>

<section class="article-hero">
    <div class="container">
        <h1>How to Add Player Images to Your Leaderboard</h1>
        <div class="article-meta">
            Last updated: January 2025 | 8 min read
        </div>
    </div>
</section>

<article class="article-content">
    <div class="container">
        <div class="article-body">
            <p class="lead">Adding player images to your leaderboard makes it more engaging and personal. This guide will walk you through the process of adding profile pictures, team logos, and other images to your leaderboard.</p>
            
            <h2>Understanding Image URLs</h2>
            
            <p>To add images to your leaderboard, you'll need to provide image URLs. An image URL is a web address that points directly to an image file. For example:</p>
            
            <code class="code-block">https://example.com/images/player-photo.jpg</code>
            
            <h2>Step-by-Step Guide</h2>
            
            <h3>Step 1: Prepare Your Images</h3>
            
            <p>Before adding images to your leaderboard, ensure they meet these requirements:</p>
            
            <ul>
                <li><strong>Format:</strong> JPG, PNG, or GIF</li>
                <li><strong>Size:</strong> Recommended 200x200 pixels for player photos</li>
                <li><strong>File Size:</strong> Keep under 500KB for fast loading</li>
                <li><strong>Aspect Ratio:</strong> Square images (1:1) work best</li>
            </ul>
            
            <h3>Step 2: Host Your Images</h3>
            
            <p>You have several options for hosting your images:</p>
            
            <div class="option-cards">
                <div class="option-card">
                    <h4>Option 1: Cloud Storage Services</h4>
                    <ul>
                        <li>Google Drive (with public sharing)</li>
                        <li>Dropbox (public links)</li>
                        <li>OneDrive</li>
                    </ul>
                </div>
                
                <div class="option-card">
                    <h4>Option 2: Image Hosting Services</h4>
                    <ul>
                        <li>Imgur</li>
                        <li>Cloudinary</li>
                        <li>ImageBB</li>
                    </ul>
                </div>
                
                <div class="option-card">
                    <h4>Option 3: Social Media</h4>
                    <ul>
                        <li>Facebook profile pictures</li>
                        <li>LinkedIn profile photos</li>
                        <li>Twitter avatars</li>
                    </ul>
                </div>
            </div>
            
            <h3>Step 3: Get the Image URL</h3>
            
            <p>Once your image is hosted, you need to get its direct URL:</p>
            
            <ol>
                <li><strong>Right-click</strong> on the image</li>
                <li>Select <strong>"Copy Image Address"</strong> or <strong>"Copy Image URL"</strong></li>
                <li>The URL should end with an image extension (.jpg, .png, etc.)</li>
            </ol>
            
            <div class="alert alert-info">
                <strong>Pro Tip:</strong> Test your image URL by pasting it directly into a browser. If the image displays by itself, the URL is correct.
            </div>
            
            <h3>Step 4: Add to Your Leaderboard</h3>
            
            <p>In keepTheScore:</p>
            
            <ol>
                <li>Go to your leaderboard settings</li>
                <li>Click on <strong>"Edit Players"</strong></li>
                <li>Select the player you want to add an image to</li>
                <li>Find the <strong>"Image URL"</strong> field</li>
                <li>Paste your image URL</li>
                <li>Click <strong>"Save"</strong></li>
            </ol>
            
            <h2>Best Practices</h2>
            
            <h3>Image Optimization</h3>
            
            <ul>
                <li><strong>Compress images</strong> before uploading to reduce file size</li>
                <li><strong>Use consistent dimensions</strong> for all player images</li>
                <li><strong>Choose appropriate formats:</strong> JPG for photos, PNG for logos</li>
            </ul>
            
            <h3>Privacy Considerations</h3>
            
            <ul>
                <li>Always get permission before using someone's photo</li>
                <li>Consider using avatars or initials for privacy</li>
                <li>Respect data protection regulations (GDPR, etc.)</li>
            </ul>
            
            <h3>Troubleshooting Common Issues</h3>
            
            <div class="troubleshooting">
                <h4>Image Not Displaying?</h4>
                <ul>
                    <li>Check if the URL is a direct link to the image</li>
                    <li>Ensure the image is publicly accessible</li>
                    <li>Verify the URL ends with an image extension</li>
                    <li>Try a different hosting service</li>
                </ul>
                
                <h4>Image Loading Slowly?</h4>
                <ul>
                    <li>Reduce image file size (compress)</li>
                    <li>Use smaller dimensions</li>
                    <li>Choose a faster hosting service</li>
                </ul>
            </div>
            
            <h2>Alternative: Using Gravatar</h2>
            
            <p>Gravatar is a service that provides globally recognized avatars. If your players have Gravatar accounts, you can use their email addresses to automatically display their avatars.</p>
            
            <h2>Bulk Image Upload</h2>
            
            <p>For adding multiple images at once:</p>
            
            <ol>
                <li>Prepare a CSV file with player names and image URLs</li>
                <li>Use the bulk import feature in keepTheScore</li>
                <li>Map the image URL column to the appropriate field</li>
            </ol>
            
            <div class="cta-box">
                <h3>Ready to Add Images?</h3>
                <p>Make your leaderboard more engaging with player photos and team logos.</p>
                <a href="{{ site.company.keepthescore_url }}" class="btn btn-primary">Go to keepTheScore →</a>
            </div>
            
            <div class="related-articles">
                <h3>Related Articles</h3>
                <ul>
                    <li><a href="{{ '/faq/how-to-create-a-leaderboard-in-google-sheets' | relative_url }}">How to Create a Leaderboard in Google Sheets</a></li>
                    <li><a href="{{ '/faq/' | relative_url }}">Back to FAQ</a></li>
                </ul>
            </div>
        </div>
    </div>
</article>