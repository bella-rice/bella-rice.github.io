const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const name = document.getElementById('name');
const subname_sr_only = document.getElementById('subname_sr-only');

const subnames = ['Rice', 'Arroz', '🍙']

async function subname_animation(){
  while(true){
    for (const str of subnames) {
      subname_sr_only.textContent = str;

      const chars = Array.from(str);

      let typed = '';
      for (const char of chars) {
        typed += char;
        name.style.setProperty('--subname', `"${typed}"`);
        await sleep(110);
      }

      await sleep(1400);

      for (let remaining = chars.length - 1; remaining >= 0; remaining--) {
        name.style.setProperty('--subname', `"${chars.slice(0, remaining).join('')}"`);
        await sleep(70);
      }

      await sleep(400);
    }
  }
}
subname_animation();