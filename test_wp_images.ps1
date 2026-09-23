$urls = @(
    'http://motu.local/',
    'http://motu.local/images/hero_burger.png',
    'http://motu.local/images/kulhad_pizza.png',
    'http://motu.local/images/real_kitchen_kasur.jpg',
    'http://motu.local/images/food/flame-burger.jpg',
    'http://motu.local/images/food/supreme-pizza.jpg',
    'http://motu.local/images/food/zinger-master.jpg',
    'http://motu.local/images/food/family-hall.jpg',
    'http://motu.local/images/avatars/avatar-1.jpg',
    'http://motu.local/images/avatars/cust-1.jpg'
)

foreach ($u in $urls) {
    try {
        $res = Invoke-WebRequest -Uri $u -UseBasicParsing
        Write-Host ("[OK 200] " + $u + " (" + $res.RawContentLength + " bytes)")
    } catch {
        Write-Host ("[FAIL] " + $u + " " + $_.Exception.Message)
    }
}
