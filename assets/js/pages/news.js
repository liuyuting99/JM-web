window.renderNews = async function () {
  const app = document.getElementById('app');
  let data;
  try {
    const res = await fetch('./data/data.json');
    data = await res.json();
  } catch (e) {
    app.innerHTML = `<div class="py-20 text-center">数据加载失败</div>`;
    return;
  }
  const newsList = data.news;
  let html = '';
  newsList.forEach(item=>{
    html += `
    <div class="border-b py-5">
      <span class="text-sm text-gray-500">${item.date}</span>
      <h3 class="font-bold text-lg mt-1">${item.title}</h3>
      <p class="text-gray-600 mt-2 text-sm">${item.summary}</p>
    </div>
    `
  })

  app.innerHTML = `
  <section class="py-10 bg-gray-50">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold mb-2">新闻资讯</h1>
      <p class="text-gray-600">行业动态 & 公司资讯</p>
    </div>
  </section>
  <section class="py-16">
    <div class="container mx-auto px-4 max-w-3xl">
      ${html || '<p>暂无资讯</p>'}
    </div>
  </section>
  `
}
