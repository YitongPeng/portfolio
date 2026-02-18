# 彭弋桐Riley的个人网页

个人作品集网站，展示教育背景、实习经历、项目经验和职业技能。

## 📂 项目结构

```
portfolio/
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # 交互脚本
├── assets/             # 资源文件夹
│   ├── 个人简历证件照.jpg    # 个人照片
│   ├── qrcode.jpg           # YanCare小程序码
│   ├── edu/                 # 教育背景图片
│   │   ├── brown.jpg        # 布朗大学
│   │   └── nufe.jpg         # 南京财经大学
│   ├── yancare/             # YanCare小程序截图
│   │   ├── 1.jpg
│   │   ├── 2.jpg
│   │   ├── 3.jpg
│   │   ├── 4.jpg
│   │   ├── 5.jpg
│   │   └── 6.jpg
│   ├── podcast/             # Podcast飞书截图
│   │   ├── 1.jpg
│   │   ├── 2.jpg
│   │   ├── 3.jpg
│   │   └── 4.jpg
│   └── images/projects/     # 项目封面图
│       ├── yancare/cover.jpg
│       ├── podcast/cover.jpg
│       ├── sentimental/cover.jpg
│       └── gait/cover.jpg
└── README.md           # 说明文档
```

## 🖼️ 如何添加图片

### 必需的图片

1. **个人照片**
   - 路径：`assets/个人简历证件照.jpg`
   - 建议尺寸：300x380px（竖向）

2. **小程序二维码**
   - 路径：`assets/qrcode.jpg`
   - 建议尺寸：150x150px

3. **教育背景图片**
   - `assets/edu/brown.jpg` - 布朗大学照片
   - `assets/edu/nufe.jpg` - 南京财经大学照片
   - 建议尺寸：400x250px（横向）

4. **YanCare小程序截图**（放在 `assets/yancare/` 文件夹）
   - 命名为：1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg
   - 建议尺寸：手机截图原始尺寸即可

5. **Podcast飞书截图**（放在 `assets/podcast/` 文件夹）
   - 命名为：1.jpg, 2.jpg, 3.jpg, 4.jpg
   - 建议尺寸：电脑截图原始尺寸即可

6. **项目封面图**（可选，如果没有会显示占位图）
   - `assets/images/projects/yancare/cover.jpg`
   - `assets/images/projects/podcast/cover.jpg`
   - `assets/images/projects/sentimental/cover.jpg`
   - `assets/images/projects/gait/cover.jpg`
   - 建议尺寸：600x400px

### 图片预览功能

网站包含图片画廊功能：
- **YanCare项目**：点击"小程序图片预览"按钮可查看6张小程序截图
- **Podcast项目**：点击"飞书效果预览"按钮可查看4张飞书截图
- 支持左右箭头切换、缩略图跳转、键盘导航（←→ 切换，Esc 关闭）

如需修改图片数量，编辑 `script.js` 中的 `galleries` 对象：

```javascript
const galleries = {
    yancare: [
        'assets/yancare/1.jpg',
        'assets/yancare/2.jpg',
        // 添加更多...
    ],
    podcast: [
        'assets/podcast/1.jpg',
        'assets/podcast/2.jpg',
        // 添加更多...
    ]
};
```

## 🚀 本地预览

1. 直接用浏览器打开 `index.html` 文件
2. 或使用本地服务器：
   ```bash
   # Python 3
   python -m http.server 8000
   
   # 然后访问 http://localhost:8000
   ```

## 📤 部署到 GitHub Pages

### 步骤1：创建GitHub仓库
```bash
cd portfolio
git init
git add .
git commit -m "初始化个人网页"
git remote add origin https://github.com/YitongPeng/portfolio.git
git push -u origin main
```

### 步骤2：启用 GitHub Pages
1. 进入你的 GitHub 仓库
2. 点击 `Settings` > `Pages`
3. Source 选择 `main` 分支
4. 点击 Save
5. 几分钟后，网站将发布到 `https://YitongPeng.github.io/portfolio/`

## 📝 页面结构

网站包含以下部分：

1. **导航栏**：快速跳转到各个板块
2. **Hero区域**：个人照片、联系方式、快捷按钮
3. **关于我**：个人信息介绍
4. **教育背景**：布朗大学 & 南京财经大学
5. **实习经历**：3段实习经历时间线
6. **项目经历**：5个项目展示
   - 布朗大学研究助理
   - YanCare（带小程序码和图片预览）
   - Tech Podcast Brief（带飞书链接和图片预览）
   - 步态分析
   - 用户评论情感分析
7. **职业技能**：产品能力、AI/数据技术、工具、语言
8. **页脚**：版权信息

## ✏️ 内容修改

如需修改内容，编辑 `index.html` 文件中对应的文字即可。主要可修改：
- 联系方式（电话、邮箱）
- 关于我的介绍
- 实习经历描述
- 项目描述
- 技能列表

## 🎨 样式定制

修改 `style.css` 中的 `:root` 变量可以改变主题颜色：

```css
:root {
    --primary-color: #667eea;     /* 主色调 */
    --secondary-color: #764ba2;   /* 辅助色 */
    --accent-color: #f093fb;      /* 强调色 */
}
```

## 🛠️ 技术栈

- HTML5
- CSS3（Grid、Flexbox、动画）
- 原生 JavaScript（图片画廊、滚动动画）
- 响应式设计（完美适配手机、平板、电脑）

## 📱 浏览器兼容性

支持所有现代浏览器：
- Chrome / Edge (推荐)
- Firefox
- Safari
- 移动端浏览器

## 📄 许可

MIT License
