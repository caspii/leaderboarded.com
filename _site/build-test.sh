#!/bin/bash
# Script to test Jekyll build for GitHub Pages compatibility

echo "Testing Jekyll build for GitHub Pages..."
echo "========================================"

# Check if Jekyll is installed
if ! command -v jekyll &> /dev/null; then
    echo "Jekyll is not installed. To test locally, run:"
    echo "  gem install bundler jekyll"
    echo "  bundle install"
    echo ""
fi

# List key Jekyll files
echo "Jekyll Configuration Files:"
echo "---------------------------"
[ -f "_config.yml" ] && echo "✓ _config.yml found" || echo "✗ _config.yml missing"
[ -f "Gemfile" ] && echo "✓ Gemfile found" || echo "✗ Gemfile missing"
[ -d "_layouts" ] && echo "✓ _layouts directory found" || echo "✗ _layouts directory missing"
[ -d "_includes" ] && echo "✓ _includes directory found" || echo "✗ _includes directory missing"
[ -d "_blog" ] && echo "✓ _blog collection found" || echo "✗ _blog collection missing"
[ -d "_faq" ] && echo "✓ _faq collection found" || echo "✗ _faq collection missing"

echo ""
echo "Converted Pages:"
echo "----------------"
for file in *.md; do
    if [ -f "$file" ]; then
        echo "✓ $file"
    fi
done

echo ""
echo "To build locally:"
echo "  bundle exec jekyll build"
echo ""
echo "To serve locally:"
echo "  bundle exec jekyll serve"
echo ""
echo "GitHub Pages will automatically build when pushed to the repository."