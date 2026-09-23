$src = "C:\Users\Toseef A. Malik\.gemini\antigravity\scratch\motu-patlu-worldplate"
$wpRoot = "C:\Users\Toseef A. Malik\Local Sites\motu\app\public"
$themeDir = Join-Path $wpRoot "wp-content\themes\twentytwentyfive-motu"
$themeAssets = Join-Path $themeDir "dist\assets"
$wpImages = Join-Path $wpRoot "images"

# Clean old dist assets in theme
if (Test-Path $themeAssets) {
    Remove-Item (Join-Path $themeAssets "*") -Recurse -Force
} else {
    New-Item -ItemType Directory -Path $themeAssets -Force | Out-Null
}

# Copy newly built assets
Copy-Item (Join-Path $src "dist\assets\*") $themeAssets -Recurse -Force

# Ensure images directories exist and copy all images (including food and avatars)
New-Item -ItemType Directory -Path $wpImages -Force | Out-Null
Copy-Item (Join-Path $src "public\images\*") $wpImages -Recurse -Force
Copy-Item (Join-Path $src "public\favicon.svg") (Join-Path $wpRoot "favicon.svg") -Force

Write-Host "=== Copied Assets in Theme ==="
Get-ChildItem $themeAssets | Select-Object Name, Length

Write-Host "=== Food Images in WP Root ==="
Get-ChildItem (Join-Path $wpImages "food") | Select-Object Name, Length

Write-Host "=== Avatars in WP Root ==="
Get-ChildItem (Join-Path $wpImages "avatars") | Select-Object Name, Length
