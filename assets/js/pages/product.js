window.renderProduct = async function () {
  const app = document.getElementById('app');
  let data;
  try {
    const res = await fetch('./data/data.json');
    data = await res.json();
  } catch (e) {
    app.innerHTML = `<div class="py-20 text-center">数据加载失败</div>`;
    return;
  }
  const list = data.products;
  let html = '';
  list.forEach(item=>{
    html += `
    <div class="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <div class="h-44 bg-slate-100 flex items-center justify-center">
        <span class="text-slate-400">${item.name}</span>
      </div>
      <div class="p-4">
        <h3 class="font-bold text-lg">${item.name}</h3>
        <p class="text-gray-600 text-sm mt-2">${item.desc}</p>
        <div class="mt-3 text-sm text-gray-500">适用：${item.use}</div>
      </div>
    </div>
    `
  })

  app.innerHTML = `
  <section class="py-10 bg-gray-50">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold mb-2">产品中心</h1>
      <p class="text-gray-600">改性PP / PE / PA / PET / TPU 新材料定制</p>
    </div>
  </section>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${html}
      </div>
    </div>
  </section>
  `
}
