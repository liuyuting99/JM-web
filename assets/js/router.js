class Router {
  constructor() {
    this.routes = {};
    window.addEventListener('popstate', () => this.render());
  }
  register(path, cb) {
    this.routes[path] = cb;
  }
  push(url) {
    history.pushState({}, '', url);
    this.render();
  }
  render() {
    const path = location.pathname;
    let match = null;
    let params = [];
    for(let rule in this.routes) {
      const regStr = rule.replace(/:(\w+)/g, '([^/]+)');
      const reg = new RegExp(`^${regStr}$`);
      const res = path.match(reg);
      if(res) {
        match = rule;
        params = res.slice(1);
        break;
      }
    }
    if(match) {
      this.routes[match](...params);
    } else {
      this.routes['/'] && this.routes['/']();
    }
  }
  init() {
    const saved = sessionStorage.getItem('ghpages_path');
    if(saved) {
      sessionStorage.removeItem('ghpages_path');
      history.replaceState({}, '', saved);
    }
    this.render();
  }
}

const router = new Router();

// 路由注册
router.register('/', renderHome);
router.register('/products', renderProductList);
router.register('/product/:id', renderProductDetail);
router.register('/news', renderNewsList);
router.register('/news/:id', renderNewsDetail);
router.register('/about', renderAbout);
router.register('/contact', renderContact);

// 页面加载初始化
window.addEventListener('DOMContentLoaded', ()=>{
  router.init();
  document.querySelectorAll('.nav-link').forEach(el=>{
    el.onclick = function(e){
      e.preventDefault();
      router.push(this.getAttribute('href'));
    }
  })
})
