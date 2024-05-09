const puppeteer = require('puppeteer');

(async () => {
  // Starting browser
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/home/emanuel/.nix-profile/bin/chromium'
  });
  const page = await browser.newPage();

  // Login flow
  await page.goto('https://www.instagram.com/accounts/login/?source=auth_switcher');
  await page.waitForSelector('input[name="username"]');
  await page.type('input[name="username"]', 'USUÁRIO AQUI');
  await page.type('input[name="password"]', 'SENHA AQUI');
  await page.click('button[type="submit"]');

  // Waiting for page to refresh
  await page.waitForNavigation();
  await page.goto('https://www.instagram.com/p/ PAGINA DA PUBLICAÇÃO AQUI');

  // Navigate to post and submitting the comment
    for ( var i = 0; i <500; i++){
    await page.waitForSelector('textarea');
    await page.type('textarea', "TEXTO AQUI" +Math.floor(Math.random()*100)+"");
    await page.keyboard.press('Enter');
    await new Promise(r => setTimeout(r, 4000+(Math.floor(Math.random()*10))));
    console.log("Quantidade: "+i+"\n");
        }
    await browser.close();
})();

