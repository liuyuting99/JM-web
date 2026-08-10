window.renderHome = async function () {
  const app = document.getElementById('app');
  let data;
  try {
    const res = await fetch('./data/data.json');
    data = await res.json();
  } catch (e) {
    app.innerHTML = `<div class="py-20 text-center">数据加载失败</div>`;
    return;
  }

  const home = data.home;
  const products = data.products.slice(0,4);
  let productHtml = '';
  products.forEach(item=>{
    productHtml += `
    <div class="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <div class="h-48 bg-slate-100 flex items-center justify-center">
        <span class="text-slate-400">${item.name}</span>
      </div>
      <div class="p-4">
        <h3 class="font-bold text-lg">${item.name}</h3>
        <p class="text-gray-600 mt-2 text-sm">${item.desc}</p>
        <a href="/products" class="inline-block mt-3 text-[#164080]">查看更多 →</a>
      </div>
    </div>
    `
  })

  app.innerHTML = `
    <!-- Banner -->
    <section class="bg-[#164080] text-white py-24">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl lg:text-4xl font-bold mb-4">${home.bannerTitle}</h1>
        <p class="text-lg opacity-90 max-w-2xl">${home.bannerSub}</p>
      </div>
    </section>

    <!-- 公司简介 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-6 border-l-4 border-[#164080] pl-3">企业简介</h2>
        <p class="text-gray-700 leading-relaxed">${home.intro}</p>
      </div>
    </section>

    <!-- 主推产品 -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-8 border-l-4 border-[#164080] pl-3">核心改性塑料产品</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${productHtml}
        </div>
      </div>
    </section>

    <!-- 优势 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-8 border-l-4 border-[#164080] pl-3">我们优势</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 border rounded-lg">
            <h3 class="font-bold text-lg">定制改性方案</h3>
            <p class="text-gray-600 mt-2">PP、PE、PA、PET、TPU改性研发，玻纤增强、阻燃、增韧、耐候定制</p>
          </div>
          <div class="p-6 border rounded-lg">
            <h3 class="font-bold text-lg">稳定品质管控</h3>
            <p class="text-gray-600 mt-2">完善检测体系，批次性能稳定，满足注塑、挤出多种工艺需求</p>
          </div>
          <div class="p-6 border rounded-lg">
            <h3 class="font-bold text-lg">快速交付服务</h3>
            <p class="text-gray-600 mt-2">依托芜湖生产基地，高效打样，就近配套华东制造业客户</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
