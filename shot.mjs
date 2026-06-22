import puppeteer from 'puppeteer'
const url = process.argv[2]
const out = process.argv[3]
const browser = await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',args:['--no-sandbox']})
const page = await browser.newPage()
await page.setViewport({width:1440,height:900})
await page.goto(url,{waitUntil:'networkidle0',timeout:30000})
await new Promise(r=>setTimeout(r,2000))
await page.screenshot({path:out,fullPage:true})
await browser.close()
console.log('saved',out)
