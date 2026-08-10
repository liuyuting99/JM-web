window.renderAbout = async function () {
  const app = document.getElementById('app');
  let data;
  try {
    const res = await fetch('./data/data.json');
    data = await res.json();
  } catch (e) {
    app.innerHTML = `<div class="py-20 text-center">数据加载失败</div>`;
    return;
  }
  const about = data.about;
  app.innerHTML = `
  <section class="py-10 bg-gray-50">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold mb-2">关于我们</h1>
      <p class="text-gray-600">芜湖聚美新材料科技有限公司</p>
    </div>
  </section>
  <section class="py-16">
    <div class="container mx-auto px-4 max-w-4xl">
      <div class="prose text-gray-700 leading-loose">
        ${about.content}
      </div>
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 border rounded-lg">
          <h3 class="font-bold text-lg mb-2">主营产品</h3>
          <p>改性PP、改性PE、改性PA、改性PET、TPU弹性体</p>
        </div>
        <div class="p-6 border rounded-lg">
          <h3 class="font-bold text-lg mb-2">业务范围</h3>
          <p>材料改性研发、颗粒生产、配方定制、技术咨询</p>
        </div>
      </div>
    </div>
  </section>
  `
}
