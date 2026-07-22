let siteData = null;

async function loadData(){
  const res = await fetch('/data/data.json');
  siteData = await res.json();
}

// 首页
async function renderHome(){
  if(!siteData) await loadData();
  const app = document.getElementById('app');
  app.innerHTML = `
  <section class="w-full h-[420px] bg-[#164080] flex items-center justify-center text-white">
    <div class="text-center px-4">
      <h1 class="text-[32px] font-bold mb-4">芜湖聚美新材料科技有限公司</h1>
      <p class="text-lg opacity-90">改性PP / PE / PA / PET / TPU 专业定制生产商</p>
    </div>
  </section>
  <section class="container mx-auto px-4 py-16">
    <h2 class="text-2xl font-bold text-[#164080] border-l-4 border-[#164080] pl-3 mb-8">核心产品</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${siteData.products.slice(0,6).map(p=>`
        <div class="bg-white shadow rounded overflow-hidden hover:shadow-lg transition cursor-pointer" onclick="router.push('/product/${p.id}')">
          <div class="h-44 bg-gray-200"></div>
          <div class="p-4">
            <h3 class="font-bold text-lg">${p.title}</h3>
            <p class="text-gray-500 text-sm mt-2">${p.spec}</p>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="mt-8 text-center">
      <a href="/products" class="inline-block bg-[#164080] text-white px-6 py-2 rounded">查看全部产品</a>
    </div>
  </section>
  `;
}

// 产品列表
async function renderProductList(){
  if(!siteData) await loadData();
  const app = document.getElementById('app');
  app.innerHTML = `
  <section class="container mx-auto px-4 py-16">
    <h2 class="text-2xl font-bold text-[#164080] mb-8">产品中心</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${siteData.products.map(p=>`
        <div class="bg-white shadow rounded overflow-hidden hover:shadow-lg transition cursor-pointer" onclick="router.push('/product/${p.id}')">
          <div class="h-44 bg-gray-200"></div>
          <div class="p-4">
            <h3 class="font-bold text-lg">${p.title}</h3>
            <p class="text-gray-500 text-sm mt-2">${p.spec}</p>
          </div>
        </div>
      `).join('')}
    </div>
  </section>
  `;
}

// 产品详情
async function renderProductDetail(pid){
  if(!siteData) await loadData();
  const item = siteData.products.find(d=>d.id == pid);
  if(!item){
    document.getElementById('app').innerHTML = '<div class="py-20 text-center">产品不存在</div>';
    return;
  }
  const app = document.getElementById('app');
  app.innerHTML = `
  <section class="container mx-auto px-4 py-16">
    <div class="grid md:grid-cols-2 gap-10">
      <div class="h-[320px] bg-gray-200 rounded"></div>
      <div>
        <h1 class="text-2xl font-bold text-[#164080]">${item.title}</h1>
        <p class="text-gray-500 mt-2">${item.spec}</p>
        <div class="mt-6 text-gray-700 leading-relaxed">
          ${item.desc}
        </div>
        <div class="mt-8">
          <a href="/contact" class="bg-[#164080] text-white px-6 py-2 rounded">咨询报价</a>
        </div>
      </div>
    </div>
  </section>
  `;
}

// 新闻列表
async function renderNewsList(){
  if(!siteData) await loadData();
  const app = document.getElementById('app');
  app.innerHTML = `
  <section class="container mx-auto px-4 py-16">
    <h2 class="text-2xl font-bold text-[#164080] mb-8">新闻资讯</h2>
    <div class="space-y-5">
      ${siteData.news.map(n=>`
        <div class="bg-white p-5 shadow rounded cursor-pointer hover:shadow-md" onclick="router.push('/news/${n.id}')">
          <div class="flex justify-between">
            <h3 class="font-bold text-lg">${n.title}</h3>
            <span class="text-gray-400 text-sm">${n.date}</span>
          </div>
          <p class="text-gray-600 mt-2">${n.summary}</p>
        </div>
      `).join('')}
    </div>
  </section>
  `;
}

// 新闻详情
async function renderNewsDetail(nid){
  if(!siteData) await loadData();
  const item = siteData.news.find(d=>d.id == nid);
  if(!item){
    document.getElementById('app').innerHTML = '<div class="py-20 text-center">文章不存在</div>';
    return;
  }
  const app = document.getElementById('app');
  app.innerHTML = `
  <section class="container mx-auto px-4 py-16 max-w-3xl">
    <h1 class="text-2xl font-bold text-[#164080] text-center">${item.title}</h1>
    <p class="text-center text-gray-400 mt-2">${item.date}</p>
    <div class="mt-8 leading-relaxed text-gray-700">
      ${item.content}
    </div>
    <div class="mt-10">
      <a href="/news" class="text-[#164080]">← 返回新闻列表</a>
    </div>
  </section>
  `;
}

// 关于我们
async function renderAbout(){
  const app = document.getElementById('app');
  app.innerHTML = `
  <section class="container mx-auto px-4 py-16 max-w-4xl">
    <h2 class="text-2xl font-bold text-[#164080] mb-6">关于我们</h2>
    <div class="bg-white p-8 shadow rounded">
      <p class="leading-relaxed text-gray-700">芜湖聚美新材料科技有限公司专注改性塑料研发、生产与销售，主营改性PP、PE、PA、PET、TPU材料，可根据客户工况进行配方定制，面向汽车、电子电器、线缆、通用机械行业提供材料解决方案。</p>
    </div>
  </section>
  `;
}

// 联系我们
async function renderContact(){
  if(!siteData) await loadData();
  const c = siteData.company;
  const app = document.getElementById('app');
  app.innerHTML = `
  <section class="container mx-auto px-4 py-16">
    <h2 class="text-2xl font-bold text-[#164080] mb-8">联系我们</h2>
    <div class="bg-white p-8 shadow rounded max-w-2xl">
      <p class="mb-3">公司名称：${c.name}</p>
      <p class="mb-3">联系电话：${c.tel}</p>
      <p class="mb-3">邮箱：${c.email}</p>
      <p>地址：${c.address}</p>
    </div>
  </section>
  `;
}
