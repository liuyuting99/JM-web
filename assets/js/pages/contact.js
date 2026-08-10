window.renderContact = async function () {
  const app = document.getElementById('app');
  let data;
  try {
    const res = await fetch('./data/data.json');
    data = await res.json();
  } catch (e) {
    app.innerHTML = `<div class="py-20 text-center">数据加载失败</div>`;
    return;
  }
  const contact = data.contact;
  app.innerHTML = `
  <section class="py-10 bg-gray-50">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold mb-2">联系我们</h1>
      <p class="text-gray-600">欢迎咨询改性塑料试样、报价、定制方案</p>
    </div>
  </section>
  <section class="py-16">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 class="text-xl font-bold mb-6">联系方式</h2>
        <div class="space-y-4 text-gray-700">
          <p><strong>公司名称：</strong>${contact.company}</p>
          <p><strong>地址：</strong>${contact.address}</p>
          <p><strong>电话：</strong>${contact.tel}</p>
          <p><strong>邮箱：</strong>${contact.email}</p>
        </div>
      </div>
      <div class="border p-6 rounded-lg">
        <h2 class="text-xl font-bold mb-4">咨询留言</h2>
        <p class="text-gray-600">可直接电话联系获取样品与技术方案</p>
      </div>
    </div>
  </section>
  `
}
